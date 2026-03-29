/**
 * LAYER 1: PROBLEM & OPPORTUNITY
 *
 * PURPOSE: Identify and articulate the business pain points, inefficiencies,
 * and missed opportunities that AI can address. This is the foundation —
 * every AI initiative must start with a clear, measurable problem.
 *
 * POSITION IN ROADMAP: First layer. No upstream dependencies.
 * Feeds into → Layer 2 (Use Case Design)
 *
 * WHO OWNS THIS: Business leaders (CEO, COO, department heads) identify
 * problems; data/AI teams validate feasibility.
 *
 * ADAPTATION NOTE: The problems listed here are common across medium-to-large
 * enterprises. Your organization should conduct its own discovery workshops
 * to identify the highest-impact problems specific to your industry, workflows,
 * and competitive landscape. Prioritize by: (1) revenue impact, (2) cost of
 * inaction, (3) feasibility with current data/systems.
 */

import { RoadmapNode } from "../types";

export const problemOpportunityNodes: RoadmapNode[] = [
  {
    id: "email-overload",
    title: "Email Overload",
    shortDescription: "Teams spend 2–4 hours daily on repetitive email threads",
    fullDescription:
      "Employees across sales, support, and operations spend a disproportionate amount of time reading, sorting, and responding to emails that follow predictable patterns. This leads to delayed responses, missed leads, and burnout. AI can classify, prioritize, and draft responses to reduce this burden by 60–80%.\n\nSubsteps to evaluate:\n1. Audit email volume by department — identify which teams handle the most repetitive inbound\n2. Categorize email types (inquiry, complaint, follow-up, internal) to find automation candidates\n3. Estimate time cost per category by sampling a 2-week period\n4. Define quality baseline (current response quality, tone, accuracy)\n5. Identify compliance constraints (regulated industries may require human sign-off)\n\nAdapt to your business: The specific email categories will vary by industry. A financial services firm may focus on client reporting emails, while a logistics company may target shipment status inquiries.",
    layer: "Problem & Opportunity",
    track: "Business",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["Gmail", "Outlook", "Front", "Superhuman"],
    risks: ["Employee resistance to AI-drafted emails", "Tone mismatch in customer communication"],
    metrics: ["Average response time", "Emails processed per hour", "Employee satisfaction score"],
    examples: ["A mid-size consultancy reduced email response time from 4 hours to 12 minutes using AI drafts with human approval."],
    tags: ["email", "productivity", "communication"],
    importance: "high",
    complexity: "low",
  },
  {
    id: "lead-response-delay",
    title: "Lead Response Delay",
    shortDescription: "Inbound leads wait 6–24 hours for first response",
    fullDescription:
      "Studies show that responding to a lead within 5 minutes increases conversion by 10x. Most companies take 6–24 hours. This delay loses revenue and allows competitors to win. AI can detect inbound leads, qualify them, and send personalized follow-ups within seconds.\n\nSubsteps to evaluate:\n1. Measure current average time-to-first-response across all lead channels (web forms, email, chat, phone)\n2. Calculate revenue lost per hour of delay using historical conversion data\n3. Segment leads by source and value to prioritize high-impact channels\n4. Audit current lead routing — where are the bottlenecks (assignment, qualification, response crafting)?\n5. Define acceptable automation level per lead tier (high-value leads may still need human first touch)\n\nAdapt to your business: B2B companies with long sales cycles may focus on lead qualification and meeting booking, while B2C companies may focus on instant product recommendations and pricing.",
    layer: "Problem & Opportunity",
    track: "Business",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated", "Fully Automated"],
    tools: ["HubSpot", "Salesforce", "Pipedrive"],
    risks: ["Over-automation may feel impersonal", "Lead scoring model may misclassify"],
    metrics: ["Time to first response", "Lead conversion rate", "Pipeline velocity"],
    examples: ["A SaaS startup automated first-touch lead response and increased demo bookings by 34%."],
    tags: ["sales", "leads", "automation", "revenue"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "support-triage",
    title: "Support Ticket Triage",
    shortDescription: "Support tickets sit unrouted for hours, delaying resolution",
    fullDescription:
      "Customer support teams receive hundreds of tickets daily. Without intelligent triage, tickets are misrouted, duplicated, or deprioritized. AI can classify tickets by intent, urgency, and topic, routing them to the right team within seconds and suggesting initial responses.\n\nSubsteps to evaluate:\n1. Analyze ticket volume patterns — peak hours, seasonal spikes, common categories\n2. Map current routing rules and measure misrouting rate\n3. Identify ticket types that are repetitive and could be auto-resolved (password resets, status checks)\n4. Measure SLA compliance by category to find the biggest gaps\n5. Assess customer satisfaction correlation with response time per category\n6. Define escalation criteria — when must a human get involved immediately?\n\nAdapt to your business: Regulated industries (healthcare, finance) require stricter escalation rules. E-commerce may prioritize refund and shipping queries. SaaS companies may focus on technical support tiers.",
    layer: "Problem & Opportunity",
    track: "Business",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated", "Fully Automated"],
    tools: ["Zendesk", "Intercom", "Freshdesk"],
    risks: ["Misclassification of urgent issues", "Customer frustration with bot responses"],
    metrics: ["First response time", "Resolution time", "CSAT score", "Ticket reroute rate"],
    examples: ["An e-commerce company reduced ticket resolution time by 45% after deploying AI-powered triage."],
    tags: ["support", "customer-experience", "triage"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "invoice-processing",
    title: "Invoice Processing Bottleneck",
    shortDescription: "Manual invoice entry causes delays and errors in AP/AR",
    fullDescription:
      "Accounts payable and receivable teams manually enter invoice data, leading to delays, human error, and cash flow unpredictability. AI-powered OCR and extraction can automatically capture, validate, and route invoices, reducing processing time from days to minutes.\n\nSubsteps to evaluate:\n1. Count monthly invoice volume and break down by format (PDF, scan, email, EDI)\n2. Measure processing cost per invoice (labor time × hourly rate + error correction cost)\n3. Calculate error rate and its downstream impact (duplicate payments, missed discounts, audit findings)\n4. Map the full AP/AR workflow from receipt to payment/posting\n5. Identify integration points with ERP (SAP, Oracle, NetSuite) and banking systems\n6. Assess regulatory requirements for invoice processing and approval chains\n\nAdapt to your business: Manufacturing and retail companies with high invoice volumes see the fastest ROI. Professional services firms may focus on time-and-materials invoice validation. Companies with international suppliers should consider multi-currency and multi-language support.",
    layer: "Problem & Opportunity",
    track: "Business",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated", "Fully Automated", "Autonomous"],
    tools: ["SAP", "QuickBooks", "Xero", "Rossum"],
    risks: ["OCR accuracy on handwritten invoices", "Regulatory compliance for auto-approval"],
    metrics: ["Invoice processing time", "Error rate", "Cost per invoice"],
    examples: ["A logistics firm automated 85% of invoice processing, reducing errors by 92% and cutting AP costs by 60%."],
    tags: ["finance", "invoicing", "operations"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "knowledge-silos",
    title: "Knowledge Silos & Tribal Knowledge",
    shortDescription: "Critical business knowledge lives in people's heads, not systems",
    fullDescription:
      "In most organizations, essential operational knowledge — how to handle edge cases, historical decisions, client preferences, process exceptions — exists only in the minds of senior employees. When these people leave, go on vacation, or are unavailable, operations slow or break. AI can capture, structure, and make this knowledge accessible to the entire organization.\n\nSubsteps to evaluate:\n1. Identify departments with highest single-point-of-failure risk (key person dependency)\n2. Audit existing knowledge bases — are they maintained, searchable, and actually used?\n3. Interview senior staff to map undocumented processes and decision trees\n4. Estimate the cost of knowledge loss (onboarding time for new hires, errors from undocumented processes)\n5. Assess data sources that could feed a knowledge AI (wikis, Slack/Teams history, email threads, meeting notes)\n\nAdapt to your business: Professional services firms often have deep tribal knowledge about client relationships. Manufacturing companies may have undocumented machine maintenance procedures. Tech companies may have complex deployment and incident response knowledge.",
    layer: "Problem & Opportunity",
    track: "Business",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["Confluence", "Notion", "SharePoint", "Guru"],
    risks: ["Resistance from knowledge holders who see AI as a threat", "Inaccurate knowledge capture"],
    metrics: ["Onboarding time for new hires", "Time to find answers", "Knowledge base usage rate"],
    examples: ["A consulting firm lost 3 senior partners in one quarter — projects stalled for weeks because critical client knowledge wasn't documented."],
    tags: ["knowledge-management", "onboarding", "institutional-knowledge"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "report-generation-burden",
    title: "Manual Report Generation",
    shortDescription: "Analysts spend days compiling reports that could be auto-generated",
    fullDescription:
      "Business analysts, finance teams, and operations managers spend significant time pulling data from multiple systems, formatting it into reports, and adding commentary. Much of this is repetitive and follows templates. AI can auto-generate first drafts of reports, pulling data from connected systems and providing initial analysis.\n\nSubsteps to evaluate:\n1. Inventory all recurring reports (weekly, monthly, quarterly) across departments\n2. Map data sources for each report — how many systems must be queried?\n3. Measure time spent per report cycle (data gathering, formatting, analysis, review)\n4. Identify which reports follow predictable templates vs. require creative analysis\n5. Assess data quality and accessibility — can AI reliably pull the needed data?\n6. Define human review requirements — which reports need executive sign-off?\n\nAdapt to your business: Financial services firms may focus on regulatory reporting (SOX, Basel). Retail companies may target sales performance and inventory reports. Tech companies may automate sprint retrospectives and KPI dashboards.",
    layer: "Problem & Opportunity",
    track: "Business",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["Excel", "Google Sheets", "Looker", "Power BI", "Tableau"],
    risks: ["AI-generated insights may miss context that humans catch", "Data quality issues propagating into reports"],
    metrics: ["Time to produce report", "Report accuracy", "Analyst utilization rate"],
    examples: ["A retail chain automated weekly store performance reports, saving 120 analyst-hours per month and delivering reports 3 days earlier."],
    tags: ["reporting", "analytics", "productivity", "finance"],
    importance: "medium",
    complexity: "medium",
  },
  {
    id: "compliance-monitoring-gaps",
    title: "Compliance Monitoring Gaps",
    shortDescription: "Manual compliance checks miss violations and create audit risk",
    fullDescription:
      "Regulatory compliance requires continuous monitoring of processes, communications, and transactions. Manual spot-checks cover only a fraction of activity, creating blind spots. AI can monitor 100% of relevant activity in real-time, flagging potential violations before they become audit findings or regulatory penalties.\n\nSubsteps to evaluate:\n1. Map all regulatory obligations relevant to your industry (GDPR, SOX, HIPAA, PCI-DSS, industry-specific)\n2. Audit current compliance monitoring coverage — what percentage of activity is actually checked?\n3. Review recent audit findings to identify recurring gaps\n4. Assess data availability — can AI access the systems where compliance-relevant activity occurs?\n5. Define alert thresholds and escalation paths for potential violations\n6. Estimate cost of compliance failures (fines, reputation, remediation)\n\nAdapt to your business: Financial institutions face the strictest requirements (AML, KYC, transaction monitoring). Healthcare organizations must monitor HIPAA compliance. Technology companies may focus on data privacy (GDPR, CCPA) and SOC 2 controls.",
    layer: "Problem & Opportunity",
    track: "Governance",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["OneTrust", "LogicGate", "Workiva", "Custom monitoring"],
    risks: ["False positive alerts creating alert fatigue", "Missing novel violation patterns"],
    metrics: ["Compliance coverage percentage", "Violations detected proactively", "Audit finding reduction"],
    examples: ["A bank implemented AI transaction monitoring and detected 40% more suspicious patterns than manual review, while reducing false positives by 60%."],
    tags: ["compliance", "regulation", "risk", "audit"],
    importance: "critical",
    complexity: "high",
  },
  {
    id: "data-quality-inconsistency",
    title: "Data Quality & Inconsistency",
    shortDescription: "Poor data quality undermines decision-making and AI readiness",
    fullDescription:
      "Before any AI can work effectively, the underlying data must be clean, consistent, and accessible. Most enterprises struggle with duplicate records, inconsistent formats, stale data, and siloed databases. Poor data quality is the #1 reason AI projects fail in production.\n\nSubsteps to evaluate:\n1. Conduct a data quality audit across key systems (CRM, ERP, data warehouse)\n2. Measure duplicate rates, missing field rates, and format inconsistencies\n3. Map data flows between systems — where do mismatches occur?\n4. Identify master data management (MDM) gaps\n5. Assess data governance policies — who owns data quality? How are issues reported and resolved?\n6. Estimate the cost of poor data quality (bad decisions, failed integrations, manual cleanup)\n\nAdapt to your business: Companies with many legacy systems typically have the worst data quality challenges. M&A-heavy organizations often have duplicate and conflicting records. Companies planning AI initiatives should treat data quality as a prerequisite, not an afterthought.",
    layer: "Problem & Opportunity",
    track: "Technical",
    type: "problem",
    dependencies: [],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Great Expectations", "dbt", "Informatica", "Talend", "Monte Carlo"],
    risks: ["Underestimating cleanup effort", "Data quality degrading over time without ongoing governance"],
    metrics: ["Data completeness score", "Duplicate rate", "Data freshness", "Schema consistency"],
    examples: ["A healthcare company discovered 23% duplicate patient records, causing billing errors and treatment gaps — a 6-month AI-assisted cleanup saved $2.1M annually."],
    tags: ["data-quality", "data-governance", "master-data", "prerequisites"],
    importance: "critical",
    complexity: "high",
  },
];
