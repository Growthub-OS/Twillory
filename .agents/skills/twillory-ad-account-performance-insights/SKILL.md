---
name: twillory-ad-account-performance-insights
description: Review Twillory Meta ads in Hey Parker or Meta and turn performance into creative decisions. Use for the Ad Account Performance Insights readout, weekly creative testing review, scaling recommendations, or acquisition testing allocation by product.
---

# Twillory Ad Account Performance Insights

Use account performance to decide which creative to recommend for scaling, what to iterate or test next, and which products need more acquisition creative. The goal is to grow new-customer volume and revenue. Use [Twillory's testing-plan requirements](../../../PROCESS.md#4-weekly-testing-plan-men-and-women) for the handoff.

## 1. Pull performance

Pull from Hey Parker or directly from Twillory's Meta ad account. Use completed days in the account timezone by default. Record the source, retrieval time, timezone, currency, attribution window, date ranges, filters and exclusions. Verify which campaigns belong to each lane. Capture campaign, ad set and ad identity so each recommendation can be traced to its source.

| Campaign lane | Primary review window | ROAS target |
| --- | --- | --- |
| Acquisition scaling by product | Last 14 days | 2.0x or higher |
| Remarketing | Last 14 days | 3.25x |
| Retention | Last 14 days | 6.0x or higher |
| Creative Testing ACQ | Last 5–7 days | 2.0x or higher |

Creative Testing ACQ uses ad-set budgets and product-named ad sets. Generally evaluate a test once it has been live for at least five days. A creative taking most of the testing spend can warrant earlier review. Label that result as early and report elapsed time, spend and purchase count. Identify any additional comparison period by its exact dates and purpose.

Pull spend, Meta-attributed purchase revenue, purchases, ROAS and purchase CPA. Review daily spend against daily attributed revenue to see how efficiency changes as spend moves. Reconcile totals to the source for the stated filters and aggregation. Label any sampled rows, missing data or limited media coverage.

## 2. Interpret results and inspect creatives

### Hard metrics and decision priority

- **Company growth (reporting dashboard):** Target **+15% year over year in new customers**. Use Twillory's approved Google Sheet for verified new-customer counts. Compare equivalent current and prior-year periods with the same coverage and customer definition. Show both counts, the YoY change, comparison dates, source and as-of date. Calculate YoY growth as (current count − prior-year count) ÷ prior-year count when the prior-year count is positive. Use verified new-customer revenue alongside the count when available.
- **Campaign sales efficiency:** ROAS remains the primary Meta performance KPI. Read it with spend, purchase count, revenue and CPA before recommending scale. Use each campaign's own historical purchase CPA baseline by product and funnel lane. Calculate the historical baseline from comparable campaign periods as total spend divided by attributed purchases. Record the baseline dates, attribution, spend, purchases and any promo or seasonality differences. Establish and label a campaign-specific CPA target from that history. Mark thin or noncomparable history as provisional and avoid assigning a universal CPA threshold. Label purchase CPA separately from verified new-customer CAC.

### Soft metrics for diagnosis

Use these to identify where delivery, attention or click response may be limiting a creative. Use purchase outcomes and viable delivery to decide whether a creative has earned scaling.

| Metric | Twillory benchmark | How to use it |
| --- | --- | --- |
| Frequency | **Below 1.8 in ACQ** | Review repeat exposure in ACQ. Higher frequency can be acceptable elsewhere in the funnel. |
| Hook rate | **30%+**, with **35–45%** as a strong result | Historically, 25% has been considered high for this account. Use the higher target to diagnose whether the opening stops the scroll. |
| Hold rate | **12–15%**, with higher preferred | The account has historically been low. Review the opening-to-body transition, pacing and proof. |
| Click-through rate (CTR) | **At least 2%** | Evaluate how well the message generates clicks. Label the click definition used. |
| Cost per click (CPC) | **Below $2 in ACQ** | Gauge acquisition click efficiency using the same click definition as CTR. Higher CPC can be acceptable elsewhere in the funnel. |
| First-time impression ratio | **As close to 1.0 as practical** | Assess fresh exposure using the reported scope. Treat 1.0 as an ideal. This is an exposure metric. |
| CPM | **Below $25 is the established account benchmark** | Use CPM to explain delivery cost in the context of placement and funnel lane. |

Record each source metric's definition, denominator and scope. Use comparable definitions and video lengths for hook and hold rate. Flag unavailable metrics or insufficient delivery in the readout. Read frequency and first-time impression ratio together when assessing fresh reach.

### Dashboard handoff

- **Reporting dashboard:** Use Twillory’s verified Google Sheet to show weekly New Customers counts, matched year-over-year comparisons, and progress toward the **+15% YoY goal**. Include the comparison dates and last verified refresh.
- **Ad Account Performance Insights:** Use Meta or Hey Parker data to assess campaign and creative performance and recommend what to scale, iterate, or test next.

Use ROAS as the primary metric for sales campaigns. Check spend, purchase volume, CPA and delivery history before calling a result. Prioritize eligible tests that meet the acquisition target at meaningful spend and volume when recommending creatives for product scaling. Treat low-spend, low-purchase or early results as directional.

Meta-attributed revenue is basket revenue. Use order-level evidence for verified new-customer revenue, customer status and sales of the featured SKU. If only platform attribution is available, label the metrics accordingly. Keep campaign product, featured garment and purchased SKU distinct.

For each decision-driving ad, show its exact ad name, thumbnail and source creative link where available. Inspect the actual media for the hook, angle, format, benefit and product proof. Record where media access limits the assessment. Describe which creative element is worth carrying forward or changing, and frame any proposed driver as a testable hypothesis.

## 3. Turn the readout into a testing plan

- Recommend an action for each decision-driving ad or product. Typical actions are scale, iterate, keep collecting delivery, and test a net-new concept. Attach the source evidence and reasoning.
- Weight product testing slots by actual acquisition spend and strategic opportunity. Show SKU spend and share within a stated ACQ scope, and explain any strategic exceptions to the allocation.
- Pair performance evidence with the fresh Conversation Scan. Map each proposal to the customer objection, persona and awareness stage. For iterations, specify what to hold constant and what to change. For net-new concepts, state the hypothesis and what result would support it.

## 4. Deliver and verify

Title the readout **Ad Account Performance Insights** and follow the current approved Twillory report format when available. Include lane-level performance, daily spend versus revenue, acquisition spend by product, selected ads and the actions for the testing plan. Verify that date windows, attribution, coverage and source links are visible, and that each action traces to a real ad or product. Keep live account data and creative assets in their approved reporting destinations. This is a read-only analysis workflow.

Use the [Meta Ads Creative Report](https://github.com/Growthub-OS/gh-client-agent-skills-library/blob/main/.agents/skills/meta-ads-creative-report/SKILL.md) when building the interactive dashboard for exploring the underlying data.
