---
name: twillory-creative-production-dashboard
description: Build, refresh, reconcile, or report from the Twillory Creative Production Dashboard using Monday production data. Use for end-of-week CGO and creative-team updates, queue intake, launch readiness, designer and editor workload, brief-backed persona coverage, Black Friday and Cyber Monday production, and creator brief handoffs to Juan, Basya, or Zach.
---

# Twillory Creative Production Dashboard

1. Open the existing dashboard in its authorized workspace when available. Find the Creative Production board using the repository's [Monday assignments guide](../../../WORKFLOW.md#monday-assignment-guide). Use Monday item fields and dated activity for production reporting. Keep Meta delivery and performance reporting in [Ad Account Performance Insights](../twillory-ad-account-performance-insights/SKILL.md).
2. Confirm the report dates in America/New_York. Default a weekly team update to the most recent completed Sunday–Saturday week. Retain week presets and custom dates in the dashboard. Read [the reporting contract](references/reporting.md) before calculating or changing metrics.
3. Verify the live board schema, paginate production items and activity logs, and record the retrieval timestamp and activity coverage. Use the Newmark Visuals board for Zach's filming assignments where accessible. Resolve linked briefs through Monday and the authorized document source. Record confirmed handoffs and approval or launch evidence separately.
4. For an HTML report, prepare an authorized local input using the [input contract](references/reporting.md#render-a-snapshot), then run `node scripts/render-report.mjs input.json output.html` from this skill directory. The templates preserve the dashboard's layout, filters, stages, personas, and handoff cards. For edits to the live site, use its existing project checkout and access settings. Apply the change there and verify the deployment when publication is requested.
5. Reconcile the queue total to the format, division, and owner totals. Open representative task links and verify the selected dates, stage transitions, creator briefs, and any launch readiness claims. If a source is inaccessible, label the affected numbers as unavailable or incomplete and date any snapshot used.
6. Prepare the update in this order: queue intake for the CGO, production and launch milestones, new work by designer and editor, creator handoffs, and next-week actions. Include the dashboard link and relevant Monday cards. For a BFCM handoff, confirm the exact launch flight and approval deadline before naming the assets or owners. Keep the message ready for the user to send unless they authorize sending.

Use read access for reporting. Keep live board exports, linked brief contents, private dashboard URLs, access tokens, and internal report payloads in their authorized workspace. Commit only reusable instructions, code, and templates.
