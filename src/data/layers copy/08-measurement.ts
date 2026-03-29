/**
 * LAYER 8: MEASUREMENT
 *
 * PURPOSE: Track the business value, technical quality, and organizational
 * adoption of AI initiatives. Without measurement, you can't justify
 * investment, identify problems, or improve over time. This layer turns
 * AI from a cost center into a measurable business asset.
 *
 * POSITION IN ROADMAP: Eighth layer.
 * Depends on → Layer 6 (Execution) — execution generates the data to measure
 *            → Layer 7 (Trust & Control) — trust metrics feed into measurement
 * Feeds into → Layer 9 (Rollout) — measurement data drives rollout decisions
 *
 * WHO OWNS THIS: Business leadership (ROI), Engineering (quality metrics),
 * Product (adoption), Finance (cost tracking).
 *
 * ADAPTATION NOTE: Start measuring from day one of any AI pilot. Don't wait
 * until you have a perfect measurement framework. Capture baseline metrics
 * BEFORE deploying AI, so you can demonstrate before/after improvement.
 * Executive buy-in depends on clear, honest measurement.
 */

import { RoadmapNode } from "../types";

export const measurementNodes: RoadmapNode[] = [
  {
    id: "roi-tracking",
    title: "ROI & Business Value Tracking",
    shortDescription: "Measure the financial return of AI automation investments",
    fullDescription:
      "Every AI initiative must prove its value. ROI tracking measures cost savings (reduced manual work), revenue gains (faster lead response), quality improvements (fewer errors), and total cost of ownership (API costs, maintenance). This data drives executive buy-in and budget allocation.\n\nMeasurement substeps:\n1. Capture baseline metrics BEFORE AI deployment — these are your 'before' numbers\n2. Define ROI formula per use case: (Value Generated - Total Cost) / Total Cost\n3. Identify value streams — time saved (→ cost savings), revenue increased, errors reduced, risk avoided\n4. Calculate total cost — API/model costs, development, maintenance, human review, infrastructure\n5. Build automated value tracking — don't rely on manual calculations\n6. Create executive dashboards — CFO-friendly view of AI investment returns\n7. Implement attribution modeling — isolate AI's contribution vs. other factors\n8. Track leading indicators (response time, throughput) and lagging indicators (revenue, cost)\n9. Compare ROI across use cases to inform future investment priorities\n10. Produce quarterly AI value reports for board/leadership review\n\nAdapt to your business: Different stakeholders care about different metrics. CEO wants revenue impact. CFO wants cost reduction and payback period. COO wants operational efficiency. Tailor your ROI narrative to the audience.",
    layer: "Measurement",
    track: "Business",
    type: "metric",
    dependencies: ["auto-follow-up-leads", "event-driven-execution"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Custom dashboards", "Metabase", "Looker"],
    risks: ["Attribution challenges for AI-driven revenue", "Over-counting savings"],
    metrics: ["Cost saved per month", "Revenue attributed to AI", "Payback period"],
    examples: ["A SaaS company tracked $180K annual savings from AI-powered support triage, achieving 4-month payback."],
    tags: ["roi", "measurement", "business-value"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "ai-quality-metrics",
    title: "AI Quality & Accuracy Metrics",
    shortDescription: "Track AI accuracy, error patterns, and quality trends across all workflows",
    fullDescription:
      "Measuring AI quality is essential for trust and continuous improvement. This includes tracking decision accuracy, false positives/negatives, hallucination rates, response quality scores, and regression detection. Quality data feeds into model improvement cycles and calibrates human oversight levels.\n\nMeasurement substeps:\n1. Define quality metrics per use case (accuracy, precision, recall, F1-score as applicable)\n2. Build automated quality evaluation — compare AI outputs against ground truth or human judgments\n3. Implement hallucination detection — automated checks for factual accuracy of generated content\n4. Track quality by category — some categories may be high-accuracy while others degrade\n5. Build quality trend dashboards — are things getting better or worse over time?\n6. Implement alerting for quality drops — threshold-based alerts when accuracy drops below acceptable levels\n7. Create quality review workflows — sample AI outputs for human quality assessment\n8. Feed quality data into model improvement — low-quality outputs become training/tuning data\n9. Benchmark against human performance — AI should match or exceed human quality for each use case\n10. Report quality metrics alongside ROI — value without quality is unsustainable\n\nAdapt to your business: Customer-facing AI needs higher quality thresholds than internal tools. Regulated industries may need to maintain quality records for audits. Companies with high-volume AI usage should invest in automated quality evaluation rather than manual review.",
    layer: "Measurement",
    track: "Technical",
    type: "metric",
    dependencies: ["llm-decision-layer", "output-guardrails"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["Datadog", "Grafana", "Langfuse", "Custom evaluation pipelines"],
    risks: ["Incomplete error categorization", "Alert fatigue from noisy metrics"],
    metrics: ["Accuracy by category", "Hallucination rate", "False positive rate", "Quality trend"],
    examples: ["A legal tech company reduced AI contract review errors from 8% to 1.2% over 6 months through continuous quality tracking and model tuning."],
    tags: ["quality", "accuracy", "monitoring", "evaluation"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "user-adoption-metrics",
    title: "User Adoption & Satisfaction Metrics",
    shortDescription: "Track how teams actually use and trust AI tools",
    fullDescription:
      "Technical deployment is meaningless without adoption. Track daily active users, feature usage frequency, override rates, time-to-task comparisons, and user satisfaction. Low adoption signals UX issues, trust gaps, or insufficient training.\n\nMeasurement substeps:\n1. Define adoption metrics — DAU, WAU, MAU, feature usage, session duration, return rate\n2. Build usage tracking (with user consent) — which features are used, how often, by whom?\n3. Track override/rejection rates — when users override AI, it signals quality or trust issues\n4. Implement time-to-task measurement — compare task completion time with AI vs. without\n5. Deploy periodic satisfaction surveys — NPS, usefulness rating, frustration points\n6. Build user segmentation — adoption rates by role, department, seniority, geography\n7. Identify power users vs. non-adopters — understand what drives the difference\n8. Create adoption cohort analysis — does adoption stick over time or drop after initial curiosity?\n9. Build an adoption funnel — awareness → trial → regular use → advocacy\n10. Feed adoption insights into UX improvements and training programs\n\nAdapt to your business: Enterprise rollouts often see initial enthusiasm followed by drop-off — plan for sustained adoption efforts. Companies with mandatory AI tool usage still need to measure satisfaction (forced adoption ≠ effective adoption). Remote teams may adopt AI tools faster for async communication assistance.",
    layer: "Measurement",
    track: "Business",
    type: "metric",
    dependencies: ["roi-tracking"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Mixpanel", "Amplitude", "Custom analytics"],
    risks: ["Vanity metrics masking real issues", "Privacy concerns with usage tracking"],
    metrics: ["DAU/MAU ratio", "Feature adoption rate", "NPS for AI tools"],
    examples: ["After deploying an AI writing assistant, only 30% of sales reps used it daily — prompting a UX redesign that increased adoption to 78%."],
    tags: ["adoption", "usage", "metrics"],
    importance: "high",
    complexity: "low",
  },
  {
    id: "cost-optimization-metrics",
    title: "AI Cost & Efficiency Metrics",
    shortDescription: "Track and optimize AI infrastructure and API costs across all use cases",
    fullDescription:
      "AI costs can grow rapidly — LLM API calls, compute, storage, and maintenance add up. Cost metrics ensure AI remains economically viable as usage scales, and identify optimization opportunities.\n\nMeasurement substeps:\n1. Implement per-request cost tracking — compute cost of each AI operation (API tokens, compute time)\n2. Aggregate costs by use case, department, and user to identify top cost drivers\n3. Track cost per outcome — cost per lead qualified, cost per ticket resolved, cost per invoice processed\n4. Build cost forecasting — project future costs based on usage trends and planned rollouts\n5. Identify optimization opportunities — caching, model switching, prompt optimization, batch processing\n6. Set budgets and alerts — per-team and per-use-case spending limits\n7. Compare AI cost vs. manual cost — ensure AI remains cheaper than the alternative\n8. Track cost efficiency trends — is cost-per-outcome improving over time?\n9. Evaluate build-vs-buy — when does self-hosting models become cheaper than API pricing?\n10. Report cost metrics alongside value metrics — executives need the full picture\n\nAdapt to your business: High-volume consumer businesses need aggressive cost optimization. Enterprise businesses with lower volume but higher value per interaction can tolerate higher per-call costs. Companies spending >$50K/month on AI APIs should evaluate self-hosting options.",
    layer: "Measurement",
    track: "Technical",
    type: "metric",
    dependencies: ["llm-decision-layer", "api-gateway-layer"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["LLM cost trackers", "Grafana", "Custom dashboards", "Cloud cost management tools"],
    risks: ["Cost optimization degrading quality", "Unexpected cost spikes from new use cases"],
    metrics: ["Cost per AI operation", "Cost per business outcome", "Monthly AI spend", "Cost-to-value ratio"],
    examples: ["A tech company reduced AI API costs by 45% by implementing response caching, prompt compression, and routing simple queries to smaller models."],
    tags: ["cost", "optimization", "efficiency", "budget"],
    importance: "high",
    complexity: "medium",
  },
];
