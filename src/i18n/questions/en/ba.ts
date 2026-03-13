import type { QuestionTranslationMap } from '../types'

export const baEn: QuestionTranslationMap = {
  'ba-ag-001': {
    question: "Which of the following is NOT one of the four values in the Agile Manifesto?",
    options: [
    "Individuals and interactions over processes and tools",
    "Working software over comprehensive documentation",
    "Detailed planning over responding to change",
    "Customer collaboration over contract negotiation",
    ""
    ],
    answer: 2,
    explanation: "The Agile Manifesto values: (1) Individuals and interactions over processes and tools, (2) Working software over comprehensive documentation, (3) Customer collaboration over contract negotiation, (4) Responding to change over following a plan. The Manifesto does NOT devalue the items on the right — it values the left side MORE.",
  },
  'ba-ag-002': {
    question: "In Scrum, who is responsible for maximizing the value of the product and managing the Product Backlog?",
    options: [
    "Scrum Master",
    "Development Team",
    "Product Owner",
    "Project Manager",
    ""
    ],
    answer: 2,
    explanation: "The Product Owner (PO) is the single person accountable for maximizing product value. They manage the Product Backlog: ordering items, ensuring clarity, and making priority decisions. The PO represents stakeholder interests and is the final decision-maker on what gets built. The Scrum Master facilitates the process; the dev team decides HOW to build it.",
  },
  'ba-ag-003': {
    question: "The Scrum Master is the manager of the Development Team and assigns tasks to team members.",
    answer: "False",
    explanation: "The Scrum Master is a servant-leader, not a manager. They facilitate Scrum events, remove impediments, and coach the team on Scrum practices. The Development Team is self-organizing — team members decide among themselves who works on what. The Scrum Master has no authority to assign tasks.",
  },
  'ba-ag-004': {
    question: "What are the three pillars of Scrum?",
    options: [
    "Planning",
    "Execution",
    "Delivery",
    "Transparency",
    "Inspection",
    "Adaptation",
    "Speed",
    "Quality",
    "Cost",
    "Requirements",
    "Design",
    "Testing",
    ""
    ],
    answer: 1,
    explanation: "Scrum is founded on empirical process control with three pillars: Transparency (all aspects visible to those responsible for the outcome), Inspection (frequent examination of artifacts and progress), and Adaptation (adjusting the process or product when deviations are detected). These pillars enable learning and continuous improvement.",
  },
  'ba-ag-005': {
    question: "What is the recommended timebox for a Sprint Retrospective in a 2-week sprint?",
    options: [
    "15 minutes",
    "1.5 hours (90 minutes)",
    "4 hours",
    "8 hours (full day)",
    ""
    ],
    answer: 1,
    explanation: "For a 2-week sprint, the retrospective is timeboxed at 1.5 hours (max 3 hours for a 4-week sprint). The retrospective inspects the last sprint regarding people, relationships, process, and tools. The team identifies the most helpful changes and creates an actionable improvement plan. It is the key event for continuous improvement.",
  },
  'ba-ag-006': {
    question: "What is the BA\\'s primary role during Sprint Planning in a Scrum team?",
    options: [
    "Write code for the highest-priority stories",
    "Clarify requirements",
    "answer questions about acceptance criteria",
    "and help the team understand the user\\'s perspective and business context",
    "Run the Sprint Planning meeting as the facilitator",
    "Estimate story points for each backlog item",
    ""
    ],
    answer: 1,
    explanation: "During Sprint Planning, the BA acts as a domain expert — clarifying requirements, explaining acceptance criteria, providing business context, and answering development team questions about user needs. The Scrum Master facilitates the meeting, the PO sets priorities, and the dev team estimates and selects work. The BA bridges the gap between business intent and technical understanding.",
  },
  'ba-ag-007': {
    question: "What is the difference between a Sprint Review and a Sprint Retrospective?",
    options: [
    "They are the same meeting with different names",
    "Sprint Review inspects the product increment and gets stakeholder feedback; Sprint Retrospective inspects the team\\'s process and identifies improvements",
    "Sprint Review is for the dev team only; Sprint Retrospective includes stakeholders",
    "Sprint Review happens at the start of a sprint; Sprint Retrospective happens at the end",
    ""
    ],
    answer: 1,
    explanation: "Sprint Review (demo): the team shows the working increment to stakeholders, collects feedback, and discusses what to do next — focused on the PRODUCT. Sprint Retrospective: the team reflects on their working process, identifies what went well, what to improve, and commits to actions — focused on the PROCESS. Both happen at sprint end, but Review comes first.",
  },
  'ba-ag-008': {
    question: "In Kanban, work items are organized into fixed-length time-boxed iterations called sprints.",
    answer: "False",
    explanation: "Kanban does NOT use fixed sprints. It is a flow-based system with continuous delivery. Key Kanban practices include: visualizing workflow on a board, limiting Work In Progress (WIP limits), managing flow, making process policies explicit, and continuously improving. Sprints are a Scrum concept. Some teams combine both approaches (Scrumban).",
  },
  'ba-ag-009': {
    question: "A team consistently fails to complete their sprint commitments. As a BA, what is the MOST likely root cause related to requirements?",
    options: [
    "The team is lazy and needs more pressure",
    "Stories entering the sprint are insufficiently refined — unclear acceptance criteria",
    "hidden complexity",
    "or unresolved dependencies cause mid-sprint discoveries and rework",
    "The Product Owner is not attending daily standups",
    "The team is using the wrong programming language",
    ""
    ],
    answer: 1,
    explanation: "Incomplete refinement is the #1 requirements-related cause of sprint failures. When stories enter a sprint with ambiguous criteria, unidentified dependencies, or hidden complexity, the team discovers issues mid-sprint, causing delays and rework. The fix: invest more in backlog refinement (grooming), ensure stories meet the Definition of Ready, and split complex stories earlier.",
  },
  'ba-ag-010': {
    question: "What is SAFe (Scaled Agile Framework) and when is it appropriate?",
    options: [
    "A simplified version of Scrum for small teams",
    "A framework for scaling Agile practices to large enterprises with multiple teams",
    "providing structures like Agile Release Trains (ART)",
    "Program Increment (PI) planning",
    "and portfolio-level coordination",
    "A testing framework for automated Agile testing",
    "A project management tool like Jira or Azure DevOps",
    ""
    ],
    answer: 1,
    explanation: "SAFe addresses challenges when multiple Scrum teams must coordinate on a large product. Key concepts: Agile Release Train (ART) = team of teams (~50-125 people), Program Increment (PI) Planning = big-room planning every 8-12 weeks, and Portfolio level for strategic alignment. SAFe is appropriate for large organizations (100+ developers) but considered heavyweight for small teams.",
  },
  'ba-ag-011': {
    question: "Design a backlog refinement process for a team that is transitioning from Waterfall to Agile. Include frequency, participants, activities, and how to measure improvement.",
    answer: "Refinement Process Design:\\n\\nFrequency: 2 sessions per sprint (e.g.",
    explanation: "Teams transitioning from Waterfall often struggle with Agile refinement because they expect upfront, complete specifications. A structured process with clear activities and metrics helps build the refinement habit. More sessions initially prevents under-refined stories from entering sprints. Rotating developers ensures knowledge sharing. Metrics track whether refinement quality improves over time.",
  },
  'ba-ag-012': {
    question: "As a Lead BA supporting 4 Scrum teams building a unified product, design a cross-team requirements coordination strategy that prevents integration issues, duplicate work, and conflicting implementations.",
    answer: "Cross-Team Coordination Strategy:\\n\\n1. Shared Product Backlog Architecture:\\n- Single Product Backlog owned by one Chief PO\\n- Each team has a Team Backlog derived from the Product Backlog\\n- BA Community of Practice (CoP) meets weekly to review cross-team dependencies\\n\\n2. Dependency Management:\\n- Visual dependency board (physical or digital) mapping inter-team dependencies\\n- Dependencies identified during refinement and flagged with linked stories\\n- \"Dependency Day\" — dedicated session each PI/quarter where all teams align on shared interfaces (APIs",
    explanation: "Without coordination, multiple teams inevitably create conflicting implementations, duplicate work, and integration failures at the end. A structured coordination strategy with shared backlogs, dependency tracking, domain alignment, and regular sync cadences prevents these issues. The Lead BA acts as the \"connective tissue\" ensuring requirements are consistent and cross-team impacts are identified early.",
  },
  'ba-ag-013': {
    question: "In a large Agile organization, velocity varies significantly across teams (one team delivers 40 points/sprint, another delivers 20). A manager wants to standardize story points across teams. What should the Lead BA advise?",
    options: [
    "Agree and create a standard story point rubric for all teams",
    "Advise against it — story points are relative estimates meaningful only within a team\\'s context; instead",
    "use other metrics like cycle time",
    "throughput",
    "or features delivered for cross-team comparison",
    "Suggest using hours instead of story points for more accuracy",
    "Recommend doubling the slower team\\'s estimates to normalize",
    ""
    ],
    answer: 1,
    explanation: "Story points are relative to each team\\'s historical performance. A \"5\" in Team A reflects THAT team\\'s complexity assessment, not a universal measure. Standardizing points across teams creates false equivalence and gaming behavior. For cross-team comparison, use team-neutral metrics: cycle time (how fast), throughput (how many items delivered per sprint), or value delivered (business outcomes).",
  },
  'ba-ag-014': {
    question: "How long is a Daily Scrum session time-boxed for?",
    options: [
    "30 minutes",
    "15 minutes",
    "1 hour",
    "As long as it takes to resolve all blockers"
    ],
    answer: 1,
    explanation: "The Daily Scrum is a 15-minute time-boxed event for the Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary.",
  },
  'ba-ag-015': {
    question: "What is \"Sprint Burndown Chart\" intended to measure?",
    options: [
    "The total cost of the project",
    "The amount of work remaining in the current sprint over time",
    "The individual productivity of each developer",
    "The number of bugs found in production"
    ],
    answer: 1,
    explanation: "The Burndown Chart shows the remaining effort (usually in hours or points) vs. time. It helps the team visualize if they are on track to meet the Sprint Goal.",
  },
  'ba-ag-016': {
    question: "When a stakeholder requests a new critical feature in the middle of a sprint, what should the BA/PO do?",
    options: [
    "Add it to the current sprint immediately",
    "Tell the developers to work faster to include it",
    "Listen to the request",
    "evaluate its priority",
    "and add it to the Product Backlog for potential inclusion in a future sprint",
    "Tell the stakeholder to stop bothering the team"
    ],
    answer: 2,
    explanation: "In Scrum, the Sprint Backlog is generally not changed during the sprint to avoid disrupting the team. New requests belong in the Product Backlog for proper refinement and prioritization.",
  },
  'ba-ag-017': {
    question: "What is the \"Definition of Done\" (DoD) in Scrum?",
    options: [
    "A list of the features the CEO wants",
    "A formal description of the state of the Increment when it meets the quality measures required for the product",
    "The date the project is finished",
    "A list of all the tasks in the sprint"
    ],
    answer: 1,
    explanation: "The DoD ensures everyone has a shared understanding of what \"finished\" means (e.g., code reviewed, unit tested, documentation updated). An increment is only \"Done\" if it meets the DoD.",
  },
  'ba-ag-018': {
    question: "Your team is struggling with \"Scrum-but\" (we use Scrum but we don\\'t do retrospectives). How do you convince them of the value of retros?",
    answer: "Strategy:\\n1. Highlight Pain Points: Point out recurring issues that never get fixed.\\n2. Small Experiment: Suggest a 45-min \"Speed Retro\" for one sprint only.\\n3. Action Oriented: Ensure at least one improvement is implemented immediately so they see the result.\\n4. Safe Space: Use anonymous tools like FunRetrospectives to ensure participation.",
    explanation: "Resistance to retros usually stems from them feeling like \"useless meetings.\" Connecting the meeting to direct improvements in the team\\'s daily life is the key.",
  },
  'ba-ag-019': {
    question: "The Sprint Backlog is owned by the Product Owner.",
    answer: "False",
    explanation: "The Product Owner owns the PRODUCT Backlog. The Developers own the SPRINT Backlog (the work they have committed to for the sprint).",
  },
  'ba-ag-020': {
    question: "What does \"Capacity\" represent in sprint planning?",
    options: [
    "The total number of hours available from the team members to work on the sprint",
    "accounting for meetings",
    "vacations",
    "and other duties",
    "The speed of the network",
    "The total size of the database",
    "The maximum number of users the system can handle"
    ],
    answer: 0,
    explanation: "Capacity helps the team decide how much work they can realistically pull into the sprint, preventing over-commitment.",
  },
  'ba-ag-021': {
    question: "In a \"Large Scale Scrum\" (LeSS) environment, what is the best way to handle requirements shared by multiple teams?",
    options: [
    "Create one specialized BA for each individual team",
    "Use a single Product Backlog and a single Product Owner to maintain a unified vision",
    "with BAs acting as domain experts across teams",
    "Tell each team to build their own version",
    "Have 10 different POs"
    ],
    answer: 1,
    explanation: "LeSS is based on the principle of \"One Product, One PO, One Backlog.\" This prevents fragmentation and ensures systemic optimization over local team optimization.",
  },
  'ba-ag-022': {
    question: "Which metric is best for measuring the \"Outcome\" rather than the \"Output\" of an Agile team?",
    options: [
    "Velocity (Points per sprint)",
    "Product Usage metrics (e.g.",
    "Conversion rate",
    "User retention)",
    "Lines of code written",
    "Number of stories completed"
    ],
    answer: 1,
    explanation: "Output is \"what we built\" (velocity, stories). Outcome is \"what happened because we built it\" (user behavior changes, revenue). BAs focus on Outcomes.",
  },
  'ba-ag-023': {
    question: "As a Lead BA, how do you handle a \"Fixed Date, Fixed Scope, Fixed Price\" project being run with Scrum?",
    answer: "Strategy: The \"Iron Triangle\" Trap\\n1. Transparent Tracking: Use Burn-up charts to show the predicted finish date based on current velocity.\\n2. Negotiate Flexibility: Even if \"fixed",
    explanation: "Leading through the \"Iron Triangle\" requires constant transparency and the ability to negotiate \"flexibility within the scope\" to ensure a successful delivery.",
  },
  'ba-ag-024': {
    question: "How should a team handle a \"Spike\" in an Agile sprint?",
    options: [
    "Ignore it and focus on features",
    "Allocate time to research",
    "experiment",
    "or explore a technical problem to reduce uncertainty",
    "Assign it to the slowest developer",
    "Treat it as a high-priority bug",
    ""
    ],
    answer: 1,
    explanation: "A Spike is a type of story used for research or exploration. It aims to gather information needed to estimate a future story or solve a technical challenge. Spikes should be time-boxed and have clear objectives.",
  },
  'ba-ag-025': {
    question: "What is the \"Three Amigos\" meeting in Agile development?",
    options: [
    "A meeting between the CEO",
    "CFO",
    "and CTO",
    "A collaborative session between the BA/PO",
    "Developer",
    "and Tester to discuss requirements and acceptance criteria",
    "A team lunch held every Friday",
    "A daily ceremony for sub-teams",
    ""
    ],
    answer: 1,
    explanation: "The \"Three Amigos\" (Business, Development, Testing) meet to ensure shared understanding of requirements from three different perspectives. This helps catch bugs and misunderstandings before coding starts.",
  },
  'ba-ag-026': {
    question: "In Scrum, what does the \"Definition of Ready\" (DoR) typically include?",
    options: [
    "A list of all team members",
    "A clear description",
    "acceptance criteria",
    "identified dependencies",
    "and an estimate",
    "The final release date of the product",
    "The total cost of the project",
    ""
    ],
    answer: 1,
    explanation: "The DoR is a set of criteria that a story must meet before it can be pulled into a sprint. This ensures the team has enough information to start working without being blocked by ambiguity.",
  },
  'ba-ag-027': {
    question: "The Product Owner is the only person who can cancel a Sprint.",
    answer: "True",
    explanation: "According to the Scrum Guide, only the Product Owner has the authority to cancel a Sprint, typically if the Sprint Goal becomes obsolete.",
  },
  'ba-ag-028': {
    question: "What is \"Vertical Slicing\" in the context of user stories?",
    options: [
    "Dividing a story by technical layers (e.g.",
    "UI only",
    "DB only)",
    "Creating a story that delivers a small but complete piece of functionality across all layers",
    "Organizing the team by vertical departments",
    "Cutting the sprint duration in half",
    ""
    ],
    answer: 1,
    explanation: "Vertical slicing ensures that each story delivers usable value and can be tested end-to-end, rather than building \"horizontal slices\" like just a database table or just a UI mockup.",
  },
  'ba-ag-029': {
    question: "What is the key difference between \"Definition of Done\" (DoD) and \"Acceptance Criteria\" (AC)?",
    options: [
    "DoD is for the user story",
    "AC is for the whole sprint",
    "DoD is a global standard for all stories (e.g.",
    "code reviewed",
    "tested)",
    "while AC is specific to a single user story",
    "There is no difference",
    "AC is defined by developers",
    "DoD by the PO",
    ""
    ],
    answer: 1,
    explanation: "DoD applies to all work the team produces, ensuring consistent quality. Acceptance Criteria are specific conditions that a particular story must satisfy to be accepted by the PO.",
  },
  'ba-ag-030': {
    question: "Who is responsible for managing the \"Product Backlog\"?",
    options: [
    "The Scrum Master",
    "The Development Team",
    "The Product Owner",
    "The Project Manager",
    ""
    ],
    answer: 2,
    explanation: "The Product Owner is the sole person responsible for managing the Product Backlog, including its content, availability, and ordering.",
  },
  'ba-ag-031': {
    question: "Why is comparing \"Velocity\" between two different teams generally a bad idea?",
    options: [
    "Because one team is always better",
    "Because velocity is a relative measure based on each team\\'s specific estimation scale and context",
    "Because the Product Owner doesn\\'t like it",
    "Because it costs too much to track",
    ""
    ],
    answer: 1,
    explanation: "Teams have different definitions of story points and different internal dynamics. Velocity is an internal tool for a team to forecast their own capacity, not a benchmark for cross-team comparison.",
  },
  'ba-ag-032': {
    question: "In a Burn-down chart, what does a flat line across several days indicate?",
    options: [
    "Perfect progress",
    "No tasks were started",
    "No tasks were completed (or \"done\")",
    "indicating a potential blocker or bottleneck",
    "The team took a holiday",
    ""
    ],
    answer: 2,
    explanation: "A flat line in a burn-down chart means the remaining work isn\\'t decreasing. This often signals that the team is stuck on a difficult problem or that stories are too large to be finished quickly.",
  },
  'ba-ag-033': {
    question: "How should \"Technical Debt\" be addressed in an Agile backlog?",
    options: [
    "Ignore it until the app crashes",
    "Make it invisible to the Product Owner",
    "Explicitly include it as items in the backlog",
    "discussed and prioritized alongside new features",
    "Only fix it on weekends",
    ""
    ],
    answer: 2,
    explanation: "Technical debt is a reality of software development. It should be transparently managed in the backlog so the Product Owner can make informed trade-offs between speed and long-term stability.",
  },
  'ba-bp-001': {
    question: "What does BPMN stand for?",
    options: [
    "Business Project Management Notation",
    "Business Process Model and Notation",
    "Basic Process Modeling Network",
    "Business Planning and Management Notes",
    ""
    ],
    answer: 1,
    explanation: "BPMN (Business Process Model and Notation) is a standardized graphical notation for modeling business processes. It is maintained by OMG (Object Management Group). BPMN 2.0 is the current version and is widely used by BAs, process engineers, and technical teams because it is both business-readable and executable.",
  },
  'ba-bp-002': {
    question: "In BPMN, what shape represents a Task (an activity performed in a process)?",
    options: [
    "Diamond (◇)",
    "Circle (○)",
    "Rounded Rectangle (▢)",
    "Triangle (△)",
    ""
    ],
    answer: 2,
    explanation: "In BPMN: Rounded rectangles = Tasks/Activities (work to be done), Diamonds = Gateways (decision/branching points), Circles = Events (start, intermediate, end), Arrows = Sequence flows (order of activities). Understanding these basic shapes is essential for reading and creating BPMN diagrams.",
  },
  'ba-bp-003': {
    question: "A swimlane diagram shows which person or department is responsible for each step in a business process.",
    answer: "True",
    explanation: "Swimlanes (pools and lanes in BPMN) divide a process diagram into horizontal or vertical bands, each representing a role, department, or system. Activities placed within a lane belong to that actor. This makes responsibility assignment clear at a glance and helps identify handoff points (where work crosses lanes).",
  },
  'ba-bp-004': {
    question: "In BPMN, what is the difference between an Exclusive Gateway (XOR) and a Parallel Gateway (AND)?",
    options: [
    "There is no difference — both split the flow equally",
    "Exclusive Gateway selects ONE path based on a condition; Parallel Gateway activates ALL outgoing paths simultaneously",
    "Exclusive Gateway is for errors; Parallel Gateway is for normal flow",
    "Exclusive Gateway merges paths; Parallel Gateway splits paths",
    ""
    ],
    answer: 1,
    explanation: "Exclusive Gateway (X or ◇ with X): exactly one outgoing path is taken based on a condition (like an if-else). Parallel Gateway (+ or ◇ with +): ALL outgoing paths are activated simultaneously (concurrent execution). When used to merge, the Parallel Gateway waits for ALL incoming paths to complete before continuing. Inclusive Gateway (O) allows one or more paths.",
  },
  'ba-bp-005': {
    question: "What is the purpose of \"As-Is\" and \"To-Be\" process modeling in BA work?",
    options: [
    "As-Is describes the future state; To-Be describes the current state",
    "As-Is documents the current process (with pain points and inefficiencies); To-Be designs the improved future process — the gap between them defines the project scope",
    "As-Is is for internal processes; To-Be is for customer-facing processes",
    "They are different formats for the same process",
    ""
    ],
    answer: 1,
    explanation: "As-Is analysis maps the current state: how work is actually done (not how it should be), revealing bottlenecks, waste, duplicate steps, and manual workarounds. To-Be designs the desired future state with improvements. Gap analysis between As-Is and To-Be identifies the changes needed — this directly drives the requirements for the solution.",
  },
  'ba-bp-006': {
    question: "Which BPMN element represents a point in the process where something happens (e.g., a message arrives, a timer fires, or the process starts/ends)?",
    options: [
    "Gateway (diamond)",
    "Activity (rounded rectangle)",
    "Event (circle)",
    "Data Object (page icon)",
    ""
    ],
    answer: 2,
    explanation: "Events are circles in BPMN. Start Events (thin border) trigger the process, End Events (thick border) conclude it, and Intermediate Events (double border) occur during the process. Events can be typed: message (envelope icon), timer (clock icon), error (lightning bolt), signal, etc. They represent triggers and results.",
  },
  'ba-bp-007': {
    question: "Model the \"Employee Onboarding\" process using BPMN concepts. Describe the pools/lanes, key activities, gateways, and events for a process involving HR, IT, and the new employee\\'s Manager.",
    answer: "Pool: \"Employee Onboarding Process\"\\n\\nLane 1 — HR Department:\\n- Start Event: \"New hire contract signed\"\\n- Task: \"Create employee record in HRIS\"\\n- Task: \"Send welcome packet and orientation schedule\"\\n- Task: \"Conduct Day-1 orientation session\"\\n- Task: \"Enroll in benefits plan\"\\n\\nLane 2 — IT Department:\\n- Task: \"Provision laptop and access credentials\"\\n- Task: \"Setup email and software accounts\"\\n- Task: \"Grant system access based on role\"\\n- Exclusive Gateway: \"Remote employee?\"\\n  - Yes → Task: \"Ship equipment to home address\"\\n  - No → Task: \"Setup desk and office equipment\"\\n\\nLane 3 — Manager:\\n- Task: \"Prepare 30-60-90 day plan\"\\n- Task: \"Assign onboarding buddy\"\\n- Task: \"Schedule introduction meetings with team\"\\n- Timer Intermediate Event: \"After 30 days\"\\n- Task: \"Conduct first check-in review\"\\n\\nParallel Gateway after Start: HR",
    explanation: "This process model demonstrates key BPMN concepts: multiple lanes for role separation, parallel gateway for concurrent tracks (HR, IT, Manager all start simultaneously), exclusive gateway for conditional branching (remote vs. office), timer event for scheduled activities, and message flows for inter-department communication. Gap analysis might reveal bottlenecks like IT provisioning delays.",
  },
  'ba-bp-008': {
    question: "When analyzing a business process for improvement, which Lean methodology concept identifies steps that do NOT add value from the customer\\'s perspective?",
    options: [
    "Critical Path Analysis",
    "Value Stream Mapping — identifying value-adding vs. non-value-adding (waste/muda) activities",
    "Gantt Chart Analysis",
    "Monte Carlo Simulation",
    ""
    ],
    answer: 1,
    explanation: "Value Stream Mapping (from Lean) categorizes every step as: Value-Adding (customer would pay for it), Non-Value-Adding but Necessary (compliance, approvals), or Waste (waiting, rework, unnecessary handoffs). Lean aims to eliminate waste (muda). The 7 wastes: overproduction, waiting, transport, over-processing, inventory, motion, defects. BAs use this to streamline processes before automation.",
  },
  'ba-bp-009': {
    question: "What is a Sub-Process in BPMN and when should you use it?",
    options: [
    "A process that runs on a separate server",
    "A collapsed or expanded group of activities within a process",
    "used to manage complexity by encapsulating a set of related tasks into a single",
    "reusable unit",
    "A process that only runs when the main process fails",
    "A subprocess is the same as a task but with a longer description",
    ""
    ],
    answer: 1,
    explanation: "Sub-processes encapsulate complexity: a group of related tasks shown as a single rounded rectangle with a [+] marker (collapsed) or expanded to show internal details. Benefits: (1) manages visual complexity, (2) can define local error handling, (3) can be reused across processes, (4) can have its own start/end events. Use when multiple tasks logically belong together (e.g., \"Payment Processing\" sub-process).",
  },
  'ba-bp-010': {
    question: "A retail company wants to digitize and automate their order fulfillment process. As Lead BA, describe your approach to process discovery, analysis, optimization, and automation recommendation. Include stakeholder involvement, tools, and success metrics.",
    answer: "Approach:\\n\\n1. Process Discovery (2-3 weeks):\\n- Stakeholder workshops with warehouse staff",
    explanation: "A structured approach moves from discovery (understand current state) through analysis (quantify problems) to optimization (design improvements) to automation (technology recommendations). The key is quantifying pain points before proposing solutions — data-driven recommendations are more compelling than opinions. Tier-based automation allows incremental investment and ROI validation.",
  },
  'ba-bp-011': {
    question: "What is the role of an \"Inclusive Gateway\" (OR) in BPMN?",
    options: [
    "It allows exactly one path to be taken",
    "It allows one or more paths to be taken depending on conditions",
    "It always activates all available paths",
    "It is used to terminate the process",
    ""
    ],
    answer: 1,
    explanation: "An Inclusive Gateway (O symbol) can trigger one, some, or all outgoing paths if their respective conditions are met. This is more flexible than an Exclusive Gateway (XOR).",
  },
  'ba-bp-012': {
    question: "In BPMN, what is a \"Message Boundary Event\" used for?",
    options: [
    "To start a new process when a message is received",
    "To catch a message while an activity is in progress",
    "potentially interrupting it",
    "To send a message at the end of a process",
    "To display a message box to the user",
    ""
    ],
    answer: 1,
    explanation: "Boundary events are attached to the border of an activity. A Message Boundary Event triggers if a specific message is received while that activity is active, allowing for alternative paths like handling a cancellation request.",
  },
  'ba-bp-013': {
    question: "A BPMN \"Pool\" represents a participant (like a whole company), while a \"Lane\" is a sub-partition within that pool (like a department).",
    answer: "True",
    explanation: "Pools represent independent entities or participants. Lanes are used to organize activities within a pool based on internal roles or departments.",
  },
  'ba-bp-014': {
    question: "What does a \"Compensation Event\" do in a business process?",
    options: [
    "It calculates the salary for an employee",
    "It triggers an activity to undo or reverse the effects of a previously completed task",
    "It pays a fine for a process delay",
    "It closes the process successfully",
    ""
    ],
    answer: 1,
    explanation: "Compensation events are used to handle business-level rollbacks. For example, if a \"Book Flight\" task was successful but later the \"Book Hotel\" task fails, a compensation event can trigger \"Cancel Flight\".",
  },
  'ba-bp-015': {
    question: "How do you represent a \"Service Task\" in BPMN 2.0?",
    options: [
    "A rectangle with a user icon",
    "A rectangle with a gear icon",
    "A rectangle with a script icon",
    "A simple rounded rectangle with no icon",
    ""
    ],
    answer: 1,
    explanation: "A Service Task (gear icon) represents an activity that is performed automatically by a system or service, without human intervention.",
  },
  'ba-bp-016': {
    question: "What is the purpose of a \"Compensation Event\" in BPMN?",
    options: [
    "To pay the employees",
    "To \"undo\" or reverse the effects of a previously completed activity if an error occurrs later in the process",
    "To calculate the project budget",
    "To provide a bonus to the client",
    ""
    ],
    answer: 1,
    explanation: "Compensation is used in long-running transactions where a simple \"rollback\" isn\\'t possible. It triggers activities that logically undo work (e.g., \"Cancel Booking\" if \"Finalize payment\" fails).",
  },
  'ba-bp-017': {
    question: "What is the difference between a \"Pool\" and a \"Lane\" in a BPMN diagram?",
    options: [
    "Pools are for swimming",
    "Lanes for running",
    "A Pool represents a major participant (e.g.",
    "an organization)",
    "while Lanes subdivide a Pool (e.g.",
    "departments or roles within that organization)",
    "Pools are vertical",
    "Lanes are horizontal",
    "There is no functional difference",
    ""
    ],
    answer: 1,
    explanation: "Pools represent separate entities that communicate via Message Flows. Lanes are used to organize activities within a single entity based on internal responsibility.",
  },
  'ba-bp-018': {
    question: "Which connector is used to show communication between two separate Pools?",
    options: [
    "Sequence Flow (Solid line)",
    "Message Flow (Dashed line with an open circle at the start)",
    "Association (Dotted line)",
    "Data Object link",
    ""
    ],
    answer: 1,
    explanation: "Sequence flows cannot cross Pool boundaries. Only Message Flows can connect elements in different Pools, representing \"B2B\" or external communication.",
  },
  'ba-bp-019': {
    question: "What does a \"+\" sign at the bottom center of an activity task indicate?",
    options: [
    "The task is very important",
    "The task is a \"Sub-process\" that contains hidden",
    "more detailed steps",
    "The task requires two people",
    "The task is a mathematical calculation",
    ""
    ],
    answer: 1,
    explanation: "The plus sign indicates a collapsed sub-process. This allows the diagram to remain high-level while signaling that more detail is available elsewhere or can be \"expanded\".",
  },
  'ba-bp-020': {
    question: "What is an \"Ad-hoc Process\" in BPMN?",
    options: [
    "A process that only runs once",
    "A collection of activities that have no pre-defined sequence flow; the performer decides which tasks to do and in what order",
    "A process used for marketing",
    "A process that has failed",
    ""
    ],
    answer: 1,
    explanation: "Ad-hoc processes are used for \"knowledge work\" where the exact sequence cannot be predicted. Elements are shown inside a sub-process marked with a tilde symbol (~).",
  },
  'ba-cn-001': {
    question: "What is \"active listening\" and why is it important for a BA?",
    options: [
    "Listening while multitasking on your laptop during meetings",
    "Fully concentrating on the speaker",
    "understanding their message",
    "responding thoughtfully",
    "and confirming understanding — it helps capture accurate requirements and build stakeholder trust",
    "Repeating everything a stakeholder says word for word",
    "Only listening to senior stakeholders because they have more authority",
    ""
    ],
    answer: 1,
    explanation: "Active listening involves: (1) full attention (no distractions), (2) paraphrasing to confirm understanding (\"So what I hear is...\"), (3) asking clarifying questions, (4) observing non-verbal cues, (5) withholding judgment until the speaker finishes. For BAs, this is critical because misunderstanding requirements leads to costly rework.",
  },
  'ba-cn-002': {
    question: "A BA should adapt their communication style based on the audience — using business language with executives and technical language with developers.",
    answer: "True",
    explanation: "Audience adaptation is a key BA skill. Executives care about ROI, risk, and strategic alignment (use business language). Developers care about technical specifications, APIs, and data models (use technical language). End users care about usability and workflow impact (use simple, process-focused language). Using the wrong language creates miscommunication and disengagement.",
  },
  'ba-cn-003': {
    question: "During a meeting, a stakeholder goes off-topic and starts discussing unrelated issues. What should the BA/facilitator do?",
    options: [
    "Let them continue because interrupting is rude",
    "Abruptly cut them off and move to the next agenda item",
    "Acknowledge their point",
    "note it on the \"parking lot\" for follow-up",
    "and redirect the conversation back to the agenda",
    "End the meeting early because it is no longer productive",
    ""
    ],
    answer: 2,
    explanation: "The \"parking lot\" technique captures off-topic items without dismissing them: \"That\\'s an important point — let me add it to our parking lot list and we\\'ll address it separately after the meeting.\" This respects the stakeholder while keeping the meeting on track. Review parking lot items at the end or schedule follow-up sessions.",
  },
  'ba-cn-004': {
    question: "What is the \"5 Whys\" technique and when should a BA use it?",
    options: [
    "Asking \"why\" 5 times in interviews to annoy stakeholders into giving better answers",
    "A root-cause analysis technique that asks \"why\" iteratively (typically ~5 times) to drill past symptoms to the underlying root cause of a problem",
    "A brainstorming technique that generates 5 alternative solutions",
    "A prioritization technique that ranks 5 requirements",
    ""
    ],
    answer: 1,
    explanation: "The 5 Whys (from Toyota Production System) drills down causality: \"Why is delivery late?\" → \"Because QA found bugs\" → \"Why?\" → \"Because requirements were unclear\" → \"Why?\" → \"Because refinement was skipped\" → root cause identified. BAs use it during problem analysis to understand the real issue behind symptoms. The number 5 is a guideline — stop when you reach the root cause.",
  },
  'ba-cn-005': {
    question: "When presenting to senior executives, what is the MOST effective presentation structure?",
    options: [
    "Start with detailed analysis data",
    "then build up to conclusions over 60 minutes",
    "Start with the recommendation/conclusion first (executive summary)",
    "then provide supporting evidence",
    "and keep it concise (10-15 minutes)",
    "Use as many slides as possible to show thoroughness",
    "Read directly from the slides to ensure accuracy",
    ""
    ],
    answer: 1,
    explanation: "Executives have limited time and attention. Use the \"pyramid principle\" (by Barbara Minto): lead with the recommendation, then provide supporting arguments and evidence. Structure: (1) Executive summary with recommendation, (2) 3-4 key supporting points, (3) Data/evidence for each point. Keep it concise, visual, and action-oriented. Prepare detailed backup slides for Q&A if needed.",
  },
  'ba-cn-006': {
    question: "What is the difference between \"positions\" and \"interests\" in negotiation?",
    options: [
    "Positions are held by managers; interests are held by team members",
    "Positions are what people SAY they want (stated demands); interests are WHY they want it (underlying needs) — understanding interests enables creative solutions",
    "Positions are negotiable; interests are not",
    "They are the same thing expressed differently",
    ""
    ],
    answer: 1,
    explanation: "Classic example: two children fight over one orange (position: \"I want the orange\"). Understanding interests reveals one wants the juice, the other wants the peel for baking — both can be satisfied. In BA work: stakeholder says \"I need this feature by Friday\" (position). The interest might be \"I have a client demo on Monday\" — knowing this, you might offer a demo-ready prototype instead of the full feature.",
  },
  'ba-cn-007': {
    question: "You need to facilitate a 2-hour requirements workshop with 12 participants from different departments who have never worked together. Design the workshop agenda, facilitation techniques, and how you would handle dominant and silent participants.",
    answer: "Workshop Design:\\n\\nPre-workshop:\\n- Send agenda",
    explanation: "Effective workshop facilitation requires structured techniques that balance participation. Silent brainstorming prevents the HIPPO effect (Highest Paid Person\\'s Opinion dominating). Dot voting democratizes prioritization. Round-robin ensures all voices are heard. The facilitator\\'s role is to manage group dynamics, not to contribute opinions — neutrality builds trust.",
  },
  'ba-cn-008': {
    question: "During a negotiation about project scope, the client demands 5 additional features with no budget increase. Which negotiation strategy is MOST appropriate?",
    options: [
    "Accept all 5 features to keep the client happy",
    "Refuse all 5 features to protect the project budget",
    "Use principled negotiation: explore the interests behind the demand",
    "present options (add budget",
    "extend timeline",
    "swap features",
    "phase delivery)",
    "and find a mutual-benefit solution using objective criteria",
    "Agree to 2.5 features as a compromise",
    ""
    ],
    answer: 2,
    explanation: "Principled negotiation (Fisher & Ury, \"Getting to Yes\") has 4 principles: (1) Separate people from the problem, (2) Focus on interests not positions, (3) Generate options for mutual gain, (4) Use objective criteria. Instead of accepting or rejecting, explore WHY these features are needed and present alternatives: swap lower-priority features, phase delivery, or adjust budget/timeline. This protects relationships while maintaining project integrity.",
  },
  'ba-cn-009': {
    question: "As Lead BA, design a communication framework for a high-stakes project where the sponsor is the CEO, the steering committee meets monthly, there are 3 delivery teams, and external vendors are involved. Include escalation paths and crisis communication.",
    answer: "Communication Framework:\\n\\n1. Regular Communication Cadence:\\n- CEO Sponsor: Monthly 30-min 1:1 briefing (key decisions",
    explanation: "High-stakes projects require disciplined communication. The framework ensures the CEO gets concise strategic updates (not operational details), the steering committee makes informed decisions, teams stay aligned, and vendors are accountable. The escalation path prevents issues from festering, and the crisis protocol ensures rapid, coordinated response when things go wrong.",
  },
  'ba-cn-010': {
    question: "What is the \"BATNA\" concept in negotiation and how does it help a Lead BA?",
    options: [
    "BATNA stands for \"Budget Allocation for Technical Needs Assessment\"",
    "BATNA (Best Alternative To a Negotiated Agreement) is your best fallback option if the negotiation fails — knowing your BATNA gives you power to walk away from unfavorable deals and sets a minimum acceptable outcome",
    "BATNA is a software tool for automated negotiation",
    "BATNA stands for \"Business Analysis Training and Assessment\"",
    ""
    ],
    answer: 1,
    explanation: "BATNA (from \"Getting to Yes\") is your best option if this negotiation fails. If a vendor quotes $500K but you have an alternative vendor at $400K, your BATNA is $400K — you should never accept above that. For BAs: if stakeholders demand impossible timelines, your BATNA might be a phased approach or reduced scope. A strong BATNA gives negotiation confidence; a weak BATNA means you need to negotiate harder or improve your alternatives.",
  },
  'ba-cn-011': {
    question: "When communicating a delay to a stakeholder, what is the most professional approach?",
    options: [
    "Wait until the deadline has passed to see if they notice",
    "Inform them at the last minute",
    "Proactively communicate as soon as the risk is identified",
    "explain the reason",
    "and provide a revised timeline with a mitigation plan",
    "Blame the development team"
    ],
    answer: 2,
    explanation: "Transparency builds credibility. Early warning allows stakeholders to adjust their own plans and shows that you are in control of the situation despite the delay.",
  },
  'ba-cn-012': {
    question: "What is the \"Yes, and...\" technique in facilitation?",
    options: [
    "Agreeing with everything the stakeholder says",
    "A technique from improvisational theatre used to build on others\\' ideas without immediately shutting them down",
    "fostering creativity in sessions",
    "Saying yes but doing the opposite",
    "A way to trick people into agreeing"
    ],
    answer: 1,
    explanation: "\"Yes, and...\" allows ideas to grow. For example, \"Yes, we can build the dashboard, and we could also include a real-time notification feature to make it more useful.\"",
  },
  'ba-cn-013': {
    question: "A stakeholder is using aggressive language in a meeting. How should the BA respond?",
    options: [
    "Be aggressive back to show strength",
    "Stay calm",
    "use \"I\" statements",
    "and if necessary",
    "pause the meeting to address the behavior or move to a neutral topic",
    "Leave the room immediately without saying anything",
    "Cry and hope someone helps"
    ],
    answer: 1,
    explanation: "De-escalation is a vital BA skill. Staying professional prevents the meeting from becoming a toxic conflict and keeps the focus on the business objective.",
  },
  'ba-cn-014': {
    question: "Which of the following is a barrier to effective communication during elicitation?",
    options: [
    "Using a shared glossary",
    "Providing pre-read materials",
    "Cognitive bias (e.g.",
    "confirmation bias or availability heuristic)",
    "Recording the session with permission"
    ],
    answer: 2,
    explanation: "BAs must be aware of their own biases. Confirmation bias leads you to only \"hear\" requirements that match your existing assumptions about the solution.",
  },
  'ba-cn-015': {
    question: "Design a \"Dashboard for Executives\" that communicates project health for 5 different workstreams. What are the 4 most critical KPIs to show?",
    answer: "Dashboard Design:\\n1. Milestone Status: Visual timeline (Green/Yellow/Red) for key delivery dates.\\n2. Budget vs. Actuals: Simple bar chart showing spend burn rate.\\n3. Top 3 Risks: High-level summary of the biggest threats and their mitigation plans.\\n4. Value Realization: % of \"Must Have\" requirements completed and verified.",
    explanation: "Executives need \"Information at a glance.\" Avoid showing list of JIRA tickets; focus on high-level confidence and risk.",
  },
  'ba-cn-016': {
    question: "Visual communication (diagrams, wireframes) is usually more effective than long text descriptions for complex requirements.",
    answer: "True",
    explanation: "The human brain processes visual information much faster than text. Diagrams like Flowcharts or Wireframes reduce ambiguity and help stakeholders \"see\" the logic.",
  },
  'ba-cn-017': {
    question: "What is \"Non-Verbal Communication\" and why should a BA monitor it?",
    options: [
    "The code written by developers",
    "Body language",
    "eye contact",
    "and tone of voice — it often reveals more about a stakeholder\\'s true feelings or level of agreement than their words alone",
    "The silent part of a video call",
    "A type of email that contains no text"
    ],
    answer: 1,
    explanation: "If a stakeholder says \"I agree\" while crossing their arms and looking away, they likely have unexpressed concerns. A good BA probes further in these moments.",
  },
  'ba-cn-018': {
    question: "As a Lead BA, you are negotiating with a vendor for a new software tool. You have a very weak BATNA. What should you do?",
    options: [
    "Tell the vendor you have no other options",
    "Focus on \"Expanding the Pie\" — find other non-monetary value you can provide to the vendor (e.g.",
    "being a case study",
    "longer contract) to gain concessions",
    "Accept any price they give",
    "Cancel the project"
    ],
    answer: 1,
    explanation: "When you can\\'t walk away, you must shift from competitive negotiation (splitting the pie) to collaborative negotiation (finding additional value for both sides).",
  },
  'ba-cn-019': {
    question: "Which conflict management style is most appropriate when the business relationship is critical and the issue is complex?",
    options: [
    "Avoiding",
    "Competing (I win",
    "you lose)",
    "Collaborating (Win-Win)",
    "Accommodating (I lose",
    "you win)"
    ],
    answer: 2,
    explanation: "Collaboration takes longer but ensures both parties\\' interests are met, which is vital for long-term stakeholder partnerships on complex projects.",
  },
  'ba-cn-020': {
    question: "Design a \"Feedback Mechanism\" to improve BA communication skills across your team of 10 BAs.",
    answer: "BA Feedback Loop:\\n1. Peer Reviews: BAs attend each others\\' workshops and provide \"Post-Session Feedback.\"\\n2. Recording & Analysis: Recording (with permission) key elicitation sessions for self-review.\\n3. Stakeholder NPS: Quarterly 3-question survey to internal stakeholders about BA clarity and responsiveness.\\n4. Success Stories: Monthly knowledge-sharing sessions where \"difficult negotiations\" are discussed and learned from.",
    explanation: "Communication is a soft skill that requires a culture of continuous feedback and safe practice to improve.",
  },
  'ba-cn-021': {
    question: "What is the \"Active Listening\" technique in stakeholder interviews?",
    options: [
    "Typing everything they say as fast as possible",
    "Listening fully",
    "visualizing the meaning",
    "and providing feedback to show you understood (e.g.",
    "summarizing back)",
    "Thinking about your next question while they are speaking",
    "Interrupting to correct their technical mistakes",
    ""
    ],
    answer: 1,
    explanation: "Active listening builds trust and ensures information accuracy. It involves techniques like paraphrasing (\"So, what I hear you saying is...\"), clarifying questions, and observing non-verbal cues.",
  },
  'ba-cn-022': {
    question: "How should a BA handle a high-power, low-interest stakeholder (based on the Power/Interest grid)?",
    options: [
    "Manage them closely with daily updates",
    "Monitor them with minimal effort",
    "Keep them satisfied through periodic high-level briefings and ensuring their needs are met",
    "Keep them informed about every technical detail",
    ""
    ],
    answer: 2,
    explanation: "For stakeholders with high power but low interest, the goal is to \"Keep Satisfied\" so they don\\'t become an obstacle, but avoid overwhelming them with details they don\\'t care about.",
  },
  'ba-cn-023': {
    question: "What is \"Conflict Resolution\" in a requirements workshop?",
    options: [
    "Letting the person with the loudest voice win",
    "Identifying the source of disagreement and facilitating a neutral discussion to find a mutually acceptable solution",
    "Canceling the meeting and letting the PM decide",
    "Taking a vote and following the majority",
    ""
    ],
    answer: 1,
    explanation: "Conflict is often a sign of different perspectives or goals. A BA acts as a neutral facilitator to reach consensus through compromise or data-driven decision making.",
  },
  'ba-cn-024': {
    question: "What is the \"Win-Win\" approach in requirements negotiation?",
    options: [
    "Getting everything you want while the vendor loses money",
    "Finding a solution that satisfies the core interests and goals of all parties involved",
    "Splitting the difference exactly 50/50",
    "Persuading the other side to give up their goals",
    ""
    ],
    answer: 1,
    explanation: "Win-win negotiation focuses on interests rather than positions. It aims to build long-term relationships and ensure that the final requirements are supported by everyone.",
  },
  'ba-cn-025': {
    question: "Visual aids like diagrams and mockups are more effective at communicating complex logic than long paragraphs of text.",
    answer: "True",
    explanation: "Humans process visual information much faster than text. Diagrams reduce ambiguity and provide a \"common language\" for both business and technical stakeholders.",
  },
  'ba-cn-026': {
    question: "According to the Thomas-Kilmann model, which conflict management style involves high concern for both your own interests and the other person\\'s?",
    options: [
    "Competing",
    "Collaborating (Win-Win)",
    "Avoiding",
    "Accommodating",
    ""
    ],
    answer: 1,
    explanation: "Collaborating is the \"Win-Win\" approach where both parties work together to find a solution that fully satisfies both, though it requires more time and trust.",
  },
  'ba-cn-027': {
    question: "What is \"Influence without Authority\" and why is it critical for a BA?",
    options: [
    "A way to trick people into doing work",
    "The ability to lead and align stakeholders toward a common goal through persuasion",
    "relationship building",
    "and expertise rather than formal hierarchical power",
    "Using a loud voice in meetings",
    "Asking the boss to order people around",
    ""
    ],
    answer: 1,
    explanation: "BAs rarely \"manage\" stakeholders or developers directly. They must rely on their credibility, logical arguments, and interpersonal skills to get people to agree on requirements.",
  },
  'ba-cn-028': {
    question: "What is the best way to handle a \"Quiet\" stakeholder in a requirements workshop?",
    options: [
    "Ignore them and focus on the loud ones",
    "Ask them directly for their opinion on a specific point during a lull",
    "or use techniques like \"Silent Brainstorming\" (writing ideas on stickies)",
    "Demand that they speak more",
    "Report them to their manager",
    ""
    ],
    answer: 1,
    explanation: "Quiet stakeholders might have critical information but feel overshadowed. Structured techniques like writing down ideas ensure everyone\\'s voice is heard.",
  },
  'ba-cn-029': {
    question: "What is a \"Communication Plan\" and what should it typically include?",
    options: [
    "A list of phone numbers",
    "A strategy defining who needs what information",
    "when they need it",
    "how it will be delivered",
    "and who is responsible for providing it",
    "A script for the project manager",
    "A manual for the chat tool",
    ""
    ],
    answer: 1,
    explanation: "A good communication plan prevents info overload for some and \"info starvation\" for others. It ensures transparency and alignment throughout the project life cycle.",
  },
  'ba-cn-030': {
    question: "What should a BA do when a senior executive makes a high-impact requirement change very late in the project?",
    options: [
    "Say \"No\" immediately",
    "Say \"Yes\" immediately and keep working",
    "Briefly acknowledge the request",
    "then present a clear \"Impact Analysis\" showing the trade-offs in time",
    "cost",
    "and other features",
    "allowing the executive to make an informed decision",
    "Quit the project",
    ""
    ],
    answer: 2,
    explanation: "The BA\\'s job is NOT to say yes or no, but to provide the data (impact analysis) so the decision-makers understand the consequences of the change.",
  },
  'ba-dk-001': {
    question: "Why is domain knowledge important for a Business Analyst?",
    options: [
    "BAs need domain knowledge to write code for the system",
    "Domain knowledge helps BAs understand the business context",
    "speak stakeholders\\' language",
    "ask better questions",
    "and identify gaps that non-domain experts would miss",
    "Domain knowledge is only important for senior BAs",
    "Domain knowledge replaces the need for requirements gathering techniques",
    ""
    ],
    answer: 1,
    explanation: "A BA with domain knowledge can: (1) understand industry jargon and concepts without constant explanation, (2) identify implied requirements stakeholders assume are obvious, (3) anticipate regulatory and compliance needs, (4) challenge unrealistic requirements based on industry experience, (5) build credibility with business stakeholders. Domain knowledge is a force multiplier for all other BA skills.",
  },
  'ba-dk-002': {
    question: "In e-commerce, what does \"SKU\" stand for?",
    options: [
    "Standard Knowledge Unit",
    "Stock Keeping Unit — a unique identifier for each distinct product and variant",
    "Sales Key Update",
    "System Knowledge Utility",
    ""
    ],
    answer: 1,
    explanation: "SKU (Stock Keeping Unit) uniquely identifies each product variant in inventory management. For example, a \"Blue T-Shirt Size M\" has a different SKU from \"Blue T-Shirt Size L.\" BAs working on e-commerce systems must understand SKUs for inventory management, order processing, and reporting requirements.",
  },
  'ba-dk-003': {
    question: "In fintech applications, KYC (Know Your Customer) is an optional process that companies can skip to improve user experience.",
    answer: "False",
    explanation: "KYC (Know Your Customer) is a mandatory regulatory requirement for financial institutions in most countries. It involves verifying customer identity, assessing risk, and monitoring transactions to prevent money laundering (AML), fraud, and terrorism financing. Skipping KYC can result in severe legal penalties, fines, and license revocation. BAs must design systems that balance KYC compliance with user experience.",
  },
  'ba-dk-004': {
    question: "In healthcare IT, what does the term \"HL7\" refer to?",
    options: [
    "A programming language for medical devices",
    "Health Level Seven — a set of international standards for the exchange",
    "integration",
    "sharing",
    "and retrieval of electronic health information",
    "A type of hospital database",
    "A medical diagnosis classification system",
    ""
    ],
    answer: 1,
    explanation: "HL7 (Health Level Seven International) defines standards for healthcare data exchange. HL7 v2 uses pipe-delimited messages (most widely deployed). HL7 FHIR (Fast Healthcare Interoperability Resources) is the modern REST-based standard. BAs in healthcare must understand HL7 to define integration requirements between clinical systems (EHR, lab, pharmacy, billing).",
  },
  'ba-dk-005': {
    question: "What is an ERP system and what business areas does it typically cover?",
    options: [
    "ERP (Error Recovery Protocol) is a disaster recovery system",
    "ERP (Enterprise Resource Planning) is an integrated business management system covering finance",
    "HR",
    "procurement",
    "inventory",
    "manufacturing",
    "sales",
    "and CRM in a single platform",
    "ERP is a project management methodology like Scrum",
    "ERP is a type of database used by enterprises",
    ""
    ],
    answer: 1,
    explanation: "ERP (Enterprise Resource Planning) systems like SAP, Oracle, Microsoft Dynamics integrate core business processes into one system. Key modules: Finance (GL, AP, AR), HR (payroll, talent), Supply Chain (procurement, inventory, logistics), Manufacturing (MRP, production planning), Sales & CRM. BAs working on ERP projects must understand cross-module dependencies — a change in one module affects others.",
  },
  'ba-dk-006': {
    question: "In logistics, what does \"last-mile delivery\" refer to?",
    options: [
    "The first step of the delivery process from warehouse to distribution center",
    "The final leg of delivery from a distribution hub to the end customer\\'s doorstep — typically the most expensive and complex part of the supply chain",
    "The process of returning products to the manufacturer",
    "Long-distance shipping between countries",
    ""
    ],
    answer: 1,
    explanation: "Last-mile delivery is the final (and often most expensive) step: from the local distribution center/hub to the customer\\'s door. It accounts for ~53% of total shipping costs due to: small individual deliveries, urban traffic, failed delivery attempts, and customer availability windows. BAs in logistics focus on optimizing this through route optimization, delivery time windows, real-time tracking, and alternative delivery points (lockers, pickup stores).",
  },
  'ba-dk-007': {
    question: "Design the key functional requirements for a fintech \"digital wallet\" application. Include core features, regulatory requirements, and security considerations.",
    answer: "Digital Wallet — Key Functional Requirements:\\n\\n1. Account Management:\\n- User registration with KYC verification (ID upload",
    explanation: "Fintech BAs must balance user experience with heavy regulatory requirements. KYC/AML compliance is non-negotiable but must be designed to minimize friction (e.g., tiered verification). Security features must be robust without making the app unusable. Understanding the regulatory landscape (e-money licenses, data protection, consumer protection) is essential for fintech domain BA work.",
  },
  'ba-dk-008': {
    question: "When working on an e-commerce project, what does \"cart abandonment rate\" measure and why is it important for a BA?",
    options: [
    "The rate at which shopping carts break down in physical stores",
    "The percentage of users who add items to their cart but leave without completing the purchase — it reveals UX friction points and informs requirements for checkout optimization",
    "The rate at which products are removed from the catalog",
    "The speed at which the cart page loads",
    ""
    ],
    answer: 1,
    explanation: "Cart abandonment rate (globally ~70%) measures lost sales. Common causes a BA should address in requirements: unexpected shipping costs (→ show shipping early), required account creation (→ guest checkout), complex checkout (→ fewer steps), security concerns (→ trust badges), and payment method limitations (→ multiple payment options). BA can define A/B testing requirements to optimize checkout conversion.",
  },
  'ba-dk-009': {
    question: "A hospital group wants to implement a unified Electronic Health Record (EHR) system across 5 hospitals. As Lead BA, identify the critical domain-specific challenges and how your requirements approach must differ from a typical enterprise software project.",
    answer: "Healthcare EHR — Domain-Specific Challenges:\\n\\n1. Patient Safety (Life-Critical):\\n- Incorrect data can kill patients → requirements must include clinical validation rules",
    explanation: "Healthcare IT projects fail at higher rates than other industries because the domain is uniquely complex: life-safety implications, heavy regulation, complex clinical workflows, and physician adoption challenges. A Lead BA must approach this differently — more clinical SME involvement, stricter validation, clinical simulation testing, and deep understanding of healthcare standards. The cost of getting requirements wrong is not just money — it is patient safety.",
  },
  'ba-dk-010': {
    question: "How should a Lead BA approach learning a completely new domain (e.g., transitioning from e-commerce to insurance) when starting a new project?",
    options: [
    "Rely entirely on stakeholders to explain everything during workshops",
    "Take a systematic approach: study industry fundamentals (books",
    "courses",
    "reports)",
    "shadow domain experts",
    "analyze competitor products",
    "learn regulatory landscape",
    "and create a domain glossary — becoming conversant (not expert) within 4-6 weeks",
    "Refuse the project because domain expertise is essential from day one",
    "Use only online articles and blog posts for quick domain learning",
    ""
    ],
    answer: 1,
    explanation: "Effective domain learning: (1) Study fundamentals (industry textbooks, certification syllabi like LOMA for insurance), (2) Competitor analysis (use their products, read their docs), (3) Shadow domain experts for 2-3 days, (4) Map the regulatory landscape (compliance requirements), (5) Create a domain glossary (key terms, acronyms, concepts), (6) Attend industry events/webinars. A BA does not need to become a domain expert — they need to become conversant enough to ask the right questions and challenge assumptions.",
  },
  'ba-doc-001': {
    question: "What does SRS stand for in business analysis documentation?",
    options: [
    "System Resource Specification",
    "Software Requirements Specification",
    "Standard Reporting System",
    "Stakeholder Review Summary",
    ""
    ],
    answer: 1,
    explanation: "SRS (Software Requirements Specification) is a comprehensive document that describes what the software should do. It typically includes functional requirements, non-functional requirements, system interfaces, constraints, and assumptions. IEEE 830 is a widely used standard for SRS structure.",
  },
  'ba-doc-002': {
    question: "What is the PRIMARY difference between a BRD (Business Requirements Document) and an SRS?",
    options: [
    "BRD is shorter; SRS is longer",
    "BRD focuses on WHAT the business needs and WHY; SRS focuses on HOW the system will meet those needs technically",
    "BRD is for developers; SRS is for stakeholders",
    "There is no difference — they are the same document",
    ""
    ],
    answer: 1,
    explanation: "BRD captures business-level requirements: business objectives, scope, stakeholders, and high-level needs (WHAT and WHY). SRS translates these into detailed system-level specifications: functional requirements, data models, interfaces, and constraints (HOW). BRD is written for business stakeholders; SRS is primarily for the development team.",
  },
  'ba-doc-003': {
    question: "In Agile projects, documentation is completely eliminated because the Agile Manifesto says \"working software over comprehensive documentation.\"",
    answer: "False",
    explanation: "The Agile Manifesto values working software MORE than comprehensive documentation — it does not say \"no documentation.\" Agile teams still document, but focus on \"just enough\" documentation that adds value: user stories, acceptance criteria, architecture decisions (ADRs), API docs, and runbooks. The key is documentation that is lightweight, living, and useful.",
  },
  'ba-doc-004': {
    question: "Which document would a BA create to describe the detailed functional specifications, data dictionary, and interface designs for the development team?",
    options: [
    "BRD (Business Requirements Document)",
    "FRD (Functional Requirements Document) / FSD (Functional Specification Document)",
    "Project Charter",
    "Test Plan",
    ""
    ],
    answer: 1,
    explanation: "The FRD/FSD bridges the gap between BRD and implementation. It contains detailed functional specifications, data element definitions, business rules, screen layouts, interface specifications, and error handling. It is the primary reference for developers during implementation and for QA during test case creation.",
  },
  'ba-doc-005': {
    question: "What is a PRD (Product Requirements Document) and how does it differ from a BRD?",
    options: [
    "PRD is just the digital name for BRD",
    "PRD is product-centric — it defines the product vision",
    "features",
    "user personas",
    "and release criteria; BRD is business-centric — it defines business objectives and justification",
    "PRD is for hardware; BRD is for software",
    "PRD is written by developers; BRD is written by managers",
    ""
    ],
    answer: 1,
    explanation: "BRD answers \"why does the business need this?\" — focusing on business objectives, ROI, and justification. PRD answers \"what product are we building?\" — focusing on product vision, user personas, feature list, user flows, and success metrics. In product-led organizations, PRDs (written by Product Managers) often replace BRDs. Both can coexist in larger organizations.",
  },
  'ba-doc-006': {
    question: "Write a template outline for a BRD (Business Requirements Document). Include the key sections a BA should cover.",
    answer: "1. Document Information (version",
    explanation: "A well-structured BRD provides a complete business context for the project. The key sections ensure nothing is missed: objectives justify the project, scope prevents scope creep, stakeholder analysis ensures the right people are involved, current/future state shows the transformation, and success metrics define how to measure success.",
  },
  'ba-doc-007': {
    question: "What is the concept of \"living documentation\" and how does it apply to BA work?",
    options: [
    "Documentation stored on a website instead of in Word files",
    "Documentation that is continuously updated as the product evolves",
    "stays in sync with the current system state",
    "and is often auto-generated or closely tied to source artifacts (tests",
    "code",
    "backlog)",
    "Documentation written by AI tools",
    "First drafts of documents that are never finalized",
    ""
    ],
    answer: 1,
    explanation: "Living documentation stays current by being closely linked to the system: executable specifications (BDD test scenarios that serve as requirements), auto-generated API docs (Swagger/OpenAPI), wikis updated each sprint, and architecture decision records (ADRs). This approach reduces the \"documentation rot\" problem where documents become outdated immediately after creation.",
  },
  'ba-doc-008': {
    question: "When documenting business rules for a complex insurance calculation system, which technique provides the MOST clarity for both business and technical teams?",
    options: [
    "Long paragraphs of text describing each rule",
    "Decision tables or decision trees that visually map conditions to actions/outcomes",
    "UML sequence diagrams",
    "Entity-Relationship diagrams",
    ""
    ],
    answer: 1,
    explanation: "Decision tables map combinations of conditions (age, policy type, risk level) to outcomes (premium rate, coverage) in a structured grid. They are superior to text for complex rule sets because: (1) they make all combinations visible, (2) they reveal gaps (missing combinations), (3) they are directly testable, and (4) both business and tech teams can read them. Decision trees work similarly but visually show the branching logic.",
  },
  'ba-doc-009': {
    question: "Design a documentation strategy for a microservices-based e-commerce platform that is built by 3 Scrum teams. Include document types, ownership, tools, and maintenance processes.",
    answer: "Documentation Strategy:\\n\\n1. Architecture Layer:\\n- Architecture Decision Records (ADRs) — one per significant decision",
    explanation: "Microservices multiply documentation needs because each service has its own API, deployment, and business context. A layered strategy ensures each audience (architects, developers, BAs, ops) finds what they need. Auto-generation (Swagger, ADRs in Git) keeps docs in sync. Making doc review part of DoD prevents documentation debt from accumulating.",
  },
  'ba-doc-010': {
    question: "As Lead BA, establish a documentation standard and governance framework for a BA team of 8 analysts working across different projects. Include templates, quality criteria, review processes, and tools.",
    answer: "Documentation Governance Framework:\\n\\n1. Template Library:\\n- Standard templates: BRD",
    explanation: "Without documentation standards, 8 BAs produce 8 different documentation styles, making cross-project knowledge transfer difficult. A governance framework ensures consistency (templates), quality (review process, checklists), and continuous improvement (audits, metrics). The key is making standards practical — overly rigid processes get bypassed, so templates should be helpful, not bureaucratic.",
  },
  'ba-doc-011': {
    question: "A client demands a 200-page SRS document before any development begins, but the project is following Agile. How should a Lead BA navigate this situation?",
    options: [
    "Refuse the client\\'s request and explain that Agile means no documentation",
    "Write the full 200-page SRS to satisfy the client",
    "then ignore it during development",
    "Negotiate a compromise: deliver a lightweight \"SRS-lite\" covering architecture",
    "key business rules",
    "and NFRs upfront",
    "then progressively elaborate details through user stories and sprint documentation",
    "providing regular documentation updates aligned with sprint cadence",
    "Switch the project to Waterfall to accommodate the client",
    ""
    ],
    answer: 2,
    explanation: "The solution balances client expectations with Agile principles. The upfront document provides the confidence the client needs (architecture, key decisions, NFRs) without becoming a comprehensive specification that will be outdated before development starts. Progressive elaboration through sprint artifacts keeps documentation current. Regular updates show the client that documentation evolves with the product.",
  },
  'ba-doc-012': {
    question: "What is the primary difference between a BRD and an SRS?",
    options: [
    "There is no difference",
    "A BRD (Business Requirements Document) focuses on the \"What\" from a business goal perspective; an SRS (Software Requirements Specification) focuses on the \"How\" from a technical system perspective",
    "BRD is written by developers; SRS is written by stakeholders",
    "SRS is for Agile; BRD is for Waterfall",
    ""
    ],
    answer: 1,
    explanation: "The BRD describes high-level business needs and goals. The SRS translates those into detailed functional and technical requirements for the implementation team.",
  },
  'ba-doc-013': {
    question: "What is a \"Data Dictionary\" and why is it important in system documentation?",
    options: [
    "A collection of technical terms for translation",
    "A centralized repository of metadata that defines the meaning",
    "relationships",
    "origin",
    "usage",
    "and format of data elements",
    "A physical book kept in the server room",
    "A backup of the database",
    ""
    ],
    answer: 1,
    explanation: "A Data Dictionary ensures consistency across the project. It defines exactly what \"Order ID\" or \"Customer Status\" means, preventing misunderstandings between business users, developers, and database administrators.",
  },
  'ba-doc-014': {
    question: "In an SRS, Non-Functional Requirements (NFRs) are less important than Functional Requirements.",
    answer: "False",
    explanation: "NFRs (performance, security, usability, etc.) are just as critical. A system that performs exactly the right functions but takes 5 minutes to load or is unsecure is a failure.",
  },
  'ba-doc-015': {
    question: "What is the purpose of a \"Requirements Traceability Matrix\" (RTM)?",
    options: [
    "To track the project budget",
    "To ensure that all requirements are linked to business goals",
    "test cases",
    "and final delivery items",
    "To list all the developers on the project",
    "To design the primary keys of the database",
    ""
    ],
    answer: 1,
    explanation: "The RTM provides a map to verify that every requirement is implemented and tested, and it helps analyze the impact of changes.",
  },
  'ba-doc-016': {
    question: "Which diagram is best for showing the static structure of data and their relationships in a system?",
    options: [
    "Sequence Diagram",
    "Use Case Diagram",
    "Class Diagram / ER Diagram",
    "State Machine Diagram",
    ""
    ],
    answer: 2,
    explanation: "Class diagrams (UML) or Entity Relationship Diagrams (ERD) are standard for documenting the logical structure of data and how different entities relate to each other.",
  },
  'ba-doc-017': {
    question: "What are the characteristic of a \"SMART\" requirement?",
    options: [
    "Specific",
    "Measurable",
    "Attainable",
    "Relevant",
    "Time-bound",
    "Simple",
    "Modern",
    "Agile",
    "Reliable",
    "Traditional",
    "Small",
    "Managed",
    "Accurate",
    "Repeatable",
    "Tested",
    "Standard",
    "Multi-functional",
    "Assigned",
    "Reviewed",
    "Technical",
    ""
    ],
    answer: 0,
    explanation: "The SMART criteria help ensure requirements are clear and verifiable. For example, \"The system should be fast\" is NOT smart. \"The system must load the dashboard in < 2 seconds\" IS smart.",
  },
  'ba-doc-018': {
    question: "What is a \"Data Dictionary\"?",
    options: [
    "A book found in the IT department library",
    "A centralized repository of metadata that describes the data elements",
    "their meanings",
    "relationships",
    "origin",
    "usage",
    "and format",
    "A list of all employees in the company",
    "A software used for spell checking",
    ""
    ],
    answer: 1,
    explanation: "A data dictionary ensures everyone (devs, BAs, users) has a consistent understanding of what \"Customer ID\" or \"Order Status\" actually means and how they are stored.",
  },
  'ba-doc-019': {
    question: "What is a \"Requirements Traceability Matrix\" (RTM)?",
    options: [
    "A movie about hackers",
    "A document that maps and traces user requirements with test cases to ensure that all requirements are met and tested",
    "A list of all developers assigned to the project",
    "A tool for calculating the project\\'s ROI",
    ""
    ],
    answer: 1,
    explanation: "RTM is a compliance and quality tool. It proves that every business requirement has a corresponding technical design and a test case, ensuring no requirement is \"lost\" during development.",
  },
  'ba-doc-021': {
    question: "What is the purpose of documenting \"Assumptions and Constraints\" in a requirements document?",
    options: [
    "To fill up more pages",
    "To define the boundaries and conditions under which the solution is expected to work and to manage stakeholder expectations",
    "To hide the project risks",
    "To increase the complexity of the project",
    ""
    ],
    answer: 1,
    explanation: "Assumptions (e.g., \"The API will be available by June\") and Constraints (e.g., \"The system must run on IE11\") are critical for risk management and scoped definitions.",
  },
  'ba-re-001': {
    question: "Which of the following is the BEST definition of a \"functional requirement\"?",
    options: [
    "A constraint on the system\\'s performance (e.g. response time < 2s)",
    "A specific behavior or function the system must perform (e.g. \"the system shall allow users to reset passwords\")",
    "A business goal the stakeholder wants to achieve",
    "A description of the hardware the system runs on",
    ""
    ],
    answer: 1,
    explanation: "Functional requirements describe what the system should do — specific behaviors, features, or functions. Non-functional requirements cover \"how well\" (performance, security, usability). Business goals are higher-level objectives, not system-level requirements.",
  },
  'ba-re-002': {
    question: "Non-functional requirements (NFRs) describe WHAT the system does, while functional requirements describe HOW WELL it does it.",
    answer: "False",
    explanation: "It is the opposite: functional requirements describe WHAT the system does (behaviors/features), while non-functional requirements describe HOW WELL (performance, security, scalability, usability). Common NFR categories include performance, reliability, availability, and maintainability.",
  },
  'ba-re-003': {
    question: "Which elicitation technique involves watching end-users perform their daily tasks in their work environment?",
    options: [
    "Brainstorming",
    "Observation (Job Shadowing)",
    "Prototyping",
    "Document Analysis",
    ""
    ],
    answer: 1,
    explanation: "Observation (or job shadowing) lets the BA see how users actually work — often revealing unstated needs, workarounds, and pain points that users forget to mention in interviews. It is especially useful when users cannot articulate their processes clearly.",
  },
  'ba-re-004': {
    question: "What does the acronym \"MoSCoW\" stand for in requirements prioritization?",
    options: [
    "Mandatory",
    "Optional",
    "Standard",
    "Critical",
    "Optional",
    "Wishlist",
    "Must have",
    "Should have",
    "Could have",
    "Won\\'t have (this time)",
    "Most important",
    "Some importance",
    "Common",
    "Occasional",
    "Worthless",
    "Minimum",
    "Optimal",
    "Scalable",
    "Critical",
    "Operational",
    "Wanted",
    ""
    ],
    answer: 1,
    explanation: "MoSCoW is a prioritization technique: Must have (critical for delivery), Should have (important but not vital), Could have (nice-to-have), Won\\'t have (agreed to exclude from this release). The \"o\"s are added to make the acronym pronounceable.",
  },
  'ba-re-005': {
    question: "What is the PRIMARY purpose of a Requirements Traceability Matrix (RTM)?",
    options: [
    "To track the budget of each requirement",
    "To map each requirement to its source",
    "design element",
    "test case",
    "and delivery status throughout the project lifecycle",
    "To prioritize requirements by business value",
    "To document the history of requirement changes only",
    ""
    ],
    answer: 1,
    explanation: "An RTM ensures every requirement is linked from origin (business need/stakeholder) through design, implementation, and testing. It helps detect gaps (untested requirements), gold-plating (features without requirements), and supports impact analysis when changes occur.",
  },
  'ba-re-006': {
    question: "A stakeholder says: \"The system should be user-friendly.\" What should a BA do with this requirement?",
    options: [
    "Accept it as-is because the stakeholder knows best",
    "Remove it because it is subjective and cannot be implemented",
    "Decompose it into measurable",
    "testable criteria (e.g. \"task completion within 3 clicks",
    "error rate < 5%\")",
    "Forward it directly to the UI designer without modification",
    ""
    ],
    answer: 2,
    explanation: "\"User-friendly\" is ambiguous and non-measurable. A good BA decomposes vague requirements into SMART criteria: Specific, Measurable, Achievable, Relevant, Time-bound. For example: \"90% of new users complete registration within 2 minutes without assistance.\"",
  },
  'ba-re-007': {
    question: "Which technique is MOST effective when stakeholders have conflicting requirements?",
    options: [
    "Document Analysis",
    "Facilitated Workshop (JAD session)",
    "Survey/Questionnaire",
    "Prototyping",
    ""
    ],
    answer: 1,
    explanation: "A facilitated workshop (Joint Application Development — JAD) brings conflicting stakeholders together in a structured session with a neutral facilitator. This allows real-time negotiation, compromise, and consensus building. Surveys are too impersonal for conflict resolution, and document analysis does not address conflicts.",
  },
  'ba-re-008': {
    question: "Requirements validation ensures that requirements are correctly implemented in the final system.",
    answer: "False",
    explanation: "Requirements VALIDATION checks whether requirements accurately reflect stakeholder needs (are we building the right thing?). Requirements VERIFICATION checks whether the system correctly implements the requirements (are we building it right?). Validation happens earlier; verification happens during testing.",
  },
  'ba-re-009': {
    question: "In a complex enterprise system, which approach is BEST for managing requirements that frequently change?",
    options: [
    "Freeze all requirements before development starts (Big Design Up Front)",
    "Use an iterative approach with a product backlog",
    "continuous refinement",
    "and short feedback loops",
    "Skip formal requirements and let developers decide what to build",
    "Create one comprehensive SRS document at the beginning and never update it",
    ""
    ],
    answer: 1,
    explanation: "Iterative/Agile approaches accept that requirements evolve. A living product backlog with continuous refinement, sprint reviews for stakeholder feedback, and short cycles allows the team to adapt to changes. BDUF fails when requirements are volatile; skipping requirements leads to scope creep and misalignment.",
  },
  'ba-re-010': {
    question: "What is \"requirements gold-plating\" and why is it problematic?",
    options: [
    "Adding more detail to requirements than stakeholders requested — it improves quality",
    "Implementing features or capabilities beyond what was specified — it increases scope",
    "cost",
    "and risk without approved business value",
    "Prioritizing all requirements as \"Must Have\" — it ensures nothing is missed",
    "Using expensive tools for requirements management — it wastes budget",
    ""
    ],
    answer: 1,
    explanation: "Gold-plating occurs when developers or BAs add features, polish, or capabilities not requested by stakeholders. While well-intentioned, it increases scope, delays delivery, introduces untested functionality, and consumes budget on unapproved work. The RTM helps detect gold-plating by revealing implemented features without matching requirements.",
  },
  'ba-re-011': {
    question: "Design a requirements elicitation strategy for a new e-commerce platform where the client has only a rough idea of what they want. Include at least 4 techniques, their sequence, and rationale.",
    answer: "Phase 1 — Discovery: (1) Stakeholder interviews with C-level",
    explanation: "A multi-technique strategy is essential when clients have vague ideas. Starting with interviews and document analysis establishes context. Workshops foster creativity and alignment. Prototyping makes abstract concepts tangible for feedback. Surveys validate assumptions at scale. User story mapping provides a structured path from requirements to implementation.",
  },
  'ba-re-012': {
    question: "Which of the following is a key risk of ONLY using interviews as the elicitation technique?",
    options: [
    "Interviews are too expensive to conduct",
    "Stakeholders may not articulate tacit knowledge",
    "leading to incomplete requirements",
    "Interviews always produce conflicting requirements",
    "Interviews cannot capture non-functional requirements",
    ""
    ],
    answer: 1,
    explanation: "Interviews rely on stakeholders articulating what they know — but much knowledge is tacit (unconscious expertise). Users may forget edge cases, assume common knowledge, or describe idealized workflows. Supplementing with observation, prototyping, and document analysis helps fill these gaps.",
  },
  'ba-re-013': {
    question: "You are the lead BA on a large-scale digital transformation program with 5 workstreams. Design a requirements governance framework that ensures consistency, traceability, and change control across all workstreams.",
    answer: "Framework components: (1) Central Requirements Repository — a single tool (e.g. Jira",
    explanation: "At program scale, individual workstream BAs can drift in standards and create conflicting requirements. A governance framework ensures consistency (shared taxonomy, templates), visibility (central repository, traceability), control (CCB, change process), and quality (review checkpoints). Without governance, integration failures between workstreams are almost guaranteed.",
  },
  'ba-re-014': {
    question: "When managing requirements for a system that must comply with multiple regulatory standards (e.g. GDPR, PCI-DSS, HIPAA), what is the MOST critical requirement engineering practice?",
    options: [
    "Hiring a dedicated compliance officer to write all requirements",
    "Creating a compliance traceability matrix that maps each regulatory clause to specific requirements",
    "design decisions",
    "and verification evidence",
    "Adding a disclaimer that the system \"aims to be compliant\"",
    "Implementing all security features possible regardless of which regulations apply",
    ""
    ],
    answer: 1,
    explanation: "A compliance traceability matrix maps specific regulatory clauses (e.g. GDPR Art. 17 \"Right to Erasure\") to derived requirements (e.g. \"System shall permanently delete user data within 30 days of request\"), design decisions, implementation evidence, and test cases proving compliance. This provides auditable proof and ensures no regulatory clause is missed.",
  },
  'ba-re-015': {
    question: "A BA discovers that 30% of defects in production trace back to ambiguous or missing requirements. Which systematic improvement should a lead BA recommend?",
    options: [
    "Hire more QA testers to catch defects earlier",
    "Implement formal requirements reviews with structured checklists",
    "requirement quality metrics",
    "and root-cause analysis feedback loops",
    "Reduce the number of requirements to minimize errors",
    "Switch from Agile to Waterfall to have more time for requirements",
    ""
    ],
    answer: 1,
    explanation: "Root-cause analysis reveals requirements quality issues. Systematic improvement includes: (1) structured peer reviews with checklists (completeness, consistency, testability, unambiguity), (2) metrics tracking (defect leakage rate, requirements volatility, review coverage), and (3) feedback loops where production defects are traced back to requirements and lessons learned are applied. This is a process improvement, not just adding more people.",
  },
  'ba-re-016': {
    question: "When a BA creates a \"Glossary of Terms,\" what is the primary benefit to the project team?",
    options: [
    "It makes the documentation look more professional",
    "It ensures stakeholders and the project team have a shared understanding of jargon and business terms",
    "reducing communication errors",
    "It provides a list of developer names and roles",
    "It defines the project budget and timeline"
    ],
    answer: 1,
    explanation: "A glossary (or data dictionary) is critical for aligning communication. Different departments often use the same word to mean different things, or different words for the same thing. A shared glossary prevents requirements from being misinterpreted.",
  },
  'ba-re-017': {
    question: "In a Business Requirements Document (BRD), what is normally described in the \"Current State\" (As-Is) section?",
    options: [
    "The detailed technical architecture of the new system",
    "The existing business processes",
    "pain points",
    "and workflows as they function today before any changes",
    "The wishlist of features for the next two years",
    "The project manager\\'s contact information"
    ],
    answer: 1,
    explanation: "Documenting the \"As-Is\" state is vital to identify gaps, calculate ROI, and ensure the new solution (\"To-Be\") actually solves the current problems without creating new ones in the existing workflow.",
  },
  'ba-re-018': {
    question: "A requirement states: \"The system should support a large number of users simultaneously.\" Which SMART criteria does this fail?",
    options: [
    "Specific and Measurable",
    "Achievable",
    "Relevant",
    "Time-bound"
    ],
    answer: 0,
    explanation: "\"Large number\" is subjective and cannot be measured or tested. To be SMART, it should be quantified, e.g., \"The system shall support up to 50,000 concurrent users with response times under 1 second.\"",
  },
  'ba-re-019': {
    question: "Which stakeholder is typically responsible for giving the final \"Sign-off\" to the Business Requirements?",
    options: [
    "The Lead Developer",
    "The QA Lead",
    "The Business Sponsor or Product Owner",
    "The Junior BA"
    ],
    answer: 2,
    explanation: "The Business Sponsor or Product Owner has the authority to agree that the requirements meet the business need and that the project budget should be consumed to implement them.",
  },
  'ba-re-020': {
    question: "When performing \"Impact Analysis\" for a major change request, what is the BA primarily looking for?",
    options: [
    "Which developers will be assigned the task",
    "The downstream effects on existing requirements",
    "designs",
    "tests",
    "and business processes if the change is implemented",
    "Whether the client will pay more for the change",
    "The spelling errors in the change request form"
    ],
    answer: 1,
    explanation: "Impact analysis determines the breadth and depth of a change. Using a Traceability Matrix, a BA can see which parts of the system are affected, helping stakeholders weigh the cost/benefit of the change.",
  },
  'ba-re-021': {
    question: "Propose a strategy to elicit requirements from a group of stakeholders who are geographically dispersed and have never met each other.",
    answer: "Elicitation for dispersed stakeholders:\\n1. Pre-session Surveys: Distribute questionnaires to identify common themes and diverge pain points.\\n2. Virtual Workshops: Use tools like Miro/FigJam for collaborative brainstorming and Mural for affinity mapping.\\n3. Delphi Technique: Facilitate iterative rounds of anonymous expert surveys to reach consensus on complex requirements.\\n4. Documentation Reviews: Use shared documents (Google Docs/Confluence) for asynchronous commenting and feedback.\\n5. Prototypes: Share interactive mockups via Figma/Axure to give a tangible visual to the discussions.",
    explanation: "Remote elicitation requires a mix of synchronous (workshops) and asynchronous (surveys, doc reviews) tools to maximize engagement while respecting time zones and individual constraints.",
  },
  'ba-re-022': {
    question: "Which modeling technique is MOST useful for identifying the high-level scope and external actors of a system?",
    options: [
    "Entity Relationship Diagram (ERD)",
    "Context Diagram",
    "Sequence Diagram",
    "State Machine Diagram"
    ],
    answer: 1,
    explanation: "A Context Diagram (Level 0 DFD) shows the entire system as a single process and its interactions with external entities (people, other systems), defining the system boundaries clearly.",
  },
  'ba-re-023': {
    question: "In an Agile transformation, a Lead BA notices that requirements are being \"handed over\" to dev teams with no interaction. Which concept should they introduce to fix this?",
    options: [
    "Writing longer documentation",
    "Three Amigos meeting (BA",
    "Dev",
    "QA collaboration)",
    "More managers to monitor the handover",
    "Strict email-only communication"
    ],
    answer: 1,
    explanation: "The \"Three Amigos\" encourages shared understanding through conversation. By bringing Business (BA), Dev, and QA together early, they find edge cases and clarify requirements before any code is written, reducing waste.",
  },
  'ba-re-024': {
    question: "What is the purpose of \"Transition Requirements\"?",
    options: [
    "To describe how the system will look in 5 years",
    "To define temporary capabilities needed to transition from the current state to the new state (e.g.",
    "data migration",
    "training)",
    "To describe the user\\'s transition between screens",
    "To document when a project manager leaves the project"
    ],
    answer: 1,
    explanation: "Transition requirements are temporary. Once the \"To-Be\" system is live, they are no longer needed. Examples include data mapping for migration or training manuals for staff.",
  },
  'ba-re-025': {
    question: "Define a \"Requirement Quality Framework\" for an enterprise BA team. What metrics will you track?",
    answer: "Requirement Quality Framework:\\n1. Completeness: Measure the percentage of requirements traced back to business needs.\\n2. Verifiability: Percentage of requirements with clear acceptance criteria.\\n3. Volatility: Rate of change for requirements after sign-off.\\n4. Defect Leakage: Percentage of production bugs caused by poor requirements.\\n5. Stakeholder Satisfaction: Net Promoter Score (NPS) from Dev and QA teams on requirement clarity.\\nProcess: Implementation of peer reviews",
    explanation: "A lead BA focuses on process quality. Tracking these metrics allows the team to pinpoint where the requirement lifecycle is failing (e.g., if volatility is high, perhaps elicitation was rushed).",
  },
  'ba-re-026': {
    question: "What is the \"Requirements Elicitation\" process?",
    options: [
    "The process of listing requirements in a document",
    "The process of discovering requirements by communicating with stakeholders",
    "customers",
    "and other users",
    "The process of coding the requirements",
    "The process of deleting unnecessary requirements",
    ""
    ],
    answer: 1,
    explanation: "Elicitation is about proactively finding and gathering information through interviews, workshops, surveys, and observation. It is different from \"gathering\" which implies requirements are just waiting to be picked up.",
  },
  'ba-re-027': {
    question: "How do you prioritize requirements using the MoSCoW method?",
    options: [
    "By alphabetical order",
    "By categorizing them into Must have",
    "Should have",
    "Could have",
    "and Won\\'t have",
    "By the cost of implementation",
    "By the name of the stakeholder who requested them",
    ""
    ],
    answer: 1,
    explanation: "MoSCoW is a popular prioritization technique. Must-haves are non-negotiable details. Should-haves are important but not vital. Could-haves are desirable but small. Won\\'t-haves are agreed to not be included in the current timeframe.",
  },
  'ba-re-028': {
    question: "What is a \"Functional Requirement\"?",
    options: [
    "A requirement that describes how the system should perform (e.g.",
    "speed)",
    "A requirement that describes what the system should do (e.g.",
    "The system shall send an email confirmation\")",
    "A requirement about the project budget",
    "A requirement about the team size",
    ""
    ],
    answer: 1,
    explanation: "Functional requirements define the core behaviors and tasks the system must perform to meet user needs.",
  },
  'ba-re-029': {
    question: "What is \"Requirements Creep\" (also known as Scope Creep)?",
    options: [
    "A slow database connection",
    "The uncontrolled growth or continuous change in project scope without adjustment to time",
    "cost",
    "and resources",
    "A bug in the requirements document",
    "The process of moving requirements between sprints",
    ""
    ],
    answer: 1,
    explanation: "Scope creep is a major risk that can lead to project failure. It happens when new features are added without proper impact analysis or approval.",
  },
  'ba-re-030': {
    question: "Prototyping is an effective technique for validating requirements with users who have difficulty understanding abstract text descriptions.",
    answer: "True",
    explanation: "Prototypes provide a visual and interactive representation of the system, making it much easier for stakeholders to provide meaningful feedback early in the process.",
  },
  'ba-re-031': {
    question: "How does \"Prototyping\" help in the requirements elicitation process?",
    options: [
    "It provides the final code for the developers",
    "It provides a visual representation that helps stakeholders clarify their needs and identify missing requirements early",
    "It is used only for marketing purposes",
    "It replaces the need for a requirements document",
    ""
    ],
    answer: 1,
    explanation: "Prototyping (low or high-fidelity) makes abstract requirements concrete. It allows stakeholders to \"see and feel\" the system, often revealing needs they couldn\\'t express in words.",
  },
  'ba-re-032': {
    question: "In the \"MoSCoW\" prioritization technique, what does the \"S\" stand for?",
    options: [
    "Small",
    "Should have",
    "Simple",
    "Soon",
    ""
    ],
    answer: 1,
    explanation: "MoSCoW stands for Must have, Should have, Could have, and Won\\'t have (this time). \"Should have\" requirements are important but not vital for the current release.",
  },
  'ba-re-033': {
    question: "What is the best approach for a BA when two stakeholders have conflicting requirements?",
    options: [
    "Pick the one you like better",
    "Facilitate a meeting between them to understand the underlying business goals and find a compromise or a more optimal third solution",
    "Ignore both requirements",
    "Ask the developers to decide",
    ""
    ],
    answer: 1,
    explanation: "Conflict resolution is a core BA skill. It involves negotiation and alignment with the overall project objectives rather than taking sides.",
  },
  'ba-re-034': {
    question: "Which of the following is a \"Verifiable\" requirement?",
    options: [
    "The system must be user-friendly",
    "The system must process an order in less than 3 seconds under normal load",
    "The system should be attractive",
    "The system must be built with modern technology",
    ""
    ],
    answer: 1,
    explanation: "Verifiability means you can prove the requirement has been met through testing or measurement. Qualitative terms like \"user-friendly\" or \"attractive\" are subjective and not directly verifiable.",
  },
  'ba-re-035': {
    question: "What is the role of a \"Change Control Board\" (CCB)?",
    options: [
    "To write the code for changes",
    "A formal group of stakeholders responsible for reviewing",
    "evaluating",
    "and approving or rejecting proposed changes to the project scope",
    "To manage the project budget only",
    "To design the UI for new features",
    ""
    ],
    answer: 1,
    explanation: "The CCB ensures that no \"scope creep\" happens without a proper assessment of the impact on time, cost, and quality.",
  },
  'ba-rw-001': {
    question: "A client continuously requests small new features during the final week of UAT. What is your most appropriate immediate action?",
    options: [
    "Accept all requests to keep the client happy and tell developers to work overtime.",
    "Refuse all requests because the deadline is near.",
    "Log the requests as Change Requests (CRs)",
    "assess their impact on timeline/cost",
    "and ask the client to prioritize them against the current release scope.",
    "Silently sneak the features into the codebase without telling the Project Manager."
    ],
    answer: 2,
    explanation: "Scope creep is a major risk, especially late in a project. As a BA, you should never blindly accept or rigidly reject requests. Instead, document them as CRs, analyze the impact, and present the trade-offs to the stakeholders to make an informed decision.",
  },
  'ba-rw-002': {
    question: "During a sprint planning meeting, a developer states they cannot implement a feature as described in your User Story. How should you respond?",
    options: [
    "Tell the developer to follow the requirements exactly as written.",
    "Immediately agree to remove the feature without asking the Product Owner.",
    "Ask the developer to explain the technical limitation",
    "discuss alternative solutions that still satisfy the business goal",
    "and update the User Story accordingly.",
    "Escalate the developer\\'s \"bad attitude\" to the Project Manager."
    ],
    answer: 2,
    explanation: "A BA acts as a bridge between business and tech. If technical constraints exist, you should collaborate with the developer to find a workaround that meets the core business need, rather than forcing an impossible implementation or dropping the feature outright.",
  },
  'ba-rw-003': {
    question: "You receive a requirement from marketing: \"The system should be blazing fast.\" How do you handle this ambiguous requirement?",
    options: [
    "Write \"System must be blazing fast\" in the SRS document.",
    "Ask clarifying questions to define measurable metrics (e.g.",
    "Page load time must be under 2 seconds for 10",
    "000 concurrent users\").",
    "Ignore the requirement because it is not achievable.",
    "Assign the UI team to make the design look fast."
    ],
    answer: 1,
    explanation: "Non-functional requirements must be specific, measurable, and testable. \"Blazing fast\" is subjective. Converting it to measurable metrics (load time, concurrent users) ensures the development and QA teams know exactly what to target.",
  },
  'ba-rw-004': {
    question: "A critical stakeholder frequently misses requirement gathering sessions, leading to missing information. What should you do?",
    options: [
    "Proceed without their input and assume what they want.",
    "Complain to their manager immediately.",
    "Reach out directly to understand their schedule constraints",
    "offer 1-on-1 asynchronous reviews (like commenting on a shared doc)",
    "and emphasize the risks of missing their input.",
    "Cancel the project until they attend."
    ],
    answer: 2,
    explanation: "Stakeholder engagement is key. If synchronous meetings fail, find alternative ways to gather their input asynchronously and make them aware of the risks (delays, incorrect features) of not participating.",
  },
  'ba-rw-005': {
    question: "True or False: If a developer discovers that a requirement is logically flawed during coding, the BA should fix the document silently to match the developer\\'s new code.",
    answer: "False",
    explanation: "False. The BA must analyze the developer\\'s finding, confirm with the business stakeholders that the proposed change aligns with business rules, officially update the requirement, and inform all necessary teams (like QA). Silent changes cause misalignment.",
  },
  'ba-rw-006': {
    question: "Two department heads strongly disagree on a core business rule for a new workflow. Department A wants strict approval, Department B wants auto-approval. As the BA, how do you resolve this?",
    options: [
    "Side with the department head who has a higher title.",
    "Implement a toggle so the system can do both",
    "without asking them.",
    "Organize a workshop with both heads",
    "map out the impact of both approaches on the overall business goal",
    "and facilitate a compromise or escalate to the project sponsor.",
    "Wait until they stop fighting to continue working."
    ],
    answer: 2,
    explanation: "A BA must facilitate conflict resolution by focusing on objective criteria (cost, risk, business goals, compliance) rather than personal preference. If a consensus cannot be reached, the issue should be formally escalated to a project sponsor with decision-making authority.",
  },
  'ba-rw-007': {
    question: "The development team delivers a feature, but during demo, the client says: \"This matches the document, but it’s not what I actually need.\" What went wrong and how do you prevent it next time?",
    options: [
    "The client is just difficult. Refuse to change it.",
    "You failed to validate the requirements correctly. Next time",
    "use prototypes/wireframes and frequent feedback loops rather than relying solely on text-heavy sign-offs.",
    "The devs coded it poorly. Make them rewrite it.",
    "The QA team failed to test the feature."
    ],
    answer: 1,
    explanation: "Clients often agree to text documents without fully visualizing the end product. Using visual aids (wireframes, prototypes) and conducting regular demo loops (Agile approach) ensures early detection of mismatches between \"what is written\" and \"what is needed\".",
  },
  'ba-rw-008': {
    question: "You are assigned to a legacy system replacement project. There is zero existing documentation, and the original developers have left. How do you gather requirements?",
    options: [
    "Refuse to start until the client writes a manual.",
    "Just copy the UI screens exactly as they are into a new framework.",
    "Conduct shadowing sessions with end-users",
    "perform reverse engineering on the database/code behavior",
    "and document the \"As-Is\" process before designing the \"To-Be\".",
    "Ask the new developers to guess the logic based on the old source code alone."
    ],
    answer: 2,
    explanation: "Reverse engineering combined with observing end-users is the standard approach for undocumented legacy systems. Users know the workflows, and investigating the database schema or data traces helps uncover hidden business logic.",
  },
  'ba-rw-009': {
    question: "You notice a requirement provided by the compliance team conflicts directly with a requirement from the sales team (e.g., Sales wants 1-click checkout, Compliance requires 2-factor authentication). What do you do?",
    options: [
    "Implement what Sales wants because they bring in revenue.",
    "Implement what Compliance wants because it is safer.",
    "Document the conflict",
    "create a traceability matrix",
    "and arrange a meeting between Compliance and Sales to negotiate a compliant but user-friendly solution.",
    "Tell the developers to figure out a middle ground on their own."
    ],
    answer: 2,
    explanation: "Conflicting requirements from different domains must be explicitly documented and negotiated. The BA facilitates a compromise (e.g., risk-based authentication where 2FA is only required for high-value carts) that satisfies both departments.",
  },
  'ba-rw-010': {
    question: "True or False: A BA should always act as a proxy for the Product Owner (PO), writing stories, accepting them, and managing the backlog independently if the PO is too busy.",
    answer: "False",
    explanation: "False. While a BA supports the PO, the PO ultimately owns the product vision and priority. If the PO is completely absent, this is a systemic risk that needs to be escalated, as a BA taking full PO authority without business mandate can lead to misdirected product development.",
  },
  'ba-rw-011': {
    question: "During UAT, the users report 50 \"bugs\". Upon investigation, you realize 40 of them are actually new requirements (enhancements) disguised as bugs. How do you handle this diplomatically?",
    options: [
    "Reject the 40 items aggressively and tell them they signed the SRS",
    "so they can\\'t complain now.",
    "Fix all 40 items quietly so the client accepts the system on time.",
    "Categorize the list into \"Defects\" (to be fixed now) and \"Change Requests\" (CRs). Explain the baseline scope with evidence",
    "and estimate the CRs for a Phase 2 or a separate billing cycle.",
    "Pause the entire project until the client pays for the extra 40 items."
    ],
    answer: 2,
    explanation: "Triage is essential during UAT. Use the approved baseline (BRD/SRS) to distinguish between defects (failure to meet agreed requirements) and enhancements. Managing them as CRs maintains the project timeline while protecting the vendor\\'s scope and resources without being strictly confrontational.",
  },
  'ba-rw-012': {
    question: "Your organization is transitioning from Waterfall to Agile. The business stakeholders still demand the \"complete detailed requirements document upfront\" before giving developers the green light. How do you guide them?",
    options: [
    "Give in and write a 200-page SRS because the business is the boss.",
    "Refuse to write any documents and tell them \"We are Agile",
    "we don\\'t do documentation\".",
    "Explain the Agile concept of progressive elaboration. Propose writing a high-level vision and backlog first",
    "and detail the requirements (User Stories) only 1-2 sprints ahead of development.",
    "Wait for the Agile Coach to talk to them."
    ],
    answer: 2,
    explanation: "Agile transition requires coaching stakeholders. BAs must bridge this mindset gap by proving value through progressive elaboration—giving enough detail just-in-time, thereby reducing waste while still providing enough certainty for business planning.",
  },
  'ba-rw-013': {
    question: "You discover that a new system implementation will make 30% of the operational staff\\'s manual data entry jobs redundant. The staff has become resistant and refuses to share process details with you. What is your strategy?",
    options: [
    "Report them to HR for insubordination.",
    "Design the system without their input using your best guess.",
    "Focus the conversation on how the system will eliminate tedious work and allow them to upskill into analytical roles. Involve them as \"Process Champions\" to give them a sense of ownership.",
    "Cancel the automation feature so no one loses their job."
    ],
    answer: 2,
    explanation: "Change management and overcoming resistance are crucial senior BA skills. Addressing the underlying fear by reframing the change (from job loss to job evolution) and empowering resistant users as subject matter experts often breaks down communication barriers.",
  },
  'ba-rw-014': {
    question: "The client wants to build a \"Machine Learning AI to predict user buying behavior",
    answer: "Handling an unrealistic AI request:\\n\\n1. Feasibility & Reality Check:\\n- Acknowledge their vision but politely explain the prerequisites for ML (clean",
    explanation: "Senior BAs don\\'t just gather requirements; they act as business consultants. When clients propose buzzword-heavy, unrealistic solutions, the BA must trace back to the actual business problem and propose a pragmatic, iterative roadmap that respects constraints (budget, data maturity).",
  },
  'ba-rw-015': {
    question: "Your company won a massive enterprise government contract. You are assigned to lead a team of 5 Junior/Mid BAs. The requirements are complex, highly regulated, and the timeline is aggressive. Outline your BA Strategy for the first 30 days.",
    answer: "BA Strategy for the First 30 Days:\\n\\n1. Team Onboarding & Standardization (Days 1-5):\\n- Define templates for BRD",
    explanation: "A Lead BA must establish processes, govern quality, and align team efforts toward a massive goal. The focus shifts from \"writing requirements\" to \"designing the requirements engineering framework",
  },
  'ba-si-001': {
    question: "What is an API (Application Programming Interface) in simple terms?",
    options: [
    "A type of database that stores user information",
    "A set of rules and protocols that allows different software systems to communicate and exchange data with each other",
    "A programming language used for building websites",
    "A physical cable connecting two servers",
    ""
    ],
    answer: 1,
    explanation: "An API is like a waiter in a restaurant: you (the client) tell the waiter (API) what you want, the waiter takes your order to the kitchen (server), and brings back the food (response). APIs define how systems talk to each other — what data to send, in what format, and what to expect back. BAs need to understand APIs to define integration requirements.",
  },
  'ba-si-002': {
    question: "What does REST stand for in the context of web APIs?",
    options: [
    "Real-time Event Streaming Technology",
    "REpresentational State Transfer — an architectural style for designing networked applications using standard HTTP methods",
    "Remote Execution and Server Testing",
    "Reliable Enterprise Software Technology",
    ""
    ],
    answer: 1,
    explanation: "REST is an architectural style (not a protocol) that uses HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove). REST APIs exchange data in JSON or XML format. RESTful APIs are stateless (each request contains all needed information). BAs should understand REST when writing integration requirements and API specifications.",
  },
  'ba-si-003': {
    question: "In system integration, \"real-time\" always means the data is transferred instantly with zero delay.",
    answer: "False",
    explanation: "\"Real-time\" in integration context typically means \"near real-time\" — data is transferred within seconds to minutes, not literally instantaneously. True zero-latency is physically impossible. Integration types by timing: Real-time/synchronous (immediate response needed), Near-real-time (seconds to minutes via message queues), Batch (periodic bulk transfers — daily, hourly). BAs must define specific latency requirements, not just say \"real-time.\"",
  },
  'ba-si-004': {
    question: "What is the difference between synchronous and asynchronous integration?",
    options: [
    "Synchronous is faster; asynchronous is slower",
    "Synchronous: the calling system waits for a response before continuing (request-response pattern); Asynchronous: the calling system sends a message and continues without waiting — the response comes later via callback",
    "webhook",
    "or message queue",
    "Synchronous is for APIs; asynchronous is for databases",
    "There is no practical difference",
    ""
    ],
    answer: 1,
    explanation: "Synchronous (e.g., REST API call): System A calls System B and waits for the response — simple but creates tight coupling. Asynchronous (e.g., message queue): System A sends a message to a queue (Kafka, RabbitMQ) and continues — System B processes it when ready. Async is better for: long-running tasks, high-volume processing, and system decoupling. BAs must specify which pattern fits each integration scenario.",
  },
  'ba-si-005': {
    question: "What should a BA include in an integration requirements specification?",
    options: [
    "Only the names of the two systems being integrated",
    "Source and target systems",
    "data fields and mapping",
    "data format (JSON/XML)",
    "protocol (REST/SOAP)",
    "frequency/trigger",
    "error handling",
    "retry logic",
    "security (authentication/authorization)",
    "and SLA (latency",
    "availability)",
    "Only the API URL and a sample request",
    "A list of all APIs available on the internet",
    ""
    ],
    answer: 1,
    explanation: "A complete integration spec covers: (1) Systems involved and direction (source → target), (2) Data mapping (field-by-field: source field → target field, transformations), (3) Technical details (protocol, format, authentication method), (4) Trigger/frequency (event-driven, scheduled, on-demand), (5) Error handling (what happens when it fails), (6) Security (API keys, OAuth, certificates), (7) SLA (response time, availability, throughput), (8) Testing approach.",
  },
  'ba-si-006': {
    question: "What is a webhook and how does it differ from polling?",
    options: [
    "Webhooks and polling are the same thing",
    "A webhook is a push mechanism where the server sends data to the client automatically when an event occurs; Polling is a pull mechanism where the client repeatedly asks the server for updates at intervals",
    "Webhooks are for real-time; polling is for batch processing",
    "Webhooks require manual setup; polling is automatic",
    ""
    ],
    answer: 1,
    explanation: "Webhook (push): \"Call me when something happens\" — the server notifies the client by sending an HTTP POST to a registered URL when an event occurs (e.g., payment completed). Polling (pull): \"I\\'ll check every 5 minutes\" — the client repeatedly queries the server. Webhooks are more efficient (no wasted requests) but require the client to host an endpoint. BAs should recommend webhooks when available for event-driven integrations.",
  },
  'ba-si-007': {
    question: "Design the integration architecture for an e-commerce platform that needs to integrate with: Payment Gateway, Shipping Provider, Inventory System, and Email Service. Specify the integration pattern, data flow, and error handling for each.",
    answer: "Integration Architecture:\\n\\n1. Payment Gateway (Stripe/PayPal):\\n- Pattern: Synchronous REST API (checkout flow requires immediate response)\\n- Flow: E-commerce → Payment API (POST /charges) → response (success/failure)\\n- Error handling: retry with exponential backoff (max 3 attempts)",
    explanation: "Different integrations require different patterns based on their characteristics. Payment needs synchronous (user is waiting), inventory needs eventual consistency (speed vs. accuracy tradeoff), email is fire-and-forget (never block the order flow). The circuit breaker pattern prevents one failed integration from bringing down the entire system. A BA must specify these patterns and error handling strategies — not just \"these two systems talk to each other.\"",
  },
  'ba-si-008': {
    question: "When two systems have different data models (e.g., System A uses \"customer_name\" as a single field, System B uses \"first_name\" and \"last_name\" separately), what is this integration challenge called?",
    options: [
    "Data encryption mismatch",
    "Data model impedance mismatch — resolved through data mapping and transformation rules defined during integration requirements",
    "Network latency issue",
    "API versioning conflict",
    ""
    ],
    answer: 1,
    explanation: "Data model impedance mismatch is one of the most common integration challenges. BAs must define detailed data mapping: target_first_name = SPLIT(source_customer_name, \" \")[0], target_last_name = SPLIT(source_customer_name, \" \")[1:]. Other mismatches: different date formats (US vs. ISO), different units (miles vs. km), different coding systems (country codes: US vs. USA vs. 840), and different data types (string vs. integer IDs).",
  },
  'ba-si-009': {
    question: "A large enterprise has 15+ systems with point-to-point integrations creating a \"spaghetti architecture.\" As Lead BA, recommend an integration strategy to simplify this and how to migrate from the current state.",
    answer: "Integration Modernization Strategy:\\n\\n1. Current State Assessment:\\n- Map all existing integrations (source",
    explanation: "Spaghetti integration (point-to-point) scales poorly: 15 systems = up to 210 connections. Each new system adds 15 new connections. A hub-and-spoke architecture reduces this to 15 connections (one per system to the hub). The Strangler Fig pattern migrates incrementally — no risky \"big bang\" — running old and new in parallel until confidence is established.",
  },
  'ba-si-010': {
    question: "When defining requirements for a third-party API integration, what legal/contractual consideration must a Lead BA ensure is covered?",
    options: [
    "Only the API documentation needs to be reviewed",
    "The API\\'s terms of service",
    "SLA guarantees (uptime",
    "latency)",
    "data ownership",
    "data processing agreements (DPA for GDPR)",
    "rate limits",
    "pricing model",
    "deprecation policy",
    "and vendor lock-in risk must all be evaluated and documented in the integration requirements",
    "Only check if the API supports JSON format",
    "Just verify the API key works",
    ""
    ],
    answer: 1,
    explanation: "Third-party APIs create business dependencies. A Lead BA must evaluate: (1) SLA — what uptime and response time does the vendor guarantee? (2) Data ownership — who owns the data processed through the API? (3) DPA/compliance — does the vendor comply with GDPR/PDPA for personal data? (4) Rate limits — can we scale usage without hitting caps? (5) Pricing — per-call pricing can surprise at scale, (6) Deprecation — what happens when the vendor deprecates the API version? (7) Lock-in — how hard is it to switch providers? These factors must be documented in requirements.",
  },
  'ba-sm-001': {
    question: "What is a \"stakeholder\" in the context of a project?",
    options: [
    "Only the project sponsor who funds the project",
    "Any individual",
    "group",
    "or organization that can affect",
    "be affected by",
    "or perceive itself to be affected by the project",
    "Only the end users of the system",
    "Only the development team members",
    ""
    ],
    answer: 1,
    explanation: "Stakeholders include anyone with an interest in or impact from the project: sponsors, end users, developers, regulators, customers, management, support teams, even competitors. Identifying ALL stakeholders early prevents surprises later. Missing a key stakeholder can lead to late requirement changes or project resistance.",
  },
  'ba-sm-002': {
    question: "What is the Power/Interest Grid used for in stakeholder management?",
    options: [
    "Assigning tasks to team members based on their skills",
    "Classifying stakeholders by their level of authority (power) and level of concern (interest) to determine the engagement strategy for each group",
    "Calculating the project budget based on stakeholder input",
    "Ranking stakeholders by their salary level",
    ""
    ],
    answer: 1,
    explanation: "The Power/Interest Grid creates 4 quadrants: High Power + High Interest → Manage Closely (key players), High Power + Low Interest → Keep Satisfied, Low Power + High Interest → Keep Informed, Low Power + Low Interest → Monitor. This helps the BA allocate communication effort efficiently — not all stakeholders need the same level of engagement.",
  },
  'ba-sm-003': {
    question: "A RACI matrix shows who is Responsible, Accountable, Consulted, and Informed for each task or decision in a project.",
    answer: "True",
    explanation: "RACI defines roles per task: Responsible (does the work), Accountable (ultimately answerable — only ONE per task), Consulted (provides input — two-way communication), Informed (kept in the loop — one-way communication). A RACI matrix prevents confusion about who does what and ensures every task has clear ownership.",
  },
  'ba-sm-004': {
    question: "A key stakeholder (VP of Sales) is resistant to the new system because it changes their team\\'s workflow. What is the BEST approach?",
    options: [
    "Ignore their resistance — the project has executive sponsorship",
    "Escalate immediately to the project sponsor to overrule the VP",
    "Empathize with their concerns",
    "understand their specific objections",
    "involve them in the design process",
    "and demonstrate how the new system benefits their team",
    "Remove the features that affect the Sales team",
    ""
    ],
    answer: 2,
    explanation: "Resistance often comes from fear of change, loss of control, or lack of understanding. The BA should: (1) listen and validate concerns, (2) understand root causes (what specifically worries them?), (3) involve the stakeholder in design so they have ownership, (4) show specific benefits for THEIR team (not just the organization), (5) provide training support. Ignoring or overruling creates a powerful enemy.",
  },
  'ba-sm-005': {
    question: "What is a Stakeholder Communication Plan and what should it include?",
    options: [
    "A list of all stakeholder email addresses",
    "A plan defining WHAT information each stakeholder group needs",
    "HOW (channel)",
    "HOW OFTEN (frequency)",
    "and WHO delivers it",
    "The project schedule shared with all stakeholders",
    "A record of all meetings held with stakeholders",
    ""
    ],
    answer: 1,
    explanation: "A Communication Plan maps each stakeholder group to: Information needed (status updates, decisions, risks), Channel (email, meeting, dashboard, report), Frequency (daily standup, weekly report, monthly steering), Owner (who sends it), and Format (slide deck, one-pager, dashboard). This ensures the right people get the right information at the right time — preventing both information overload and information gaps.",
  },
  'ba-sm-006': {
    question: "Two stakeholders have conflicting requirements: the CFO wants to minimize cost while the CTO wants to use cutting-edge technology (which is expensive). How should the BA handle this?",
    options: [
    "Side with the CFO because budget is always the priority",
    "Side with the CTO because better technology means better results",
    "Facilitate a discussion between both stakeholders",
    "help them understand each other\\'s constraints",
    "explore alternatives that balance cost and technology goals",
    "and if needed",
    "escalate to the project sponsor for a priority decision",
    "Document both requirements separately and let the developers decide",
    ""
    ],
    answer: 2,
    explanation: "Conflicting requirements are common when stakeholders have different priorities. The BA acts as a neutral facilitator: (1) ensure each party understands the other\\'s perspective, (2) explore creative alternatives (e.g., phased technology adoption, open-source alternatives), (3) use objective criteria (ROI analysis, risk assessment) to evaluate options, (4) if consensus cannot be reached, escalate to the governance body or sponsor for a priority decision.",
  },
  'ba-sm-007': {
    question: "Design a stakeholder engagement strategy for a company-wide ERP implementation that affects 500+ employees across 6 departments. Include identification, analysis, engagement approaches, and how to handle resistance.",
    answer: "Stakeholder Engagement Strategy:\\n\\n1. Identification:\\n- Stakeholder mapping workshop with project sponsors\\n- Categories: Executive sponsors",
    explanation: "Large-scale ERP implementations fail primarily due to people issues, not technology. A structured engagement strategy ensures every stakeholder group is identified, their attitude is assessed, and appropriate engagement approaches are applied. The change champion network creates grassroots support, while executive steering provides top-down alignment. Monthly sentiment tracking allows early detection of resistance.",
  },
  'ba-sm-008': {
    question: "What is \"stakeholder salience\" (Mitchell, Agle & Wood model) and how does it improve upon the simple Power/Interest Grid?",
    options: [
    "It is a simpler version of the Power/Interest Grid",
    "It classifies stakeholders by three attributes — Power",
    "Legitimacy",
    "and Urgency — creating 7 stakeholder types that provide more nuanced analysis than 4 quadrants",
    "It measures how often stakeholders attend meetings",
    "It ranks stakeholders by their organizational seniority",
    ""
    ],
    answer: 1,
    explanation: "The Salience Model uses 3 dimensions: Power (ability to influence), Legitimacy (appropriateness of their involvement), Urgency (time-sensitivity of their claims). Combinations create 7 types: e.g., \"Definitive\" (all 3), \"Dominant\" (power + legitimacy), \"Dangerous\" (power + urgency, no legitimacy). This helps identify stakeholders who might be overlooked by simpler models — e.g., regulators may have high legitimacy and urgency but low day-to-day power.",
  },
  'ba-sm-009': {
    question: "As Lead BA for a multinational project with stakeholders across 3 time zones (US, Europe, Vietnam), design a stakeholder management approach that handles cultural differences, communication challenges, and decision-making across distributed teams.",
    answer: "Distributed Stakeholder Management:\\n\\n1. Cultural Awareness:\\n- US: direct communication",
    explanation: "Multinational projects fail when cultural differences are ignored. Direct communication works in the US but may feel aggressive in Vietnam. Consensus-driven approaches work in Europe but feel slow to US stakeholders. A Lead BA must adapt their style per culture, create infrastructure for async collaboration, and build relationships that transcend time zones. The \"48-hour decision rule\" prevents timezone differences from stalling decisions.",
  },
  'ba-sm-010': {
    question: "A new CEO joins the organization mid-project and questions the entire project direction. As Lead BA, what is your FIRST priority?",
    options: [
    "Continue with the current plan — the project was already approved",
    "Immediately stop all work until the CEO provides new direction",
    "Request a strategic alignment meeting with the CEO to understand their vision",
    "present the project\\'s business case and current progress",
    "and assess whether the project still aligns with the new strategic direction",
    "Resign from the project because the scope will change",
    ""
    ],
    answer: 2,
    explanation: "A CEO change is a significant stakeholder event. The project\\'s business case may or may not align with the new CEO\\'s vision. The Lead BA should proactively: (1) request a meeting (don\\'t wait to be summoned), (2) prepare a concise business case summary showing value delivered and planned, (3) listen to the new CEO\\'s priorities, (4) assess alignment and gaps, (5) recommend adjustments if needed. This demonstrates BA value and prevents the project from being cancelled or deprioritized without proper analysis.",
  },
  'ba-sm-011': {
    question: "If you have a stakeholder with \"High Power\" but \"Low Interest,\" what is the recommended engagement strategy?",
    options: [
    "Manage closely",
    "Keep satisfied",
    "Monitor (minimum effort)",
    "Keep informed"
    ],
    answer: 1,
    explanation: "Stakeholders with high power but low interest are influential but not personally invested. You must keep them satisfied (e.g., ensuring they get the reports they need) so they don\\'t block the project.",
  },
  'ba-sm-012': {
    question: "In the middle of an elicitation interview, a stakeholder becomes visibly frustrated and stops participating. What should the BA do?",
    options: [
    "Continue with the questions to save time",
    "Stop the interview",
    "acknowledge the frustration",
    "listen to their concerns",
    "and reschedule if necessary",
    "Tell them their lack of participation will be reported to their boss",
    "Ask the person next to them to answer instead"
    ],
    answer: 1,
    explanation: "Relationship management is key. Frustration usually means a hidden pain point or fear. Addressing the emotion builds trust and leads to better requirements in the long run.",
  },
  'ba-sm-013': {
    question: "Which of the following is most likely to be an \"External Stakeholder\"?",
    options: [
    "The Project Manager",
    "The Software Developer",
    "A Government Regulatory Agency",
    "The Company CEO"
    ],
    answer: 2,
    explanation: "External stakeholders are outside the performing organization (e.g., regulators, vendors, customers, public). Internal stakeholders are inside (project team, management).",
  },
  'ba-sm-014': {
    question: "How does a BA identify \"Shadow Stakeholders\"?",
    options: [
    "By looking at the organizational chart",
    "By identifying people who are not officially on the project but have indirect influence or are impacted by the downstream effects",
    "By searching for people who work the night shift",
    "By asking the Project Manager for a list of secret names"
    ],
    answer: 1,
    explanation: "Shadow stakeholders (or hidden stakeholders) can derail a project late if ignored. Finding them requires deep networking and asking \"Who else will use this data?\" or \"Who else receives this report currently?\"",
  },
  'ba-sm-015': {
    question: "Design a \"Stakeholder Onboarding\" process for a new key executive joining a project that is already 70% complete.",
    answer: "Onboarding Process:\\n1. Executive Summary: Provide a 1-page dashboard of goals",
    explanation: "Bringing an executive up to speed quickly prevents them from \"re-opening\" decisions that were already finalized, which would cause significant rework.",
  },
  'ba-sm-016': {
    question: "Stakeholder management only happens during the beginning of the project.",
    answer: "False",
    explanation: "Stakeholder management is a continuous process throughout the entire project lifecycle as new stakeholders arrive, others leave, or their interests shift.",
  },
  'ba-sm-017': {
    question: "A stakeholder asks to be \"cc-ed on every single developer email.\" How should the BA handle this?",
    options: [
    "Say yes immediately to keep them satisfied",
    "Explain that this would lead to information overload and suggest a weekly summarized \"Developer Digest\" or a shared status dashboard instead",
    "Ignore the request",
    "Start forwarding all emails without filter"
    ],
    answer: 1,
    explanation: "The BA must manage expectations and communication channels. Over-communication of noise is just as bad as under-communication of facts.",
  },
  'ba-sm-018': {
    question: "As a Lead BA, you notice a \"Silo Culture\" where different departments refuse to share information. Which strategy do you use?",
    options: [
    "Force them to talk in mandatory meetings",
    "Create cross-functional workshops and shared \"Value Stream\" goals to align their interests",
    "Write requirements for each silo separately",
    "Report everyone to the CEO"
    ],
    answer: 1,
    explanation: "Silos are broken by aligning people around the end-to-end user value rather than their specific department\\'s task.",
  },
  'ba-sm-019': {
    question: "What is \"Political Mapping\" in stakeholder analysis?",
    options: [
    "Looking at who voted for which politician",
    "Analyzing the formal and informal relationships",
    "alliances",
    "and conflicts between stakeholders to understand how decisions are truly made",
    "A map of the country",
    "A list of office locations"
    ],
    answer: 1,
    explanation: "Understanding the \"office politics\" allows a BA to navigate sensitive discussions and find the right \"influencers\" to support a requirement.",
  },
  'ba-sm-020': {
    question: "Design a \"Stakeholder Feedback Loop\" that works during the UAT (User Acceptance Testing) phase of a project.",
    answer: "Feedback Loop Design:\\n1. Triage Meetings: Daily 15-min sync to classify feedback as Bug vs. Change Request.\\n2. Transparency: Provide stakeholders visibility into the bug tracking tool.\\n3. Satisfaction Survey: Mid-UAT survey to catch frustration early.\\n4. Closure Session: A final session to confirm all \"Must Have\" feedback items were addressed.",
    explanation: "UAT is a high-risk phase for stakeholder satisfaction. A proactive loop prevents \"surprise rejections\" at the end of the project.",
  },
  'ba-sql-001': {
    question: "What does SQL stand for?",
    options: [
    "System Query Logic",
    "Structured Query Language",
    "Standard Question Language",
    "Sequential Query Listing",
    ""
    ],
    answer: 1,
    explanation: "SQL (Structured Query Language) is the standard language for managing and querying relational databases. It is used for data retrieval (SELECT), data manipulation (INSERT, UPDATE, DELETE), and data definition (CREATE, ALTER, DROP). BAs use SQL to analyze data, validate requirements, and create reports.",
  },
  'ba-sql-002': {
    question: "Which SQL clause is used to filter rows returned by a query?",
    options: [
    "ORDER BY",
    "GROUP BY",
    "WHERE",
    "HAVING",
    ""
    ],
    answer: 2,
    explanation: "WHERE filters rows before grouping. Example: SELECT * FROM orders WHERE status = \\'shipped\\'. ORDER BY sorts results. GROUP BY groups rows for aggregation. HAVING filters groups after GROUP BY. The execution order is: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.",
  },
  'ba-sql-003': {
    question: "Write a SQL query to find all customers from the \"customers\" table who are located in \"Ho Chi Minh City\" and have been active since 2025.",
    answer: "SELECT *\\nFROM customers\\nWHERE city = 'Ho Chi Minh City'\\n  AND active_since >= '2025-01-01';",
    explanation: "This query uses WHERE with AND to combine two filter conditions. The date comparison uses >= to include all dates from January 1, 2025 onwards. BAs often write such queries to validate data assumptions, create user segments, or generate reports for stakeholders.",
  },
  'ba-sql-004': {
    question: "What is the difference between INNER JOIN and LEFT JOIN?",
    options: [
    "There is no difference — they return the same results",
    "INNER JOIN returns only rows with matches in BOTH tables; LEFT JOIN returns ALL rows from the left table and matched rows from the right (NULL where no match)",
    "INNER JOIN is faster; LEFT JOIN is more accurate",
    "INNER JOIN works on 2 tables; LEFT JOIN works on 3+ tables",
    ""
    ],
    answer: 1,
    explanation: "INNER JOIN: only rows where the join condition matches in both tables (intersection). LEFT JOIN: all rows from the left table + matched rows from the right table; unmatched right-side values are NULL. Example: LEFT JOIN shows all customers even if they have no orders (orders columns = NULL), while INNER JOIN would exclude them.",
  },
  'ba-sql-005': {
    question: "Write a SQL query to find the top 5 products by total revenue (quantity × price) from the \"order_items\" table, grouped by product_name.",
    answer: "SELECT product_name",
    explanation: "This query demonstrates: (1) SUM() aggregate function with a calculated expression, (2) GROUP BY to aggregate per product, (3) ORDER BY DESC for highest first, (4) LIMIT 5 for top 5. BAs use this type of query for product performance analysis, revenue reporting, and identifying best-selling products.",
  },
  'ba-sql-006': {
    question: "A BA needs to analyze monthly sales trends. Which SQL functions would be MOST useful?",
    options: [
    "INSERT and UPDATE",
    "DATE functions (EXTRACT",
    "DATE_TRUNC) combined with GROUP BY and aggregate functions (SUM",
    "COUNT",
    "AVG)",
    "CREATE TABLE and DROP TABLE",
    "GRANT and REVOKE",
    ""
    ],
    answer: 1,
    explanation: "Trend analysis requires extracting time components (month, year) and aggregating metrics per period. Example: SELECT DATE_TRUNC(\\'month\\",
  },
  'ba-sql-007': {
    question: "Write a SQL query to find customers who made their first purchase in 2025 AND have made at least 3 orders since then. Use the \"orders\" table (customer_id, order_date, total_amount).",
    answer: "SELECT customer_id",
    explanation: "This query uses HAVING (not WHERE) because we filter on aggregate results: MIN(order_date) for first purchase date and COUNT(*) for order count. WHERE filters rows before grouping; HAVING filters groups after aggregation. This type of cohort analysis helps BAs identify valuable new customer segments for targeted marketing or loyalty programs.",
  },
  'ba-sql-008': {
    question: "When a BA discovers that the same customer data exists in 3 different systems with conflicting values (different addresses, phone numbers), what data quality issue is this?",
    options: [
    "Data completeness issue",
    "Data consistency issue — the same entity has conflicting representations across systems",
    "indicating a need for a master data management (MDM) strategy",
    "Data timeliness issue",
    "Data validity issue",
    ""
    ],
    answer: 1,
    explanation: "Data consistency means the same data entity has the same values across all systems. Inconsistency often results from: no single source of truth, manual data entry in multiple systems, or lack of data synchronization. The solution is Master Data Management (MDM): establishing a golden record (authoritative source) and synchronizing it across systems. Data quality dimensions include: accuracy, completeness, consistency, timeliness, validity, and uniqueness.",
  },
  'ba-sql-009': {
    question: "Design a data-driven approach for a BA to support the business decision of whether to expand into a new market. Include what data to collect, analysis methods, and how to present findings.",
    answer: "Data-Driven Market Expansion Analysis:\\n\\n1. Data Collection:\\n- Internal: sales data by region",
    explanation: "Data-driven decision-making combines internal analytics, external market intelligence, and financial modeling. The BA\\'s value is translating raw data into actionable insights with clear recommendations. Presenting scenarios (not just one number) gives executives the confidence to make informed decisions with understood risk levels.",
  },
  'ba-sql-010': {
    question: "A company wants to implement a data warehouse for business intelligence. As Lead BA, which requirements should you prioritize in the initial discovery?",
    options: [
    "The technical architecture and database vendor selection",
    "Business questions the data warehouse must answer (KPIs",
    "reports",
    "dashboards)",
    "data sources",
    "data quality requirements",
    "access/security needs",
    "and compliance obligations",
    "The color scheme and layout of dashboard reports",
    "Training materials for the development team",
    ""
    ],
    answer: 1,
    explanation: "A data warehouse project must be driven by business questions, not technology. The Lead BA should first understand: (1) What decisions does the business need to make? (2) What questions/KPIs drive those decisions? (3) What data is needed to answer them? (4) Where does that data come from (source systems)? (5) What is the data quality baseline? (6) Who needs access and at what level? This \"question-driven\" approach ensures the DW delivers business value.",
  },
  'ba-sql-011': {
    question: "How do you find the second highest salary from an \"employees\" table?",
    options: [
    "SELECT MAX(salary) FROM employees",
    "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees)",
    "SELECT salary FROM employees ORDER BY salary DESC LIMIT 1",
    "SELECT salary FROM employees WHERE salary > AVG(salary)",
    ""
    ],
    answer: 1,
    explanation: "A common way to find the second highest value is to find the maximum value that is strictly less than the overall maximum value using a subquery.",
  },
  'ba-sql-012': {
    question: "What is the purpose of a \"Left Outer Join\" for a BA analyzing data?",
    options: [
    "To only get records that exist in both tables",
    "To get all records from the left table",
    "even if there are no matching records in the right table (identifying gaps)",
    "To combine columns from three or more tables",
    "To delete records from the right table",
    ""
    ],
    answer: 1,
    explanation: "A Left Join is crucial for identifying missing data. For example, joining a \"Customers\" table with an \"Orders\" table using a Left Join helps you find customers who have NEVER placed an order (where the order side is NULL).",
  },
  'ba-sql-013': {
    question: "What does the \"GROUP BY\" clause do in SQL?",
    options: [
    "It sorts the results alphabetically",
    "It groups rows that have the same values into summary rows (like finding the number of customers in each city)",
    "It limits the number of results returned",
    "It renames a table in the query",
    ""
    ],
    answer: 1,
    explanation: "The GROUP BY statement is often used with aggregate functions (COUNT, MAX, MIN, SUM, AVG) to group the result-set by one or more columns for statistical analysis.",
  },
  'ba-sql-014': {
    question: "A Primary Key can contain NULL values.",
    answer: "False",
    explanation: "A Primary Key must contain unique values and cannot contain NULL values. This ensures every row in the table can be uniquely identified.",
  },
  'ba-sql-015': {
    question: "Which SQL keyword is used to remove duplicate rows from a result set?",
    options: [
    "UNIQUE",
    "DISTINCT",
    "DIFFERENT",
    "SINGLE",
    ""
    ],
    answer: 1,
    explanation: "The DISTINCT keyword is used to return only different (unique) values in a result set, preventing redundant data in reports.",
  },
  'ba-sql-016': {
    question: "What is the difference between \"INNER JOIN\" and \"LEFT JOIN\"?",
    options: [
    "INNER JOIN returns only matching rows; LEFT JOIN returns all rows from the left table and matching rows from the right",
    "LEFT JOIN is faster than INNER JOIN",
    "INNER JOIN is only for numbers; LEFT JOIN for text",
    "They are the same in most databases",
    ""
    ],
    answer: 0,
    explanation: "INNER JOIN focuses on the intersection. LEFT JOIN is vital when you want to see \"all customers\" even if they haven\\'t made any orders (where order details would be NULL).",
  },
  'ba-sql-017': {
    question: "How do you remove duplicate rows from a SELECT query result?",
    options: [
    "Use the UNIQUE keyword",
    "Use the DISTINCT keyword (e.g.",
    "SELECT DISTINCT name FROM users)",
    "Use the GROUP BY clause on every column",
    "Delete the rows manually from the database",
    ""
    ],
    answer: 1,
    explanation: "DISTINCT is the standard way to filter out duplicates in the result set, providing a list of unique values for the specified columns.",
  },
  'ba-sql-018': {
    question: "What is the purpose of the \"HAVING\" clause in SQL?",
    options: [
    "It is a substitute for WHERE",
    "It is used to filter results *after* an aggregation (GROUP BY) has been applied",
    "It is used to join tables",
    "It defines the primary key of a table",
    ""
    ],
    answer: 1,
    explanation: "WHERE filters rows before grouping. HAVING filters the groups themselves (e.g., \"Find departments HAVING an average salary > 5000\").",
  },
  'ba-sql-019': {
    question: "What is a \"Window Function\" (e.g., ROW_NUMBER, RANK) used for?",
    options: [
    "To open a new window in the UI",
    "To perform calculations across a set of table rows that are somehow related to the current row",
    "without grouping them into a single output row",
    "To speed up the internet connection",
    "To backup the database",
    ""
    ],
    answer: 1,
    explanation: "Window functions allow you to do things like \"Rank customers by sales within their region\" while still keeping all the individual customer rows in the result.",
  },
  'ba-sql-020': {
    question: "What is \"Database Normalization\" and why should a BA care?",
    options: [
    "Making all data look the same",
    "Structuring a relational database to reduce data redundancy and improve data integrity",
    "A way to delete old data automatically",
    "Increasing the size of the database",
    ""
    ],
    answer: 1,
    explanation: "Normalization avoids issues like \"Update Anomalies\" (where you change a customer\\'s address in one place but it remains old in another). BAs need to understand this when defining requirements for new systems.",
  },
  'ba-uq-001': {
    question: "What does UAT stand for and what is its purpose?",
    options: [
    "User Acceptance Testing — formal testing conducted by end users to verify the system meets business requirements and is ready for production deployment",
    "Unified Automated Testing — running automated test suites",
    "User Authentication Testing — testing login functionality",
    "Universal Application Testing — testing across all platforms",
    ""
    ],
    answer: 0,
    explanation: "UAT is the final testing phase where actual business users validate that the system meets their requirements and business processes. It is NOT functional/technical testing (done by QA earlier). UAT answers the question: \"Does this system do what the business needs?\" A successful UAT leads to formal sign-off and production deployment.",
  },
  'ba-uq-002': {
    question: "UAT should be performed by the development team because they understand the system best.",
    answer: "False",
    explanation: "UAT must be performed by business users/stakeholders — NOT developers or QA. The purpose is to validate that the system works in real business context with real-world scenarios. Developers may have biased understanding (they built it to match their interpretation). Business users test from the perspective of actual daily usage, which often reveals issues developers missed.",
  },
  'ba-uq-003': {
    question: "What is a \"test case\" in the context of UAT?",
    options: [
    "A folder that contains test files",
    "A step-by-step scenario with specific inputs",
    "actions",
    "and expected outcomes that verifies a particular requirement or business process",
    "A summary of all bugs found during testing",
    "A developer\\'s code comment explaining test logic",
    ""
    ],
    answer: 1,
    explanation: "A test case includes: Test ID, Description, Preconditions, Test Steps (specific actions), Test Data (specific inputs), Expected Result (what should happen), and Actual Result (what actually happened). Test cases are derived from requirements and acceptance criteria. Each test case should verify one specific aspect of the system.",
  },
  'ba-uq-004': {
    question: "What is a \"defect severity\" vs. \"defect priority\" in defect management?",
    options: [
    "They are the same thing — both measure how bad the bug is",
    "Severity measures the technical impact of the defect on the system; Priority determines the order in which defects should be fixed based on business urgency — a low-severity defect can be high priority and vice versa",
    "Severity is assigned by developers; Priority is assigned by testers",
    "Severity applies to UAT only; Priority applies to development testing",
    ""
    ],
    answer: 1,
    explanation: "Example: A typo in the company logo on the homepage = low severity (no functional impact) but high priority (visible to all users, brand image). A rare crash in an admin report used quarterly = high severity (system crash) but lower priority (rarely used, workaround exists). BAs help stakeholders understand this distinction when triaging defects.",
  },
  'ba-uq-005': {
    question: "What are the typical entry criteria for starting UAT?",
    options: [
    "All developers have finished coding",
    "System testing (SIT) is complete with all critical/major defects resolved",
    "a stable test environment is available",
    "UAT test cases are prepared",
    "test data is loaded",
    "and business users have been trained on the system",
    "The project manager says it is time to start UAT",
    "Only the UAT test plan document needs to be ready",
    ""
    ],
    answer: 1,
    explanation: "Entry criteria prevent premature UAT starts that waste business users\\' time. Key criteria: (1) SIT complete, no critical/major open defects, (2) stable, production-like test environment, (3) UAT test cases reviewed and approved, (4) test data prepared (realistic, anonymized if needed), (5) user access provisioned, (6) business users briefed/trained, (7) UAT schedule communicated. Starting UAT without these leads to frustration and invalid results.",
  },
  'ba-uq-006': {
    question: "What is regression testing and when is it needed?",
    options: [
    "Testing new features only",
    "Re-testing existing functionality after code changes to ensure that fixes or new features have not broken previously working features",
    "Testing the system during user regression (going back to old ways of working)",
    "Performance testing under heavy load",
    ""
    ],
    answer: 1,
    explanation: "Regression testing protects against unintended side effects. When a bug is fixed or a new feature is added, the change might break something else. Regression tests re-run existing test cases to verify nothing broke. Automation is highly valuable for regression testing because the same tests are run repeatedly. BAs should ensure regression test scope covers areas related to the change.",
  },
  'ba-uq-007': {
    question: "Design a comprehensive UAT plan for a new e-commerce checkout system. Include scope, approach, test scenarios, exit criteria, and defect management process.",
    answer: "UAT Plan — E-commerce Checkout:\\n\\n1. Scope:\\n- In scope: cart review",
    explanation: "A good UAT plan sets clear boundaries (scope), involves the right people (business users, not IT), covers critical business scenarios (not just happy path), defines measurable exit criteria (not \"UAT is done when we feel good\"), and has a structured defect management process. The 30/70 split between scripted and exploratory testing balances coverage with discovery of unexpected issues.",
  },
  'ba-uq-008': {
    question: "What is the BA\\'s role in ensuring \"requirements coverage\" during testing?",
    options: [
    "BAs should write all test scripts themselves",
    "BAs ensure every requirement has associated test cases (traceability)",
    "review test cases for business accuracy",
    "identify gaps in test coverage",
    "and verify that acceptance criteria are testable",
    "BAs only participate in UAT",
    "not earlier testing phases",
    "Requirements coverage is exclusively the QA team\\'s responsibility",
    ""
    ],
    answer: 1,
    explanation: "BAs bridge requirements and testing: (1) create/maintain the Requirements Traceability Matrix (RTM) linking requirements → test cases, (2) review QA test cases for business accuracy (QA may misinterpret requirements), (3) identify coverage gaps (untested requirements or acceptance criteria), (4) ensure non-functional requirements have test approaches, (5) participate in defect triage to determine if defects are requirements bugs or implementation bugs.",
  },
  'ba-uq-009': {
    question: "As Lead BA, design a quality assurance strategy that involves BAs throughout the entire SDLC (not just UAT). Include BA checkpoints at each phase, quality metrics, and how to shift quality left.",
    answer: "BA-Integrated Quality Strategy:\\n\\n1. Requirements Phase (Shift Left - Prevention):\\n- Requirements peer review with checklist (completeness",
    explanation: "Shifting quality left means preventing defects at their source (requirements) rather than finding them later (testing). Each dollar spent on requirements quality saves $10-100 in later phases (Boehm\\'s Law). BAs are uniquely positioned to embed quality throughout the SDLC because they own the requirements that everything else is built from. The metrics dashboard provides visibility into where quality breaks down.",
  },
  'ba-uq-010': {
    question: "Stakeholders want to skip UAT because the project is behind schedule. As Lead BA, what is your recommendation?",
    options: [
    "Agree to skip UAT to meet the deadline",
    "Propose a risk-based UAT approach: prioritize critical business scenarios for a condensed 3-5 day UAT",
    "document accepted risks for deferred test cases",
    "and plan a post-release validation period with rollback capability",
    "Insist on full UAT regardless of schedule — quality cannot be compromised",
    "Let the project manager make this decision without BA input",
    ""
    ],
    answer: 1,
    explanation: "Skipping UAT entirely is irresponsible (production issues cost more than delayed launch). However, insisting on full UAT when schedule is critical may be impractical. A risk-based approach focuses UAT on critical paths (highest business impact), defers lower-risk scenarios (with documented risk acceptance), and provides safety nets (rollback plan, post-release monitoring). This balances quality with business urgency — a key Lead BA skill.",
  },
  'ba-us-001': {
    question: "What is the standard format of a user story?",
    options: [
    "Given [context"
    ],
    answer: 1,
    explanation: "The standard user story format is: \"As a [type of user], I want [goal/desire], so that [benefit/reason].\" This format captures WHO needs the feature, WHAT they need, and WHY. The Given-When-Then format is used for acceptance criteria (BDD), not the story itself.",
  },
  'ba-us-002': {
    question: "What does the INVEST acronym stand for in the context of user stories?",
    options: [
    "Important",
    "Necessary",
    "Validated",
    "Estimated",
    "Scoped",
    "Tested",
    "Independent",
    "Negotiable",
    "Valuable",
    "Estimable",
    "Small",
    "Testable",
    "Iterative",
    "Narrow",
    "Verified",
    "Efficient",
    "Structured",
    "Traceable",
    "Innovative",
    "Notable",
    "Viable",
    "Executable",
    "Stable",
    "Transparent",
    ""
    ],
    answer: 1,
    explanation: "INVEST is a mnemonic for good user story quality: Independent (no dependencies), Negotiable (not a contract), Valuable (delivers business value), Estimable (team can size it), Small (fits in a sprint), Testable (clear acceptance criteria). Stories that violate INVEST are harder to plan and deliver.",
  },
  'ba-us-003': {
    question: "Acceptance criteria and user stories are the same thing — they both describe what the user wants.",
    answer: "False",
    explanation: "A user story describes the WHAT and WHY at a high level (\"As a user, I want to reset my password so that I can regain access\"). Acceptance criteria define specific, testable conditions that must be met for the story to be considered complete (e.g., \"Password reset email sent within 30 seconds",
  },
  'ba-us-004': {
    question: "In a use case diagram, what does an \"actor\" represent?",
    options: [
    "A software module inside the system",
    "An external entity (person",
    "system",
    "or device) that interacts with the system",
    "A database that stores user data",
    "A test scenario for the system",
    ""
    ],
    answer: 1,
    explanation: "An actor is any entity external to the system that interacts with it. This can be a human user (e.g., Customer, Admin), another system (e.g., Payment Gateway), or a device (e.g., IoT sensor). Actors are drawn as stick figures outside the system boundary in UML use case diagrams.",
  },
  'ba-us-005': {
    question: "What is the difference between an Epic and a User Story?",
    options: [
    "Epics are for bugs; user stories are for features",
    "An epic is a large body of work that can be broken down into smaller user stories; it is too big to complete in a single sprint",
    "An epic is a detailed specification; a user story is a summary",
    "There is no difference — they are interchangeable terms",
    ""
    ],
    answer: 1,
    explanation: "An epic is a large user story that is too big for a single sprint and needs to be decomposed. Hierarchy: Theme → Epic → User Story → Task. For example, Epic: \"User Authentication System\" → Stories: \"Login with email",
  },
  'ba-us-006': {
    question: "Write 3 acceptance criteria in Given-When-Then (Gherkin) format for the following user story: \"As a customer, I want to add items to my shopping cart so that I can purchase multiple products at once.\"",
    answer: "Given I am on a product detail page and the product is in stock",
    explanation: "Given-When-Then (Gherkin syntax) provides structured, testable acceptance criteria. \"Given\" sets the precondition, \"When\" describes the action, \"Then\" states the expected outcome. Good acceptance criteria cover the happy path, edge cases (duplicate add), and error scenarios (out of stock). They should be specific and verifiable.",
  },
  'ba-us-007': {
    question: "What is User Story Mapping and when should a BA use it?",
    options: [
    "A technique to map user stories to database tables",
    "A visual exercise that arranges user stories along a horizontal user journey (backbone) and vertical priority (walking skeleton)",
    "used for release planning and MVP definition",
    "A diagram that shows how user stories flow through the development pipeline",
    "A tool for estimating story points using planning poker",
    ""
    ],
    answer: 1,
    explanation: "User Story Mapping (by Jeff Patton) creates a 2D map: the horizontal axis shows the user journey steps (backbone/activities), and the vertical axis shows stories under each step ordered by priority. A horizontal line cuts across to define the MVP or release scope. It gives context that a flat backlog lacks — showing how stories relate to the overall user experience.",
  },
  'ba-us-008': {
    question: "In use case modeling, what is the difference between <<include>> and <<extend>> relationships?",
    options: [
    "<<include>> means optional behavior; <<extend>> means mandatory behavior",
    "<<include>> means the base use case ALWAYS executes the included use case; <<extend>> means the extending use case OPTIONALLY adds behavior to the base under certain conditions",
    "<<include>> is for actors; <<extend>> is for systems",
    "They are identical; either can be used interchangeably",
    ""
    ],
    answer: 1,
    explanation: "<<include>> = mandatory composition: the base use case always invokes the included one (e.g., \"Place Order\" <<includes>> \"Validate Payment\"). <<extend>> = optional extension: the extending use case adds behavior only when a condition is met (e.g., \"Place Order\" is <<extended by>> \"Apply Coupon\" if coupon code is entered). This distinction is important for understanding system behavior completeness.",
  },
  'ba-us-009': {
    question: "How should a BA handle a user story that violates the \"Independent\" principle of INVEST (i.e., it has strong dependencies on other stories)?",
    options: [
    "Delete the story because it violates INVEST",
    "Re-slice the stories using vertical slicing (end-to-end thin slices) to minimize dependencies",
    "or explicitly document the dependency and sequence them in the same sprint",
    "Merge all dependent stories into one large story",
    "Assign all dependent stories to the same developer",
    ""
    ],
    answer: 1,
    explanation: "Vertical slicing creates stories that deliver end-to-end value through all layers (UI → API → DB) rather than horizontal slicing by layer. For example, instead of \"Build user table\" + \"Build user API\" + \"Build user form",
  },
  'ba-us-010': {
    question: "You are building an e-commerce platform. Decompose the Epic \"Order Management\" into at least 6 user stories with acceptance criteria outlines. Consider different actors and edge cases.",
    answer: "1. \"As a customer",
    explanation: "Good epic decomposition considers multiple actors (customer, admin), the full lifecycle (create → view → update → cancel → return), and both happy and edge cases. Each story follows the user story format, is independently deliverable, and has testable acceptance criteria. This decomposition enables incremental delivery — the team can ship \"place order\" first as the MVP.",
  },
  'ba-us-011': {
    question: "What is the \"3 Cs\" concept in user stories (by Ron Jeffries)?",
    options: [
    "Create",
    "Code",
    "Close",
    "Card (written story)",
    "Conversation (discussion about details)",
    "Confirmation (acceptance criteria)",
    "Customer",
    "Coder",
    "Checker",
    "Concept",
    "Context",
    "Criteria",
    ""
    ],
    answer: 1,
    explanation: "Ron Jeffries defined the 3 Cs: Card (the story written on a card — brief, a reminder), Conversation (ongoing dialogue between BA, PO, developers, and testers to flesh out details), and Confirmation (acceptance criteria/tests that confirm the story is done). A user story is NOT a detailed specification — the Card is a placeholder for a Conversation, confirmed by tests.",
  },
  'ba-us-012': {
    question: "As a lead BA, define a standard for user story quality in your organization. Include a Definition of Ready (DoR) checklist, story writing guidelines, and a review process that ensures consistency across multiple BA teams.",
    answer: "Definition of Ready (DoR) Checklist: (1) Story follows \"As a... I want... So that...\" format with clear role",
    explanation: "A standardized story quality framework ensures consistency across BA teams, reduces rework during sprints, and improves estimation accuracy. The DoR acts as a quality gate — stories that do not meet the checklist are not ready for sprint planning. Peer review catches blind spots, and QA involvement ensures testability. This process scales across large organizations with multiple Scrum teams.",
  },
  'ba-us-013': {
    question: "When should a BA recommend using formal use case specifications (fully dressed use cases) instead of user stories?",
    options: [
    "Always — use cases are more detailed and therefore always better",
    "Never — user stories have completely replaced use cases",
    "For complex systems with many actors and intricate interaction flows (e.g.",
    "healthcare",
    "banking)",
    "where detailed step-by-step flows",
    "exceptions",
    "and pre/post-conditions provide essential clarity that user stories alone cannot capture",
    "Only when the project uses Waterfall methodology",
    ""
    ],
    answer: 2,
    explanation: "User stories work well in Agile for most features because they emphasize conversation. However, complex domains (healthcare, financial, regulatory) often need detailed, step-by-step interaction flows with explicit preconditions, postconditions, exception flows, and business rules. Fully dressed use cases (per Alistair Cockburn) provide this rigor. The choice is context-dependent, not methodology-dependent — even Agile teams can use use cases when complexity demands it.",
  },
  'ba-us-014': {
    question: "When writing a user story, what is the purpose of the \"So that...\" clause?",
    options: [
    "To describe the technical implementation",
    "To define the business value or the \"why\" behind the requirement",
    "To list the stakeholders who requested the feature",
    "To set the priority of the story"
    ],
    answer: 1,
    explanation: "The \"So that\" part explains the motivation. Understanding the WHY helps the development team suggest better \"hows\" and ensures the implementation actually achieves the desired benefit.",
  },
  'ba-us-015': {
    question: "A user story is too large to fit in a single sprint. What should the BA do first?",
    options: [
    "Ask the developers to work overtime to finish it",
    "Move the story to the next sprint",
    "Slice the story into smaller",
    "independently deliverable user stories focusing on thin vertical slices of functionality",
    "Increase the sprint length"
    ],
    answer: 2,
    explanation: "Slicing (also called decomposition) is a core BA skill. Breaking a large \"Epic\" into smaller \"INVEST\" stories allows for iterative delivery and reduces risk.",
  },
  'ba-us-016': {
    question: "Which of the following is an example of an \"Extended\" flow in a use case specification?",
    options: [
    "The login process always requiring a password",
    "A customer optionally applying a discount code during checkout",
    "A system automatically logging out a user after 30 minutes",
    "The process of saving a file to the database"
    ],
    answer: 1,
    explanation: "Extend relationships represent optional or conditional behavior. The base flow (checkout) is complete without it, but can be extended by the optional flow (discount code).",
  },
  'ba-us-017': {
    question: "What is the \"Spike\" in Agile and how does it relate to User Stories?",
    options: [
    "A very high priority story",
    "A time-boxed research task used to reduce uncertainty or technical risk before a user story can be estimated or implemented",
    "A fast way to write code without testing",
    "A sudden increase in the product backlog size"
    ],
    answer: 1,
    explanation: "When a story has too many unknowns to be estimated, a Spike is used to perform technical research or prototyping. The outcome of a Spike is knowledge, which then allows the team to write better stories.",
  },
  'ba-us-018': {
    question: "Using the \"Hamburger Slicing\" technique, decompose a complex \"User Registration\" story that needs to support 5 different countries and 3 different identity providers.",
    answer: "Hamburger Slicing strategy:\\n1. Choose a \"Thin Slice\": Support only 1 country (e.g.",
    explanation: "Hamburger slicing focuses on delivering a full path (top to bottom) first, then expanding horizontally to cover breadth and complexity iteratively.",
  },
  'ba-us-019': {
    question: "In a Use Case Diagram, an <<include>> relationship means the included behavior is only performed if a specific condition is met.",
    answer: "False",
    explanation: "That describes an <<extend>> relationship. An <<include>> means the behavior is ALWAYS part of the base use case.",
  },
  'ba-us-020': {
    question: "What is the \"User Story Backbone\" in Story Mapping?",
    options: [
    "The most difficult stories",
    "The high-level activities that a user performs",
    "sequenced in chronological order to describe the user journey",
    "The stories that are already completed",
    "The technical database requirements"
    ],
    answer: 1,
    explanation: "The backbone (or walking skeleton) represents the core flow of the application. It helps stakeholders see the \"big picture\" before diving into the details of individual stories.",
  },
  'ba-us-021': {
    question: "As a Lead BA, how do you handle \"Non-Functional Requirements\" (NFRs) in a User Story environment?",
    options: [
    "Ignore them since stories are about functionality",
    "Include them as Acceptance Criteria on relevant stories",
    "or as part of the \"Definition of Done\" for the entire project",
    "Write them as separate \"Technical Stories\"",
    "Put them in a separate document that nobody ever reads"
    ],
    answer: 1,
    explanation: "NFRs (like performance or security) should either be constraints on specific stories (via AC) or global standards (via DoD) to ensure they are verified every sprint.",
  },
  'ba-us-022': {
    question: "Which of the following describes a \"Negative User Story\"?",
    options: [
    "A story about a user who is unhappy",
    "A story from the perspective of an attacker or a user making common mistakes",
    "used to define security or error-handling requirements",
    "A story that has a negative impact on the budget",
    "A story that was deleted from the backlog"
    ],
    answer: 1,
    explanation: "Negative stories (or Abuser Stories) help teams think about what SHOULD NOT happen, leading to better validation and security requirements.",
  },
  'ba-us-023': {
    question: "Design a workshop for \"Collaborative Story Writing\" involving developers, QA, and the Product Owner. What is the agenda and output?",
    answer: "Workshop: Story Refinement Lab\\nAgenda:\\n1. Problem Statement: PO describes the business problem (10 min).\\n2. Ideation: Brainstorming features using sticky notes (15 min).\\n3. Story Writing: Small groups write \"Card\" level stories (20 min).\\n4. AC Definition: Passing the stories around to add 1-2 key Acceptance Criteria (20 min).\\n5. Estimation: High-level sizing via T-shirt sizing (15 min).\\nOutput: A prioritized set of stories ready for the DoR review.",
    explanation: "Collaborative writing ensures that all perspectives (value, feasibility, testability) are baked into the stories from the very beginning.",
  },
  'ba-us-024': {
    question: "What are the components of the standard User Story template?",
    options: [
    "Who",
    "What",
    "Where",
    "As a <role>",
    "I want <goal>",
    "so that <benefit>",
    "Input",
    "Process",
    "Output",
    "Requirement ID",
    "Description",
    "Status",
    ""
    ],
    answer: 1,
    explanation: "The standard template focuses on the persona (Who), the specific action (What), and the underlying value (Why).",
  },
  'ba-us-025': {
    question: "What does the \"C\" stand for in the \"3Cs\" of user stories?",
    options: [
    "Cost",
    "Code",
    "Complete",
    "Card",
    "Conversation",
    "Confirmation",
    "Capture",
    "Create",
    "Close",
    "Customer",
    "Client",
    "Consumer",
    ""
    ],
    answer: 1,
    explanation: "Card (physical or digital proxy for requirements), Conversation (the dialogue that builds shared understanding), and Confirmation (acceptance criteria that prove the story is done).",
  },
  'ba-us-026': {
    question: "In a Use Case diagram, what does an \"Actor\" represent?",
    options: [
    "An internal database",
    "A role played by a user or an external system that interacts with the subject system",
    "A specific person\\'s name",
    "A physical device like a printer",
    ""
    ],
    answer: 1,
    explanation: "Actors are external to the system. They represent the different roles that human users or other systems play when interacting with your system.",
  },
  'ba-us-027': {
    question: "When should you use an \"Include\" relationship vs. an \"Extend\" relationship in a Use Case diagram?",
    options: [
    "They are interchangeable",
    "Use \"Include\" for shared/mandatory sub-tasks; use \"Extend\" for optional or exceptional behavior",
    "Use \"Include\" for humans; use \"Extend\" for systems",
    "Use \"Include\" for small cases; use \"Extend\" for large cases",
    ""
    ],
    answer: 1,
    explanation: "Include represents a \"has-a\" or mandatory dependency. Extend represents a conditional or optional addition to the base use case.",
  },
  'ba-us-028': {
    question: "A User Story should be so detailed that the developer never needs to talk to the BA.",
    answer: "False",
    explanation: "User stories are \"a placeholder for a conversation.\" Too much detail up front can inhibit collaboration and lead to misunderstandings. Acceptance criteria should be clear, but the dialogue is essential.",
  },
  'ba-us-029': {
    question: "What is \"Vertical Slicing\" in the context of splitting User Stories?",
    options: [
    "Dividing stories by technical layer (e.g.",
    "UI",
    "DB)",
    "Creating a story that delivers a small but complete piece of functional value through all technical layers",
    "Cutting the document vertically",
    "Assigning stories to different teams",
    ""
    ],
    answer: 1,
    explanation: "Vertical slices ensure that even a small feature is \"shippable\" and provides real value to the user, allowing for early feedback on the whole architecture.",
  },
  'ba-us-030': {
    question: "What is a \"Persona\" in User Story development?",
    options: [
    "A real person in the development team",
    "A fictional character that represents a typical user segment",
    "helping the team understand their goals",
    "behaviors",
    "and pain points",
    "The CEO of the company",
    "An actor hired for testing",
    ""
    ],
    answer: 1,
    explanation: "Personas (e.g., \"Mary the Marketing Manager\") make the users \"human\" to the team, leading to more empathetic and user-centric features.",
  },
  'ba-us-031': {
    question: "How should \"Non-Functional Requirements\" (NFRs) be handled in an Agile project using User Stories?",
    options: [
    "They should be ignored",
    "They can be added as constraints in the Definition of Done or written as specific stories if they represent a discrete piece of work",
    "They should only be documented in a separate 100-page document",
    "Developers should decide them without telling the PO",
    ""
    ],
    answer: 1,
    explanation: "NFRs (performance, security, usability) shouldn\\'t be lost. Small ones go into the DoD; large ones (e.g., \"Encrypt all data\") can be their own stories.",
  },
  'ba-us-032': {
    question: "What is the purpose of \"User Story Mapping\"?",
    options: [
    "To draw a map of the office",
    "To visually organize stories to understand the user journey",
    "identify gaps",
    "and plan releases",
    "To track the location of the developers",
    "To design the database schema",
    ""
    ],
    answer: 1,
    explanation: "Story mapping helps the team see the \"big picture\" and ensure that the most critical parts of the user journey are delivered in the first release (MVP).",
  },
  'ba-us-033': {
    question: "What does \"INVEST\" stand for in the context of high-quality User Stories?",
    options: [
    "Independent",
    "Negotiable",
    "Valuable",
    "Estimable",
    "Small",
    "Testable",
    "Interesting",
    "New",
    "Variable",
    "Easy",
    "Simple",
    "Traditional",
    "Involved",
    "Noble",
    "Visual",
    "Effective",
    "Secure",
    "Timely",
    "Inside",
    "Near",
    "Very",
    "Every",
    "Some",
    "Today",
    ""
    ],
    answer: 0,
    explanation: "INVEST is the standard for good stories. \"Independent\" means they can be moved in the backlog without breaking others; \"Negotiable\" means they aren\\'t fixed contracts but starting points for conversation.",
  },
  'ba-wp-001': {
    question: "What is the difference between a wireframe and a prototype?",
    options: [
    "They are the same thing",
    "A wireframe is a static",
    "low-fidelity layout showing structure and content placement; a prototype is an interactive simulation that demonstrates user flows and interactions",
    "A wireframe is interactive; a prototype is static",
    "A wireframe is designed by developers; a prototype is designed by designers",
    ""
    ],
    answer: 1,
    explanation: "Wireframes are skeletal layouts — like blueprints showing where elements go (navigation, content areas, buttons) without visual design details. Prototypes add interactivity: clickable buttons, page transitions, form submissions. Fidelity spectrum: sketch → wireframe → mockup (visual design) → prototype (interactive). BAs often create low/mid-fidelity wireframes to validate requirements.",
  },
  'ba-wp-002': {
    question: "Why should a BA create wireframes during the requirements phase?",
    options: [
    "To replace the UI designer\\'s job",
    "To visually communicate requirements",
    "validate understanding with stakeholders",
    "identify missing requirements early",
    "and reduce ambiguity in text-based specifications",
    "To determine the exact colors and fonts for the final product",
    "Wireframes are only created by designers",
    "not BAs",
    ""
    ],
    answer: 1,
    explanation: "Wireframes help BAs because: (1) stakeholders understand pictures better than text specs, (2) visual representation reveals gaps (\"where does the error message go?\"), (3) facilitates faster feedback loops, (4) reduces miscommunication between BA, design, and development. BA wireframes are low-fidelity — they communicate structure and flow, not final design.",
  },
  'ba-wp-003': {
    question: "Low-fidelity wireframes should include detailed visual design elements like colors, images, and exact typography.",
    answer: "False",
    explanation: "Low-fidelity (lo-fi) wireframes intentionally avoid visual design details. They use grayscale, placeholder boxes for images, and generic fonts. This keeps focus on layout, structure, and information hierarchy — not aesthetics. Adding visual design too early (1) wastes time if layout changes, (2) distracts stakeholders into color/font discussions instead of functionality feedback.",
  },
  'ba-wp-004': {
    question: "What is a \"user flow\" diagram and how does it complement wireframes?",
    options: [
    "A user flow is a type of wireframe with more details",
    "A user flow maps the step-by-step path a user takes through the system to accomplish a goal — it shows the sequence of screens",
    "decisions",
    "and actions",
    "while wireframes show what each individual screen looks like",
    "A user flow is a database diagram showing data movement",
    "A user flow is a developer\\'s implementation plan",
    ""
    ],
    answer: 1,
    explanation: "User flows show the journey (screen A → decision → screen B or C), while wireframes show individual screen layouts. Together they form a complete picture: the flow shows WHERE the user goes, and wireframes show WHAT they see at each stop. Example: Login flow → Dashboard → Product List → Product Detail → Cart → Checkout → Confirmation.",
  },
  'ba-wp-005': {
    question: "Which tool is MOST commonly used by BAs and designers for collaborative wireframing and prototyping?",
    options: [
    "Microsoft Excel",
    "Figma — a cloud-based design tool with real-time collaboration",
    "component libraries",
    "and prototyping features",
    "Notepad",
    "Photoshop",
    ""
    ],
    answer: 1,
    explanation: "Figma is the industry standard for wireframing and prototyping because: (1) real-time collaboration (like Google Docs for design), (2) component/design system libraries for consistency, (3) built-in prototyping (link frames, add transitions), (4) free for small teams, (5) runs in the browser (no install needed). Other tools: Sketch (Mac only), Adobe XD (discontinued), Balsamiq (lo-fi only), Axure (advanced prototyping).",
  },
  'ba-wp-006': {
    question: "What are Nielsen\\'s 10 Usability Heuristics primarily used for?",
    options: [
    "Measuring website loading speed",
    "Evaluating the usability of a user interface by assessing it against 10 recognized usability principles (visibility of system status",
    "error prevention",
    "consistency",
    "etc.)",
    "Counting the number of clicks in a user flow",
    "Testing code quality in frontend applications",
    ""
    ],
    answer: 1,
    explanation: "Jakob Nielsen\\'s 10 heuristics are a framework for evaluating UI usability: (1) Visibility of system status, (2) Match between system and real world, (3) User control and freedom, (4) Consistency and standards, (5) Error prevention, (6) Recognition rather than recall, (7) Flexibility and efficiency, (8) Aesthetic and minimalist design, (9) Help users recognize/recover from errors, (10) Help and documentation. BAs use these to review wireframes before handoff.",
  },
  'ba-wp-007': {
    question: "Design the user flow and key wireframe screens for a mobile banking app\\'s \"Send Money\" feature. Include happy path, error handling, and security considerations.",
    answer: "User Flow:\\n1. Dashboard (CTA: \"Send Money\" button)\\n2. Recipient Selection screen (search contacts",
    explanation: "This design follows UX best practices: progressive disclosure (one task per screen), clear feedback at each step, error prevention (balance check, format validation), and trust-building (fee transparency, confirmation review). The BA ensures all functional requirements are represented visually: validation rules, security, error states, and edge cases (insufficient funds, network failure, daily limit exceeded).",
  },
  'ba-wp-008': {
    question: "What is \"information architecture\" (IA) and why should a BA care about it?",
    options: [
    "IA is the server architecture where information is stored",
    "IA is the structural design of information environments — organizing",
    "labeling",
    "and structuring content so users can find and understand information easily. BAs should care because IA directly affects how requirements map to navigation",
    "taxonomy",
    "and content structure",
    "IA is another name for database schema design",
    "IA is a CSS framework for responsive layouts",
    ""
    ],
    answer: 1,
    explanation: "Information Architecture determines how content is organized, labeled, and accessed. It includes: navigation structure (menus, breadcrumbs), content taxonomy (categories, tags), search strategy, and labeling (what things are called). BAs influence IA through: domain modeling (entity relationships), user research (how users think about content), and card sorting exercises (let users organize content naturally).",
  },
  'ba-wp-009': {
    question: "As Lead BA, define a process for incorporating UX validation into the requirements lifecycle. Include when to create wireframes, how to get user feedback, and how wireframe insights feed back into requirements.",
    answer: "UX-Integrated Requirements Process:\\n\\n1. Discovery Phase:\\n- User research (interviews",
    explanation: "Integrating UX validation into requirements prevents building the wrong thing. Early low-fidelity testing is cheap (paper prototypes); late redesigns are expensive. The 5-user testing threshold (per Nielsen) captures ~85% of usability issues. Linking wireframes to stories ensures developers and QA have visual context. Continuous post-release feedback closes the loop.",
  },
  'ba-wp-010': {
    question: "When should a BA recommend building a high-fidelity interactive prototype before development starts (despite the cost)?",
    options: [
    "Always — prototypes should be built for every feature",
    "Never — prototypes waste time that could be spent coding",
    "When the project has high uncertainty (new product",
    "unfamiliar domain)",
    "the cost of building the wrong thing is very high",
    "or stakeholders have difficulty visualizing from text-based requirements alone",
    "Only when the designer is available",
    ""
    ],
    answer: 2,
    explanation: "High-fidelity prototypes are an investment. They are worth it when: (1) The product is new and has no existing mental model, (2) Stakeholders cannot agree on what they want from text specs, (3) The development cost is very high (mobile apps, embedded systems) — cheaper to iterate on a prototype, (4) Regulatory approval requires UI demonstration before build, (5) Usability is a key differentiator. For well-understood features or internal tools, lower fidelity is sufficient.",
  },
}
