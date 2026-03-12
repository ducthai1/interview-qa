import type { Question } from '../../types'

export const baRealWorldQuestions: Question[] = [
  // ─── JUNIOR ───
  {
    id: 'ba-rw-001',
    topic: 'real-world-scenarios',
    difficulty: 'junior',
    type: 'mcq',
    question: 'A client continuously requests small new features during the final week of UAT. What is your most appropriate immediate action?',
    options: [
      'Accept all requests to keep the client happy and tell developers to work overtime.',
      'Refuse all requests because the deadline is near.',
      'Log the requests as Change Requests (CRs), assess their impact on timeline/cost, and ask the client to prioritize them against the current release scope.',
      'Silently sneak the features into the codebase without telling the Project Manager.'
    ],
    answer: 2,
    explanation: 'Scope creep is a major risk, especially late in a project. As a BA, you should never blindly accept or rigidly reject requests. Instead, document them as CRs, analyze the impact, and present the trade-offs to the stakeholders to make an informed decision.',
    tags: ['scope-creep', 'change-management', 'stakeholder-handling'],
    year: 2026,
  },
  {
    id: 'ba-rw-002',
    topic: 'real-world-scenarios',
    difficulty: 'junior',
    type: 'mcq',
    question: 'During a sprint planning meeting, a developer states they cannot implement a feature as described in your User Story. How should you respond?',
    options: [
      'Tell the developer to follow the requirements exactly as written.',
      'Immediately agree to remove the feature without asking the Product Owner.',
      'Ask the developer to explain the technical limitation, discuss alternative solutions that still satisfy the business goal, and update the User Story accordingly.',
      'Escalate the developer\'s "bad attitude" to the Project Manager.'
    ],
    answer: 2,
    explanation: 'A BA acts as a bridge between business and tech. If technical constraints exist, you should collaborate with the developer to find a workaround that meets the core business need, rather than forcing an impossible implementation or dropping the feature outright.',
    tags: ['dev-collaboration', 'problem-solving', 'flexibility'],
    year: 2026,
  },
  {
    id: 'ba-rw-003',
    topic: 'real-world-scenarios',
    difficulty: 'junior',
    type: 'mcq',
    question: 'You receive a requirement from marketing: "The system should be blazing fast." How do you handle this ambiguous requirement?',
    options: [
      'Write "System must be blazing fast" in the SRS document.',
      'Ask clarifying questions to define measurable metrics (e.g., "Page load time must be under 2 seconds for 10,000 concurrent users").',
      'Ignore the requirement because it is not achievable.',
      'Assign the UI team to make the design look fast.'
    ],
    answer: 1,
    explanation: 'Non-functional requirements must be specific, measurable, and testable. "Blazing fast" is subjective. Converting it to measurable metrics (load time, concurrent users) ensures the development and QA teams know exactly what to target.',
    tags: ['non-functional', 'nfr', 'clarification', 'requirements'],
    year: 2026,
  },
  {
    id: 'ba-rw-004',
    topic: 'real-world-scenarios',
    difficulty: 'junior',
    type: 'mcq',
    question: 'A critical stakeholder frequently misses requirement gathering sessions, leading to missing information. What should you do?',
    options: [
      'Proceed without their input and assume what they want.',
      'Complain to their manager immediately.',
      'Reach out directly to understand their schedule constraints, offer 1-on-1 asynchronous reviews (like commenting on a shared doc), and emphasize the risks of missing their input.',
      'Cancel the project until they attend.'
    ],
    answer: 2,
    explanation: 'Stakeholder engagement is key. If synchronous meetings fail, find alternative ways to gather their input asynchronously and make them aware of the risks (delays, incorrect features) of not participating.',
    tags: ['stakeholder-management', 'communication', 'availability'],
    year: 2026,
  },
  {
    id: 'ba-rw-005',
    topic: 'real-world-scenarios',
    difficulty: 'junior',
    type: 'true-false',
    question: 'True or False: If a developer discovers that a requirement is logically flawed during coding, the BA should fix the document silently to match the developer\'s new code.',
    answer: false,
    explanation: 'False. The BA must analyze the developer\'s finding, confirm with the business stakeholders that the proposed change aligns with business rules, officially update the requirement, and inform all necessary teams (like QA). Silent changes cause misalignment.',
    tags: ['change-control', 'documentation', 'process'],
    year: 2026,
  },

  // ─── MID ───
  {
    id: 'ba-rw-006',
    topic: 'real-world-scenarios',
    difficulty: 'mid',
    type: 'mcq',
    question: 'Two department heads strongly disagree on a core business rule for a new workflow. Department A wants strict approval, Department B wants auto-approval. As the BA, how do you resolve this?',
    options: [
      'Side with the department head who has a higher title.',
      'Implement a toggle so the system can do both, without asking them.',
      'Organize a workshop with both heads, map out the impact of both approaches on the overall business goal, and facilitate a compromise or escalate to the project sponsor.',
      'Wait until they stop fighting to continue working.'
    ],
    answer: 2,
    explanation: 'A BA must facilitate conflict resolution by focusing on objective criteria (cost, risk, business goals, compliance) rather than personal preference. If a consensus cannot be reached, the issue should be formally escalated to a project sponsor with decision-making authority.',
    tags: ['conflict-resolution', 'stakeholder-management', 'facilitation'],
    year: 2026,
  },
  {
    id: 'ba-rw-007',
    topic: 'real-world-scenarios',
    difficulty: 'mid',
    type: 'mcq',
    question: 'The development team delivers a feature, but during demo, the client says: "This matches the document, but it’s not what I actually need." What went wrong and how do you prevent it next time?',
    options: [
      'The client is just difficult. Refuse to change it.',
      'You failed to validate the requirements correctly. Next time, use prototypes/wireframes and frequent feedback loops rather than relying solely on text-heavy sign-offs.',
      'The devs coded it poorly. Make them rewrite it.',
      'The QA team failed to test the feature.'
    ],
    answer: 1,
    explanation: 'Clients often agree to text documents without fully visualizing the end product. Using visual aids (wireframes, prototypes) and conducting regular demo loops (Agile approach) ensures early detection of mismatches between "what is written" and "what is needed".',
    tags: ['validation', 'prototyping', 'feedback-loop', 'gap-analysis'],
    year: 2026,
  },
  {
    id: 'ba-rw-008',
    topic: 'real-world-scenarios',
    difficulty: 'mid',
    type: 'mcq',
    question: 'You are assigned to a legacy system replacement project. There is zero existing documentation, and the original developers have left. How do you gather requirements?',
    options: [
      'Refuse to start until the client writes a manual.',
      'Just copy the UI screens exactly as they are into a new framework.',
      'Conduct shadowing sessions with end-users, perform reverse engineering on the database/code behavior, and document the "As-Is" process before designing the "To-Be".',
      'Ask the new developers to guess the logic based on the old source code alone.'
    ],
    answer: 2,
    explanation: 'Reverse engineering combined with observing end-users is the standard approach for undocumented legacy systems. Users know the workflows, and investigating the database schema or data traces helps uncover hidden business logic.',
    tags: ['legacy-system', 'reverse-engineering', 'as-is-analysis', 'elicitation'],
    year: 2026,
  },
  {
    id: 'ba-rw-009',
    topic: 'real-world-scenarios',
    difficulty: 'mid',
    type: 'mcq',
    question: 'You notice a requirement provided by the compliance team conflicts directly with a requirement from the sales team (e.g., Sales wants 1-click checkout, Compliance requires 2-factor authentication). What do you do?',
    options: [
      'Implement what Sales wants because they bring in revenue.',
      'Implement what Compliance wants because it is safer.',
      'Document the conflict, create a traceability matrix, and arrange a meeting between Compliance and Sales to negotiate a compliant but user-friendly solution.',
      'Tell the developers to figure out a middle ground on their own.'
    ],
    answer: 2,
    explanation: 'Conflicting requirements from different domains must be explicitly documented and negotiated. The BA facilitates a compromise (e.g., risk-based authentication where 2FA is only required for high-value carts) that satisfies both departments.',
    tags: ['competing-requirements', 'compliance', 'negotiation', 'traceability'],
    year: 2026,
  },
  {
    id: 'ba-rw-010',
    topic: 'real-world-scenarios',
    difficulty: 'mid',
    type: 'true-false',
    question: 'True or False: A BA should always act as a proxy for the Product Owner (PO), writing stories, accepting them, and managing the backlog independently if the PO is too busy.',
    answer: false,
    explanation: 'False. While a BA supports the PO, the PO ultimately owns the product vision and priority. If the PO is completely absent, this is a systemic risk that needs to be escalated, as a BA taking full PO authority without business mandate can lead to misdirected product development.',
    tags: ['agile', 'po-role', 'boundaries', 'risk'],
    year: 2026,
  },

  // ─── SENIOR ───
  {
    id: 'ba-rw-011',
    topic: 'real-world-scenarios',
    difficulty: 'senior',
    type: 'mcq',
    question: 'During UAT, the users report 50 "bugs". Upon investigation, you realize 40 of them are actually new requirements (enhancements) disguised as bugs. How do you handle this diplomatically?',
    options: [
      'Reject the 40 items aggressively and tell them they signed the SRS, so they can\'t complain now.',
      'Fix all 40 items quietly so the client accepts the system on time.',
      'Categorize the list into "Defects" (to be fixed now) and "Change Requests" (CRs). Explain the baseline scope with evidence, and estimate the CRs for a Phase 2 or a separate billing cycle.',
      'Pause the entire project until the client pays for the extra 40 items.'
    ],
    answer: 2,
    explanation: 'Triage is essential during UAT. Use the approved baseline (BRD/SRS) to distinguish between defects (failure to meet agreed requirements) and enhancements. Managing them as CRs maintains the project timeline while protecting the vendor\'s scope and resources without being strictly confrontational.',
    tags: ['uat', 'defect-triage', 'scope-management', 'diplomacy'],
    year: 2026,
  },
  {
    id: 'ba-rw-012',
    topic: 'real-world-scenarios',
    difficulty: 'senior',
    type: 'mcq',
    question: 'Your organization is transitioning from Waterfall to Agile. The business stakeholders still demand the "complete detailed requirements document upfront" before giving developers the green light. How do you guide them?',
    options: [
      'Give in and write a 200-page SRS because the business is the boss.',
      'Refuse to write any documents and tell them "We are Agile, we don\'t do documentation".',
      'Explain the Agile concept of progressive elaboration. Propose writing a high-level vision and backlog first, and detail the requirements (User Stories) only 1-2 sprints ahead of development.',
      'Wait for the Agile Coach to talk to them.'
    ],
    answer: 2,
    explanation: 'Agile transition requires coaching stakeholders. BAs must bridge this mindset gap by proving value through progressive elaboration—giving enough detail just-in-time, thereby reducing waste while still providing enough certainty for business planning.',
    tags: ['agile-transformation', 'coaching', 'progressive-elaboration', 'mindset'],
    year: 2026,
  },
  {
    id: 'ba-rw-013',
    topic: 'real-world-scenarios',
    difficulty: 'senior',
    type: 'mcq',
    question: 'You discover that a new system implementation will make 30% of the operational staff\'s manual data entry jobs redundant. The staff has become resistant and refuses to share process details with you. What is your strategy?',
    options: [
      'Report them to HR for insubordination.',
      'Design the system without their input using your best guess.',
      'Focus the conversation on how the system will eliminate tedious work and allow them to upskill into analytical roles. Involve them as "Process Champions" to give them a sense of ownership.',
      'Cancel the automation feature so no one loses their job.'
    ],
    answer: 2,
    explanation: 'Change management and overcoming resistance are crucial senior BA skills. Addressing the underlying fear by reframing the change (from job loss to job evolution) and empowering resistant users as subject matter experts often breaks down communication barriers.',
    tags: ['change-management', 'resistance', 'user-adoption', 'soft-skills'],
    year: 2026,
  },
  {
    id: 'ba-rw-014',
    topic: 'real-world-scenarios',
    difficulty: 'senior',
    type: 'system-design',
    question: 'The client wants to build a "Machine Learning AI to predict user buying behavior", but they have a tight budget, messy data across 5 legacy systems, and a 3-month deadline. As a Senior BA, how do you manage this request?',
    answer: 'Handling an unrealistic AI request:\n\n1. Feasibility & Reality Check:\n- Acknowledge their vision but politely explain the prerequisites for ML (clean, centralized data, significant training time).\n\n2. Root Cause/Goal Analysis:\n- Ask: "Why do we need AI right now? What business problem are we trying to solve?" (Perhaps they just want to increase cross-selling).\n\n3. Propose a Phased/MVP Approach:\n- Phase 1 (Next 3 months): Build an ETL pipeline to centralize and clean the data from the 5 legacy systems. Implement simple rule-based recommendations (e.g., "Customers who bought X also bought Y") rather than true ML. This delivers immediate business value within budget.\n- Phase 2 (Future): Once data is structured and analytics are running, introduce predictive ML models.\n\n4. Risk Communication:\n- Formally document the risks of attempting ML on messy data (GIGO - Garbage In, Garbage Out) and get stakeholder buy-in on the phased approach.',
    explanation: 'Senior BAs don\'t just gather requirements; they act as business consultants. When clients propose buzzword-heavy, unrealistic solutions, the BA must trace back to the actual business problem and propose a pragmatic, iterative roadmap that respects constraints (budget, data maturity).',
    tags: ['feasibility', 'consulting', 'mvp', 'expectation-management'],
    year: 2026,
  },
  
  // ─── LEAD ───
  {
    id: 'ba-rw-015',
    topic: 'real-world-scenarios',
    difficulty: 'lead',
    type: 'system-design',
    question: 'Your company won a massive enterprise government contract. You are assigned to lead a team of 5 Junior/Mid BAs. The requirements are complex, highly regulated, and the timeline is aggressive. Outline your BA Strategy for the first 30 days.',
    answer: 'BA Strategy for the First 30 Days:\n\n1. Team Onboarding & Standardization (Days 1-5):\n- Define templates for BRD, FRD, User Stories, and mapping documents.\n- Establish a single source of truth (e.g., Jira + Confluence) and define the traceability matrix structure.\n- Assign domains (modules) to each BA based on their strengths.\n\n2. Elicitation & Stakeholder Mapping (Days 6-15):\n- Identify key government stakeholders, regulatory compliance officers, and SMEs.\n- Create a communication plan and meeting schedule.\n- Conduct high-level workshops to define the "As-Is" architecture and overall business goals.\n\n3. Framework & Compliance Alignment (Days 16-20):\n- Ensure all BAs understand the specific regulatory requirements (security, auditing, accessibility).\n- Integrate compliance checks into the "Definition of Ready" (DoR) for all User Stories.\n\n4. Backlog Generation & Prioritization (Days 21-30):\n- Break down epics into manageable chunks.\n- Prioritize the backlog using MoSCoW, focusing on high-risk regulatory constraints first.\n- Implement a peer-review process within the BA team to ensure quality and consistency before presenting to dev/client.\n\n5. Continuous Risk Management:\n- Actively monitor scope creep from government stakeholders via strict Change Control processes introduced from Day 1.',
    explanation: 'A Lead BA must establish processes, govern quality, and align team efforts toward a massive goal. The focus shifts from "writing requirements" to "designing the requirements engineering framework", ensuring traceability, compliance, and team standardisation across complex domains.',
    tags: ['lead', 'strategy', 'governance', 'enterprise', 'compliance'],
    year: 2026,
  }
]
