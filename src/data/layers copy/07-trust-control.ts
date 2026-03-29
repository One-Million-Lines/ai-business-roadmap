/**
 * LAYER 7: TRUST & CONTROL
 *
 * PURPOSE: Ensure AI operates safely, transparently, and within defined
 * boundaries. This layer covers human oversight, audit trails, output
 * validation, data privacy, and model governance. For enterprise adoption,
 * this layer is non-negotiable — it determines whether stakeholders, regulators,
 * and customers trust the AI.
 *
 * POSITION IN ROADMAP: Seventh layer.
 * Depends on → Layer 3 (Architecture) — governance hooks into the technical backbone
 *            → Layer 6 (Execution) — every execution step must respect controls
 * Feeds into → Layer 8 (Measurement) — trust metrics feed into overall measurement
 *            → Layer 9 (Rollout) — insufficient trust blocks rollout
 *
 * WHO OWNS THIS: CISO, Chief Compliance Officer, Legal, AI Ethics leads,
 * with implementation by Engineering.
 *
 * ADAPTATION NOTE: Trust & Control requirements are heavily industry-specific.
 * Financial services, healthcare, and government have strict regulatory
 * requirements. Tech and media companies may have more flexibility but still
 * need guardrails for brand safety and user trust. Start with the controls
 * required by your regulators, then add controls demanded by your stakeholders.
 */

import { RoadmapNode } from "../types";

export const trustControlNodes: RoadmapNode[] = [
  {
    id: "human-in-the-loop",
    title: "Human-in-the-Loop Approval",
    shortDescription: "Critical AI decisions require human review before execution",
    fullDescription:
      "For high-stakes actions — sending customer communications, approving financial transactions, modifying records — a human review step ensures accuracy and builds trust. The AI prepares the action, presents it with context, and waits for human approval. This is the most important pattern for enterprise AI adoption.\n\nGovernance substeps:\n1. Classify all AI actions by risk level (low/medium/high/critical)\n2. Define which risk levels require human approval, and which can auto-execute\n3. Design the approval interface — show the AI recommendation with full reasoning and context\n4. Implement approval SLAs — define expected review time by action type\n5. Build escalation for overdue approvals — prevent bottlenecks from slow reviewers\n6. Track override patterns — when humans disagree with AI, log the reasoning\n7. Implement progressive autonomy — as AI accuracy improves, gradually reduce human review requirements\n8. Build reviewer dashboards — workload distribution, approval speed, override rates\n9. Create reviewer training — ensure humans understand what they're approving and the consequences\n10. Audit the audit — periodically verify that reviewers are actually reviewing (not rubber-stamping)\n\nAdapt to your business: Financial services will have more approval checkpoints. Customer communications may need brand voice review. Internal operations may allow faster progression to autonomous execution. The goal is to reduce human review over time as trust is earned.",
    layer: "Trust & Control",
    track: "Governance",
    type: "guardrail",
    dependencies: ["llm-decision-layer", "orchestration-layer"],
    maturityLevels: ["Assist", "Semi-Automated"],
    tools: ["Custom approval UIs", "Slack approvals", "Retool"],
    risks: ["Approval bottlenecks slowing automation", "Reviewer fatigue leading to rubber-stamping"],
    metrics: ["Approval latency", "Override rate", "Auto-approval accuracy"],
    examples: ["A financial services firm requires human approval for any AI-generated client communication over $10,000 in deal value."],
    tags: ["governance", "approval", "trust", "human-review"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "audit-logging",
    title: "Audit Logging & Traceability",
    shortDescription: "Complete audit trail of all AI decisions, actions, and outcomes",
    fullDescription:
      "Every AI decision, action, and outcome must be logged with full context — input, reasoning, output, confidence score, human overrides. This enables compliance, debugging, continuous improvement, and stakeholder trust. Audit logs should be immutable and queryable.\n\nGovernance substeps:\n1. Define the audit log schema — what data points must be captured for each AI action?\n2. Include: timestamp, user/system trigger, input data, prompt used, model version, output, confidence, latency, cost\n3. Include: human overrides, feedback, downstream consequences\n4. Choose storage — append-only log store, immutable database, or dedicated audit platform\n5. Implement log retention policies aligned with regulatory requirements (some require 7+ years)\n6. Build query interface — compliance officers need to search by date, user, action type, outcome\n7. Create automated audit reports — weekly/monthly summaries for compliance review\n8. Implement log integrity checks — detect tampering or gaps in the audit trail\n9. Set up alerting — notify compliance when anomalous patterns appear in logs\n10. Test audit trail completeness — regularly verify that no AI actions escape logging\n\nAdapt to your business: SOX-regulated companies need financial decision audit trails. HIPAA-covered entities need PHI access logging. GDPR requires logging data processing activities. Even unregulated companies benefit from audit trails for debugging and improvement.",
    layer: "Trust & Control",
    track: "Governance",
    type: "guardrail",
    dependencies: ["llm-decision-layer", "human-in-the-loop"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["ELK Stack", "Datadog", "Custom logging pipelines"],
    risks: ["Log volume overwhelming storage", "Sensitive data in logs"],
    metrics: ["Log completeness", "Query latency", "Audit pass rate"],
    examples: ["An insurance company logs every AI claim assessment decision with full reasoning, enabling quarterly compliance audits."],
    tags: ["audit", "logging", "compliance", "governance"],
    importance: "critical",
    complexity: "medium",
  },
  {
    id: "output-guardrails",
    title: "Output Guardrails & Validation",
    shortDescription: "Validate and constrain AI outputs before they reach end users",
    fullDescription:
      "Output guardrails check AI-generated content for accuracy, appropriateness, compliance, and safety before it's delivered. This includes toxicity filters, factual verification against known data, format validation, and PII detection. Guardrails are the safety net between AI generation and real-world impact.\n\nGovernance substeps:\n1. Define guardrail categories — factual accuracy, brand voice, toxicity, PII, regulatory compliance, format\n2. Implement factual verification — cross-check AI claims against known data sources\n3. Build PII detection — scan outputs for names, emails, phone numbers, SSNs, account numbers\n4. Implement brand voice checking — ensure tone matches company guidelines\n5. Add toxicity/bias detection — prevent harmful, offensive, or discriminatory content\n6. Build format validation — ensure outputs match expected structure (JSON schema, email format, etc.)\n7. Design guardrail cascade — which checks run first? What happens when a check fails?\n8. Implement soft vs. hard blocks — warnings (human can override) vs. hard blocks (cannot proceed)\n9. Build guardrail monitoring — track block rates, false positive rates, categories triggered\n10. Create guardrail tuning process — regular review of false positives/negatives to refine thresholds\n\nAdapt to your business: Healthcare must check medical accuracy. Legal must check for unauthorized legal advice. Financial services must check for compliance with communication regulations. E-commerce must check for pricing accuracy.",
    layer: "Trust & Control",
    track: "AI Capability",
    type: "guardrail",
    dependencies: ["llm-decision-layer"],
    maturityLevels: ["Assist", "Semi-Automated", "Fully Automated"],
    tools: ["Guardrails AI", "NeMo Guardrails", "Custom validators"],
    risks: ["Overly restrictive guardrails blocking valid outputs", "Performance overhead"],
    metrics: ["Block rate", "False positive rate", "Guardrail latency"],
    examples: ["A healthcare AI checks every patient-facing message against medical guidelines before sending."],
    tags: ["guardrails", "safety", "validation", "ai"],
    importance: "critical",
    complexity: "high",
  },
  {
    id: "data-privacy-controls",
    title: "Data Privacy & Protection Controls",
    shortDescription: "Ensure AI workflows comply with data privacy regulations",
    fullDescription:
      "AI systems process sensitive business and customer data. Data privacy controls ensure GDPR, CCPA, and industry-specific compliance — PII masking before LLM calls, data residency requirements, consent management, and right-to-deletion support.\n\nGovernance substeps:\n1. Conduct a data privacy impact assessment (DPIA) for each AI use case\n2. Map data flows — where does personal data enter, get processed, get stored, get sent externally?\n3. Implement PII detection and masking before data is sent to external AI providers\n4. Choose data residency — ensure processing happens in compliant regions (EU data in EU, etc.)\n5. Build consent management — track which users/customers have consented to AI processing\n6. Implement right-to-deletion — ability to remove all personal data from AI memory and logs on request\n7. Design data minimization — only send the minimum necessary data to AI models\n8. Build data access controls — role-based access to personal data within AI workflows\n9. Create data processing agreements (DPAs) with all AI vendors\n10. Implement privacy monitoring — automated detection of privacy violations in AI pipelines\n\nAdapt to your business: EU companies must comply with GDPR. California businesses with CCPA. Healthcare with HIPAA. Financial services with GLBA. Multi-national companies may need to comply with multiple frameworks simultaneously.",
    layer: "Trust & Control",
    track: "Governance",
    type: "risk",
    dependencies: ["audit-logging"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["OneTrust", "Custom PII detectors", "Azure Private Endpoints"],
    risks: ["Non-compliance fines", "Data breaches through AI pipelines"],
    metrics: ["PII detection accuracy", "Compliance audit score", "Data request fulfillment time"],
    examples: ["A European company masks all PII before sending customer data to OpenAI, maintaining GDPR compliance."],
    tags: ["privacy", "gdpr", "compliance", "data"],
    importance: "critical",
    complexity: "high",
  },
  {
    id: "model-governance",
    title: "AI Model Governance",
    shortDescription: "Track, version, and govern AI models and prompts across the organization",
    fullDescription:
      "As AI usage scales, organizations need model governance — tracking which models and prompts are used where, ensuring consistency, managing updates, and detecting drift. Without governance, different teams use different models with different safety profiles, creating risk.\n\nGovernance substeps:\n1. Create an AI model registry — catalog every model, prompt, and AI capability in use\n2. Implement model versioning — track changes to prompts, fine-tuned models, and configurations\n3. Build approval workflows for new model deployments — security, privacy, and quality review\n4. Design model evaluation framework — standardized benchmarks before any model goes to production\n5. Implement model monitoring — detect accuracy drift, bias drift, and performance degradation\n6. Create model retirement policies — how to sunset models safely without breaking workflows\n7. Build cost governance — track and allocate model usage costs to business units\n8. Implement vendor risk management — assess and monitor LLM provider stability, security, and compliance\n9. Design the model update process — how to safely roll out new model versions\n10. Create an AI inventory for regulatory reporting — many regulations now require this\n\nAdapt to your business: Large enterprises with multiple AI teams need centralized model governance early. Companies using multiple LLM providers need vendor management. Regulated industries may need to maintain model documentation for regulatory audits.",
    layer: "Trust & Control",
    track: "Governance",
    type: "guardrail",
    dependencies: ["llm-decision-layer", "audit-logging"],
    maturityLevels: ["Manual", "Assist", "Semi-Automated"],
    tools: ["MLflow", "Weights & Biases", "Custom model registry", "Domino Data Lab"],
    risks: ["Shadow AI — teams using ungoverned models", "Model drift going undetected"],
    metrics: ["Model registry completeness", "Ungoverned model count", "Model drift detection rate"],
    examples: ["A global bank maintains a model registry with 47 AI models, each with documented risk assessments, owners, and quarterly review cycles."],
    tags: ["model-governance", "mlops", "risk-management", "compliance"],
    importance: "high",
    complexity: "high",
  },
];
