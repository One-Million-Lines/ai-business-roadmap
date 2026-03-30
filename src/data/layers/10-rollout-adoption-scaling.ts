/**
 * LAYER 10: ROLLOUT, ADOPTION & SCALING
 *
 * PURPOSE: Scale AI by standardizing patterns, not just deploying models.
 * Covers phased rollout by function or region, enablement and onboarding,
 * internal champions, support model, governance cadence, platform ownership,
 * and reuse of components across use cases.
 *
 * At enterprise level, scaling AI is less about deploying models and more
 * about standardizing patterns: shared guardrails, common architecture
 * components, reusable connectors, evaluation standards, ownership model.
 *
 * POSITION IN ROADMAP: Tenth and final layer.
 * Depends on → Layer 8 (Trust, Risk, Governance & Control)
 *            → Layer 9 (Measurement & Learning Loop)
 * Feeds back into → Layers 1–9 — rollout feedback improves all layers
 */

import { RoadmapNode } from "../types";

export const rolloutNodes: RoadmapNode[] = [
  {
    id: "rollout-pilot-team",
    title: "Pilot Program Design & Execution",
    shortDescription: "Start with a small team to validate AI workflows before scaling",
    fullDescription:
      "Successful AI rollout starts with a structured pilot. Select a small team (5–15 people), deploy the AI workflow, collect feedback intensively for 2–4 weeks, iterate on the solution, and then expand to broader teams. This de-risks the rollout and builds internal champions.\n\nRollout substeps:\n1. Define pilot objectives — what questions must the pilot answer? (accuracy, adoption, value, usability)\n2. Select the pilot team carefully — choose a mix of enthusiasts and skeptics, diverse roles and skill levels\n3. Ensure the pilot team is representative — results must be generalizable to the broader organization\n4. Set up intensive feedback collection — daily check-ins during week 1, then weekly\n5. Define success criteria before the pilot starts — what constitutes pass/fail?\n6. Build a rapid iteration capability — fix issues within 24–48 hours during pilot\n7. Track pilot metrics religiously — adoption rate, time saved, error rate, satisfaction, override rate\n8. Document everything — problems discovered, solutions implemented, workarounds used\n9. Identify pilot champions — enthusiastic users who can advocate for broader rollout\n10. Produce a pilot report — results vs. objectives, go/no-go recommendation, conditions for scaling\n\nAdapt to your business: Large enterprises may need multiple sequential pilots across different departments. Companies with unionized workforces need to involve union representatives early. Global companies should consider cultural differences across regions.",
    layer: "Rollout, Adoption & Scaling",
    track: "Business",
    type: "decision",
    dependencies: ["roi-tracking", "human-in-the-loop", "ai-quality-metrics"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Feature flags", "LaunchDarkly", "Internal comms"],
    risks: ["Pilot team not representative of broader org", "Insufficient feedback collection"],
    metrics: ["Pilot satisfaction score", "Issues found during pilot", "Time to production rollout"],
    examples: ["A consulting firm piloted AI meeting notes with 8 partners for 3 weeks before rolling out to 200+ consultants."],
    tags: ["rollout", "pilot", "change-management"],
    importance: "high",
    complexity: "low",
  },
  {
    id: "change-management-plan",
    title: "Change Management & Communications Plan",
    shortDescription: "Structured plan to help teams adopt AI into daily workflows",
    fullDescription:
      "AI adoption is as much a people challenge as a technical one. A change management plan includes stakeholder communication, training programs, feedback channels, success stories, and gradual rollout phases. Without it, even the best AI tools face resistance and low adoption.\n\nRollout substeps:\n1. Conduct stakeholder analysis — who is impacted, who are champions, who are resistors?\n2. Address the 'AI will take my job' fear head-on — frame AI as augmentation, not replacement\n3. Create a multi-channel communication plan — townhalls, emails, Slack channels, Q&A sessions\n4. Develop role-specific messaging — sales team sees different benefits than finance team\n5. Design tiered training programs — basic (awareness), intermediate (usage), advanced (power user)\n6. Create hands-on workshops — people learn by doing, not by watching presentations\n7. Set up AI champion networks — train power users to support colleagues in their teams\n8. Establish feedback channels — anonymous surveys, office hours, Slack channel for questions\n9. Celebrate and share wins — publicize time saved, deals won, errors prevented\n10. Plan for resistance — some people will struggle; have 1:1 coaching available\n11. Measure change effectiveness — training completion, sentiment surveys, adoption curves\n\nAdapt to your business: Enterprise environments need formal change management processes (ADKAR, Kotter). Startups may be more agile but still need buy-in from key leaders. Companies with remote workforces need to emphasize async communication and self-service training.",
    layer: "Rollout, Adoption & Scaling",
    track: "Governance",
    type: "decision",
    dependencies: ["rollout-pilot-team", "user-adoption-metrics"],
    maturityLevels: ["Manual"],
    tools: ["Notion", "Confluence", "Internal training platforms", "Loom"],
    risks: ["Underestimating cultural resistance", "One-size-fits-all training"],
    metrics: ["Training completion rate", "Support ticket volume post-launch", "Adoption velocity"],
    examples: ["A financial services firm created role-specific AI training modules, achieving 85% tool adoption within 6 weeks of launch."],
    tags: ["change-management", "adoption", "training"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "scaling-strategy",
    title: "Scaling Strategy & Roadmap",
    shortDescription: "Plan for expanding AI from pilot to organization-wide deployment",
    fullDescription:
      "After pilot validation, plan the scaling path: which teams next, what infrastructure upgrades are needed, how to handle increased API costs, how to maintain quality at scale. A scaling strategy prevents the common failure of AI that works for 10 users but breaks at 1,000.\n\nRollout substeps:\n1. Prioritize rollout wave sequence — which departments/teams next, based on impact and readiness\n2. Estimate infrastructure scaling needs — API quotas, compute, storage, support capacity\n3. Build cost projections at scale — will per-unit costs decrease or increase with volume?\n4. Plan the quality maintenance strategy — how to keep accuracy high as user diversity increases\n5. Design the support model — who handles issues at scale? Dedicated team, champions, or self-service?\n6. Build configuration management — different teams may need different AI settings/prompts\n7. Plan for geographic/regulatory scaling — new regions may have different compliance requirements\n8. Design the multi-tenant architecture if needed — isolated or shared AI resources?\n9. Create a feature rollout cadence — how often are new AI capabilities released?\n10. Build the continuous improvement loop — user feedback → analysis → improvement → deployment\n11. Plan for vendor scaling — will current LLM providers support your projected volume and latency?\n\nAdapt to your business: Global companies need region-by-region rollout plans accounting for languages, regulations, and cultural norms. Companies with diverse business units may need to prioritize by unit-level ROI. Fast-growing companies should build for 10x scale from the start.",
    layer: "Rollout, Adoption & Scaling",
    track: "Business",
    type: "decision",
    dependencies: ["rollout-pilot-team", "change-management-plan"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Roadmap tools", "Capacity planning spreadsheets"],
    risks: ["Premature scaling before product-market fit", "Infrastructure not ready for scale"],
    metrics: ["Rollout timeline adherence", "Cost per user at scale", "Quality metrics at scale"],
    examples: ["A retail company scaled AI customer service from 1 market to 12 markets over 6 months, with quality metrics improving at each stage."],
    tags: ["scaling", "growth", "strategy"],
    importance: "high",
    complexity: "high",
  },
  {
    id: "continuous-improvement-process",
    title: "Continuous Improvement & Feedback Loop",
    shortDescription: "Systematic process for ongoing AI improvement based on real-world performance",
    fullDescription:
      "AI is not a deploy-and-forget technology. Continuous improvement ensures AI quality, relevance, and value grow over time. This requires systematic collection of feedback, identification of improvement opportunities, and disciplined iteration cycles.\n\nRollout substeps:\n1. Establish regular review cadence — weekly for AI quality, monthly for business value, quarterly for strategy\n2. Build feedback collection systems — in-product thumbs up/down, user surveys, support tickets\n3. Create an AI improvement backlog — prioritized list of accuracy issues, feature requests, and optimizations\n4. Design the improvement sprint cycle — regular cadence of testing, tuning, and deploying improvements\n5. Implement A/B testing capability — test improvements against current version before full rollout\n6. Build regression testing — ensure improvements don't break existing functionality\n7. Track improvement velocity — how quickly are identified issues being resolved?\n8. Conduct periodic model evaluation — re-benchmark models against latest alternatives\n9. Review and update knowledge bases — RAG content must stay current as the business evolves\n10. Plan model upgrades — when new foundational models are released, evaluate and migrate\n11. Share improvement results — communicate progress to stakeholders to maintain buy-in\n\nAdapt to your business: High-volume AI use cases may need weekly improvement cycles. Lower-volume use cases can iterate monthly. Companies with in-house ML teams can do more frequent model tuning. Companies relying on external APIs should focus on prompt optimization and RAG quality.",
    layer: "Rollout, Adoption & Scaling",
    track: "AI Capability",
    type: "decision",
    dependencies: ["scaling-strategy", "ai-quality-metrics", "user-adoption-metrics"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["JIRA", "Linear", "Notion", "Langfuse", "Custom evaluation tools"],
    risks: ["Improvement fatigue — team stops iterating after initial launch", "Losing sight of business value during technical optimization"],
    metrics: ["Improvement cycle time", "Issue resolution rate", "Quality trend over time", "User satisfaction trend"],
    examples: ["An insurance company runs bi-weekly AI improvement sprints, resulting in a steady 2–3% accuracy improvement per month across claim processing workflows."],
    tags: ["continuous-improvement", "iteration", "feedback", "mlops"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "ai-center-of-excellence",
    title: "AI Center of Excellence",
    shortDescription: "Centralized team to guide, govern, and accelerate AI initiatives across the organization",
    fullDescription:
      "As AI moves beyond a single use case, organizations benefit from a Center of Excellence (CoE) — a cross-functional team that establishes standards, shares best practices, provides technical support, and coordinates AI initiatives across departments. The CoE prevents fragmentation and accelerates adoption.\n\nRollout substeps:\n1. Define the CoE's mandate — advisory, implementation, governance, or all three?\n2. Staff the CoE — AI engineers, data scientists, product managers, change management specialists\n3. Establish AI development standards — prompt engineering guidelines, testing requirements, security baselines\n4. Create reusable components — shared libraries, prompt templates, integration connectors\n5. Build an AI project intake process — how do new AI ideas get evaluated, prioritized, and resourced?\n6. Run internal AI education programs — lunch-and-learns, workshops, hackathons\n7. Maintain the AI roadmap — coordinate timing, dependencies, and resources across AI initiatives\n8. Manage vendor relationships — centralized LLM provider contracts, tool evaluations, license management\n9. Track organizational AI maturity — assess and report on the company's progress toward AI-native operations\n10. Connect with external AI community — stay current on developments, attend conferences, build partnerships\n\nAdapt to your business: Large enterprises (1,000+ employees) typically need a formal CoE. Mid-size companies may start with a virtual CoE (cross-functional committee). The CoE should sit close to business leadership to maintain strategic alignment and not become an isolated tech team.",
    layer: "Rollout, Adoption & Scaling",
    track: "Governance",
    type: "decision",
    dependencies: ["scaling-strategy", "change-management-plan", "model-governance"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Confluence", "Notion", "Internal platforms", "Roadmapping tools"],
    risks: ["CoE becoming a bottleneck rather than an accelerator", "Ivory tower syndrome — disconnect from day-to-day operations"],
    metrics: ["Number of AI use cases in production", "Time from idea to deployment", "Cross-team AI reuse rate"],
    examples: ["A 5,000-person financial services company established an AI CoE of 12 people that launched 23 AI use cases in its first year, with 85% meeting ROI targets."],
    tags: ["center-of-excellence", "organization", "leadership", "governance"],
    importance: "medium",
    complexity: "medium",
  },
];
