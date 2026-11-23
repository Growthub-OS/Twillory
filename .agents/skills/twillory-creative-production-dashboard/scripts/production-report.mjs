const eastern = new Intl.DateTimeFormat("en-CA", {
  timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit"
});
export const dayInEastern = stamp => stamp ? eastern.format(new Date(stamp)) : "";
export function shiftDay(day, days) {
  const date = new Date(day + "T00:00:00Z");
  date.setUTCDate(date.getUTCDate()+days);
  return date.toISOString().slice(0,10);
}
export function sundayOf(day) {
  return shiftDay(day, -new Date(day + "T00:00:00Z").getUTCDay());
}
export function startInEastern(day) {
  const nominal = new Date(day + "T05:00:00Z");
  const hour = new Intl.DateTimeFormat("en-US",{timeZone:"America/New_York",hour:"numeric",hourCycle:"h23"}).format(nominal);
  return new Date(nominal.getTime()-Number(hour)*3600000).toISOString();
}
const queue = new Set(["Ready for Editing","Queued for Editing"]);
const downstream = new Set(["Editing","In Review","Revisions Needed","Approved for Katelyn","Approved for Upload","Approved","Launched","Winner","Loser"]);
const terminal = new Set(["Scrapped","Launched","Winner","Loser","Did Not Complete","Did not Launch"]);
const awareness = {Unawr:"Unaware",ProbAwr:"Problem aware",SolAwr:"Solution aware",ProdAwr:"Product aware",MostAwr:"Most aware",Other:"Other"};
const format = {IMG:"Static",VID:"Video",VSL:"Video",GIF:"GIF",CRS:"Carousel",DPA:"Catalog"};
const division = {Mens:"Men",Womens:"Women",All:"All divisions"};
const flatDay = value => /^\d{4}-\d\d-\d\d$/.test(value) ? value : "";
function seasonal(text) {
  const black = /\bblack[\s-]+friday\b|^BF[\s:–-]/i.test(text);
  const cyber = /\bcyber[\s-]+monday\b|^CM[\s:–-]/i.test(text);
  if (/\bBFCM\b/i.test(text) || black && cyber) return "BFCM combined";
  return black ? "Black Friday" : cyber ? "Cyber Monday" : "";
}
function itemActivity(items, logs, statusColumn, labels) {
  const state = value => value?.label?.text || labels[value?.index] || "";
  const visible = new Set(items.map(item=>item.id));
  const byItem = new Map();
  const unmatched = new Set();
  const ordered = [...logs].filter(log=>log.created_at).sort((a,b)=>a.created_at.localeCompare(b.created_at));
  for (const log of ordered) {
    const payload = log.data ?? {};
    if (log.event !== "create_pulse" && payload.column_id !== statusColumn) continue;
    let next, previous;
    if (log.event === "create_pulse") {
      try { next = state(JSON.parse(payload.column_values_json || "{}")[statusColumn]); }
      catch { continue; }
    } else {
      next = state(payload.value);
      previous = state(payload.previous_value);
    }
    const ids = log.item_id ? [log.item_id] : (payload.pulse_ids ?? []).map(String);
    for (const id of ids) {
      if (!visible.has(id)) { unmatched.add(id); continue; }
      const events = byItem.get(id) ?? [];
      const action = payload.action_record_uuid;
      const duplicate = action && events.find(event=>event.action===action && event.next===next);
      if (duplicate) { if (previous) duplicate.previous = previous; continue; }
      events.push({ at:log.created_at, action, next, previous });
      byItem.set(id, events);
    }
  }
  return { byItem, unmatched: unmatched.size };
}
export function creatorHandoffs(items, filming, known, {columns, boardUrl, filmingBoardUrl, videographerColumn, historyStart}) {
  const handoffs=new Map();
  for(const item of [...items,...filming]){
    const isNewmark=filming.includes(item);
    const assigned=item.column_values?.[videographerColumn] || "";
    const explicitBasya=/\b(?:creator|filming) brief for Basya\b|\bBasya(?:’s|'s)? (?:in-house )?(?:filming|creator) brief\b/i.test(item.name);
    const explicitZach=isNewmark && /\bZach(?:ary)? Newmark\b/i.test(assigned) && /\b(?:brief|filming|shoot)\b/i.test(item.name);
    const owner=item.column_values?.[columns.Editor] || "";
    const isCreatorBrief=/\b(?:creator sourcing|creator filming|creator brief|sourcing brief)\b/i.test(item.name)
      || item.column_values?.[columns["Asset Type"]]==="Brief";
    const status=item.column_values?.[columns.Status];
    const isDraft=["Ideas","Concept","Brief Needed","Brief In Progress","Brief Revisions"].includes(status);
    const assignedJuan=!isNewmark && /\bJuan David\s+Rojas\b/i.test(owner) && isCreatorBrief && !isDraft;
    const recipient=explicitBasya?"Basya":explicitZach?"Zach":assignedJuan?"Juan":"";
    const entry=known[item.id] || (recipient?{recipient,date:dayInEastern(item.created_at),evidence:"Dated Monday assignment card"}:null);
    if(!entry?.date || entry.date<historyStart)continue;
    const concept=item.name.match(/^([A-Z0-9-]+)\s*\|/)?.[1] || item.id;
    const key=entry.recipient+":"+concept;
    const previous=handoffs.get(key);
    if(previous&&previous.date<=entry.date)continue;
    handoffs.set(key,{...entry,division:division[item.column_values?.[columns.Division]]||"Unclassified",name:item.name,url:item.url||(isNewmark?filmingBoardUrl:boardUrl)+"/pulses/"+item.id});
  }
  return [...handoffs.values()];
}
export function makeReport({items, logs, personas = {}, campaignPersonas={}, handoffs=[], handoffWarning="", asOf, selectedStart, selectedEnd, min, activityMin=min, config}) {
  const end=dayInEastern(asOf);
  const currentStart=sundayOf(end);
  const {boardUrl,columns,labels,archivedGroupIds=[]}=config;
  const {byItem,unmatched}=itemActivity(items,logs,columns.Status,labels);
  const rows=[];
  for (const item of items) {
    const get = label => {
      const value=item.column_values?.[columns[label]];
      return typeof value==="string" ? value : "";
    };
    const created=dayInEastern(item.created_at);
    const brief=flatDay(get("Brief Date"));
    const delivery=flatDay(get("Delivery Date"));
    const launch=flatDay(get("Launched Actual Date"));
    const rawType=get("Asset Type");
    const itemFormat=rawType==="Brief" || /\b(?:creator sourcing|creator filming|creator brief|sourcing brief)\b/i.test(item.name)
      ? "Creator sourcing" : (format[rawType] ?? "Unclassified");
    const campaign=get("Campaign") || "Unclassified";
    const tagged=seasonal(campaign);
    const fromTitle=["Unclassified","Evergreen"].includes(campaign) ? seasonal(item.name) : "";
    const status=get("Status");
    const ev={ added:[],briefed:[],queued:[],editing:[],delivered:[],approved:[],launched:[],requeued:[],sourced:[] };
    function add(key,date,source) {
      if(date && date>=min && date<=end && !ev[key].some(entry=>entry[0]===date && entry[1]===source)) ev[key].push([date,source]);
    }
    add("added",created,"Monday item created");
    add("briefed",brief,"Brief Date");
    add("delivered",delivery,"Delivery Date");
    add("launched",launch,"Launched Actual Date");
    let previous="";
    for(const event of byItem.get(item.id) ?? []) {
      const date=dayInEastern(event.at);
      const from=event.previous || previous;
      const to=event.next;
      previous=to;
      if(!to || to===from)continue;
      if(to==="Brief Ready"&&!brief)add("briefed",date,"Status → Brief Ready");
      if(queue.has(to)&&!queue.has(from)) add(downstream.has(from)?"requeued":"queued",date,"Status → "+to);
      if(to==="Editing")add("editing",date,"Status → Editing");
      if(to==="In Review")add("delivered",date,"Status → In Review");
      if(to==="Approved")add("approved",date,"Status → Approved");
      if(to==="Launched"&&!launch)add("launched",date,"Status → Launched");
      if(to==="Materials Needed")add("sourced",date,"Status → Materials Needed");
    }
    const active=!archivedGroupIds.includes(item.group?.id)&&!terminal.has(status)&&!launch;
    if(!active&&!Object.values(ev).some(entries=>entries.length))continue;
    const explicit=personas[item.id];
    const campaignCode=item.name.match(/^(BFCM-[MW]-\d+)\s*\|/)?.[1];
    const persona=explicit?.persona?explicit:campaignPersonas[campaignCode] || explicit;
    rows.push({
      id:item.id, name:item.name, url:item.url || boardUrl+"/pulses/"+item.id,
      code:get("Naming Convention").match(/^T-\d+/)?.[0] ?? "",
      format:itemFormat, division:division[get("Division")] ?? "Unclassified", status:status || "Unclassified",
      awareness:awareness[get("Awareness")] ?? "Unclassified", campaign, season:tagged || fromTitle,
      seasonSource:tagged?"Campaign":fromTitle?(campaign==="Evergreen"?"Item title · Monday campaign says Evergreen":"Item title"):"",
      persona:"", personaStatus:"Brief not reviewed", ...persona,
      product:get("Product"), category:get("Category"), editor:get("Editor"), strategist:get("Creative Strategist"), source:get("Source"),
      created, delivery, due:flatDay(get("Due Date")), launchDue:flatDay(get("Launch Due Date")), active,
      planned:itemFormat==="Static"?Number(item.name.match(/\((\d+)\s+images\)/i)?.[1]??0):0,ev
    });
  }
  const previousWeek = end===currentStart && shiftDay(currentStart,-7)>=min;
  return {
    start:selectedStart || (previousWeek?shiftDay(currentStart,-7):currentStart), end:selectedEnd || (previousWeek?shiftDay(end,-1):end), min, max:end, activityMin, asOf, board:boardUrl,
    handoffs, handoffWarning, boardCount:items.length, unmatched, inspected:logs.length, truncated:logs.filter(log=>log.data_truncated).length,
    activityThrough:logs.reduce((latest,log)=>log.created_at>latest?log.created_at:latest,""), rows
  };
}
