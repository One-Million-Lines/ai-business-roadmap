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
  "Problem, Opportunity & Scope": {
    layer: "Problem, Opportunity & Scope",
    tagline: "Define where AI creates real business value — and what's actually in scope",
    description:
      "Before selecting tools or models, clearly define which business outcomes matter (cost, speed, accuracy, revenue, service quality, employee productivity), which functions are in scope (support, finance, sales, ops, HR), and where the pain is (repetitive work, decision bottlenecks, slow handoffs, poor visibility, knowledge fragmentation). Also define what kind of AI value is expected: insights, copilots, automation, orchestration, or prediction.",
    whyImportant:
      "Over 80% of failed AI projects trace back to poor problem framing. A lot of AI projects fail because the process itself is messy, inconsistent, or politically unclear. Without a baseline of the current process, volume and frequency of the problem, business criticality, and whether the process is stable enough to improve with AI, investment is misdirected.",
    howToApproach: [
      "Map existing workflows and identify friction points, bottlenecks, and manual processes",
      "Establish a baseline of the current process — measure before you improve",
      "Quantify volume and frequency of each problem, plus the cost of each (time, money, errors, customer impact)",
      "Assess business criticality and whether the process is stable enough for AI improvement",
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
      "What is the baseline of the current process (volume, frequency, cost)?",
      "Is the process stable enough to improve with AI, or does it need fixing first?",
      "Which decisions are made repeatedly with similar data patterns?",
      "What would change if we could process information 10x faster?",
      "Are competitors already using AI in this area?",
    ],
    expectedOutcomes: [
      "A prioritized list of AI opportunity areas ranked by impact and feasibility",
      "Clear problem statements with quantified business costs and baselines",
      "Executive alignment on which functions and processes are in scope",
      "Initial success metrics defined for the top opportunities",
      "Assessment of process stability and readiness for AI improvement",
    ],
    commonPitfalls: [
      "Jumping to AI solutions before understanding the problem",
      "No baseline of the current process — making ROI unprovable later",
      "Selecting problems that are too broad or vague",
      "Ignoring frontline input and relying only on leadership assumptions",
      "Targeting processes that are messy, inconsistent, or politically unclear",
      "Failing to quantify the cost of inaction",
    ],
    timeframe: "2–4 weeks",
  },

  "Use Case Discovery & Prioritization": {
    layer: "Use Case Discovery & Prioritization",
    tagline: "Discover, rank, and separate quick wins from strategic bets",
    description:
      "First comes discovery: list all candidate use cases across the organization. Then prioritization: rank them by business value, feasibility, data readiness, risk, and time to value. Separate quick wins from strategic bets. Identify human-in-the-loop vs. full automation candidates. Not all good AI demos are good business use cases — a use case is good only if it can survive real workflows, real exceptions, and real owners.",
    whyImportant:
      "A poorly prioritized portfolio leads to wasted investment on flashy demos that don't deliver business value. This step ensures the organization invests in use cases that are impactful, feasible, and have clear ownership. It also helps de-risk the AI program by sequencing quick wins (which build confidence) before strategic bets.",
    howToApproach: [
      "List all candidate use cases from problem discovery workshops",
      "Write user stories: 'As a [role], I want [AI capability], so that [business outcome]'",
      "Rank by impact, implementation effort, data availability, integration complexity, trust/risk level, and change management effort",
      "Separate quick wins (high value, low effort) from strategic bets (transformational, high effort)",
      "Identify human-in-the-loop vs. fully automated candidates for each use case",
      "Map the current vs. future workflow side by side for top candidates",
      "Start with a minimum viable use case and plan for iterative expansion",
    ],
    whoToInclude: [
      "Product managers — to shape use cases and prioritize features",
      "End users — to validate workflow fit and usability",
      "Data team — to assess data availability and quality",
      "UX / Design — to plan how AI outputs will be presented",
      "Legal / Compliance — to flag regulatory considerations early",
    ],
    keyQuestions: [
      "Which use cases have the highest business value relative to implementation effort?",
      "What data is needed and is it available in sufficient quality?",
      "Which use cases can survive real workflows, real exceptions, and real owners?",
      "What's the right mix of quick wins and strategic bets?",
      "Which use cases require human-in-the-loop and which can be fully automated?",
      "What happens when the AI is wrong — what's the fallback?",
      "How will we measure if the use case is successful?",
    ],
    expectedOutcomes: [
      "Prioritized use case portfolio with clear ranking methodology",
      "Documented use case specifications with user stories for top candidates",
      "Quick wins identified and ready for fast-track implementation",
      "Data requirements and gap analysis for each use case",
      "Risk assessment and human-in-the-loop classification for each use case",
      "Go/no-go decision criteria for moving to architecture",
    ],
    commonPitfalls: [
      "Not all good AI demos are good business use cases — filtering by demo quality instead of workflow fit",
      "Designing use cases in isolation from actual users",
      "Overscoping the initial version — trying to do too much at once",
      "Ignoring data quality and availability constraints",
      "Not planning for AI failure modes and human fallbacks",
      "Skipping prioritization and trying to do everything at once",
    ],
    timeframe: "2–6 weeks",
  },

  "Decision Model & Operating Model": {
    layer: "Decision Model & Operating Model",
    tagline: "Define who decides — human, AI, or hybrid — and how accountability works",
    description:
      "Before architecture, define how decisions are made. This layer establishes who has authority (human, AI, or hybrid), what the AI is allowed to do, what requires confirmation, escalation paths, accountability chains, process ownership, and governance structures. This is where you define the levels: AI suggests, AI drafts, AI acts with approval, AI acts autonomously in bounded scenarios.",
    whyImportant:
      "For bigger companies, this matters as much as the technical design. Without a clear decision model, AI either gets blocked by uncertainty (nobody knows if it's allowed to act) or creates risk (it acts without proper oversight). This layer prevents both paralysis and liability. It also establishes the foundation for progressive autonomy as AI systems prove their reliability.",
    howToApproach: [
      "Map all decisions AI will support or make — classify each by risk level and reversibility",
      "Define autonomy levels per decision type: suggest, draft, act with approval, act autonomously",
      "Establish escalation paths: what happens when AI confidence is low or the situation is novel",
      "Assign process ownership: who is accountable for each AI-assisted decision domain",
      "Design governance structure: who reviews and adjusts AI autonomy levels over time",
      "Document approval authority matrices aligned with existing organizational hierarchies",
      "Define criteria for progressive autonomy (accuracy thresholds, volume thresholds, error history)",
    ],
    whoToInclude: [
      "C-suite — to define organizational risk appetite and accountability",
      "Legal / Compliance — to validate decision authority frameworks",
      "Department heads — to define process ownership within their domains",
      "HR — to assess workforce impact and change management needs",
      "Internal audit — to validate governance and control adequacy",
    ],
    keyQuestions: [
      "Which decisions can AI make autonomously vs. which require human confirmation?",
      "What is the organization's AI risk appetite?",
      "Who is accountable when an AI-assisted decision goes wrong?",
      "What are the escalation paths for edge cases and low-confidence situations?",
      "How will AI autonomy levels be reviewed and adjusted over time?",
      "How does this map to existing approval authorities and governance structures?",
      "What criteria must be met before increasing AI autonomy for a decision type?",
    ],
    expectedOutcomes: [
      "Decision authority matrix documenting human vs. AI vs. hybrid roles per decision type",
      "Autonomy level classification for all AI-supported decisions",
      "Escalation path documentation with clear triggers and owners",
      "Governance structure for ongoing AI freedom review and adjustment",
      "Accountability framework mapping decisions to responsible roles",
      "Progressive autonomy criteria and review cadence",
    ],
    commonPitfalls: [
      "Skipping this layer and jumping to architecture — leading to undefined accountability",
      "Defining governance only on paper without operational enforcement",
      "Making autonomy levels too conservative, defeating the purpose of AI investment",
      "Making autonomy levels too aggressive, creating unmanaged risk",
      "Not involving legal and compliance early enough in decision authority design",
      "Failing to plan for progressive autonomy — staying at 'AI suggests' forever",
    ],
    timeframe: "2–4 weeks",
  },

  "Data, Knowledge, Memory & Context": {
    layer: "Data, Knowledge, Memory & Context",
    tagline: "Define what the system needs to know to act correctly",
    description:
      "In enterprise AI, the real question is: what does the system need to know to act correctly? This layer covers structured data sources, unstructured knowledge, permissions and access boundaries, short-term context vs. long-term memory, entity resolution (customers, orders, products, contracts, employees), retrieval strategy, freshness and source of truth, and auditability of context used.",
    whyImportant:
      "Generic AI gives generic answers. The difference between useful AI and frustrating AI is context. This layer determines whether AI knows your products, policies, customer history, and domain nuances. Many teams mix up context (what is needed now for this task), memory (what should persist and influence future actions), and knowledge base (official business information). Getting this distinction right is critical for accuracy, trust, and cost.",
    howToApproach: [
      "Inventory structured data sources (databases, CRM, ERP) and unstructured knowledge (documents, SOPs, FAQs, playbooks)",
      "Define entity resolution strategy: how does the system identify customers, orders, products, contracts, employees across sources",
      "Design retrieval strategy: what data is fetched in real-time vs. pre-loaded vs. cached",
      "Separate context (task-level), memory (persistent), and knowledge base (reference data) requirements",
      "Define permissions and access boundaries — AI should respect the same access controls as humans",
      "Establish source of truth and freshness requirements per data type",
      "Build auditability: log which context was used for each AI decision",
      "Create feedback loops so AI context improves over time based on usage",
    ],
    whoToInclude: [
      "Knowledge management teams — to curate and structure organizational data",
      "Subject matter experts — to validate AI context accuracy",
      "Data engineers — to build retrieval and indexing pipelines",
      "AI / ML engineers — to design context injection and memory systems",
      "Security / Compliance — to define access boundaries and auditability requirements",
      "End users — to identify what context makes AI responses useful vs. irrelevant",
    ],
    keyQuestions: [
      "What does the AI need to know for each use case — and what is the source of truth?",
      "How fresh does the context need to be — real-time, daily, or static?",
      "How do we resolve entities (customers, products, contracts) across multiple data sources?",
      "What is the distinction between context, memory, and knowledge base for each use case?",
      "How do we handle conflicting or outdated information?",
      "What permissions and access boundaries apply to AI data access?",
      "Can we audit which context was used for each AI decision?",
    ],
    expectedOutcomes: [
      "Data and knowledge inventory with source-of-truth designations",
      "Entity resolution strategy across all relevant data sources",
      "Context vs. memory vs. knowledge base classification per use case",
      "Retrieval architecture with freshness requirements",
      "Access control and permission model for AI data access",
      "Auditability framework for context used in AI decisions",
      "Feedback mechanisms for continuous context improvement",
    ],
    commonPitfalls: [
      "Dumping all documents into a vector database without curation",
      "Mixing up context, memory, and knowledge base — leading to bloated prompts and wrong answers",
      "Ignoring context freshness — outdated docs lead to wrong answers",
      "Providing too much context, which confuses the model and increases costs",
      "Not resolving entities across systems — leading to duplicate or conflicting information",
      "Not measuring retrieval quality separately from generation quality",
    ],
    timeframe: "3–8 weeks",
  },

  "Solution Architecture": {
    layer: "Solution Architecture",
    tagline: "Design the technical foundation — conceptual, not over-engineered",
    description:
      "Define the core systems involved, model layer, orchestration layer, tool/action layer, data and retrieval layer, observability/logging layer, security boundaries, and fallback design. At roadmap level, keep this conceptual. Answer: single assistant or multiple specialized agents? Central orchestration or domain-specific services? Real-time or batch? Local, cloud, or hybrid? Deterministic workflows vs. agentic flows?",
    whyImportant:
      "Architecture decisions lock in costs, performance ceilings, and maintenance burdens for years. Getting this wrong leads to systems that can't scale, cost too much, or can't be updated when better models emerge. A good architecture enables rapid iteration, modularity, and responsible AI practices.",
    howToApproach: [
      "Audit existing systems and infrastructure capabilities",
      "Evaluate build vs. buy vs. API for each AI component",
      "Choose between cloud, on-premise, or hybrid deployment based on data sensitivity",
      "Design for modularity — swap models and providers without rebuilding everything",
      "Plan data pipelines: ingestion, transformation, storage, and access patterns",
      "Define observability requirements: logging, tracing, cost tracking per use case",
      "Design fallback chains: primary model → secondary → simplified → rule-based → human",
    ],
    whoToInclude: [
      "Solution architects — to design system topology and integrations",
      "ML / AI engineers — to advise on model requirements and constraints",
      "Infrastructure / DevOps — to plan compute, storage, and networking",
      "Security team — to define data boundaries and access controls",
      "Procurement — to evaluate vendor options and licensing",
    ],
    keyQuestions: [
      "Single assistant or multiple specialized agents?",
      "Central orchestration or domain-specific services?",
      "Real-time or batch processing — or both?",
      "Local, cloud, or hybrid model deployment?",
      "Deterministic workflows or agentic flows — or a mix?",
      "Should we use proprietary APIs, open-source models, or fine-tuned models?",
      "What are our latency and throughput requirements?",
      "What's the estimated cost per inference at expected scale?",
    ],
    expectedOutcomes: [
      "Architecture decision records (ADRs) for key choices",
      "System architecture diagrams showing all AI components",
      "Infrastructure cost projections at different scale scenarios",
      "Security and data flow documentation",
      "Technology stack selection with rationale",
      "Fallback and degradation strategy documented",
    ],
    commonPitfalls: [
      "Over-engineering before validating the use case works",
      "Vendor lock-in through proprietary APIs without abstraction layers",
      "Ignoring inference costs at production scale",
      "Not planning for model updates and versioning from day one",
      "Building everything real-time when batch would suffice at 1/10th the cost",
    ],
    timeframe: "3–8 weeks",
  },

  "Integration & Process Embedding": {
    layer: "Integration & Process Embedding",
    tagline: "Connect AI into systems AND into the actual work",
    description:
      "Two parts: system integration (APIs, CRMs, ERPs, email, ticketing, docs, identity) and workflow integration (where AI shows up in the actual work). This means: inside existing tools or in a separate interface? Proactive or on-demand? Individual workflow or team workflow? At what step in the business process does AI intervene? A lot of projects fail because the AI works technically but lives outside the actual workflow.",
    whyImportant:
      "The best AI model is useless if people can't access it where they work. Integration determines adoption. If AI requires switching tools or extra steps, usage drops dramatically. Beyond system connectivity, workflow embedding ensures AI adds value at the right moment in the business process — not as a separate tool people must remember to use.",
    howToApproach: [
      "Map all systems that need to connect — CRM, ERP, communication tools, databases",
      "Design APIs and webhooks for real-time and batch AI interactions",
      "Build AI into existing UIs rather than creating separate AI dashboards",
      "Define where in the business process AI intervenes — map the insertion points",
      "Decide: proactive (AI initiates) or on-demand (user invokes) for each use case",
      "Test integrations with real users in staging environments before production",
      "Plan for both individual and team workflow integration patterns",
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
      "Does AI initiate proactively or wait for the user to invoke it?",
      "Is this an individual workflow or a team workflow?",
      "At what step in the business process does AI intervene?",
      "Inside existing tools or in a separate interface?",
      "What's the latency tolerance for AI responses in each workflow?",
      "How do we maintain integrations as upstream systems change?",
    ],
    expectedOutcomes: [
      "Working integrations in staging with all connected systems",
      "Workflow integration map showing exactly where AI appears in each business process",
      "API documentation and connector specifications",
      "Error handling and retry strategies defined",
      "User acceptance testing completed with positive feedback",
      "Monitoring dashboards for integration health",
    ],
    commonPitfalls: [
      "AI works technically but lives outside the actual workflow — nobody uses it",
      "Building standalone AI tools instead of integrating into existing workflows",
      "Underestimating the complexity of legacy system integrations",
      "Not handling API failures, timeouts, and rate limits",
      "Skipping user testing before production deployment",
    ],
    timeframe: "4–10 weeks",
  },

  "Execution & Pilot Design": {
    layer: "Execution & Pilot Design",
    tagline: "Pilot specific workflows with measurable outcomes",
    description:
      "Instead of generic execution, this layer focuses on piloting specific workflows. Define pilot scope, target users, success criteria, workflow boundaries, training and support, rollout assumptions, exception handling, and feedback loops. Don't pilot 'the AI platform' — pilot specific workflows with measurable outcomes. Also covers orchestration patterns: simple prompts, chains, agents, event-driven, batch.",
    whyImportant:
      "How you orchestrate AI execution determines reliability, cost, and capability. And how you pilot determines whether the AI survives contact with real work. Poor execution design leads to unpredictable outputs. Poorly designed pilots fail to generate the evidence needed for scaling decisions. Well-designed execution with structured pilots ensures consistent, auditable, cost-effective AI operations.",
    howToApproach: [
      "Start with simple prompt patterns and graduate to chains and agents as needed",
      "Define pilot scope: specific workflow, specific users, specific success criteria",
      "Design prompt templates with clear instructions, examples, and output formats",
      "Plan training and support for pilot participants",
      "Define exception handling — what happens when the workflow breaks",
      "Build feedback loops into every pilot: daily in week 1, weekly after",
      "Build observability into every step — log inputs, outputs, latency, and costs",
      "Define clear success/failure criteria before the pilot starts",
    ],
    whoToInclude: [
      "AI / ML engineers — to design and optimize prompts and orchestration",
      "Backend engineers — to build reliable execution infrastructure",
      "Pilot users — a mix of enthusiasts and skeptics, diverse roles and skill levels",
      "Domain experts — to validate output quality and catch hallucinations",
      "Operations team — to monitor and manage production AI workloads",
      "Product managers — to define acceptable quality thresholds",
    ],
    keyQuestions: [
      "What specific workflow is being piloted, and with which users?",
      "What are the measurable success criteria?",
      "What training and support do pilot participants need?",
      "What happens when the AI produces unexpected or wrong outputs?",
      "How do we collect and act on feedback during the pilot?",
      "Do we need simple prompts, chains, or full agent architectures?",
      "What's the cost per execution and how do we optimize it?",
    ],
    expectedOutcomes: [
      "Documented pilot plan with scope, users, criteria, and timeline",
      "Execution pipelines with error handling and retry logic",
      "Pilot results report with clear go/no-go recommendation",
      "Feedback collected and incorporated from pilot participants",
      "Cost tracking per AI workflow with optimization targets",
      "Quality benchmarks with automated evaluation",
    ],
    commonPitfalls: [
      "Piloting 'the AI platform' instead of specific workflows with measurable outcomes",
      "Not defining success criteria before the pilot starts",
      "Over-engineering with agents when a simple prompt would suffice",
      "Insufficient training and support for pilot participants",
      "Not versioning prompts and losing track of what's in production",
      "Building without observability — can't improve what you can't measure",
    ],
    timeframe: "3–8 weeks",
  },

  "Trust, Risk, Governance & Control": {
    layer: "Trust, Risk, Governance & Control",
    tagline: "Operational safety plus accountability — not just branding",
    description:
      "Trust is not branding. It is operational safety plus accountability. This layer covers explainability, audit logs, compliance, privacy, security, bias and error handling, approval controls, rollback and reversibility, and monitoring for unsafe or low-confidence behavior. For enterprise AI, this determines whether stakeholders, regulators, customers, and employees trust the system.",
    whyImportant:
      "AI that can't be trusted won't be adopted — by employees, customers, or regulators. This layer protects the business from reputational risk, regulatory penalties, and harmful AI behaviors. Under-investing here can result in penalties, trust erosion, employee resistance, and reputational damage that far exceeds the cost of proper governance.",
    howToApproach: [
      "Implement human-in-the-loop for high-stakes decisions — approvals, escalations, overrides",
      "Build audit trails — log every AI decision with inputs, outputs, and reasoning",
      "Add content safety filters and output validation for all customer-facing AI",
      "Design rollback and reversibility procedures for AI actions",
      "Monitor for unsafe or low-confidence behavior in production",
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
      "Can we explain every AI decision to the affected person?",
      "What audit logs exist and are they complete?",
      "Are we compliant with relevant AI regulations (EU AI Act, sector-specific rules)?",
      "What is our rollback and reversibility strategy for AI actions?",
      "How do we detect and mitigate bias in AI outputs?",
      "What monitoring exists for unsafe or low-confidence behavior?",
      "What's our incident response plan when AI produces harmful outputs?",
    ],
    expectedOutcomes: [
      "Human oversight workflows for high-risk AI decisions",
      "Complete audit trail and logging for all AI interactions",
      "Content safety and output validation systems in production",
      "Rollback and reversibility procedures tested and documented",
      "Bias testing reports with remediation plans",
      "Responsible AI policy approved by leadership",
      "Monitoring for unsafe behavior operational in production",
    ],
    commonPitfalls: [
      "Treating governance as a one-time checklist instead of ongoing practice",
      "Adding trust controls only after a public incident",
      "Over-restricting AI to the point it becomes useless",
      "Not testing for bias with representative real-world data",
      "No rollback plan — making AI actions irreversible by default",
    ],
    timeframe: "Ongoing — start in parallel with architecture",
  },

  "Measurement & Learning Loop": {
    layer: "Measurement & Learning Loop",
    tagline: "Measure outcomes, corrections, and missing context — not just KPIs",
    description:
      "Measurement should be more than KPI reporting. Measure business outcomes, adoption, quality, latency, failure rate, override rate, automation rate, trust signals, and model/workflow drift. Also measure where humans keep correcting the system, where context is missing, and where the process itself is broken. That is what improves the next iteration.",
    whyImportant:
      "Without measurement, you can't prove AI value, justify continued investment, or know when models degrade. The learning loop aspect — measuring corrections, missing context, and broken processes — is what transforms AI from a static deployment into a continuously improving system.",
    howToApproach: [
      "Define metrics at three levels: business (impact on KPIs), operational (system health), and learning (what's being corrected)",
      "Build dashboards that connect AI metrics to business outcomes",
      "Track where humans override or correct AI outputs — this is learning signal",
      "Identify where context is missing or the process itself is broken",
      "Set up automated monitoring — detect drift, degradation, and anomalies",
      "Collect user feedback systematically (thumbs up/down, corrections, satisfaction)",
      "Establish review cadences — weekly ops, monthly business impact, quarterly strategy",
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
      "Where are humans consistently correcting the AI — and what does that tell us?",
      "Where is context missing that would improve AI outputs?",
      "How do we detect when model quality or workflow quality degrades?",
      "What's our current baseline so we can measure improvement?",
      "Where is the process itself broken, independent of AI?",
      "When do metrics justify scaling vs. pausing vs. retiring an AI feature?",
    ],
    expectedOutcomes: [
      "Live dashboards connecting AI metrics to business KPIs",
      "Override and correction tracking with pattern analysis",
      "Automated model monitoring with alerts for drift and degradation",
      "Regular reporting cadence with actionable insights",
      "Context gap analysis informing knowledge base improvements",
      "Process improvement recommendations from measurement data",
      "Clear criteria for when to scale, optimize, or retire AI features",
    ],
    commonPitfalls: [
      "Measuring only technical accuracy without connecting to business impact",
      "Not tracking human corrections and overrides — missing the best learning signal",
      "Not establishing baselines before deploying AI",
      "Building dashboards that nobody reviews regularly",
      "Ignoring qualitative user feedback in favor of only quantitative metrics",
      "Not feeding measurement insights back into earlier layers",
    ],
    timeframe: "2–4 weeks setup, then continuous",
  },

  "Rollout, Adoption & Scaling": {
    layer: "Rollout, Adoption & Scaling",
    tagline: "Scale AI by standardizing patterns, not just deploying models",
    description:
      "Rollout is the final mile. This covers phased rollout by function or region, enablement and onboarding, internal champions, support model, governance cadence, platform ownership, and reuse of components across use cases. At enterprise level, scaling AI is less about deploying models and more about standardizing patterns: shared guardrails, common architecture components, reusable connectors, evaluation standards, and ownership models.",
    whyImportant:
      "Many AI projects succeed in pilots but fail to scale. Rollout determines whether AI becomes embedded in how the organization operates or remains an isolated experiment. Scaling is as much about people and standardized patterns as it is about technology — adoption requires change management, training, champions, and a clear ownership model.",
    howToApproach: [
      "Plan phased rollout: pilot group → department → division → enterprise",
      "Identify and empower internal champions in each function",
      "Build enablement and onboarding programs — not just documentation",
      "Define the support model: who helps when AI misbehaves",
      "Establish governance cadence: regular reviews, autonomy level adjustments",
      "Define platform ownership: who maintains and evolves the AI capabilities",
      "Standardize reusable components: shared guardrails, connectors, evaluation standards",
    ],
    whoToInclude: [
      "Change management / Organizational development — to drive adoption",
      "Training / L&D team — to create learning materials and programs",
      "Executive sponsors — to champion the rollout and remove blockers",
      "Internal champions — pilot users who advocate for broader rollout",
      "IT support — to handle user issues and escalations",
      "Platform team — to own and maintain reusable AI components",
    ],
    keyQuestions: [
      "What is the phased rollout plan by function or region?",
      "Who are the internal champions and how are they supported?",
      "What enablement and onboarding is needed beyond documentation?",
      "What is the support model for AI issues in production?",
      "Who owns the platform and its components long-term?",
      "Which components are reusable across use cases (guardrails, connectors, evaluations)?",
      "What is the governance cadence for reviewing AI autonomy and performance?",
    ],
    expectedOutcomes: [
      "Phased rollout plan with clear milestones and success criteria per phase",
      "Internal champion network established across functions",
      "Enablement program completed for all user groups",
      "Support model defined and operational",
      "Platform ownership and component reuse strategy documented",
      "Standardized patterns: shared guardrails, common connectors, evaluation standards",
      "Governance cadence established with regular review cycles",
    ],
    commonPitfalls: [
      "Skipping the pilot and going straight to full deployment",
      "Underinvesting in enablement and change management",
      "Not having internal champions to drive peer-to-peer adoption",
      "No clear platform ownership — AI becomes nobody's responsibility",
      "Building everything custom per use case instead of standardizing patterns",
      "Declaring success too early based on pilot results alone",
    ],
    timeframe: "4–12 weeks per phase",
  },
};
