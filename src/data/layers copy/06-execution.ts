/**
 * LAYER 6: EXECUTION
 *
 * PURPOSE: Define how AI workflows are triggered and run — whether in
 * real-time response to events, on a schedule as batch operations, or
 * as always-on agents. The execution model determines responsiveness,
 * cost efficiency, and operational reliability.
 *
 * POSITION IN ROADMAP: Sixth layer.
 * Depends on → Layer 3 (Architecture) — orchestration defines the execution framework
 *            → Layer 4 (Integration) — integrations provide event sources and action targets
 * Feeds into → Layer 7 (Trust & Control) — execution must respect governance constraints
 *            → Layer 8 (Measurement) — execution produces the data for measurement
 *
 * WHO OWNS THIS: Platform Engineering, DevOps/SRE, with input from business
 * owners on latency and priority requirements.
 *
 * ADAPTATION NOTE: The right execution model depends on the use case. Customer-
 * facing interactions need real-time. Internal reports can be batch. The trap is
 * building everything real-time when batch would suffice — this wastes money
 * and adds unnecessary complexity. Match execution model to business urgency.
 */

import { RoadmapNode } from "../types";

export const executionNodes: RoadmapNode[] = [
  {
    id: "event-driven-execution",
    title: "Event-Driven Execution",
    shortDescription: "AI workflows trigger automatically based on business events",
    fullDescription:
      "Instead of requiring manual triggers, AI workflows fire automatically when relevant events occur — new lead arrives, ticket created, invoice received, SLA approaching. Event-driven architecture makes AI proactive rather than reactive, enabling real-time automation at scale.\n\nExecution substeps:\n1. Inventory all business events that should trigger AI workflows (CRM events, support events, financial events)\n2. Design the event schema — standardized event format with metadata (source, timestamp, priority, payload)\n3. Choose event infrastructure — message queue (Kafka, RabbitMQ), event bus (EventBridge), or webhooks\n4. Implement event routing — which events go to which AI workflows?\n5. Build event deduplication — prevent the same event from triggering duplicate processing\n6. Implement event ordering guarantees where needed (e.g., invoice processing must be in order)\n7. Design backpressure handling — what happens when events arrive faster than AI can process?\n8. Build dead letter queues — capture failed events for investigation and replay\n9. Implement event replay — ability to reprocess historical events when workflows change\n10. Monitor event flow — latency, throughput, error rates, queue depth\n\nAdapt to your business: Companies with high transaction volumes (e-commerce, fintech) need robust event infrastructure from the start. Companies with lower volume may start with simple webhook-based triggers and evolve to event buses as needs grow.",
    layer: "Execution",
    track: "Technical",
    type: "pattern",
    dependencies: ["orchestration-layer", "crm-integration"],
    maturityLevels: ["Semi-Automated", "Fully Automated", "Autonomous"],
    tools: ["AWS EventBridge", "Kafka", "RabbitMQ", "Webhooks"],
    risks: ["Event storms overwhelming the system", "Duplicate event processing"],
    metrics: ["Event processing latency", "Event throughput", "Duplicate rate"],
    examples: ["When a high-value lead fills out a form, an event triggers AI qualification, CRM enrichment, and personalized follow-up — all within 30 seconds."],
    tags: ["events", "automation", "real-time"],
    importance: "high",
    complexity: "high",
  },
  {
    id: "batch-processing",
    title: "Batch Processing",
    shortDescription: "Process large volumes of data through AI in scheduled batches",
    fullDescription:
      "Not all AI tasks need real-time execution. Batch processing handles high-volume, lower-urgency tasks — weekly report generation, bulk email classification, monthly invoice reconciliation. It optimizes costs and reduces system load during peak hours.\n\nExecution substeps:\n1. Identify batch-eligible tasks — anything that doesn't need a response within minutes\n2. Design batch scheduling — daily, weekly, end-of-month, or trigger-based (when volume exceeds threshold)\n3. Implement batch sizing — optimal batch size for cost and throughput (balance API rate limits with efficiency)\n4. Build progress tracking — monitor batch completion percentage, estimated time remaining\n5. Implement retry logic — failed items are retried individually, not the whole batch\n6. Design output handling — where do batch results go? (database, file, notification, dashboard)\n7. Build cost estimation — predict batch cost before execution, alert if exceeding budget\n8. Implement batch prioritization — urgent batches can preempt scheduled ones\n9. Add batch comparison — compare current batch results with previous runs to detect anomalies\n\nAdapt to your business: Finance teams often need month-end batch processing with strict deadlines. Marketing teams may batch-process content tagging. Operations teams may batch-analyze quality metrics. Schedule batches during off-peak hours to reduce costs.",
    layer: "Execution",
    track: "Technical",
    type: "pattern",
    dependencies: ["orchestration-layer"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Apache Airflow", "Prefect", "AWS Batch", "Cron jobs"],
    risks: ["Processing delays affecting downstream tasks", "Data staleness in batch results"],
    metrics: ["Batch completion time", "Processing cost per item", "Error rate"],
    examples: ["A media company batch-processes 50,000 articles weekly for AI-powered categorization and SEO tagging."],
    tags: ["batch", "processing", "scheduling"],
    importance: "medium",
    complexity: "medium",
  },
  {
    id: "ai-agent-execution",
    title: "Autonomous AI Agent Execution",
    shortDescription: "AI agents that plan, execute, and adapt multi-step tasks independently",
    fullDescription:
      "Beyond event-triggered and batch workflows, autonomous AI agents can handle complex, multi-step tasks with planning, tool use, and self-correction. They operate with defined goals and constraints, executing until the objective is met or escalating when stuck.\n\nExecution substeps:\n1. Define agent objectives and success criteria — what does 'done' look like?\n2. Design the agent's action space — which tools and systems can it access?\n3. Implement planning capability — agent breaks down objectives into steps before executing\n4. Build execution monitoring — track agent actions in real-time with ability to pause/stop\n5. Design constraint boundaries — budget limits, time limits, systems it cannot modify, data it cannot access\n6. Implement self-correction — agent detects errors and adjusts approach without human intervention\n7. Build escalation triggers — when should the agent stop and ask a human?\n8. Create audit trail — every agent action is logged with reasoning for post-hoc review\n9. Implement sandbox/staging mode — agents test actions in safe environments before production\n10. Build agent evaluation — measure task completion rate, cost efficiency, and quality\n\nAdapt to your business: Start with narrow, well-defined agent tasks (research, data enrichment, report compilation). Expand agent autonomy gradually as trust increases. Companies in regulated industries should keep human oversight tighter for longer.",
    layer: "Execution",
    track: "AI Capability",
    type: "pattern",
    dependencies: ["orchestration-layer", "llm-decision-layer", "business-memory"],
    maturityLevels: ["Fully Automated", "Autonomous"],
    tools: ["LangGraph", "AutoGen", "CrewAI", "Custom agent frameworks"],
    risks: ["Agent taking unintended actions", "Cost spiraling from long-running agents", "Hallucination-driven errors"],
    metrics: ["Task completion rate", "Actions per task", "Cost per completed task", "Human escalation rate"],
    examples: ["A consulting firm deployed an AI research agent that gathers market data, competitor analysis, and industry reports — producing a research brief in 20 minutes instead of 2 days."],
    tags: ["agents", "autonomous", "planning", "execution"],
    importance: "medium",
    complexity: "very_high",
  },
];
