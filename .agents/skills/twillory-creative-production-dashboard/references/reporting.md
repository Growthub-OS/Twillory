# Reporting contract

| Measure | Count or source |
| --- | --- |
| Added to Monday | Item creation in the selected period |
| Briefed | Brief Date, with a dated move to Brief Ready as fallback |
| Entered queue | Entry into Ready for Editing or Queued for Editing from outside the queue |
| Returned to queue | Return from a downstream production stage, counted separately |
| Editing started | Dated move to Editing |
| Edit delivery | Delivery Date or dated move to In Review |
| Approved | Dated move to Approved |
| Launched | Launched Actual Date, with a dated Launched transition as fallback |
| Production pipeline | Current open work by Monday status, with production and launch due dates |
| Creator briefs handed off | Verified brief handoff date where available, otherwise the qualifying assignment card's creation date |

Count distinct eligible Monday work packages per milestone. A package can appear at multiple milestones. Launches may come from earlier weeks. Report planned variants or images separately when the brief or title gives a quantity. The pipeline uses current status even when viewing a historical intake week.

Break intake down by format, men's and women's lines, strategist, category, campaign, awareness, and production owner. Use verified campaign tags and label explicit title-based seasonal classification as such. Surface unassigned work. Give named personas from linked briefs precedence over inferences from product-specific brief copy, and keep evidence links and unmapped counts visible. Group personas by product division.

For handoffs, use Juan's creator sourcing or filming assignments, Basya's in-house creator briefs, and Zach's confirmed filming assignments. Deduplicate by recipient and concept when the concept code is available. Keep Juan's men's and women's counts separate. Off-board handoffs require dated evidence. Weekly goals from the project workflow are four men's and two women's creator briefs for Juan, and one to two items for Zach when relevant.

## Render a snapshot

Prepare a local JSON object with these fields. Retrieve current column and label IDs from Monday board metadata and use the item and activity API payloads as returned.

| Field | Shape |
| --- | --- |
| `asOf` | ISO timestamp with a timezone or UTC suffix |
| `min` | First Sunday available for the dashboard as YYYY-MM-DD |
| `items`, `logs` | Creative Production parent items and activity response arrays. Include item IDs, names, creation timestamps, group IDs, URLs and displayable column values. Fetch create_pulse, update_column_value and batch_change_pulses_column_value with event payloads. |
| `config` | `boardUrl`, `columns` keyed by column title, `labels` keyed by status index, and optional `archivedGroupIds`. When reporting from a filming board, also supply `filmingBoardUrl` and `videographerColumn`. |
| `filmingItems` | Optional filming board item array |
| `verifiedHandoffs` | Optional map keyed by item ID with `recipient`, `date`, and `evidence` |
| `personas`, `campaignPersonas` | Optional maps keyed by production item ID or BFCM concept code. Use `persona`, `personaStatus` such as Mapped from brief or Inferred from brief, `personaSource`, and `personaEvidence`. |
| `selectedStart`, `selectedEnd`, `activityMin`, `handoffWarning` | Optional selected dates, first date with activity history, and source access warning |

The report renders from the supplied snapshot with all filters available offline. The hosted dashboard can refresh through the existing site's authorized integrations.
