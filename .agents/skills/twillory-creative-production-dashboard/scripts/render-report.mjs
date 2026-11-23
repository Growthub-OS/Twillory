import {readFile, writeFile} from "node:fs/promises";
import {creatorHandoffs, dayInEastern, makeReport, sundayOf} from "./production-report.mjs";

const [inputPath, outputPath] = process.argv.slice(2);
if (!inputPath || !outputPath) {
  throw new Error("Usage: node scripts/render-report.mjs <input.json> <output.html>");
}
const input = JSON.parse(await readFile(inputPath, "utf8"));
const {config, items, logs, filmingItems = [], verifiedHandoffs = {}, min, asOf} = input;
if (!Array.isArray(items) || !Array.isArray(logs) || !Array.isArray(filmingItems)) {
  throw new Error("Supply arrays for items, logs and optional filmingItems.");
}
if (!asOf || !Number.isFinite(Date.parse(asOf)) || !/^\d{4}-\d{2}-\d{2}$/.test(min ?? "") || sundayOf(min) !== min || min > dayInEastern(asOf)) {
  throw new Error("Supply an asOf timestamp and the first Sunday in the reporting history as min.");
}
if (!config?.columns?.Status || !config.labels || new URL(config.boardUrl).protocol !== "https:") {
  throw new Error("Supply the verified Monday column and status mappings and an HTTPS board URL.");
}
if (filmingItems.length && (!config.filmingBoardUrl || !config.videographerColumn)) {
  throw new Error("Supply the filming board URL and Videographer column when using filming items.");
}

const handoffs = creatorHandoffs(items, filmingItems, verifiedHandoffs, {...config, historyStart:min});
const report = makeReport({...input, handoffs});
if (report.start < min || report.end > report.max || report.start > report.end) {
  throw new Error("The selected dates must be inside the available reporting range.");
}
const [html, css] = await Promise.all([
  readFile(new URL("../assets/report.html", import.meta.url), "utf8"),
  readFile(new URL("../assets/dashboard.css", import.meta.url), "utf8")
]);
const payload = JSON.stringify(report).replaceAll("<", "\\u003c");
await writeFile(outputPath, html.replace("__REPORT_CSS__", () => css).replace("__REPORT_DATA__", () => payload));
