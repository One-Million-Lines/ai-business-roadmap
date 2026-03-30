/**
 * LAYER 3: DECISION MODEL & OPERATING MODEL
 *
 * PURPOSE: Before architecture, define how decisions are made. Who has
 * authority (human, AI, or hybrid), what the AI is allowed to do, what
 * requires confirmation, escalation paths, accountability chains, process
 * ownership, and governance structures.
 *
 * AUTONOMY LEVELS:
 *   AI suggests → AI drafts → AI acts with approval → AI acts autonomously
 *   in bounded scenarios
 *
 * For bigger companies, this matters as much as the technical design.
 *
 * POSITION IN ROADMAP: Third layer.
 * Depends on → Layer 2 (Use Case Discovery & Prioritization)
 * Feeds into → Layer 4 (Data, Knowledge, Memory & Context)
 *            → Layer 5 (Solution Architecture)
 *            → Layer 8 (Trust, Risk, Governance & Control)
 *
 * ADAPTATION NOTE: The decision model should map to existing organizational
 * authority structures. Progressive autonomy criteria should be approved by
 * governance committees before launch.
 */

import { RoadmapNode } from "../types";

export const decisionModelNodes: RoadmapNode[] = [
  {
    id: "decision-authority-matrix",
    title: "Decision Authority Matrix",
    shortDescription: "Define which decisions AI can make autonomously, which require human approval, and which are human-only — mapped to existing organizational authority structures",
    fullDescription:
      "The Decision Authority Matrix is the foundational governance artifact for enterprise AI. It classifies every AI-supported decision by risk level, reversibility, financial impact, and regulatory sensitivity, then assigns the appropriate authority model: AI suggests (human decides), AI drafts (human reviews and sends), AI acts with approval (human confirms), or AI acts autonomously (within bounded parameters).\n\nFor the C-suite, this matrix is the answer to the question: 'What is the AI allowed to do?' It provides clarity for engineering teams building the system, legal teams assessing liability, compliance teams validating controls, and business teams understanding what changes.\n\nImplementation Substeps:\n1. Inventory all decisions the AI will support or make across every use case — be exhaustive, classify by domain (sales, support, finance, HR, operations)\n2. Classify each decision by risk dimensions: financial impact (low/medium/high/critical), reversibility (easily reversible, reversible with effort, partially irreversible, fully irreversible), regulatory sensitivity (no regulation, light regulation, heavy regulation, prohibited), customer impact (internal only, indirect customer impact, direct customer impact, safety-related)\n3. Map each decision to an autonomy level based on risk classification: Low risk + easily reversible → AI acts autonomously; Medium risk → AI acts with approval; High risk → AI drafts for human review; Critical/irreversible → human-only with AI research support\n4. Align the authority matrix with existing organizational signing authorities, delegation matrices, and approval hierarchies — AI autonomy levels should not exceed human delegation limits\n5. Define exception handling for each autonomy level: what happens when the AI encounters a situation outside its bounded parameters? Every level needs a clear escalation path\n6. Get formal sign-off from Legal, Compliance, and business unit leaders on the authority matrix before engineering begins implementation\n7. Build the matrix into the technical architecture as enforceable constraints, not just documentation\n8. Plan for quarterly reviews and adjustments as AI accuracy improves and trust builds\n\nLeadership Decision Points:\n• What is the organization's AI risk appetite? (Conservative organizations start with more human oversight)\n• Who is accountable when an AI-authorized decision causes harm? (The process owner, the AI program owner, or the approving executive?)\n• How will the authority matrix be enforced technically? (Configuration, not just policy)\n\nAdapt to your business: Financial services firms will have more decisions in the 'human-only' and 'AI suggests' categories due to regulatory requirements. Companies in less regulated industries can be more aggressive with autonomous AI actions. Multi-national companies need region-specific authority matrices reflecting local regulations.",
    layer: "Decision Model & Operating Model",
    track: "Governance",
    type: "decision",
    dependencies: ["auto-follow-up-leads", "intelligent-ticket-routing", "ai-drafting-replies"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated", "Fully Automated"],
    tools: ["Custom governance frameworks", "Process mining tools", "GRC platforms", "ServiceNow GRC"],
    risks: [
      "Authority matrix too conservative — AI investment delivers no value because everything requires human approval",
      "Authority matrix too aggressive — AI makes high-risk decisions without adequate oversight",
      "Matrix exists on paper but is not enforced technically in the AI platform",
      "Failure to update the matrix as AI accuracy improves, leaving permanent over-restriction",
    ],
    metrics: ["Percentage of decisions by autonomy level", "Override rate per decision type", "Time from AI recommendation to human approval", "Escalation frequency and resolution time", "Progressive autonomy advancement rate"],
    examples: [
      "A large insurance company created a 4-tier decision authority matrix: AI auto-processes claims under $500 (Tier 1), AI recommends with human approval for $500–$5,000 (Tier 2), AI researches but human decides for $5,000–$50,000 (Tier 3), and human-only with AI support for $50,000+ (Tier 4).",
      "An enterprise IT services company mapped AI support ticket resolution authority: auto-resolve password resets and FAQ questions (autonomous), draft responses for technical issues (human review), escalate security incidents (human-only with AI triage information).",
    ],
    tags: ["governance", "decision-making", "authority", "autonomy", "accountability", "risk"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "progressive-autonomy-framework",
    title: "Progressive Autonomy Framework",
    shortDescription: "Define clear criteria and governance process for increasing AI autonomy over time as accuracy and trust are demonstrated",
    fullDescription:
      "Progressive autonomy is the governance mechanism that allows AI to earn more independence over time. Instead of setting static autonomy levels, define measurable criteria that must be met before AI can advance from 'suggests' to 'drafts' to 'acts with approval' to 'acts autonomously.' This prevents both permanent over-restriction (wasting AI investment) and premature over-trust (creating unmanaged risk).\n\nFor leadership, this framework answers: 'How do we safely give AI more freedom as it proves itself?' It transforms autonomy decisions from subjective judgment calls into data-driven governance.\n\nImplementation Substeps:\n1. Define advancement criteria per decision type: accuracy threshold (e.g., > 97% correct over 1,000+ decisions), override rate below target (e.g., < 3% human overrides), no critical errors in a defined period (e.g., 90 days), consistent performance across edge cases and segments\n2. Define rollback triggers: what performance degradation or incident types cause an automatic reduction in autonomy level? (e.g., accuracy drops below 95%, critical error occurs, regulatory change affects the decision domain)\n3. Establish the governance committee and review cadence: who reviews autonomy advancement requests? (Typically: business owner + AI lead + compliance + legal, quarterly review cycle)\n4. Build monitoring infrastructure to continuously track advancement criteria in production\n5. Implement circuit breakers: automatic autonomy reduction when anomalous patterns are detected, before human review\n6. Document every autonomy change with justification, approvals, and effective date for audit trail\n7. Plan for autonomy regression: when models are updated or use cases change, autonomy may need to reset to a lower level until re-validated\n\nLeadership Decision Points:\n• What accuracy threshold is 'good enough' to advance autonomy? (This varies by decision impact — higher stakes require higher thresholds)\n• Who has authority to approve autonomy advancement? (Should require multi-stakeholder sign-off)\n• How quickly can autonomy be rolled back in an emergency? (Target: minutes, not days)\n\nAdapt to your business: Regulated industries need more conservative advancement criteria and may require regulatory notification before advancing autonomy. High-volume, low-stakes decisions can advance faster. Customer-facing decisions should advance more cautiously than internal decisions.",
    layer: "Decision Model & Operating Model",
    track: "Governance",
    type: "pattern",
    dependencies: ["decision-authority-matrix"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated", "Autonomous"],
    tools: ["Model monitoring platforms", "Governance dashboards", "Custom review workflows"],
    risks: [
      "Advancement criteria too easy — AI gains autonomy before it's truly ready",
      "Advancement criteria too hard — AI never progresses beyond 'suggests,' wasting investment",
      "No automatic rollback mechanism — degraded AI continues to act autonomously",
      "Governance reviews become rubber stamps instead of genuine assessments",
    ],
    metrics: ["Time to autonomy advancement per decision type", "Rollback frequency and cause", "Performance delta before and after advancement", "Governance review completion rate"],
    examples: [
      "A SaaS company defined progressive autonomy for AI ticket classification: after 95% accuracy over 2,000 tickets with < 2% override rate for 60 days, auto-classification was enabled for Tier 1 tickets — reducing human triage workload by 40%.",
    ],
    tags: ["progressive-autonomy", "governance", "trust", "escalation", "maturity"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "escalation-paths",
    title: "Escalation & Exception Handling Paths",
    shortDescription: "Define clear escalation paths for when AI encounters situations outside its authority or confidence boundaries",
    fullDescription:
      "Every AI decision domain needs defined escalation paths: what happens when the AI is uncertain, when it encounters an edge case, when confidence is low, or when the situation exceeds its authority? Without clear escalation paths, AI either fails silently (acting despite uncertainty) or fails loudly (blocking all progress until a human intervenes).\n\nFor operations leaders, escalation paths are what make AI reliable in production. They ensure that the system degrades gracefully rather than catastrophically, and that the right human is notified at the right time with the right context.\n\nImplementation Substeps:\n1. Map every AI decision point to its escalation triggers: low confidence score, out-of-scope input, conflicting data sources, high-risk indicators, novel situations not seen in training, system errors\n2. Define escalation tiers matched to urgency and expertise required: Tier 1 (operational staff within 4 hours), Tier 2 (specialist/manager within 1 hour), Tier 3 (executive/emergency within 15 minutes)\n3. Build escalation routing that considers availability, expertise, and workload — not just hierarchy\n4. Design the escalation handoff: AI provides full context including what it considered, why it'suncertain, and what it recommends — the human should never have to start from scratch\n5. Implement SLAs for escalation response with automatic re-escalation if not acknowledged\n6. Track and analyze escalation patterns: frequent escalations indicate either AI limitations to fix or authority boundaries to adjust\n7. Build feedback loop: every escalation resolution informs AI improvement and authority matrix refinement\n\nAdapt to your business: Customer-facing escalations need faster resolution times. Internal escalations can be more flexible. Global organizations need timezone-aware escalation routing.",
    layer: "Decision Model & Operating Model",
    track: "Business",
    type: "pattern",
    dependencies: ["decision-authority-matrix"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["PagerDuty", "OpsGenie", "ServiceNow", "Custom escalation workflows"],
    risks: [
      "Escalation paths that are too complex — humans don't know who to contact",
      "Over-escalation — too many false alarms causing escalation fatigue",
      "Under-escalation — serious issues not reaching the right people in time",
      "No SLA enforcement — escalations sit unresolved",
    ],
    metrics: ["Escalation frequency by type and trigger", "Escalation resolution time", "Re-escalation rate", "Escalation-to-improvement conversion rate"],
    examples: [
      "An enterprise support AI escalates to a human agent when sentiment analysis detects customer frustration (confidence < 70%), when the customer mentions legal action or regulatory complaint, or when the issue involves a VIP account — each with different escalation tiers and SLAs.",
    ],
    tags: ["escalation", "exception-handling", "operations", "routing", "sla"],
    importance: "high",
    complexity: "low",
  },
  {
    id: "process-ownership-model",
    title: "AI Process Ownership Model",
    shortDescription: "Assign clear owners for every AI-supported process — covering accountability, maintenance, performance, and continuous improvement",
    fullDescription:
      "Every AI-supported business process needs an owner who is accountable for its performance, quality, compliance, and continuous improvement. Without clear ownership, AI processes drift — models degrade, edge cases accumulate, and nobody takes responsibility for fixing issues. Process ownership is what transforms AI from a project into an operational capability.\n\nFor the COO and business unit leaders, this model answers: 'Who is responsible when this AI process breaks or underperforms?' It also creates the accountability structure for progressive autonomy decisions — the process owner is the one who recommends and justifies changes to AI authority levels.\n\nImplementation Substeps:\n1. Define the process owner role: accountable for process outcomes (business KPIs), responsible for monitoring AI quality and escalation review, authority to request changes to AI behavior and autonomy levels, responsible for quarterly process performance reviews\n2. Assign process owners for every AI-supported workflow — match to existing business process owners where possible\n3. Define the support model: who the process owner calls when AI misbehaves (AI engineering), when business rules change (product/operations), when compliance questions arise (legal/compliance)\n4. Establish the reporting cadence: what does the process owner report, to whom, and how often\n5. Create process owner training: ensure owners understand AI capabilities, limitations, and how to interpret AI performance metrics\n6. Build process owner community of practice: regular meetings to share learnings, common issues, and best practices across AI process owners\n\nAdapt to your business: In smaller organizations, one person may own multiple AI processes. In larger enterprises, process ownership may align with existing RACI matrices and operational excellence structures.",
    layer: "Decision Model & Operating Model",
    track: "Business",
    type: "decision",
    dependencies: ["decision-authority-matrix"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["RACI templates", "Process management platforms", "OKR/KPI dashboards"],
    risks: [
      "No clear owner — AI processes become nobody's responsibility",
      "Owner without authority — process owner can identify issues but can't get them fixed",
      "Owner without visibility — process owner doesn't have access to AI performance data",
      "Ownership not updated when organizational structure changes",
    ],
    metrics: ["Process owner assignment coverage (% of AI processes with assigned owner)", "Process review completion rate", "Issue resolution time by process", "Process performance trend by owner"],
    examples: [
      "A financial services company assigned AI process owners for each of 12 AI-supported workflows, aligned with existing operational risk owners. Each owner reviews AI performance monthly and presents quarterly to the AI governance committee.",
    ],
    tags: ["ownership", "accountability", "governance", "operations", "raci"],
    importance: "high",
    complexity: "low",
  },
];
