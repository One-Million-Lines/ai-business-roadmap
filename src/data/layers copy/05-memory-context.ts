/**
 * LAYER 5: MEMORY & CONTEXT
 *
 * PURPOSE: Give AI persistent knowledge and contextual awareness. Without
 * memory, every AI interaction starts from zero. With the right memory
 * architecture, AI becomes increasingly useful over time — understanding
 * the business, remembering past interactions, and personalizing responses.
 *
 * POSITION IN ROADMAP: Fifth layer.
 * Depends on → Layer 3 (Architecture) — memory integrates with the LLM decision layer
 * Feeds into → Layer 6 (Execution) — context-aware execution is more effective
 *            → Layer 7 (Trust & Control) — memory decisions have privacy implications
 *
 * WHO OWNS THIS: AI/ML Engineering leads, Data Engineering, with governance
 * oversight from Legal/Compliance.
 *
 * ADAPTATION NOTE: Memory architecture has significant privacy and compliance
 * implications. What data is stored, how long it's retained, who can access it,
 * and how it's deleted all vary by industry regulation (GDPR, HIPAA, SOX).
 * Design memory systems with privacy-by-design principles from the start.
 */

import { RoadmapNode } from "../types";

export const memoryContextNodes: RoadmapNode[] = [
  {
    id: "session-memory",
    title: "Session Memory",
    shortDescription: "AI retains context within a single conversation or task session",
    fullDescription:
      "Session memory allows the AI to maintain context throughout a multi-turn interaction — remembering what was said, what was decided, and what remains pending. Without session memory, each interaction is stateless and the AI loses track of the conversation flow.\n\nImplementation substeps:\n1. Define session boundaries — what starts, extends, and ends a session?\n2. Choose memory storage approach — in-context (prompt stuffing), external (Redis/DB), or hybrid\n3. Implement conversation history management — what to keep, what to summarize, what to drop\n4. Build context window optimization — summarize older messages to fit within token limits\n5. Handle multi-channel sessions — user starts on chat, continues on email → context must follow\n6. Implement session timeout and cleanup — prevent stale sessions from consuming resources\n7. Add session replay for debugging — operators can review full conversation flow\n8. Protect sensitive data in session memory — PII should be masked or excluded\n\nAdapt to your business: Sales teams need longer session windows (deal discussions span weeks). Support interactions may have shorter windows but need prior ticket history. Internal tools may have very long sessions (project planning over months).",
    layer: "Memory & Context",
    track: "AI Capability",
    type: "pattern",
    dependencies: ["llm-decision-layer"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["LangChain Memory", "Redis", "Custom context managers"],
    risks: ["Memory size limits causing context loss", "Sensitive data persisting in memory"],
    metrics: ["Context retention accuracy", "Conversation completion rate"],
    examples: ["An AI sales assistant remembers prospect objections across a 5-message thread and addresses them proactively."],
    tags: ["memory", "context", "conversation"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "business-memory",
    title: "Business Memory (RAG)",
    shortDescription: "Persistent memory of company knowledge, policies, and history via retrieval-augmented generation",
    fullDescription:
      "Business memory gives AI access to organizational knowledge — past decisions, company policies, product catalog, pricing rules, customer history. This is typically implemented through RAG (Retrieval-Augmented Generation) using vector databases. Without it, AI gives generic responses.\n\nImplementation substeps:\n1. Inventory all knowledge sources (wikis, SOPs, policies, product docs, meeting notes, Slack archives)\n2. Design the ingestion pipeline — crawl, clean, chunk, and embed documents\n3. Choose chunking strategy — by paragraph, heading, semantic boundary — test retrieval quality\n4. Select vector database — managed (Pinecone) vs. self-hosted (pgvector, Weaviate)\n5. Implement hybrid search — combine vector similarity with keyword/BM25 for better recall\n6. Build re-ranking layer — re-order retrieved chunks by relevance before feeding to LLM\n7. Implement source attribution — always cite the source document in AI responses\n8. Build knowledge freshness pipeline — detect stale content, flag for updates, re-embed changes\n9. Design access controls — not all knowledge is available to all users\n10. Monitor retrieval quality — track relevance scores, user feedback, and hallucination rates\n\nAdapt to your business: Professional services firms should include client-specific knowledge bases (with strict access controls). Manufacturing companies should include equipment specs and maintenance logs. Companies with large document corpora should invest heavily in chunking and retrieval quality.",
    layer: "Memory & Context",
    track: "AI Capability",
    type: "pattern",
    dependencies: ["session-memory"],
    maturityLevels: ["Semi-Automated", "Fully Automated", "Autonomous"],
    tools: ["Pinecone", "Weaviate", "ChromaDB", "PostgreSQL pgvector"],
    risks: ["Stale knowledge causing wrong answers", "Embedding quality issues"],
    metrics: ["Retrieval relevance score", "Knowledge freshness", "Hallucination rate"],
    examples: ["An HR AI assistant uses business memory to answer employee policy questions with 95% accuracy by pulling from the internal wiki."],
    tags: ["rag", "knowledge", "vector-db", "memory"],
    importance: "critical",
    complexity: "high",
  },
  {
    id: "user-preference-memory",
    title: "User Preference Memory",
    shortDescription: "AI learns and remembers individual user preferences over time",
    fullDescription:
      "Beyond session context, AI can learn user-specific preferences — communication style, preferred tools, common requests, timezone, role context. This enables increasingly personalized interactions and reduces repetitive configuration.\n\nImplementation substeps:\n1. Define preference categories — communication style, formatting preferences, domain context, tool preferences\n2. Choose storage model — user profile database, vector embeddings of interaction patterns, or both\n3. Implement preference learning — extract implicit preferences from user behavior and explicit feedback\n4. Build preference application — inject user preferences into AI prompts and response formatting\n5. Handle preference conflicts — user preference vs. company policy vs. compliance requirement\n6. Implement preference decay — reduce weight of old preferences as user behavior changes\n7. Give users control — view, edit, and delete their stored preferences (GDPR compliance)\n8. Build A/B testing — measure whether personalization actually improves user satisfaction\n\nAdapt to your business: Executive-facing AI should learn presentation preferences (bullet points vs. narrative, level of detail). Developer-facing AI should remember tech stack preferences. Customer-facing AI must balance personalization with privacy.",
    layer: "Memory & Context",
    track: "AI Capability",
    type: "pattern",
    dependencies: ["session-memory", "business-memory"],
    maturityLevels: ["Fully Automated", "Autonomous"],
    tools: ["Custom user profile stores", "Vector memory layers"],
    risks: ["Privacy concerns with behavioral tracking", "Preference drift over time"],
    metrics: ["Personalization accuracy", "User satisfaction delta"],
    examples: ["A project manager's AI assistant learns they prefer bullet-point summaries and auto-formats all reports accordingly."],
    tags: ["personalization", "memory", "user-experience"],
    importance: "medium",
    complexity: "high",
  },
  {
    id: "cross-workflow-context",
    title: "Cross-Workflow Context Sharing",
    shortDescription: "AI shares relevant context across different workflows and departments",
    fullDescription:
      "In large organizations, different AI workflows may have relevant context for each other. A sales AI qualifying a lead may benefit from knowing that the support AI recently handled a complaint from that same company. Cross-workflow context enables holistic intelligence.\n\nImplementation substeps:\n1. Identify context sharing opportunities across workflows (sales ↔ support, finance ↔ operations)\n2. Design the shared context schema — what information is shareable, in what format\n3. Build context propagation — when workflow A generates insight, relevant workflows B and C are notified\n4. Implement access controls — not all context should cross all workflow boundaries\n5. Handle context freshness — shared context must be timestamped and expire appropriately\n6. Design conflict resolution — what if two workflows have contradictory context about the same entity?\n7. Build the context graph — entities (people, companies, products) as nodes, context as edges\n8. Monitor context quality — track whether shared context improves or confuses downstream decisions\n\nAdapt to your business: This is most valuable in organizations where departments interact with the same customers or entities. Companies with strong silos will see the biggest improvement. Start with 2-3 high-value context sharing pairs before building a full graph.",
    layer: "Memory & Context",
    track: "AI Capability",
    type: "pattern",
    dependencies: ["business-memory", "orchestration-layer"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Neo4j", "Custom event bus", "Shared vector stores"],
    risks: ["Context overload degrading AI decisions", "Privacy violations from unauthorized context sharing"],
    metrics: ["Decision improvement from shared context", "Cross-workflow accuracy", "Context freshness"],
    examples: ["A financial services firm shared AI-generated client sentiment scores from support with the sales team, enabling proactive retention outreach for at-risk accounts."],
    tags: ["context", "cross-functional", "knowledge-graph", "enterprise"],
    importance: "medium",
    complexity: "very_high",
  },
];
