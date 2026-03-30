import type { Layer } from "./types";

export interface LayerDetail {
  layer: Layer;
  tagline: string;
  description: string;
  whyImportant: string;
  howToApproach: string[];
  whoToInclude: string[];
  keyQuestions: string[];
  expectedOutcomes: string[];
  commonPitfalls: string[];
  timeframe: string;
}

export const layerDetails: Record<Layer, LayerDetail> = {
  "Problem & Opportunity": {
    layer: "Problem & Opportunity",
    tagline: "Identify where AI creates real business value",
    description:
      "This is the foundation of any AI initiative. Before selecting tools or models, you must clearly identify the business problems worth solving and the opportunities AI can unlock. This step aligns AI efforts with strategic goals and ensures investment is directed at high-impact areas.",
    whyImportant:
      "Without a clear problem definition, AI projects become technology-driven experiments that fail to deliver ROI. Research shows that over 80% of failed AI projects trace back to poor problem framing. Starting with business outcomes ensures executive buy-in and measurable success criteria.",
    howToApproach: [
      "Map existing workflows and identify friction points, bottlenecks, and manual processes",
      "Quantify the cost of each problem — time, money, errors, customer impact",
      "Score opportunities by business impact vs. implementation feasibility",
      "Validate with frontline teams that the problem is real and recurring",
      "Define success criteria before exploring solutions",
    ],
    whoToInclude: [
      "C-suite / Executive sponsors — for strategic alignment and budget approval",
      "Department heads — to surface real operational pain points",
      "Frontline employees — to validate problem severity and frequency",
      "Finance / FP&A — to quantify costs and potential ROI",
      "Innovation or strategy teams — to map competitive landscape",
    ],
    keyQuestions: [
      "What are our most expensive manual processes?",
      "Where do errors or delays impact customer satisfaction the most?",
      "Which decisions are made repeatedly with similar data patterns?",
      "What would change if we could process information 10x faster?",
      "Are competitors already using AI in this area?",
    ],
    expectedOutcomes: [
      "A prioritized list of AI opportunity areas ranked by impact and feasibility",
      "Clear problem statements with quantified business costs",
      "Executive alignment on where to invest first",
      "Initial success metrics defined for the top opportunities",
    ],
    commonPitfalls: [
      "Jumping to AI solutions before understanding the problem",
      "Selecting problems that are too broad or vague",
      "Ignoring frontline input and relying only on leadership assumptions",
      "Failing to quantify the cost of inaction",
    ],
    timeframe: "2–4 weeks",
  },

  "Use Case Design": {
    layer: "Use Case Design",
    tagline: "Translate problems into actionable AI use cases",
    description:
      "Once you know what problems to solve, this step designs concrete AI use cases — specifying what the AI will do, for whom, and how it fits into existing workflows. Good use case design bridges the gap between a business need and a technical specification.",
    whyImportant:
      "A poorly designed use case leads to AI that technically works but nobody uses. This step ensures the solution is user-centered, fits into real workflows, and has clear boundaries. It also helps de-risk projects by scoping them appropriately and identifying integration points early.",
    howToApproach: [
      "Write user stories: 'As a [role], I want [AI capability], so that [business outcome]'",
      "Map the current vs. future workflow side by side",
      "Define input/output pairs — what data goes in, what decisions or actions come out",
      "Identify edge cases and failure modes early",
      "Start with a minimum viable use case and plan for iterative expansion",
    ],
    whoToInclude: [
      "Product managers — to shape the use case and prioritize features",
      "End users — to validate workflow fit and usability",
      "Data team — to assess data availability and quality",
      "UX / Design — to plan how AI outputs will be presented",
      "Legal / Compliance — to flag regulatory considerations early",
    ],
    keyQuestions: [
      "Who will interact with this AI capability and in what context?",
      "What decisions or actions will the AI support or automate?",
      "What data is needed and is it available in sufficient quality?",
      "What happens when the AI is wrong — what's the fallback?",
      "How will we measure if the use case is successful?",
    ],
    expectedOutcomes: [
      "Documented use case specifications with user stories",
      "Workflow diagrams showing current and AI-enhanced processes",
      "Data requirements and gap analysis",
      "Risk assessment for each use case",
      "Go/no-go decision criteria for moving to architecture",
    ],
    commonPitfalls: [
      "Designing use cases in isolation from actual users",
      "Overscoping the initial version — trying to do too much at once",
      "Ignoring data quality and availability constraints",
      "Not planning for AI failure modes and human fallbacks",
    ],
    timeframe: "2–6 weeks",
  },

  Architecture: {
    layer: "Architecture",
    tagline: "Design the technical foundation for AI systems",
    description:
      "Architecture defines how AI components will be built, connected, and scaled within your existing technology landscape. This includes model selection, infrastructure decisions, data pipelines, and how AI services integrate with enterprise systems.",
    whyImportant:
      "Architecture decisions lock in costs, performance ceilings, and maintenance burdens for years. Getting this wrong leads to systems that can't scale, cost too much to run, or can't be updated when better models emerge. A good architecture enables rapid iteration and responsible AI practices.",
    howToApproach: [
      "Audit existing systems and infrastructure capabilities",
      "Evaluate build vs. buy vs. API for each AI component",
      "Choose between cloud, on-premise, or hybrid deployment based on data sensitivity",
      "Design for modularity — swap models and providers without rebuilding everything",
      "Plan data pipelines: ingestion, transformation, storage, and access patterns",
    ],
    whoToInclude: [
      "Solution architects — to design system topology and integrations",
      "ML / AI engineers — to advise on model requirements and constraints",
      "Infrastructure / DevOps — to plan compute, storage, and networking",
      "Security team — to define data boundaries and access controls",
      "Procurement — to evaluate vendor options and licensing",
    ],
    keyQuestions: [
      "Should we use proprietary APIs, open-source models, or fine-tuned models?",
      "What are our latency and throughput requirements?",
      "Where does sensitive data live and how do we keep it protected?",
      "How will we version and update models without downtime?",
      "What's the estimated cost per inference at expected scale?",
    ],
    expectedOutcomes: [
      "Architecture decision records (ADRs) for key choices",
      "System architecture diagrams showing all AI components",
      "Infrastructure cost projections at different scale scenarios",
      "Security and data flow documentation",
      "Technology stack selection with rationale",
    ],
    commonPitfalls: [
      "Over-engineering before validating the use case works",
      "Vendor lock-in through proprietary APIs without abstraction layers",
      "Ignoring inference costs at production scale",
      "Not planning for model updates and versioning from day one",
    ],
    timeframe: "3–8 weeks",
  },

  Integration: {
    layer: "Integration",
    tagline: "Connect AI into existing business systems and workflows",
    description:
      "Integration is where AI meets reality. This step focuses on embedding AI capabilities into the tools, platforms, and processes your teams already use. It covers APIs, data connectors, UI integration, and ensuring seamless handoffs between human and AI workflows.",
    whyImportant:
      "The best AI model is useless if people can't access it where they work. Integration determines adoption — if AI requires switching tools or extra steps, usage drops dramatically. Smooth integration also ensures data flows correctly and outputs reach decision-makers in real time.",
    howToApproach: [
      "Map all systems that need to connect — CRM, ERP, communication tools, databases",
      "Design APIs and webhooks for real-time and batch AI interactions",
      "Build AI into existing UIs rather than creating separate AI dashboards",
      "Create data transformation layers to normalize inputs and outputs",
      "Test integrations with real users in staging environments before production",
    ],
    whoToInclude: [
      "Integration / Platform engineers — to build connectors and APIs",
      "Business systems owners — to approve changes to existing platforms",
      "End users / Power users — to validate the integrated experience",
      "QA team — to test data flows and edge cases",
      "Change management — to plan rollout and training",
    ],
    keyQuestions: [
      "Which existing tools will AI outputs appear in?",
      "What's the latency tolerance for AI responses in each workflow?",
      "How will we handle API failures or timeouts gracefully?",
      "What data format transformations are needed between systems?",
      "How do we maintain integrations as upstream systems change?",
    ],
    expectedOutcomes: [
      "Working integrations in staging with all connected systems",
      "API documentation and connector specifications",
      "Error handling and retry strategies defined",
      "User acceptance testing completed with positive feedback",
      "Monitoring dashboards for integration health",
    ],
    commonPitfalls: [
      "Building standalone AI tools instead of integrating into existing workflows",
      "Underestimating the complexity of legacy system integrations",
      "Not handling API failures, timeouts, and rate limits",
      "Skipping user testing before production deployment",
    ],
    timeframe: "4–10 weeks",
  },

  "Memory & Context": {
    layer: "Memory & Context",
    tagline: "Give AI the context it needs to be useful",
    description:
      "AI systems need the right context to produce relevant outputs. This layer addresses how to provide AI with organizational knowledge, conversation history, user preferences, and domain-specific data — turning a generic AI into one that understands your business.",
    whyImportant:
      "Generic AI gives generic answers. The difference between an AI that frustrates users and one that delights them is context. This layer determines whether AI knows your products, policies, customer history, and domain nuances — which directly impacts accuracy and trust.",
    howToApproach: [
      "Inventory organizational knowledge: documents, SOPs, FAQs, support tickets, playbooks",
      "Build retrieval-augmented generation (RAG) pipelines for domain-specific knowledge",
      "Design context windows — what information should the AI have for each interaction",
      "Implement conversation memory for multi-turn interactions",
      "Create feedback loops so AI context improves over time based on usage",
    ],
    whoToInclude: [
      "Knowledge management teams — to curate and structure organizational data",
      "Subject matter experts — to validate AI context accuracy",
      "Data engineers — to build retrieval and indexing pipelines",
      "AI / ML engineers — to design context injection and memory systems",
      "End users — to identify what context makes AI responses useful vs. irrelevant",
    ],
    keyQuestions: [
      "What organizational knowledge does the AI need to answer domain-specific questions?",
      "How fresh does the context need to be — real-time, daily, or static?",
      "How do we handle conflicting or outdated information in the knowledge base?",
      "Should the AI remember previous interactions with the same user?",
      "What's the right balance between context richness and response speed?",
    ],
    expectedOutcomes: [
      "A curated, indexed knowledge base accessible to AI systems",
      "RAG pipelines delivering relevant context with measurable retrieval quality",
      "Context management strategy for each AI use case",
      "Feedback mechanisms for continuous context improvement",
      "Clear data governance rules for what context is accessible",
    ],
    commonPitfalls: [
      "Dumping all documents into a vector database without curation",
      "Ignoring context freshness — outdated docs lead to wrong answers",
      "Providing too much context, which confuses the model and increases costs",
      "Not measuring retrieval quality separately from generation quality",
    ],
    timeframe: "3–8 weeks",
  },

  Execution: {
    layer: "Execution",
    tagline: "Orchestrate AI workflows and agent behaviors",
    description:
      "Execution defines how AI actually runs — from simple prompt-response patterns to complex multi-step agent workflows. This layer covers prompt engineering, chain-of-thought orchestration, tool use by AI agents, and how AI actions are sequenced and managed.",
    whyImportant:
      "How you orchestrate AI execution determines reliability, cost, and capability. Poor execution design leads to unpredictable outputs, runaway costs, and workflows that break under edge cases. Well-designed execution patterns ensure consistent, auditable, and cost-effective AI operations.",
    howToApproach: [
      "Start with simple prompt patterns and graduate to chains and agents as needed",
      "Design prompt templates with clear instructions, examples, and output formats",
      "Implement orchestration layers for multi-step AI workflows",
      "Define tool-use boundaries — what actions AI agents can and cannot take",
      "Build observability into every step — log inputs, outputs, latency, and costs",
    ],
    whoToInclude: [
      "AI / ML engineers — to design and optimize prompts and orchestration",
      "Backend engineers — to build reliable execution infrastructure",
      "Domain experts — to validate output quality and catch hallucinations",
      "Operations team — to monitor and manage production AI workloads",
      "Product managers — to define acceptable quality thresholds",
    ],
    keyQuestions: [
      "Do we need simple prompts, chains, or full agent architectures?",
      "How do we handle AI outputs that don't meet quality thresholds?",
      "What's the cost per execution and how do we optimize it?",
      "How do we test and version prompts systematically?",
      "What tools and actions should AI agents be allowed to use?",
    ],
    expectedOutcomes: [
      "Documented prompt templates and orchestration patterns",
      "Execution pipelines with error handling and retry logic",
      "Cost tracking per AI workflow with optimization targets",
      "Quality benchmarks with automated evaluation",
      "Agent tool-use policies and guardrails defined",
    ],
    commonPitfalls: [
      "Over-engineering with agents when a simple prompt would suffice",
      "Not versioning prompts and losing track of what's in production",
      "Ignoring execution costs until the monthly bill arrives",
      "Building without observability — can't improve what you can't measure",
    ],
    timeframe: "3–6 weeks",
  },

  "Trust & Control": {
    layer: "Trust & Control",
    tagline: "Ensure AI is safe, fair, and accountable",
    description:
      "Trust & Control addresses the governance, safety, and ethical dimensions of AI. This includes human oversight mechanisms, bias detection, content safety filters, audit trails, and ensuring AI decisions can be explained and challenged.",
    whyImportant:
      "AI that can't be trusted won't be adopted — by employees, customers, or regulators. This layer protects the business from reputational risk, regulatory penalties, and harmful AI behaviors. It's also the foundation for scaling AI responsibly, as trust issues compound with every new deployment.",
    howToApproach: [
      "Implement human-in-the-loop for high-stakes decisions — approvals, escalations, overrides",
      "Add content safety filters and output validation for all customer-facing AI",
      "Build audit trails — log every AI decision with inputs, outputs, and reasoning",
      "Test for bias across demographic groups and edge cases",
      "Create a responsible AI policy and review board for new deployments",
    ],
    whoToInclude: [
      "Legal / Compliance — to ensure regulatory adherence (EU AI Act, GDPR, etc.)",
      "Ethics / Responsible AI team — to assess fairness and societal impact",
      "Security — to prevent prompt injection, data leakage, and misuse",
      "HR / DEI team — to evaluate bias in AI systems affecting people decisions",
      "Executive leadership — to own organizational AI governance",
    ],
    keyQuestions: [
      "What decisions require human approval before AI acts?",
      "How do we detect and mitigate bias in AI outputs?",
      "Can we explain every AI decision to the affected person?",
      "Are we compliant with relevant AI regulations (EU AI Act, sector-specific rules)?",
      "What's our incident response plan when AI produces harmful outputs?",
    ],
    expectedOutcomes: [
      "Human oversight workflows for high-risk AI decisions",
      "Content safety and output validation systems in production",
      "Complete audit trail and logging for all AI interactions",
      "Bias testing reports with remediation plans",
      "Responsible AI policy approved by leadership",
    ],
    commonPitfalls: [
      "Treating governance as a one-time checklist instead of ongoing practice",
      "Adding trust controls only after a public incident",
      "Over-restricting AI to the point it becomes useless",
      "Not testing for bias with representative real-world data",
    ],
    timeframe: "Ongoing — start in parallel with architecture",
  },

  Measurement: {
    layer: "Measurement",
    tagline: "Quantify AI impact and drive continuous improvement",
    description:
      "Measurement ties AI performance back to business outcomes. This layer defines what to measure, how to measure it, and how to use data to continuously improve AI systems. It covers technical metrics (accuracy, latency), business KPIs (ROI, time saved), and user satisfaction.",
    whyImportant:
      "Without measurement, you can't prove AI value, justify continued investment, or know when models degrade. This layer turns AI from a cost center into a measurable business capability. It also enables data-driven decisions about when to scale, retrain, or retire AI features.",
    howToApproach: [
      "Define metrics at three levels: technical (model performance), operational (system health), and business (impact on KPIs)",
      "Build dashboards that connect AI metrics to business outcomes",
      "Set up automated model monitoring — detect drift, degradation, and anomalies",
      "Collect user feedback systematically (thumbs up/down, corrections, satisfaction surveys)",
      "Establish regular review cadences — weekly ops, monthly business impact, quarterly strategy",
    ],
    whoToInclude: [
      "Data / BI team — to build dashboards and analytics pipelines",
      "AI / ML engineers — to implement model monitoring and evaluation",
      "Business owners — to define and validate business KPIs",
      "Finance — to track and validate ROI calculations",
      "End users — to provide qualitative feedback on AI usefulness",
    ],
    keyQuestions: [
      "What business KPIs should improve as a result of this AI implementation?",
      "How do we detect when model quality degrades over time?",
      "What's our current baseline so we can measure improvement?",
      "How do we capture and act on user feedback about AI quality?",
      "When do metrics justify scaling vs. pausing vs. retiring an AI feature?",
    ],
    expectedOutcomes: [
      "Live dashboards connecting AI metrics to business KPIs",
      "Automated model monitoring with alerts for drift and degradation",
      "Baseline measurements established before AI deployment",
      "Regular reporting cadence with actionable insights",
      "Clear criteria for when to scale, optimize, or retire AI features",
    ],
    commonPitfalls: [
      "Measuring only technical accuracy without connecting to business impact",
      "Not establishing baselines before deploying AI",
      "Building dashboards that nobody reviews regularly",
      "Ignoring qualitative user feedback in favor of only quantitative metrics",
    ],
    timeframe: "2–4 weeks setup, then continuous",
  },

  Rollout: {
    layer: "Rollout",
    tagline: "Deploy AI at scale with confidence",
    description:
      "Rollout is the final mile — taking AI from validated prototype to enterprise-wide deployment. This layer covers phased rollout strategies, change management, user training, organizational scaling, and sustaining AI programs long-term.",
    whyImportant:
      "Many AI projects succeed in pilots but fail to scale. Rollout determines whether AI becomes embedded in how the organization operates or remains an isolated experiment. This step is as much about people and process as it is about technology — adoption requires change management, training, and executive commitment.",
    howToApproach: [
      "Plan a phased rollout: pilot group → department → division → enterprise",
      "Build a change management plan — communicate the why, not just the how",
      "Create training materials and support channels for end users",
      "Define rollback criteria — what triggers reverting to the previous process",
      "Establish an AI center of excellence to scale best practices across teams",
    ],
    whoToInclude: [
      "Change management / Organizational development — to drive adoption",
      "Training / L&D team — to create learning materials and programs",
      "Executive sponsors — to champion the rollout and remove blockers",
      "IT support — to handle user issues and escalations",
      "Pilot users — to become internal champions and peer trainers",
    ],
    keyQuestions: [
      "Who are the right pilot users to start with?",
      "What training is needed before users can effectively work with AI?",
      "What does success look like at each rollout phase?",
      "How do we handle resistance to change?",
      "What's the plan for ongoing support and continuous improvement post-rollout?",
    ],
    expectedOutcomes: [
      "Phased rollout plan with clear milestones and success criteria",
      "Change management and communication strategy executed",
      "Training completed for all user groups with certification where applicable",
      "AI center of excellence established for ongoing governance and scaling",
      "Post-deployment review completed with lessons learned documented",
    ],
    commonPitfalls: [
      "Skipping the pilot and going straight to full deployment",
      "Underinvesting in training and change management",
      "Not having a rollback plan when things go wrong",
      "Declaring success too early based on pilot results alone",
    ],
    timeframe: "4–12 weeks per phase",
  },
};
