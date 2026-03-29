/**
 * LAYER 4: INTEGRATION
 *
 * PURPOSE: Connect AI workflows to the organization's existing systems —
 * CRM, ERP, communication platforms, databases, and third-party services.
 * Without solid integrations, AI remains a standalone tool instead of an
 * embedded part of business operations.
 *
 * POSITION IN ROADMAP: Fourth layer.
 * Depends on → Layer 2 (Use Case Design) — integrations serve the use cases
 *            → Layer 3 (Architecture) — must fit within the orchestration model
 * Feeds into → Layer 6 (Execution) — event sources for triggering workflows
 *
 * WHO OWNS THIS: Integration/Platform Engineering teams, with input from
 * application owners and data teams.
 *
 * ADAPTATION NOTE: Integration complexity varies dramatically based on your
 * existing tech stack. Modern cloud-native companies with API-first tools will
 * integrate faster. Companies with legacy on-premise systems may need custom
 * connectors, ETL pipelines, or middleware. Always audit API capabilities,
 * rate limits, and data models before committing to an integration approach.
 */

import { RoadmapNode } from "../types";

export const integrationNodes: RoadmapNode[] = [
  {
    id: "crm-integration",
    title: "CRM Integration",
    shortDescription: "Connect AI workflows to Salesforce, HubSpot, or Pipedrive",
    fullDescription:
      "AI use cases in sales and support require deep integration with CRM systems. The AI needs to read contact history, deal stages, and communication logs, and write back updates, tasks, and notes. This integration must be real-time, reliable, and respect data access controls.\n\nIntegration substeps:\n1. Audit CRM API capabilities — what data is readable/writable? What are rate limits?\n2. Map the data model — translate CRM objects (contacts, deals, activities) to AI workflow inputs\n3. Build read connectors — pull contact context, deal history, recent communications before AI processing\n4. Build write connectors — push AI-generated notes, scores, follow-up tasks, and tags back to CRM\n5. Implement sync conflict resolution — what happens if CRM data changes during AI processing?\n6. Set up webhook/event listeners for real-time triggers (new lead, deal stage change, task due)\n7. Implement access controls — AI should only access data the triggering user is authorized to see\n8. Build monitoring for integration health — latency, error rates, data freshness\n\nAdapt to your business: Companies using Salesforce may leverage Einstein AI alongside custom integrations. HubSpot users can use the Workflows API for lighter integrations. Companies with custom CRMs need to build bespoke connectors.",
    layer: "Integration",
    track: "Technical",
    type: "integration",
    dependencies: ["auto-follow-up-leads", "llm-decision-layer"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["HubSpot API", "Salesforce API", "Pipedrive API", "Zapier"],
    risks: ["API rate limits", "Data sync conflicts", "Permission misconfigurations"],
    metrics: ["Sync latency", "API error rate", "Data freshness"],
    examples: ["A SaaS company syncs AI-generated lead scores back to HubSpot in real-time, enabling prioritized outreach."],
    tags: ["crm", "integration", "sales"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "erp-integration",
    title: "ERP Integration",
    shortDescription: "Connect AI workflows to SAP, Oracle, or NetSuite",
    fullDescription:
      "For finance, operations, and supply chain use cases, AI must integrate with ERP systems. This includes reading purchase orders, inventory levels, and financial data, and writing back processed invoices, forecasts, and alerts. ERP integrations are often complex due to legacy APIs and data models.\n\nIntegration substeps:\n1. Map ERP modules involved (AP/AR, inventory, procurement, general ledger)\n2. Audit available APIs — REST, SOAP, BAPI, RFC, OData — and their limitations\n3. Design the data extraction approach — real-time API calls vs. batch extracts vs. change data capture\n4. Build the write-back interface — how does AI push processed data back into ERP?\n5. Handle ERP-specific challenges — custom fields, approval workflows, posting periods\n6. Implement idempotency — prevent duplicate entries from retries\n7. Build staging/validation layer — AI-processed data is staged and validated before ERP posting\n8. Plan for ERP downtime — queue changes and process when the system is available\n9. Test thoroughly in sandbox/UAT environments before production\n\nAdapt to your business: SAP environments may use CPI (Cloud Platform Integration) for middleware. Oracle users may leverage OIC (Oracle Integration Cloud). Companies with multiple ERPs (post-acquisition) face additional complexity in harmonizing data models.",
    layer: "Integration",
    track: "Technical",
    type: "integration",
    dependencies: ["automated-invoice-capture", "orchestration-layer"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["SAP API", "Oracle REST API", "NetSuite SuiteTalk"],
    risks: ["Legacy system constraints", "Data format mismatches", "Downtime during sync"],
    metrics: ["Integration uptime", "Data accuracy", "Processing throughput"],
    examples: ["A manufacturing firm connected AI invoice processing to SAP, reducing manual data entry by 90%."],
    tags: ["erp", "integration", "finance", "operations"],
    importance: "high",
    complexity: "very_high",
  },
  {
    id: "communication-platform-integration",
    title: "Communication Platform Integration",
    shortDescription: "Connect AI to Slack, Teams, or email for notifications and actions",
    fullDescription:
      "AI workflows often need to notify humans, request approvals, or present options through existing communication channels. Integrating with Slack, Teams, or email allows AI to meet users where they work, reducing context switching and increasing adoption.\n\nIntegration substeps:\n1. Choose primary communication channels per user persona (sales on Slack, execs on email, ops on Teams)\n2. Design notification types — informational, action-required, approval, escalation\n3. Build interactive messages — buttons, dropdowns, forms that trigger AI workflow steps\n4. Implement notification throttling — prevent notification fatigue with digest and priority settings\n5. Add deep links — notifications link directly to the relevant context (deal, ticket, report)\n6. Handle multi-channel scenarios — user doesn't respond on Slack → escalate to email → escalate to phone\n7. Implement read receipts / action tracking — AI knows when a notification was seen and acted on\n8. Ensure security — sensitive data in notifications must respect access controls\n\nAdapt to your business: Companies with remote/distributed teams rely heavily on async communication — robust notification design is critical. Companies with strict security may need to avoid sharing sensitive data in Slack/Teams messages and instead link to secure dashboards.",
    layer: "Integration",
    track: "Technical",
    type: "integration",
    dependencies: ["orchestration-layer"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["Slack API", "Microsoft Graph API", "SendGrid"],
    risks: ["Notification fatigue", "Security of message content"],
    metrics: ["Notification response rate", "Action completion rate"],
    examples: ["An AI assistant sends deal summaries to sales reps in Slack with one-click approval buttons."],
    tags: ["slack", "teams", "notifications", "integration"],
    importance: "medium",
    complexity: "low",
  },
  {
    id: "data-warehouse-integration",
    title: "Data Warehouse & BI Integration",
    shortDescription: "Connect AI to Snowflake, BigQuery, or Redshift for analytics use cases",
    fullDescription:
      "AI-powered reporting, analytics, and business intelligence require integration with the data warehouse. The AI must query structured data, join across tables, compute aggregates, and generate insights — all while respecting data governance policies.\n\nIntegration substeps:\n1. Map the data warehouse schema relevant to AI use cases (fact tables, dimension tables, views)\n2. Grant AI service accounts appropriate read access with row-level security where needed\n3. Build query generation capability — AI translates natural language questions to SQL\n4. Implement query guardrails — maximum query cost, result set limits, prohibited tables\n5. Cache frequent queries to reduce warehouse costs\n6. Set up semantic layer — business-friendly names for tables, columns, and metrics\n7. Build result formatting — translate raw query results into human-readable summaries\n8. Implement audit logging — track every AI-generated query for security and compliance\n\nAdapt to your business: Companies with mature data teams may leverage existing semantic layers (Looker, dbt metrics). Companies with complex data models should invest in the semantic layer to prevent AI from generating incorrect queries.",
    layer: "Integration",
    track: "Technical",
    type: "integration",
    dependencies: ["orchestration-layer", "automated-report-generation"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Snowflake", "BigQuery", "Redshift", "dbt", "Looker"],
    risks: ["AI generating expensive/incorrect queries", "Data governance violations", "Performance impact on warehouse"],
    metrics: ["Query accuracy", "Average query cost", "Response latency", "User satisfaction with answers"],
    examples: ["A CPG company enabled sales leaders to ask 'What were our top 10 products by margin in Q3?' in natural language and get accurate answers in seconds."],
    tags: ["data-warehouse", "bi", "analytics", "sql", "integration"],
    importance: "high",
    complexity: "high",
  },
];
