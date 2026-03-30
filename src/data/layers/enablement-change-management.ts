/**
 * CROSS-CUTTING TRACK: ENABLEMENT, TRAINING & CHANGE MANAGEMENT
 *
 * PURPOSE: Tech builds capability — enablement makes it actually used. This
 * is a horizontal track that runs in parallel with every layer. It ensures
 * that AI solutions are adopted, trusted, and continuously improved by the
 * people who use them.
 *
 * PROGRESSION:
 *   Early (Layers 1–3): Discover real workflows, identify champions, surface
 *   resistance, align expectations.
 *   Middle (Layers 4–7): Build playbooks, deliver role-based training, shadow
 *   mode before automation, feedback loops.
 *   Late (Layers 8–10): Practical documentation, onboarding flows, internal
 *   community, usage dashboards, incentives aligned with adoption.
 *
 * KEY PRINCIPLE: If you skip enablement early → you build the wrong things.
 * If you skip it in the middle → people don't trust or understand it.
 * If you skip it late → adoption plateaus after initial hype.
 *
 * POSITION IN ROADMAP: Cross-cutting — nodes span all 10 layers.
 */

import { RoadmapNode } from "../types";

export const enablementNodes: RoadmapNode[] = [
  // ── Early: Layers 1–3 ────────────────────────────────────────────────

  {
    id: "workflow-reality-interviews",
    title: "Workflow Reality Interviews",
    shortDescription: "Interview teams on real day-to-day workflows — not theoretical processes — to discover where AI would actually help vs. where it would disrupt",
    fullDescription:
      "Before you define problems or scope AI opportunities, you need ground truth about how work actually gets done. Not the process diagrams from 2019, not what managers think happens, but what people actually do every day. This means structured interviews with the people who do the work — support agents, sales reps, finance analysts, operations staff — asking them to walk through their real workflows step by step.\n\nMost AI initiatives fail not because the technology doesn't work, but because they automate the wrong thing. They optimize a process that nobody follows, or remove a step that was actually critical, or add AI to a workflow where the bottleneck was something else entirely. Workflow reality interviews prevent this.\n\nImplementation Substeps:\n1. Identify 3–5 departments or functions where AI is being considered — start where there's both opportunity and willingness\n2. Select interview subjects: frontline staff who do the work daily (not just managers who describe it), mix of high/average/struggling performers\n3. Use structured interview format: 'Walk me through what you did yesterday' — concrete, specific, not hypothetical\n4. Document: actual tools used (including workarounds, spreadsheets, personal Slack DMs), time spent per step, pain points they've already tried to solve, tribal knowledge that isn't written down anywhere\n5. Identify gaps between official process and reality — these gaps are where AI either creates the most value or causes the most disruption\n6. Map frequency × impact × frustration to prioritize which workflows benefit most from AI\n7. Feed interview findings directly into Use Case Discovery (Layer 2) — this is the real input, not brainstorming sessions\n8. Share findings back with interviewees to validate and build trust ('we listened, here's what we heard')\n\nLeadership Decision Points:\n• Who conducts interviews — internal team, external consultants, or mixed? (Internal builds more trust, external gets more honest answers)\n• How many departments to cover in the first round? (3–5 is practical, more than 7 creates analysis paralysis)\n• Will you compensate interviewees' time? (Their managers need to prioritize this)\n\nAdapt to your business: In companies with strong process culture (manufacturing, regulated industries), the gap between documented and actual processes may be smaller. In fast-moving companies (tech, startups), it's usually large. In companies post-M&A, expect completely different workflows doing the same thing across legacy organizations.",
    layer: "Problem, Opportunity & Scope",
    track: "Enablement",
    type: "pattern",
    dependencies: [],
    maturityLevels: ["Manual"],
    tools: ["Structured interview templates", "Process mining (Celonis, Minit)", "Miro/FigJam for workflow mapping", "Survey tools (Typeform, internal)"],
    risks: [
      "Building AI for theoretical processes nobody follows",
      "Missing critical tribal knowledge that makes workflows actually work",
      "Creating resistance by not involving end users from the start",
      "Optimizing the wrong bottleneck",
    ],
    metrics: ["Number of workflow interviews completed", "Gap count between documented vs. actual processes", "Percentage of departments with validated workflow maps", "User coverage rate (% of affected roles interviewed)"],
    examples: [
      "A logistics company discovered through interviews that dispatchers used a personal WhatsApp group to coordinate — the 'official' dispatch system was only updated after the fact. AI-assisted dispatch had to integrate with their real communication flow, not the official one.",
      "A B2B sales team revealed that 40% of their CRM data was fabricated to satisfy management reporting requirements — building AI on that CRM data would have produced garbage outputs.",
    ],
    tags: ["enablement", "change-management", "interviews", "workflows", "discovery", "user-research"],
    importance: "critical",
    complexity: "low",
  },
  {
    id: "champion-network-expectation-alignment",
    title: "Champion Network & Expectation Alignment",
    shortDescription: "Identify AI champions per department, align expectations on what AI will and won't do, surface resistance before it becomes blockers",
    fullDescription:
      "AI adoption succeeds or fails at the team level, not the executive level. You need people inside each department who understand AI's potential, can translate between tech teams and domain experts, and will advocate for adoption when things get difficult. These champions are not IT people embedded in departments — they're domain experts who are curious about AI and respected by their peers.\n\nEqually important: expectation alignment. Most AI failures are expectation failures. People expect AI to be perfect on day one, to replace their jobs, or to magically solve problems without any behavior change. Setting accurate expectations early — AI suggests, then drafts, then acts with guardrails — prevents the disappointment cycle that kills adoption.\n\nImplementation Substeps:\n1. Identify 1–2 champions per department: look for people who are tech-curious, respected by peers (not just management favorites), and have deep domain knowledge\n2. Run a champion kickoff: explain the AI roadmap, their role (bridge between AI team and department), time commitment (4–6 hours/month initially), and what they'll get (early access, input on direction, skill development)\n3. Create an expectation alignment framework: what AI will do (assist, suggest, automate specific tasks), what it won't do (replace jobs, work perfectly on day one, read minds), what it needs from users (feedback, corrections, patience during learning)\n4. Conduct expectation alignment sessions per department: tailored to their specific use cases, using concrete examples from their workflow\n5. Surface and document resistance: who is resistant and why? (Fear of job loss, distrust of technology, bad experience with past tech rollouts, legitimate concerns about AI accuracy) — each type requires a different response\n6. Create a resistance response playbook: fear of job loss → show augmentation examples; distrust → show transparency and control; bad past experience → acknowledge and differentiate\n7. Establish regular champion syncs (biweekly) for knowledge sharing, issue escalation, and feedback aggregation\n\nLeadership Decision Points:\n• Are champions formally recognized in their role (title, goals, bonus)? (Formal recognition dramatically increases engagement)\n• How much decision authority do champions have? (Can they veto AI features that don't work for their team?)\n• What's the escalation path when champions surface blockers?\n\nAdapt to your business: In large enterprises, you may need champions at multiple levels (team-level and department-level). In smaller companies, 3–5 champions may cover the whole organization. In engineering-heavy companies, champions are easy to find. In traditionally non-tech departments (legal, HR, finance), champion identification requires more effort.",
    layer: "Use Case Discovery & Prioritization",
    track: "Enablement",
    type: "pattern",
    dependencies: ["workflow-reality-interviews"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Champion tracking (spreadsheet or internal wiki)", "Slack/Teams channels per champion cohort", "Expectation alignment presentation templates"],
    risks: [
      "Champions burning out without organizational support or recognition",
      "Expectations set too high → disappointment → abandonment",
      "Resistance going underground because it wasn't surfaced early",
      "Champion network becoming bottleneck if they gate all AI interactions",
    ],
    metrics: ["Champion coverage (% of departments with active champions)", "Expectation alignment sessions completed", "Resistance issues surfaced and addressed", "Champion engagement score (attendance, participation, feedback volume)"],
    examples: [
      "A healthcare company identified nurse champions on each floor who became the go-to for AI clinical decision support questions — adoption reached 78% within 3 months vs. 23% on floors without champions.",
      "A financial services firm ran expectation alignment workshops showing 'AI suggests → you decide' for the first 90 days — zero pushback vs. a previous AI rollout without alignment that hit 60% resistance.",
    ],
    tags: ["enablement", "change-management", "champions", "expectations", "resistance", "adoption"],
    importance: "critical",
    complexity: "low",
  },
  {
    id: "change-readiness-resistance-mapping",
    title: "Change Readiness & Resistance Mapping",
    shortDescription: "Assess organizational change readiness per department, map resistance patterns, and design the change management approach before building",
    fullDescription:
      "Before you design operating models or build anything, you need an honest assessment of how ready each department is for AI-driven change. Change readiness isn't binary — different teams have different maturity levels, different histories with technology, and different levels of trust in leadership's technology decisions.\n\nResistance mapping goes beyond 'who is against AI' — it identifies the specific type of resistance and the appropriate response. Some resistance is emotional (fear), some is rational (legitimate concerns), and some is structural (incentives don't align with adoption). Each requires a different intervention.\n\nImplementation Substeps:\n1. Assess change readiness per department using structured criteria: leadership support, team openness to new tools, history with past technology changes, current workload capacity for learning, data literacy level\n2. Score departments on a readiness scale: Ready (start here), Developing (needs preparation), Resistant (needs significant change management before deployment)\n3. Map resistance patterns using the ADKAR framework: Awareness (don't know about AI plans), Desire (don't want AI), Knowledge (don't know how to use AI), Ability (can't integrate AI into workflows), Reinforcement (no incentives to continue using AI)\n4. Design targeted interventions per resistance type: awareness → communication campaign; desire → visible wins and job augmentation messaging; knowledge → training; ability → workflow redesign; reinforcement → KPI alignment\n5. Sequence AI deployment based on readiness: start with ready departments to create visible wins, then use those wins to pull developing departments forward\n6. Create a change management plan per department: timeline, interventions, success criteria, escalation triggers\n7. Assign change management resources: internal change managers, HR partners, or external consultants depending on scale\n\nLeadership Decision Points:\n• Deploy to ready departments first (faster wins, builds momentum) or resistant departments first (harder but proves broader value)?\n• How much change management investment is the organization willing to make? (Rule of thumb: 15–20% of AI program budget)\n• Is change management owned by HR, the AI team, or a dedicated function?\n\nAdapt to your business: Companies with strong change management muscles (post-M&A, recent ERP implementation) can leverage existing frameworks. Companies without change management experience should hire or contract specialists. Unions and works councils require additional consultation processes in some jurisdictions.",
    layer: "Decision Model & Operating Model",
    track: "Enablement",
    type: "pattern",
    dependencies: ["champion-network-expectation-alignment"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["ADKAR assessment tools", "Prosci change management framework", "Organizational readiness surveys", "Change impact assessment templates"],
    risks: [
      "Deploying AI to resistant departments without preparation → active sabotage or passive non-adoption",
      "Underinvesting in change management → technical success but adoption failure",
      "Over-analyzing readiness and never starting → paralysis by assessment",
      "Ignoring structural resistance (misaligned incentives) that training can't fix",
    ],
    metrics: ["Change readiness score per department", "Resistance issues categorized and addressed", "Change management plan completion rate", "Readiness improvement over time (pre/post intervention scores)"],
    examples: [
      "A manufacturing company assessed 12 departments for AI readiness — 3 scored 'ready', 6 'developing', 3 'resistant'. By starting with the 3 ready departments, they achieved measurable wins that shifted 4 of the 6 developing departments to 'ready' within 6 months.",
      "A legal department scored 'resistant' due to a failed document management system rollout 2 years prior. The change team addressed the specific concerns from that failure before introducing AI — resulting in 65% adoption vs. 15% predicted without the intervention.",
    ],
    tags: ["enablement", "change-management", "readiness", "resistance", "adkar", "organizational-change"],
    importance: "high",
    complexity: "medium",
  },

  // ── Middle: Layers 4–7 ───────────────────────────────────────────────

  {
    id: "data-literacy-enablement",
    title: "Data Literacy for AI Readiness",
    shortDescription: "Build practical data literacy so teams understand how AI uses their data, why data quality is their problem, and how to feed AI systems correctly",
    fullDescription:
      "AI systems are only as good as the data they consume, and in most organizations, the people who create and maintain data don't understand how AI uses it. Sales reps don't know that sloppy CRM entries become AI training data. Support agents don't realize that their ticket categorization trains the routing AI. Finance teams don't understand that inconsistent naming conventions break AI reconciliation.\n\nData literacy for AI isn't a generic 'data is important' training — it's specific, role-based education on how this person's data practices directly affect the AI tools they'll use. When people understand the connection between their data input and AI output quality, data quality improves without mandates.\n\nImplementation Substeps:\n1. Identify the critical data touchpoints per role: where do people create, update, or consume data that AI will use?\n2. Create role-specific data quality guides: 'As a sales rep, here's how your CRM entries feed the AI deal scorer — here's what happens when you skip fields or use free-text instead of picklists'\n3. Show the direct feedback loop: bad data in → bad AI output → more manual work for you. Good data in → better AI output → less manual work\n4. Run hands-on sessions (not lectures): have people enter data both ways and see the AI output difference in real time\n5. Create simple data quality standards per system: not a 200-page data governance document, but '5 rules for CRM entry that make AI work'\n6. Build data quality dashboards visible to teams (not just data teams): make quality a team metric, not a policing mechanism\n7. Integrate data quality checks into AI feedback loops: when AI produces bad output, trace it back to data quality and show the team\n\nLeadership Decision Points:\n• Is data quality a team-level KPI or just a data team responsibility? (Making it a team KPI drives 3x better adoption)\n• How much training time per role? (2–4 hours initially, 30 min/month ongoing is practical)\n• Who delivers training — data team, AI team, or champions? (Champions + data team is most effective)\n\nAdapt to your business: Companies with existing data quality programs should extend them for AI context. Companies with low data maturity need to start with basics. Companies with professional data entry roles (healthcare, financial services) need to update existing data entry protocols for AI requirements.",
    layer: "Data, Knowledge, Memory & Context",
    track: "Enablement",
    type: "pattern",
    dependencies: ["champion-network-expectation-alignment"],
    maturityLevels: ["Manual", "Assist"],
    tools: ["Data quality dashboards (Monte Carlo, Great Expectations)", "Role-based training platforms", "Screen recording for hands-on demos", "Internal wiki for data standards"],
    risks: [
      "AI producing garbage outputs because frontline data quality wasn't addressed",
      "Data quality mandates creating resentment without explaining the 'why'",
      "Training too generic to change actual behavior",
      "Data quality improving temporarily then reverting without reinforcement",
    ],
    metrics: ["Data quality score improvement per team", "Data entry completeness rate", "AI output quality correlation with data quality", "Training completion and comprehension rate"],
    examples: [
      "A SaaS company showed sales reps a side-by-side: AI lead scoring with their actual CRM data (42% accuracy) vs. with clean data (81% accuracy). CRM data completeness improved from 55% to 89% within 6 weeks — no mandates, just understanding.",
      "A healthcare system trained nurses on how documentation completeness affected AI clinical decision support — documentation quality scores increased 34% and AI recommendation acceptance rose from 45% to 72%.",
    ],
    tags: ["enablement", "data-literacy", "training", "data-quality", "change-management"],
    importance: "high",
    complexity: "low",
  },
  {
    id: "role-based-use-case-playbooks",
    title: "Role-Based Use Case Playbooks",
    shortDescription: "Create practical, workflow-specific playbooks per role — not generic AI training, but 'when you receive X → do Y with AI'",
    fullDescription:
      "Generic AI training ('What is AI? Here's how ChatGPT works') is useless for adoption. People need to know exactly how AI changes their specific daily workflow. A playbook answers: when do I use this? What do I input? What do I get back? How do I verify the output? What do I do if it's wrong? When do I escalate?\n\nThis is the difference between 'we trained everyone on AI' and 'everyone knows how to use AI in their job'. Each playbook is tied to a specific role and workflow, uses real examples from the organization, and includes the exact steps to follow.\n\nImplementation Substeps:\n1. Start with the top 3 use cases from your pilot (Layer 7) — don't try to create playbooks for everything at once\n2. For each use case, identify the affected roles and their specific workflow interaction with the AI\n3. Write the playbook in workflow format, not feature format: 'When a new support ticket arrives → Step 1: Review AI-suggested category → Step 2: Accept or correct → Step 3: Review AI-drafted response → Step 4: Edit and send'\n4. Include real examples from the organization — anonymized actual tickets, deals, reports that people recognize\n5. Document the failure modes: 'If AI suggests something clearly wrong → here's what to do' — this builds confidence\n6. Create quick-reference cards (1-page, printable/pinnable) alongside the full playbook — people won't read 10 pages daily\n7. Test playbooks with real users before rollout — have 3–5 people follow the playbook while you watch, fix confusion points\n8. Version playbooks as AI capabilities evolve — what starts as 'review and approve every AI suggestion' evolves to 'review exceptions only'\n\nLeadership Decision Points:\n• Who writes playbooks — AI team, department leads, or champions? (Co-creation between AI team and champions is best)\n• How detailed? (Err on the side of too specific — people can skip known steps, but can't fill in missing ones)\n• Physical or digital? (Both — quick-reference cards at desks + full digital version in wiki/intranet)\n\nAdapt to your business: Support teams need ticket-by-ticket playbooks. Sales teams need playbooks per deal stage. Finance teams need playbooks per reporting cycle. Legal teams need playbooks per document type. The more specific to the role and workflow, the higher the adoption.",
    layer: "Integration & Process Embedding",
    track: "Enablement",
    type: "pattern",
    dependencies: ["change-readiness-resistance-mapping"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["Notion/Confluence for playbooks", "Loom for video walkthroughs", "Quick-reference card templates", "Feedback collection (Typeform, Slack reactions)"],
    risks: [
      "Generic training that doesn't change behavior",
      "Playbooks that describe features instead of workflows",
      "Outdated playbooks after AI capabilities evolve",
      "Over-documentation that nobody reads",
    ],
    metrics: ["Playbook coverage (% of AI-affected roles with playbooks)", "Playbook usage rate (views, time on page)", "Support ticket volume related to 'how do I use AI'", "Time-to-competency per role (days from playbook delivery to independent use)"],
    examples: [
      "A support team received a 2-page playbook: 'AI Ticket Handling for Tier 1 Support' with real ticket examples showing AI-suggested responses. Time-to-competency dropped from 2 weeks to 3 days compared to teams that only got a product demo.",
      "A finance team's playbook included the exact steps for AI-assisted month-end reconciliation with screenshots from their actual ERP — adoption hit 90% in the first month vs. 40% for a previous tool rollout with only generic training.",
    ],
    tags: ["enablement", "playbooks", "training", "role-based", "workflows", "adoption"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "progressive-autonomy-user-training",
    title: "Progressive Autonomy & User Training",
    shortDescription: "Shadow mode → assisted mode → automation: train users through the progression so they build trust and competence before AI acts independently",
    fullDescription:
      "Don't flip the switch from 'no AI' to 'AI handles everything'. Progressive autonomy means rolling out AI in stages: first it watches and learns (shadow mode), then it suggests and the human decides (assisted mode), then it drafts and the human approves (semi-automated), then it acts within guardrails (automated). Each stage requires specific user training.\n\nThis progression isn't just about building trust — it's about building competence. Users need to learn how to evaluate AI suggestions, when to override them, and how to provide feedback that improves the system. They also need to experience AI being wrong in low-stakes situations before it handles high-stakes decisions.\n\nThis maps directly to your pilot design (Layer 7) and should be planned alongside it, not as an afterthought.\n\nImplementation Substeps:\n1. Define the autonomy stages for each use case: what does shadow, assisted, semi-automated, and automated look like specifically?\n2. Create training for each transition: 'Moving from AI Suggests to AI Drafts: What Changes for You' — make it concrete\n3. Shadow mode training (weeks 1–2): users work normally, AI runs in parallel, users can see what AI would have done — this builds understanding without risk\n4. Assisted mode training (weeks 3–6): AI suggests, user decides — train users on how to evaluate suggestions, when to accept, when to override, and how to provide corrections\n5. Semi-automated mode training (weeks 7–10): AI drafts, user reviews and approves — train users on what to check, common error patterns, escalation criteria\n6. Teach feedback skills: 'When AI is wrong, here's how to correct it so it learns' — most users don't know how to give useful AI feedback\n7. Define clear criteria for advancing to the next autonomy level: accuracy threshold, user confidence score, volume of overrides below X%\n8. Create rollback procedures: if a team isn't ready for the next level, or if quality degrades, here's how to step back safely\n\nLeadership Decision Points:\n• How long should each autonomy stage last? (Minimum 2 weeks per stage — rushing creates distrust)\n• Who decides when to advance to the next stage — the AI team, the department, or metrics-driven automatic progression?\n• What's the minimum accuracy threshold before advancing from assisted to semi-automated? (Typically 85–90%)\n\nAdapt to your business: High-risk domains (healthcare, finance, legal) need longer shadow and assisted phases. Low-risk domains (marketing content, internal reporting) can progress faster. Customer-facing AI needs more conservative progression than internal AI. Regulated industries may have mandatory human-in-the-loop requirements that limit full automation.",
    layer: "Execution & Pilot Design",
    track: "Enablement",
    type: "pattern",
    dependencies: ["role-based-use-case-playbooks"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["Feature flags for autonomy level control", "A/B testing platforms", "User feedback collection tools", "AI accuracy tracking dashboards"],
    risks: [
      "Rushing through stages → users don't trust AI → passive non-adoption",
      "Staying in shadow mode too long → no value delivered → project cancelled",
      "Users not trained in feedback skills → AI doesn't improve from human corrections",
      "No clear criteria for advancing → subjective decisions cause inconsistency across teams",
    ],
    metrics: ["Users per autonomy level (shadow / assisted / semi-automated / automated)", "Override rate per stage", "User confidence score progression", "Time spent per autonomy stage vs. plan"],
    examples: [
      "A customer support team used 3-week shadow mode where agents saw AI's suggested response alongside their own. By week 3, agents reported 'AI is better than me on routine tickets' — the transition to assisted mode had zero pushback.",
      "A sales team that skipped shadow mode and went straight to AI-drafted outreach saw 45% of reps disable the feature within 2 weeks. After resetting with progressive autonomy, the same team reached 80% adoption.",
    ],
    tags: ["enablement", "progressive-autonomy", "training", "shadow-mode", "adoption", "trust"],
    importance: "critical",
    complexity: "medium",
  },

  // ── Late: Layers 8–10 ────────────────────────────────────────────────

  {
    id: "user-feedback-correction-loops",
    title: "User Feedback & Correction Loops",
    shortDescription: "Structured mechanisms for users to correct AI and see that their corrections improve the system — building trust through visible impact",
    fullDescription:
      "Users need to see that their corrections matter. If they flag an AI error and nothing changes, they stop providing feedback. If they correct the AI and see improvement, they become invested in making it better. This is the difference between grudging compliance and genuine adoption.\n\nFeedback loops serve three purposes: (1) they improve AI quality with domain expertise that engineers don't have, (2) they give users agency and ownership over the AI — it's not something being done to them, it's something they're shaping, (3) they provide the trust signal that governance (Layer 8) needs — if users are actively correcting AI, you have human oversight built into the workflow.\n\nImplementation Substeps:\n1. Design lightweight feedback mechanisms: thumbs up/down on AI outputs, one-click correction for common errors, optional free-text for unusual cases — must take < 5 seconds for routine feedback\n2. Create a visible feedback impact loop: 'Your team submitted 47 corrections last week → AI accuracy improved from 82% to 87% on these scenarios' — show this weekly\n3. Build a feedback triage process: which corrections are immediate fixes (wrong category, bad data), which require model/prompt updates, which indicate a systematic weakness\n4. Close the loop with individuals: when someone's correction leads to an improvement, tell them — 'Your feedback on ticket #4523 led to a prompt update that improved accuracy for billing questions by 12%'\n5. Aggregate feedback for AI team: weekly summary of correction patterns, most common error types, emerging edge cases — this is the AI team's most valuable quality signal\n6. Include feedback quality metrics: are people providing useful corrections or just clicking 'bad' without context? Train and incentivize useful feedback\n7. Design the feedback → improvement → deployment cycle: how quickly can a user correction lead to a visible improvement? (Target: days, not months)\n\nLeadership Decision Points:\n• Is providing AI feedback part of the job description? (Making it explicit increases both quantity and quality)\n• What's the target feedback-to-improvement cycle time? (Weekly is good, daily is great, monthly is too slow)\n• How are corrections weighted — all users equal, or domain experts' corrections weighted higher?\n\nAdapt to your business: High-volume environments (support, sales) generate enough feedback data for statistical analysis. Low-volume environments (legal, executive) need to weight each piece of feedback more heavily. Regulated industries should log all corrections as part of the audit trail.",
    layer: "Trust, Risk, Governance & Control",
    track: "Enablement",
    type: "pattern",
    dependencies: ["progressive-autonomy-user-training"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["In-app feedback widgets", "Feedback analytics dashboards", "Prompt management platforms (Langsmith, Humanloop)", "Correction tracking databases"],
    risks: [
      "Feedback fatigue — users stop correcting because it doesn't seem to matter",
      "Low-quality feedback that doesn't improve AI — just noise",
      "Feedback loop too slow — corrections take months to affect AI behavior",
      "Users gaming feedback to make AI match their preferences rather than be accurate",
    ],
    metrics: ["Feedback volume per user per week", "Feedback-to-improvement cycle time", "AI accuracy improvement attributable to user corrections", "Feedback participation rate (% of users providing corrections)"],
    examples: [
      "A support team's feedback loop showed that AI mishandled refund-related tickets 30% of the time. User corrections identified the pattern, prompt was updated within 3 days, and refund ticket accuracy jumped from 70% to 91% — the team publicly celebrated the improvement.",
      "A legal team stopped providing feedback after 6 weeks because corrections never led to visible changes. After implementing a weekly 'Your Impact' email showing how corrections improved AI drafts, feedback volume increased 4x.",
    ],
    tags: ["enablement", "feedback", "corrections", "trust", "adoption", "quality-improvement"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "adoption-usage-dashboards",
    title: "Adoption & Usage Dashboards",
    shortDescription: "Per-team usage dashboards showing visible wins: time saved, workload reduced, errors prevented — proving AI value in terms people care about",
    fullDescription:
      "Adoption dies when it's invisible. If nobody can see whether AI is being used, whether it's helping, or whether it's worth the effort, then continued investment is based on faith rather than evidence. Usage dashboards make adoption visible, measurable, and comparable — and they make the wins concrete.\n\nThe key insight: don't measure what the AI team cares about (model accuracy, latency, token usage). Measure what users and leadership care about: time saved, deals influenced, tickets deflected, errors caught, revenue impacted. These are the metrics that sustain executive sponsorship and drive department-level adoption.\n\nImplementation Substeps:\n1. Define the 3–5 metrics per use case that matter to users and leadership: time saved per task, volume handled by AI, error rate reduction, revenue/cost impact\n2. Build per-team dashboards (not just org-wide): each department sees their own adoption rate, their own impact metrics, their own trends\n3. Show before/after clearly: 'Before AI: 45 min per report. With AI: 12 min per report. This month: 340 reports, 187 hours saved'\n4. Include adoption rate trends: is usage growing, plateauing, or declining? Declining adoption is an early warning signal\n5. Make dashboards accessible to everyone, not just managers — people are motivated by seeing their own productivity gains\n6. Create a weekly/monthly 'AI Impact Summary' for leadership: aggregate metrics, ROI tracking, adoption trajectory\n7. Use dashboards to identify adoption gaps: teams not using AI, features not being used, use cases where AI isn't delivering value\n8. Celebrate wins publicly: 'Support team reduced average ticket resolution from 14 min to 6 min using AI assist'\n\nLeadership Decision Points:\n• Are AI usage metrics part of team KPIs? (This accelerates adoption but risks gaming)\n• How public are team-level metrics? (Visibility drives competition but can create pressure)\n• What's the minimum viable dashboard to launch with? (Start with time saved + adoption rate, expand later)\n\nAdapt to your business: Engineering-heavy companies can build dashboards internally. Others should use existing BI tools (Tableau, PowerBI, Looker). Companies with existing OKR cultures should integrate AI metrics into quarterly OKRs. Companies in metrics-averse cultures should start with team-level visibility before org-level.",
    layer: "Measurement & Learning Loop",
    track: "Enablement",
    type: "metric",
    dependencies: ["user-feedback-correction-loops"],
    maturityLevels: ["Semi-Automated", "Fully Automated"],
    tools: ["Tableau", "PowerBI", "Looker", "Grafana", "Custom dashboards", "Amplitude/Mixpanel for product analytics"],
    risks: [
      "Measuring the wrong things — AI team metrics instead of business impact metrics",
      "Dashboards nobody looks at — too complex or not accessible",
      "Gaming adoption metrics — people clicking buttons without actually using AI outputs",
      "No action taken on declining adoption signals — dashboards without accountability",
    ],
    metrics: ["Dashboard access frequency per team", "Adoption rate trend (growing/stable/declining)", "Time saved per user per week (self-reported and measured)", "Executive dashboard review frequency"],
    examples: [
      "A company built a simple 'AI Time Saved' leaderboard showing hours saved per team per month — it became the most-viewed internal dashboard and drove friendly competition that lifted adoption from 45% to 78%.",
      "A finance team's dashboard showed that AI reconciliation saved 22 hours per month-end close — the CFO cited this in the board meeting, securing a 3x expansion of the AI budget.",
    ],
    tags: ["enablement", "dashboards", "adoption", "metrics", "visible-wins", "measurement"],
    importance: "high",
    complexity: "medium",
  },
  {
    id: "scaled-onboarding-community-incentives",
    title: "Scaled Onboarding, Community & Incentives",
    shortDescription: "Internal documentation, onboarding flows for new users, community channels, and KPIs/incentives aligned with AI adoption at scale",
    fullDescription:
      "The initial pilot succeeds with high-touch enablement — champions, hands-on training, direct support. But when you scale from 1 team to 10 teams to the whole organization, you can't scale high-touch. You need self-service onboarding, peer-to-peer community support, and structural incentives that make AI adoption the default rather than the exception.\n\nThis is where most AI programs stall: initial hype drives early adoption, but without scalable enablement infrastructure, adoption plateaus after the first wave. The teams that weren't in the pilot don't get the same attention, struggle more, and often abandon the tools.\n\nImplementation Substeps:\n1. Create self-service onboarding flows: when a new team or new employee needs to start using AI tools, they should be able to get from zero to productive without a live trainer — interactive walkthroughs, video tutorials, sandbox environments\n2. Build practical internal documentation: not theory, not marketing materials — actual 'how to do X with AI' guides organized by role and use case, maintained by champions\n3. Launch internal community channels: Slack/Teams channel for AI users — tips, questions, sharing wins, reporting issues. Seed it with champions and power users\n4. Create an AI knowledge base: FAQ, troubleshooting, best practices, common failure modes — maintained by the AI team and enriched by community contributions\n5. Align KPIs and incentives: if AI saves support agents 2 hours/day but their ticket volume quota stays the same, the incentive is to ignore AI. Adjust KPIs to reflect AI-augmented performance\n6. Design incentive structures: recognition for AI power users, bonuses tied to adoption metrics, career development paths that value AI literacy\n7. Create an AI onboarding checklist for new hires: 'In your first week, complete these 3 AI tool onboardings' — make it part of day-one onboarding\n8. Measure and iterate: track onboarding completion rates, community engagement, support ticket trends, and continuously improve\n\nLeadership Decision Points:\n• Are AI skills part of performance reviews and role descriptions? (This signals organizational commitment)\n• What incentives are appropriate — recognition, monetary, career advancement? (Start with recognition, add monetary for key behaviors)\n• Who maintains the community and documentation long-term — a dedicated enablement team, champions, or AI team?\n• How quickly should new teams be onboarded after rollout decision? (Target: 1 week to productive, 1 month to proficient)\n\nAdapt to your business: Large enterprises need formal onboarding programs with LMS integration. Smaller companies can use lighter approaches (Loom videos + Slack channel). Companies with high turnover need especially robust self-service onboarding. Companies with strong learning cultures can leverage existing L&D infrastructure.",
    layer: "Rollout, Adoption & Scaling",
    track: "Enablement",
    type: "pattern",
    dependencies: ["adoption-usage-dashboards", "role-based-use-case-playbooks"],
    maturityLevels: ["Semi-Automated", "Fully Automated", "Autonomous"],
    tools: ["LMS platforms (Docebo, TalentLMS)", "Loom for video tutorials", "Slack/Teams community channels", "Notion/Confluence for documentation", "WalkMe/Pendo for in-app guidance"],
    risks: [
      "Adoption plateau after initial hype — teams that weren't in the pilot abandon the tools",
      "Self-service onboarding too thin — new users struggle without live support",
      "Community channel dies without active moderation and fresh content",
      "Incentives misaligned — people are measured on old KPIs that penalize AI-augmented workflows",
    ],
    metrics: ["Self-service onboarding completion rate", "Time from department decision to productive usage", "Community channel activity (posts, replies, active users)", "Incentive alignment score (% of roles with AI-adjusted KPIs)", "New hire AI onboarding completion within first week"],
    examples: [
      "A company with 2,000 employees scaled AI adoption from 3 pilot teams (45 people) to organization-wide (1,800 active users) in 6 months using self-service onboarding + community channels + adjusted KPIs — without adding a single enablement headcount.",
      "A professional services firm added 'AI tool proficiency' to all consultant role descriptions and tied it to promotion criteria — AI adoption went from 'nice to have' to 'required skill' within one quarter, reaching 92% sustained usage.",
    ],
    tags: ["enablement", "onboarding", "community", "incentives", "scaling", "adoption", "kpis"],
    importance: "critical",
    complexity: "medium",
  },
];
