/**
 * LAYER 3: ARCHITECTURE
 *
 * PURPOSE: Define the technical backbone that powers all AI use cases —
 * the decision-making layer, the rules engine, the orchestration framework,
 * and the API gateway. This layer determines scalability, reliability,
 * and maintainability of the entire AI platform.
 *
 * POSITION IN ROADMAP: Third layer.
 * Depends on → Layer 2 (Use Case Design) — architecture serves the use cases
 * Feeds into → Layer 4 (Integration) — defines how systems connect
 *            → Layer 5 (Memory & Context) — defines how AI accesses knowledge
 *            → Layer 7 (Trust & Control) — must support governance patterns
 *
 * WHO OWNS THIS: CTO, VP Engineering, AI/ML Engineering leads.
 *
 * ADAPTATION NOTE: Architecture decisions have long-term consequences. The
 * components listed here are foundational patterns — your specific technology
 * choices (cloud provider, LLM vendor, orchestration tool) should align with
 * your existing tech stack, team skills, vendor relationships, and compliance
 * requirements. Avoid over-engineering: start simple and add complexity only
 * when use cases demand it.
 */

import { RoadmapNode } from "../types";

export const architectureNodes: RoadmapNode[] = [
  {
    id: "llm-decision-layer",
    title: "LLM Decision Layer",
    shortDescription: "Central AI layer that interprets input and decides next actions",
    fullDescription:
      "The LLM Decision Layer is the core architectural component that receives structured or unstructured input, applies business context, and determines the appropriate action. It can call tools, query databases, generate text, or escalate to humans. This layer must be well-instrumented, version-controlled, and tested.\n\nArchitecture substeps:\n1. Choose LLM provider strategy — single vendor, multi-vendor, or self-hosted (consider cost, latency, compliance)\n2. Design the prompt management system — version-controlled prompts, A/B testing, rollback capability\n3. Implement the tool-calling interface — define available tools, input/output schemas, error handling\n4. Build the fallback chain — primary LLM → fallback LLM → rule-based fallback → human escalation\n5. Implement rate limiting, cost tracking, and budget alerts per use case\n6. Design the evaluation framework — automated testing of decision quality before deployment\n7. Build observability — log every decision with input, prompt, output, latency, cost, and confidence\n8. Plan for model upgrades — how to test new models without breaking production\n\nAdapt to your business: Regulated industries may need self-hosted or private-cloud LLMs. Companies with high-volume, low-complexity tasks may use smaller, cheaper models. Companies with complex reasoning needs may invest in multi-step agent architectures.",
    layer: "Architecture",
    track: "AI Capability",
    type: "component",
    dependencies: ["auto-follow-up-leads", "ai-drafting-replies", "intelligent-ticket-routing"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated", "Autonomous"],
    tools: ["OpenAI GPT-4", "Anthropic Claude", "LangChain", "LlamaIndex"],
    risks: ["Prompt injection attacks", "Unpredictable outputs", "Cost overruns from token usage"],
    metrics: ["Decision accuracy", "Latency p95", "Cost per decision", "Fallback rate"],
    examples: ["A sales platform built a multi-step LLM decision layer that qualifies leads, drafts responses, and books meetings — all in under 10 seconds."],
    tags: ["llm", "architecture", "ai-core"],
    importance: "critical",
    complexity: "high",
  },
  {
    id: "rules-engine",
    title: "Rules Engine",
    shortDescription: "Deterministic business logic layer alongside AI decisions",
    fullDescription:
      "Not everything should be decided by an LLM. A rules engine handles deterministic logic — routing rules, approval thresholds, SLA policies, compliance checks. It works alongside the LLM decision layer: the AI handles ambiguity, the rules engine handles certainty. This ensures predictability and auditability.\n\nArchitecture substeps:\n1. Inventory all business rules currently embedded in code, spreadsheets, or tribal knowledge\n2. Categorize rules by domain (routing, approval, compliance, pricing, escalation)\n3. Choose a rules engine approach — dedicated engine (Drools), config-driven (YAML/JSON), or code-based\n4. Define the interaction model with the LLM layer — when does AI defer to rules, and vice versa?\n5. Build a rule management interface for business users to view and request changes\n6. Implement rule versioning and audit trail\n7. Create testing framework — every rule change must pass regression tests\n8. Set up monitoring — track which rules fire, how often, and whether they conflict with AI decisions\n\nAdapt to your business: Companies in heavily regulated industries will have more rules. The key is to keep rules and AI complementary — rules for compliance and hard constraints, AI for judgment and nuance.",
    layer: "Architecture",
    track: "Technical",
    type: "component",
    dependencies: ["llm-decision-layer"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["Drools", "Custom Python rules", "AWS Step Functions"],
    risks: ["Rule explosion complexity", "Sync issues between rules and AI decisions"],
    metrics: ["Rule hit rate", "Override frequency", "False positive rate"],
    examples: ["A bank uses a rules engine for compliance checks before the AI sends any customer-facing message."],
    tags: ["rules", "logic", "architecture", "deterministic"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "orchestration-layer",
    title: "Workflow Orchestration",
    shortDescription: "Coordinates multi-step AI + human workflows end-to-end",
    fullDescription:
      "Complex AI use cases involve multiple steps: receive input, classify, enrich, decide, act, notify, log. An orchestration layer manages this flow, handles retries, timeouts, branching, and human handoffs. It is the backbone of reliable AI automation.\n\nArchitecture substeps:\n1. Map all AI workflows as state machines — define states, transitions, and terminal conditions\n2. Choose orchestration technology — workflow engine (Temporal), step functions (AWS), or low-code (n8n)\n3. Design error handling strategy — retry policies, dead letter queues, compensation actions\n4. Implement human-in-the-loop checkpoints as first-class workflow steps\n5. Build timeout handling — what happens when a step doesn't complete in expected time?\n6. Design the parallel execution model — which steps can run concurrently?\n7. Implement workflow versioning — new versions shouldn't break in-flight workflows\n8. Build monitoring dashboards — workflow completion rates, step durations, failure hotspots\n\nAdapt to your business: Companies with simple use cases (2–3 steps) may not need a formal orchestration engine — a well-designed API pipeline suffices. Companies with complex, multi-department workflows (insurance claims, loan processing) need robust orchestration from day one.",
    layer: "Architecture",
    track: "Technical",
    type: "component",
    dependencies: ["llm-decision-layer", "rules-engine"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Temporal", "AWS Step Functions", "Prefect", "n8n"],
    risks: ["Workflow complexity spiraling", "Debugging distributed failures"],
    metrics: ["Workflow completion rate", "Average execution time", "Retry rate"],
    examples: ["An insurance company orchestrates claim processing through 8 AI + human steps with 99.2% completion rate."],
    tags: ["orchestration", "workflow", "reliability"],
    importance: "high",
    complexity: "high",
  },
  {
    id: "api-gateway-layer",
    title: "AI API Gateway",
    shortDescription: "Centralized gateway for all AI service calls with rate limiting and auth",
    fullDescription:
      "As AI use cases multiply, a centralized API gateway manages all LLM calls, enforces rate limits, handles authentication, routes to the appropriate model, and provides a single point for monitoring and cost control. Without it, each team builds their own LLM integration, creating sprawl.\n\nArchitecture substeps:\n1. Design a unified API interface that abstracts LLM provider specifics\n2. Implement authentication and authorization — who can call which AI capabilities?\n3. Build rate limiting and quota management — per team, per use case, per budget\n4. Implement request routing — route to optimal model based on task type, latency requirements, cost\n5. Add caching layer — identical requests return cached responses to save cost and latency\n6. Build cost tracking — allocate API costs to departments/projects\n7. Implement circuit breakers — gracefully degrade when AI services are down\n8. Add request/response logging for observability and debugging\n\nAdapt to your business: Large organizations with multiple AI teams need this early to prevent cost overruns and security gaps. Smaller organizations may start with a simpler shared library approach and evolve to a gateway as usage grows.",
    layer: "Architecture",
    track: "Technical",
    type: "component",
    dependencies: ["llm-decision-layer"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Kong", "AWS API Gateway", "LiteLLM", "Custom proxy"],
    risks: ["Single point of failure if gateway goes down", "Added latency from extra hop"],
    metrics: ["Gateway uptime", "Request latency overhead", "Cost per request", "Cache hit rate"],
    examples: ["A Fortune 500 company centralized all LLM calls through an API gateway, reducing AI spend by 35% through caching and optimal model routing."],
    tags: ["api", "gateway", "infrastructure", "cost-management"],
    importance: "high",
    complexity: "medium",
  },
];
