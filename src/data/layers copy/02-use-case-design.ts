/**
 * LAYER 2: USE CASE DESIGN
 *
 * PURPOSE: Translate the problems identified in Layer 1 into specific,
 * actionable AI use cases with clear scope, expected outcomes, and
 * implementation approach.
 *
 * POSITION IN ROADMAP: Second layer.
 * Depends on → Layer 1 (Problem & Opportunity) — each use case addresses a specific problem
 * Feeds into → Layer 3 (Architecture) — use cases define what the technical backbone must support
 *
 * WHO OWNS THIS: Cross-functional teams — business owners define requirements,
 * AI/data teams assess feasibility, UX teams design the human interaction model.
 *
 * ADAPTATION NOTE: These use cases are generic starting points. Your organization
 * should run design workshops with stakeholders to validate fit, estimate impact,
 * and define acceptance criteria specific to your workflows, data availability,
 * and regulatory environment. Prioritize use cases with the highest ratio of
 * business impact to implementation complexity.
 */

import { RoadmapNode } from "../types";

export const useCaseDesignNodes: RoadmapNode[] = [
  {
    id: "auto-follow-up-leads",
    title: "Auto-Follow-Up on Inbound Leads",
    shortDescription: "AI sends personalized follow-ups within minutes of lead arrival",
    fullDescription:
      "This use case addresses the lead response delay problem by deploying an AI agent that monitors inbound lead channels (forms, emails, chat), qualifies the lead using predefined criteria, and sends a personalized follow-up message. The human sales rep is notified and can take over at any point.\n\nDetailed substeps:\n1. Define lead qualification criteria (company size, industry, budget signals, intent keywords)\n2. Map all inbound lead channels and standardize the data format\n3. Design the AI qualification flow — what data is checked and in what order\n4. Create response templates by lead segment with personalization slots\n5. Define escalation rules — which leads skip automation and go straight to humans\n6. Build the feedback loop — sales reps rate AI follow-up quality to improve over time\n7. Set up A/B testing for AI-generated vs. template-based follow-ups\n\nAdapt to your business: Enterprise sales teams may want AI to research the prospect's company and reference recent news in the follow-up. SMB-focused businesses may prioritize speed and volume over deep personalization.",
    layer: "Use Case Design",
    track: "Business",
    type: "use_case",
    dependencies: ["lead-response-delay"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["HubSpot", "OpenAI API", "Zapier", "Make"],
    risks: ["Tone issues in auto-generated messages", "Spam filters blocking automated emails"],
    metrics: ["Time to first response", "Follow-up rate", "Demo booking rate"],
    examples: ["A B2B agency implemented AI follow-ups and saw a 40% increase in qualified meetings within 3 weeks."],
    tags: ["sales", "leads", "automation", "use-case"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "ai-drafting-replies",
    title: "AI-Drafted Email Replies",
    shortDescription: "AI generates context-aware reply drafts for human review",
    fullDescription:
      "Rather than replacing human communication, this use case positions AI as a drafting assistant. It reads the incoming email, retrieves context from CRM/tickets, and drafts a reply. The employee reviews, adjusts if needed, and sends. This preserves quality while cutting response effort by 70%.\n\nDetailed substeps:\n1. Select initial department for pilot (support, sales, or operations)\n2. Define context sources the AI should reference (CRM records, previous conversations, knowledge base)\n3. Set tone and style guidelines by department and communication type\n4. Build the draft review interface — easy approve, edit-in-place, or reject-with-feedback\n5. Implement confidence scoring — low-confidence drafts get flagged for extra review\n6. Create a feedback mechanism where edits train the model on company style\n7. Measure time saved and draft acceptance rate weekly during pilot\n\nAdapt to your business: Legal and financial firms need stricter review controls due to liability. Customer-facing teams benefit from tone calibration per customer segment. Internal communications may allow higher automation levels.",
    layer: "Use Case Design",
    track: "AI Capability",
    type: "use_case",
    dependencies: ["email-overload"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["GPT-4", "Claude", "Microsoft Copilot"],
    risks: ["Hallucinated information in drafts", "Confidential data leakage to LLM providers"],
    metrics: ["Draft acceptance rate", "Time saved per email", "Quality audit score"],
    examples: ["A consulting firm saw 3.5 hours/week saved per consultant with AI-assisted email drafting."],
    tags: ["email", "ai", "drafting", "productivity"],
    importance: "high",
    complexity: "low",
  },
  {
    id: "intelligent-ticket-routing",
    title: "Intelligent Ticket Routing",
    shortDescription: "Auto-classify and route support tickets to the right team",
    fullDescription:
      "By analyzing ticket content, customer history, and urgency signals, AI can classify and route support tickets with high accuracy. This replaces manual triage and ensures SLAs are met. Can escalate automatically when sentiment is negative or issue is critical.\n\nDetailed substeps:\n1. Analyze historical ticket data to build a category taxonomy (aim for 15–30 categories)\n2. Label 1,000–5,000 historical tickets for training data (or use LLM zero-shot classification)\n3. Define routing rules: category → team, priority → SLA, sentiment → escalation\n4. Build confidence thresholds — tickets below threshold go to manual triage\n5. Implement auto-response for simple categories (password reset, status check, FAQ)\n6. Design the feedback loop — agents correct misrouted tickets, feeding back into the model\n7. Set up dashboards for routing accuracy, SLA compliance, and human override rate\n\nAdapt to your business: Multi-product companies need product-specific routing. Companies with tiered support (L1/L2/L3) need AI to assess complexity. Regulated industries need audit trails for every routing decision.",
    layer: "Use Case Design",
    track: "Technical",
    type: "use_case",
    dependencies: ["support-triage"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["Zendesk AI", "Intercom Fin", "Custom NLP models"],
    risks: ["Misclassification of edge cases", "Bias in routing based on language"],
    metrics: ["Routing accuracy", "Average handle time", "Escalation rate"],
    examples: ["A fintech company achieved 94% routing accuracy using a fine-tuned classification model."],
    tags: ["support", "routing", "classification"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "automated-invoice-capture",
    title: "Automated Invoice Data Capture",
    shortDescription: "Extract structured data from invoices using AI OCR",
    fullDescription:
      "Using AI-powered OCR and document understanding, this use case automates the extraction of key fields (vendor, amount, line items, due date) from PDF and scanned invoices. Extracted data is validated against business rules and pushed into the ERP system for processing.\n\nDetailed substeps:\n1. Inventory invoice formats — group by vendor, format (PDF, scan, email body, EDI), and complexity\n2. Define the extraction schema (vendor name, invoice number, date, line items, amounts, tax, currency)\n3. Select and configure OCR/extraction tool — test accuracy on a sample of 200+ real invoices\n4. Build validation rules (amount checks, duplicate detection, vendor matching against master data)\n5. Design exception handling workflow — what happens when extraction confidence is low?\n6. Integrate with ERP posting workflow — map extracted fields to ERP data model\n7. Implement 3-way matching (PO, receipt, invoice) where applicable\n8. Set up accuracy reporting and continuous model improvement pipeline\n\nAdapt to your business: Companies with standardized vendor invoices will see higher accuracy faster. International businesses must handle multi-currency and multi-language invoices. Industries with complex line items (construction, manufacturing) need custom extraction models.",
    layer: "Use Case Design",
    track: "Technical",
    type: "use_case",
    dependencies: ["invoice-processing"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Google Document AI", "AWS Textract", "Rossum", "ABBYY"],
    risks: ["Low accuracy on non-standard formats", "Integration complexity with legacy ERP"],
    metrics: ["Extraction accuracy", "Straight-through processing rate", "Exception rate"],
    examples: ["A retail chain processed 10,000 invoices/month with 97% straight-through rate using AI extraction."],
    tags: ["finance", "ocr", "document-ai"],
    importance: "high",
    complexity: "high",
  },
  {
    id: "knowledge-base-ai-assistant",
    title: "AI-Powered Knowledge Base Assistant",
    shortDescription: "Employees ask questions in natural language and get accurate answers from company knowledge",
    fullDescription:
      "This use case deploys an AI assistant that sits on top of the organization's knowledge base (wikis, SOPs, policies, historical decisions) and answers employee questions in natural language. It replaces the 'ask the senior person' pattern with a scalable, always-available resource.\n\nDetailed substeps:\n1. Inventory knowledge sources — wikis, Confluence, SharePoint, Google Drive, Slack history, SOPs\n2. Assess content quality — is the documentation up-to-date, complete, and consistent?\n3. Build the ingestion pipeline — crawl, chunk, embed, and index all knowledge sources\n4. Design the retrieval strategy — hybrid search (keyword + semantic), re-ranking, source attribution\n5. Implement answer generation with source citations (users must see where the answer came from)\n6. Build a feedback mechanism — thumbs up/down, 'this is outdated', 'answer was wrong'\n7. Define guardrails — what topics should the AI refuse to answer (legal advice, medical guidance)?\n8. Create a knowledge gap report — track questions that can't be answered to identify documentation needs\n\nAdapt to your business: Professional services firms should include client-specific knowledge (gated by access controls). Manufacturing companies should include equipment manuals and maintenance procedures. Regulated industries must ensure the AI cites the correct policy version.",
    layer: "Use Case Design",
    track: "AI Capability",
    type: "use_case",
    dependencies: ["knowledge-silos"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["OpenAI Assistants API", "LangChain", "Pinecone", "Azure AI Search"],
    risks: ["Hallucinated answers that sound authoritative", "Outdated knowledge not being flagged", "Access control violations"],
    metrics: ["Answer accuracy", "User satisfaction", "Questions per day", "Knowledge gap identification rate"],
    examples: ["A 2,000-person tech company deployed an AI knowledge assistant that reduced internal support tickets by 35% and cut new hire onboarding time by 2 weeks."],
    tags: ["knowledge", "rag", "assistant", "onboarding", "productivity"],
    importance: "high",
    complexity: "high",
  },
  {
    id: "automated-report-generation",
    title: "AI-Powered Report Generation",
    shortDescription: "Auto-generate recurring business reports from connected data sources",
    fullDescription:
      "This use case automates the creation of recurring reports by pulling data from multiple systems, applying standard analyses, generating visualizations, and producing narrative summaries. Humans review and approve the final output.\n\nDetailed substeps:\n1. Select 3–5 high-frequency template reports for the pilot\n2. Map data sources and required queries for each report\n3. Build data connectors with error handling and freshness checks\n4. Create report templates with dynamic sections (tables, charts, narrative commentary)\n5. Implement AI narrative generation — translate data trends into business language\n6. Design the review workflow — draft → human review → approve → distribute\n7. Add anomaly detection — AI highlights unexpected trends for human attention\n8. Build scheduling and distribution (email, Slack, dashboard)\n\nAdapt to your business: Finance teams typically start with P&L summaries and variance reports. Sales teams may automate pipeline reviews and forecast reports. Operations teams may focus on KPI dashboards with AI commentary.",
    layer: "Use Case Design",
    track: "Business",
    type: "use_case",
    dependencies: ["report-generation-burden"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["OpenAI API", "Python", "Metabase", "Looker", "Power BI"],
    risks: ["AI misinterpreting data trends", "Report recipients over-trusting AI-generated narratives"],
    metrics: ["Time saved per report cycle", "Report accuracy", "Stakeholder satisfaction"],
    examples: ["A logistics company automated weekly fleet performance reports, reducing production time from 2 days to 15 minutes."],
    tags: ["reporting", "automation", "analytics", "use-case"],
    importance: "medium",
    complexity: "medium",
  },
  {
    id: "ai-compliance-monitoring",
    title: "AI-Powered Compliance Monitoring",
    shortDescription: "Continuous, automated monitoring of regulatory compliance across operations",
    fullDescription:
      "Deploy AI to continuously monitor business activities — communications, transactions, processes — for compliance violations. Instead of periodic manual audits that catch issues after the fact, AI provides real-time detection and alerting.\n\nDetailed substeps:\n1. Map compliance requirements to observable activities and data sources\n2. Define violation patterns and risk indicators for each regulation\n3. Build monitoring pipelines that ingest relevant activity data in real-time or near-real-time\n4. Train or configure detection models for each violation category\n5. Design the alert workflow — severity levels, escalation paths, response SLAs\n6. Implement case management for flagged issues (investigate, resolve, document)\n7. Build compliance dashboards for leadership and audit readiness\n8. Create feedback loops — false positives are reviewed and used to improve detection accuracy\n\nAdapt to your business: Financial services must monitor transactions for AML/KYC. Healthcare must monitor PHI access patterns. Any company with EU customers must monitor GDPR compliance. Industry-specific regulations add additional monitoring layers.",
    layer: "Use Case Design",
    track: "Governance",
    type: "use_case",
    dependencies: ["compliance-monitoring-gaps"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["OneTrust", "Relativity", "Custom NLP pipelines", "Datadog"],
    risks: ["Alert fatigue from high false positive rate", "Regulatory risk if AI monitoring itself fails"],
    metrics: ["Detection rate", "False positive rate", "Time to investigate", "Audit readiness score"],
    examples: ["A European bank deployed AI communication monitoring that detected 3x more potential compliance violations while reducing analyst review time by 50%."],
    tags: ["compliance", "monitoring", "regulation", "governance"],
    importance: "critical",
    complexity: "very_high",
  },
  {
    id: "data-quality-automation",
    title: "Automated Data Quality Management",
    shortDescription: "AI continuously monitors, detects, and fixes data quality issues",
    fullDescription:
      "Rather than periodic manual data audits, deploy AI to continuously monitor data quality across systems — detecting duplicates, format inconsistencies, missing values, and anomalies. AI can auto-fix simple issues and flag complex ones for human review.\n\nDetailed substeps:\n1. Define data quality dimensions to monitor (completeness, accuracy, consistency, timeliness, uniqueness)\n2. Build data quality profiles for key tables/entities (expected ranges, formats, relationships)\n3. Deploy automated checks that run on data ingest and on schedule\n4. Implement anomaly detection for drift (schema changes, value distribution shifts)\n5. Create auto-remediation rules for common issues (format normalization, deduplication merges)\n6. Build data quality scorecards by system, team, and entity type\n7. Set up alerting for quality drops below threshold\n8. Feed quality metrics into data governance processes\n\nAdapt to your business: Companies planning AI initiatives should prioritize data quality for the datasets their AI models will consume. CRM data quality directly impacts sales AI. Financial data quality impacts reporting AI. Master data quality impacts everything.",
    layer: "Use Case Design",
    track: "Technical",
    type: "use_case",
    dependencies: ["data-quality-inconsistency"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["Great Expectations", "Monte Carlo", "dbt tests", "Informatica", "Atlan"],
    risks: ["Auto-remediation introducing new errors", "Alert fatigue from noisy quality checks"],
    metrics: ["Data quality score", "Issues auto-resolved", "Time to detect quality drops", "Cost of poor data"],
    examples: ["A retail company implemented continuous data quality monitoring and reduced CRM duplicate rate from 18% to 2%, directly improving marketing campaign targeting accuracy."],
    tags: ["data-quality", "automation", "data-governance", "master-data"],
    importance: "high",
    complexity: "high",
  },
];
