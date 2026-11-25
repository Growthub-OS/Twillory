# Twillory creative process

Owner: Brandon Wasoski. Updated November 14, 2026.

This is Twillory's client-specific operating playbook. Read it alongside AGENTS.md and PROJECT_STATUS.md. It documents requirements; it does not mean any research, brief, task or creative has been completed.

## 1. Reuse existing skills

Use the canonical Growthub skills. Do not copy, rename, fork or recreate them in Twillory. Retrieve their current instructions and required references before executing the relevant stage. Record the version and source used per run.

| Stage | Canonical skill | Catalog version checked November 14 |
| --- | --- | --- |
| Conversation research | [growthub-conversation-scan](https://github.com/Growthub-OS/gh-client-agent-skills-library/blob/main/.agents/skills/creative-development/growthub-conversation-scan/SKILL.md) | 0.1.0, draft |
| Persuasion in concepts, scripts and briefs | [growthub-sales-psychology](https://github.com/Growthub-OS/gh-client-agent-skills-library/blob/main/.agents/skills/growthub-sales-psychology/SKILL.md) | 0.1.0, draft |
| Production briefs and storyboards | [growthub-production-brief](https://github.com/Growthub-OS/gh-client-agent-skills-library/blob/main/.agents/skills/creative-development/growthub-production-brief/SKILL.md) | 0.2.0, draft |
| Supporting creative strategy | [growthub-creative-strategy](https://github.com/Growthub-OS/gh-client-agent-skills-library/blob/main/.agents/skills/creative-development/growthub-creative-strategy/SKILL.md) | 0.1.0, draft; located in catalog, not reviewed in full for this setup |

[Canonical catalog](https://github.com/Growthub-OS/gh-client-agent-skills-library/blob/main/catalog/skills.json).

The first three SKILL.md files were read for this update. Required execution references must still be loaded when doing their actual work. Do not describe draft upstream skills as production-certified.

Twillory overrides: fresh-only 7-10 day research; Hey Parker or the ad account as performance sources; editable Google Docs for team handoff; Twillory-branded deliverables and verified Twillory assets. These replace conflicting generic client defaults, such as a mandatory Motion dependency, Growthub document branding or DOCX-only handoff. Retain upstream research depth, script, storyboard and QA requirements unless Brandon explicitly changes them.

Keep general methods upstream. Put Twillory-specific configuration, templates, schemas, status and receipts here. Search the upstream catalog before proposing any additional skill. This update creates documentation, not a newly installed skill.

## 2. Conversation Scan: fresh information only

Default to the rolling last 7 days at run time. Extend to 10 days if needed for coverage, explicitly recording the extension. State the exact date/time boundaries and timezone. Do not use an older scan as the current scan just because it is the latest saved file.

Every finding that informs the weekly creative plan must come from a firsthand consumer comment, review or account published within that window.

### Required source coverage

Search the open web for category, product, fit, fabric, occasion and competitor conversations, including searches that omit the Twillory name. Attempt each source family and report the coverage actually reached:

| Source family | What to inspect |
| --- | --- |
| Reddit | Relevant subreddits, threads and individual replies |
| Quora | Questions, answers and discussion where visible |
| Independent reviews | Third-party review sites and retailer product reviews |
| Twillory reviews | Reviews on Twillory's own site |
| Competitor reviews | Competitors' product and brand reviews on their own sites, retailers and independent review sites |
| Men's fashion and suiting blogs | Independent style articles and reader discussion on fit, fabrics, outfits and buying decisions |
| Facebook Groups | Relevant men's fashion, suiting and occasion groups, including posts and replies where authorized access exists |
| TikTok videos | Relevant videos with firsthand product or category experience, plus public creator context |
| TikTok comments | Comment sections and replies on relevant videos |
| YouTube videos | Relevant reviews, try-ons, guides and firsthand accounts |
| YouTube comments | Comment sections and replies on relevant videos |
| Twillory ad comments | Facebook and Instagram comment threads and replies on Twillory ads |
| Competitor ad comments | Facebook and Instagram ad discussions where accessible |
| Other communities | X / Twitter, other social threads, category forums and relevant communities found through open-web search |

Use approved connected tools, public search and authorized browsing. Check video coverage and comment coverage separately. Inspect the relevant source material directly, using video playback or available transcript as appropriate, and record what was reviewed. For blogs, creator videos and competitor marketing, label editorial and promotional material as context. Use identifiable firsthand consumer comments, reviews or accounts as evidence when they meet the date and sourcing requirements.

Log each family as scanned, no qualifying fresh evidence, inaccessible or not available. Record incomplete pagination, missing comments, private or restricted access, and material that could only be read in part. Continue the scan across the other sources when an individual source is unavailable.

### Evidence rules

- Verify the original publication date of the individual item used as evidence. A video upload date can date its content. Date comments and replies individually. A crawl date, page update, search filter or thread creation date alone cannot establish a reply date.
- A fresh reply on an older thread can qualify; the older root post is context only.
- An undated or older item cannot support a fresh finding. Keep it out of the findings and consumer-language bank.
- Older brand facts, product references and past scans may be read for context and deduplication; do not count them as fresh research.
- Open full threads, articles, reviews and comment sections, and inspect the relevant video or transcript. Search snippets alone do not establish a finding.
- Preserve URL/permalink, platform, comment/review date, capture date, product, audience evidence, quote or labeled paraphrase, theme and objection. Never put a paraphrase in quotation marks.
- Deduplicate cross-posts and repeated comments. Separate consumers from brand replies, promotional copy and spam.
- Mark repeated historical themes as recurring; do not label them newly discovered without a fresh reason.
- Ground frequency and momentum in observed distinct records and date ranges. Do not invent volume or trends.
- Retain upstream research depth and topic targets, but never pad a count using stale or invented evidence. Report fewer qualified findings and the coverage gap if necessary.
- If access fails, continue independent source families and try an authorized alternative. Do not silently widen beyond 10 days to fill space.

### Scan handoff

Deliver a Twillory-branded scan with a dated evidence ledger, source-coverage table, fresh objections, consumer language, topics, creative opportunities and unresolved gaps. Give each finding an evidence ID so the testing plan can cite it.

Acceptance: every finding used as fresh has a verified in-window date and source; inaccessible channels and incomplete coverage are disclosed.

## 3. Ad Account Performance Insights

Follow the [Twillory Ad Account Performance Insights workflow](.agents/skills/twillory-ad-account-performance-insights/SKILL.md) for the reporting steps and testing-plan handoff.

Pull directly from the ad account or Hey Parker. Keep the established report format; use the current approved report as the reference when available. Its exact link must be resolved, not invented.

- Scaling, remarketing and retention: last 14 days.
- Creative Testing ACQ: last 5-7 days; generally evaluate tests live at least 5 days, with the existing exception for a creative absorbing most spend.
- Keep the windows and campaign purposes separate.
- Show actual ad names, thumbnails and the source creative link where available.
- Report spend, revenue, ROAS and relevant supporting metrics with correct scope and attribution. ROAS is primary.
- Targets: ACQ 2+, remarketing 3.25, retention 6+.
- Weight product testing allocation by actual ACQ spend and strategic evidence, not equal counts per SKU.
- Record source, retrieval time, exact date range, campaign/ad-set/ad identity and exclusions. Do not infer new-customer revenue from all-customer revenue.

Acceptance: source and dates are visible, metrics reconcile within their stated scope, and each action is tied to an actual creative or product.

## 4. Weekly testing plan: men and women

Deliver each men’s and women’s weekly testing plan as an HTML document. Embed clearly visible thumbnails from Foreplay on each concept card once its references are selected, with each thumbnail linking to its public Foreplay share URL. Verify the thumbnails render in the delivered HTML.

The plan combines fresh conversation evidence and performance learning. Separate an initial proposed plan from the revised plan used for briefing.

Each concept card must contain:

| Field | Requirement |
| --- | --- |
| Identity | Stable concept ID, title, week, division and product |
| Test type | Net new concept or iteration; parent creative for iterations |
| Research reason | Evidence IDs, exact objection/topic and why it matters now |
| Performance reason | Source creative and metrics, or explicit net-new hypothesis where no prior ad exists |
| Persona | Verified persona and supporting behavior; provisional labels must be explicit |
| Awareness | Unaware, Problem Aware, Solution Aware, Product Aware or Most Aware |
| Hold | What stays constant: winning element, offer, proof, footage, audience or execution |
| Change | Exact variable or creative approach being changed |
| Hypothesis | Why the proposed change should improve response |
| Execution | Video, static or GIF; visual format; reference; creator/internal route |
| Foreplay references | Visible thumbnail for each selected video or photo reference, linked to its public Foreplay share URL |
| Decision | What result supports continuing, iterating or stopping; use agreed thresholds and viable spend |
| Tracking | Plan revision, brief link, Monday task link and separate stage status |

Each card must trace to fresh consumer evidence. An iteration may also have a performance-led reason, but that is not a substitute for the conversation link. If evidence is missing, keep the proposal provisional and gather it.

Women's personas are not finalized. Craft them from evidence; label provisional segments clearly and do not pass them off as approved personas. Men's personas also still require finalization.

Acceptance: every briefable card specifies the objection, persona status, awareness stage, what to hold and what to change. Do not claim the complete plan is briefed because the plan exists.

## 5. Concepting and visual formatting

Use Foreplay and actual reference creatives to develop net new concepts, videos and statics. Concepting is a working stage that can change the initial testing plan.

For each reference, record its real URL and dissect the hook, opening image, format, story beats, pacing, proof, copy layout and CTA. Separate the reusable visual mechanism from the competitor's claims or identity.

Explore distinct formats such as creator face-to-camera, podcast, mockumentary, green screen, drama and longer narrative, where the idea fits. Give statics a deliberate place in the plan, with specific visual composition and copy hierarchy. Do not reduce the slate to video only.

After concepting, revise the plan and version affected cards. Brief the latest selected concept. Do not brief superseded versions, resurrect rejected duplicate concepts or invent an ad reference.

Acceptance: concept, reference and plan revision agree; each execution has a clear visual approach.

## 6. Briefing and scripting

Use Growthub Sales Psychology for persuasion and Growthub Production Brief for production structure. Load both actual instructions and applicable references. Use verified Twillory branding; never recreate a logo or product detail from memory.

- Creator sourcing brief: creator profile, product, objective, full script/dialogue, exact shot list, references, delivery requirements and downstream editing handoff.
- Editor brief: full script, footage sources, actual reference creative, visual/scene direction, exact on-screen copy, timings and required variations. Keep execution instructions relevant.
- Designer brief: exact headline/body/CTA, visual direction, references, product assets, dimensions and variation requirements.
- Keep creator footage sourcing and editing handoffs separate. Different product edits can share a sourcing brief only when the footage requirements cover both; each edit still has its own clear brief.
- Preserve the full-script/scene-table match, storyboard and QA requirements from the upstream brief where applicable. A scene change invalidates dependent storyboard content.
- Use Google Docs for collaboration. Put the relevant plan card on the second tab. Set Anyone with the link - Commenter and verify the actual sharing state.
- Include the relevant reference videos and photos in the brief using public Foreplay share links. Verify that each link opens the intended media without a Foreplay login. Include verified product and production assets as applicable. No invented offers, claims, prices, links or specifications.
- The document must be complete and checked before its Monday handoff is called ready.

Acceptance: final script, execution instructions, assets, format, plan card and sharing work together. Brief completed is separate from task created, footage received or ad produced.

## 6A. Minimum three hooks per concept

Required by Brandon, November 14, 2026. Apply to men's and women's testing plans, iterations and net new concepts, across creator, internal-edit and design routes. Default to three hooks; provide more when requested. Fewer than three requires an explicit user exception for that concept.

| Asset | Required brief content | Required production delivery |
| --- | --- | --- |
| Static image | H1, H2 and H3: three distinct headline/message hooks with exact copy and any hook-specific visual direction | At least three separate finished images per concept, one for each hook, in every agreed size |
| Video | H1, H2 and H3: exact spoken/on-screen hook, opening visual and transition into the shared body | At least three complete video versions per concept, each with its own opening hook |
| GIF | Three hook treatments with exact copy/opening direction | At least three finished GIF versions per concept |

Three written hook options alone do not complete production. A static concept delivered as one image is incomplete. Three video opening clips alone do not replace the three complete edits. Resizing the same creative, changing only punctuation, or exporting the same hook three times does not count as three hooks.

### Keep the test interpretable

Use three meaningfully different attention/objection treatments within the same concept. Hold the agreed product, offer, proof and core creative/body constant by default so the hook is the main variable. State any intended visual changes on the card. Do not turn H1/H2/H3 into three unrelated concepts or silently triple the concept count.

For static iterations, retain the winning base elements identified by the plan and produce three real image variants with distinct hooks. For video iterations, retain the selected body/offer/proof and replace the opening according to the three specified hooks. For net new concepts, establish one coherent concept and three alternative entry points.

### Testing-plan and briefing contract

Add to every concept card:
- Hook count: minimum 3.
- H1 / H2 / H3: exact hook copy and hook-specific visual/opening.
- Shared control: what remains the same across the variants.
- Required outputs: three static images, three complete video edits, or three GIFs, plus the agreed sizes.
- Variant IDs and separate production/QA/delivery status.

Carry all three hooks into the Google Doc brief and the testing-plan card on its second tab. Map each video's opening into the complete script/scene direction, with the shared body clearly defined. Update dependent storyboards when hook scenes change.

### Role-specific handoff

- Juan: creator brief must request footage/dialogue for all three hooks plus the shared footage/body. Verify the shot list covers H1/H2/H3 before sourcing handoff. The creator brief is one concept, not three weekly briefs.
- Paola / Mac: design brief and task must explicitly request three finished images per static concept, labeled H1/H2/H3, with all agreed sizes.
- Andrea / Richard: editing brief and task must explicitly request three complete video versions with the three hooks. Verify opening-to-body continuity in each.
- GIF owner: specify and verify three complete hook variants.

### Monday tracking and completion

Default to one concept task per production stage with all three required variants listed in its update/brief. Creator sourcing and editing remain separate tasks. Do not create three duplicate concept tasks just to count hooks; use separate variant tasks only when the established board workflow or user explicitly calls for them.

The task update must name H1/H2/H3, exact deliverable count, formats/sizes and final links. No new board column is required. At delivery, verify each variant link and the actual hook in the asset. Do not mark production complete while any required version is missing.

Report concept counts separately from hook/asset counts: 1 concept = at least 3 hooks; 4 men's creator briefs = at least 12 hook treatments; 2 women's creator briefs = at least 6. Weekly sourcing quotas remain 4 men's and 2 women's briefs. Actual final asset counts also depend on the agreed formats and sizes.

Apply this policy to new work and to remaining/unproduced items when the current plans are next briefed. Existing plan files and live Monday tasks have not been amended merely by documenting this rule. Reconcile already briefed items before claiming they satisfy it; do not rewrite completed historical work or create new tasks without an authorized scope.

## 7. Creator sourcing and weekly outputs

Deliver to Juan every week:

- 4 new men's creator briefs.
- 2 new women's creator briefs.

Also preserve the existing requirement of 1-2 items for Zach per week. Resolve Zach's exact deliverable type and handoff timing before scheduling it.

Count distinct completed, verified briefs handed off to the intended owner, not hook variants, duplicate tasks, drafts, or a plan card without a brief. Track men's and women's counts separately by week. The existing Wave 1 backlog does not prove every future weekly target is met.

Juan sources creators and footage. Editors receive the subsequent editing handoff when required assets are ready. Distribute editor and designer work evenly across the verified current roster; preserve existing assignments unless instructed otherwise.

No recurring automation or weekly completion is implied by this policy. Do not invent due dates.

## 8. Monday: prepare, write, verify, recover

Board: [Creative Production](https://twillory-company.monday.com/boards/18410060478), ID 18410060478.

### Role-specific field matrix

Role assignments confirmed by Brandon on November 14, 2026. Monday account identities checked the same day.

| Role | Named owner | Verified Monday user ID |
| --- | --- | --- |
| Creator sourcing | Juan David Rojas | 111952449 |
| Designer | Paola G | 89990438 |
| Designer | Mac Aira Macoy | 120725883 |
| Editor | Andrea Suegart | 97991865 |
| Editor | Richard | 113094436 |
| Creative Strategist, all routes | Brandon Wasoski | 120952494 |

Refresh identity/access when necessary. Allocate new design work 50/50 between Paola and Mac, and editing work 50/50 between Andrea and Richard, accounting for existing assignments. Preserve an explicitly selected owner. Never use the designer pool for video editing or the editor pool for static design by assumption.

The board's single production-owner people field is titled **Editor** (multiple_person_mkv8z0ve). Use it for the assigned owner on each route. An existing creator-sourcing task, [W-G03](https://twillory-company.monday.com/boards/18410060478/pulses/13547495821), was read back on November 14 and confirms Juan in this field, Brandon in Creative Strategist, and Materials Needed in both status fields at that read-back. This records an observed task state. The schema has no separate Designer or Juan people column.

| Field / action | Juan: creator sourcing | Designers: Paola or Mac | Editors: Andrea or Richard |
| --- | --- | --- | --- |
| Editor / production owner | Juan | Exactly one designer | Exactly one editor |
| Creative Strategist | Brandon | Brandon | Brandon |
| Main Status | Materials Needed at sourcing handoff | Ready for Editing once design brief/assets are ready | Ready for Editing once edit brief/footage are ready |
| UGC Status | Preserve the existing or default value during assignment. Verify UGC Manager view membership separately. | Preserve existing or default UGC Status. | Preserve existing or default UGC Status. |
| Source | Actual approved creator channel: Cohley, Trybe or Influencer - Other; do not assume | IH-Edit for internal design | IH-Edit for internal editing |
| Asset Type | Intended final output, usually VID for a creator brief that will produce video | IMG for statics, GIF for motion statics | VID for video; use GIF only for an explicitly assigned GIF deliverable |
| File Link + update | Creator sourcing Google Doc | Design Google Doc | Editing Google Doc |
| Raw Files | Add verified received footage when available; do not invent a link | Link verified product/design source assets when available | Link verified footage/source assets before ready status |
| Handoff / dependencies | Link future editing brief/task separately; do not replace Juan with the future editor | Record design deliverables and final asset links | Link sourcing task if required; record edit deliverables and final asset links |
| UGC Review link | Only when an actual creator review URL exists | Leave untouched unless explicitly relevant | Leave untouched unless explicitly relevant |
| Campaign and Landing Page | Approved board labels when specified in the brief or launch plan | Same | Same |
| Dates | Brief Date and UGC Due when confirmed | Due Date when confirmed | Due Date when confirmed |
| Reviewer | Preserve or set only from explicit routing instructions | Same | Same |
| Priority | Leave untouched | Leave untouched | Leave untouched |

Shared required fields on every route: concept ID/title, correct Mens or Womens division, product dropdown value, category, Awareness, asset type, source, owner, Brandon as strategist, working Google Doc link and Commenter sharing. The second Google Doc tab contains the relevant testing-plan card.

Do not fill creator shipping, acceptance, usage, creator identity or UGC launch/review fields on internal-production tasks merely because those columns exist. Do not fabricate these values on Juan's tasks either; they become available during sourcing. Do not copy creator-sourcing dates onto editing due dates. A future editor named in a sourcing update is not an assignment change.

Each task must pass its role-specific checklist plus shared field verification. If the sourcing task is missing from UGC Manager, record the visibility gap and inspect the view filters. Preserve UGC Status during routine assignment.

### Read before writing

1. Read current board schema, active groups, labels, views and user identities.
2. Resolve the correct owner by actual account identity. Brandon is Creative Strategist; Juan handles sourcing. Do not guess IDs from display names.
3. Search existing tasks by concept ID, name, product and stage; inspect likely matches. Keep Juan's originals.
4. Prepare a task manifest from the final brief and plan revision. Include board, actual group, person fields, status fields, division, product, category, awareness, asset type, source, document URL and dependency links.
5. Validate labels and types against the live schema. Do not create labels to work around a mismatch.
6. Verify Google Doc content and Commenter sharing before task handoff.

### Verified schema snapshot, November 14, 2026

This is a lookup aid, not permanent authority. Refresh before each write session.

| Meaning | Column ID | Live label / handling |
| --- | --- | --- |
| Division | color_mm72cd91 | Mens / Womens |
| Creative Strategist | multiple_person_mm2q2tq8 | Brandon Wasoski, verified subscriber ID 120952494 |
| Production owner | multiple_person_mkv8z0ve | Editor; resolve actual person and routing live |
| Production status | status | Materials Needed / Ready for Editing, as appropriate |
| Creator workflow status | color_mm41swgx | UGC Status; inspect for UGC Manager visibility and preserve during assignment |
| Brief link | link_mm07y8vc | File Link |
| Category | color_mm6d8pf7 | Select actual product category |
| Product | dropdown_mm6dyn45 | Dropdown, not a connected-board relation |
| Awareness | color_mm2x9bbr | Unawr / ProbAwr / SolAwr / ProdAwr / MostAwr |
| Asset type | color_mkv0q0ap | VID / IMG / GIF |
| Source | dropdown_mkvmnnqm | IH-Edit / IH-Shoot / Cohley / Trybe / Influencer - Other |
| Campaign | dropdown_mm2qvx3j | Use the confirmed campaign label |
| Landing Page | dropdown_mm31s1gc | Use the confirmed destination label |
| Due Date | date4 | Use the confirmed production due date |
| UGC Due | date_mm2qqtaa | Use the confirmed creator delivery date |
| Raw Files | link_mm0egeym | Link verified source footage or assets |
| Priority | color_mm8qnjvd | Leave untouched |

Primary active production group: group_mm0gfvmh, Creative Production. Other active groups exist; use the actual intended group, not a view name.

UGC Manager is view 253228087. It filters by UGC Status and excludes the internal sourcing labels IH-Shoot and IH-Edit. Verify the view after assignment and inspect its current filters if a task is missing.

For sourcing: choose the real sourcing channel, not IH-Edit. Set the main Status to Materials Needed at sourcing handoff. Preserve UGC Status and verify view visibility. Do not invent a sourcing platform or label when the channel is undecided. Juan was absent from the board-subscriber snapshot but has since been resolved through live user search and an existing sourcing task. Use the verified role table above; subscriber membership alone is not an assignment-eligibility test.

For internal production: use IH-Edit and Ready for Editing only when required inputs are available. Map video to VID and static image to IMG. The UI owner field is named Editor even when the production owner is a designer; verify how existing designer tasks use it.

For confirmed evergreen work, use the Evergreen label in Campaign.

### Write and verification contract

- Start with one fully configured task, read it back, then continue the batch.
- Use a connector first. If a supported operation errors or is incomplete, inspect the cause and use another authorized tool or the signed-in board UI.
- Do not include historically restricted columns blindly in a large create payload. On a permission error, isolate the failing field and complete valid fields on the same item.
- Put the Google Doc URL in the task update and File Link when writable. The update link preserves access if File Link is restricted; the missing File Link still remains explicitly incomplete.
- Use both sourcing and editing task links for dependencies. Do not place creator sourcing in Ready for Editing.
- Leave Priority and unrelated existing data untouched.
- Read back exact item ID, title, group, person IDs, status values, division, product, category, awareness, asset type, source and brief links.
- Verify the Google Doc URL opens and the intended viewer permission exists.
- Verify intended view membership, not only board presence.
- Record the final item URL and field-level verification in the run receipt.

### Recovery contract

A failed call is not a completed operation, and a timeout is not proof nothing was created.

1. On uncertain creation, search for the exact concept/stage and read candidate items before retrying. Resume the same item if it exists.
2. On column rejection, isolate that column; preserve completed fields. Never repeat the full create and generate a duplicate.
3. On stale schema or invalid labels, refresh metadata and correct the manifest.
4. On connector limitation, try the authorized signed-in browser for that exact task. Do not declare that Monday as a whole is unavailable after one failed route.
5. Do not change permissions, bypass restrictions, or alter the board's schema to force an upload.
6. If all authorized routes fail for a required field, preserve completed work and report the exact remaining field, item URL and recovery action. Be specific rather than making a blanket capability claim.
7. Distinguish task created, task configured and verified handoff. Partial configuration is never reported as fully complete.

The aim is reliable execution with recovery and verification. Documentation cannot guarantee external permissions or uptime. Never hide a real blocker to avoid reporting an error.

Acceptance: every requested task has one intended record, correct fields, readable brief, proper owner and verified destination, or a precise partial-state receipt.

## 9. Status, receipts and team reporting

Maintain one row per concept and production stage with week, division, plan revision, scan evidence IDs, persona status, brief URL, Monday item ID/URL, owner, required fields, read-back result, unresolved fields and last verification time.

Use explicit milestones: proposed, selected for briefing, brief/script complete, assigned and verified in Monday, footage received, editing/design complete, approved, launched. Record stages only when evidence supports them.

Update PROJECT_STATUS.md after actual work. Do not carry old counts into a new week. User corrections take precedence. A dashboard reported built remains built; personas reported unfinished remain unfinished.

A team update contains completed actions and actual handoffs only. Do not present policy, future quotas, research attempts or pending work as completed production.

## 10. Remaining setup

- Finalize men's personas and develop women's personas.
- Brief/script the current men's plan and remaining women's concepts.
- Configure Higgsfield plus GPT or Claude for statics and validate outputs.
- Resolve the exact Zach deliverables and weekly handoff timing.
- Record the current approved performance-report reference, brand assets and dashboard link.
- Enable connector access to the new repo when available; browser access already supports documentation.
- Validate Monday execution on the next authorized real handoff. This documentation update performs no Monday writes and is not a successful live mutation test.


## Editorial Facebook Pages

Use the [Editorial Facebook Pages skill](.agents/skills/twillory-editorial-fb-pages/SKILL.md) for Twillory-owned editorial Pages. Brandon owns the workflow. Begin with the existing Pages and their Planner schedules.
