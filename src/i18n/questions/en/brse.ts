import type { QuestionTranslationMap } from '../types'

export const brseEn: QuestionTranslationMap = {
  'brse-cm-001': {
    question: "What should BrSE keep in mind most during the first meeting with a Japanese client?",
    options: [
    "Start talking about technical matters right away",
    "Careful self-introduction and company introduction → Listening to the client's issues and needs → Confirming what you have understood — \"Listening attitude\" is the first step to building trust",
    "Give a long presentation about your company's achievements",
    "Get a quote now"
    ],
    answer: 1,
    explanation: "Key points for the first meeting: 1) Exchange business cards (observe good manners), 2) Briefly introduce the company (within 5 minutes), 3) Spend 80% of your time listening to what the client has to say, 4) Listen while taking notes (this shows your seriousness), 5) Reiterate what you have understood, and 6) End by clarifying your next action. We respect Japan's culture of \"building relationships first.\"",
  },
  'brse-cm-002': {
    question: "A good service is to answer \"Yes, we can\" to all requests from clients.",
    answer: "False",
    explanation: "Saying \"yes\" to anything is dangerous. Honestly telling people what is ''impossible'' or ''difficult'' will lead to long-term trust. Correct approach: ① First, understand the request accurately; ② Check internally the feasibility; ③ If it is not possible, present an alternative; ④ If possible, clarify the conditions (cost, time). The worst thing you can do is say, “I can do it,” and then say, “I couldn’t.”",
  },
  'brse-cm-003': {
    question: "What is \"Expectation Management\"?",
    options: [
    "Setting high expectations for clients",
    "Set realistic expectations and transparently share progress to avoid gaps between client expectations and actual deliverables.",
    "Manage expected sales",
    "Management of members' goals"
    ],
    answer: 1,
    explanation: "Points for managing expectations: 1. First, clarify what you can and cannot do. 2. Always keep what you commit to. 3. Share progress regularly and report any gaps early. 4. Ideally, under-promise, over-deliver (promise modestly and deliver more).",
  },
  'brse-cm-004': {
    question: "If a client makes a strong complaint that \"the same problem has occurred again,\" which is the most appropriate response for BrSE?",
    options: [
    "Just reply, \"I'll look into it.\"",
    "① Apologize immediately ② Identify the cause and implement interim measures within 24 hours ③ Root cause analysis (5 Whys) ④ Submit permanent measures and recurrence prevention measures in writing ⑤ Follow-up report on the implementation status of countermeasures — Recurrence will seriously damage trust.",
    "\"It's the team's fault,\" he explains.",
    "I will deal with it at a later date."
    ],
    answer: 1,
    explanation: "Recurring problems are the worst case scenario and can seriously damage trust. It is important to thoroughly analyze the root cause of why it happened again (previous countermeasures were insufficient) and propose preventative measures (process improvements, addition of automated tests, etc.). Countermeasures that rely on individual attention can lead to relapse.",
  },
  'brse-cm-005': {
    question: "What can BrSE do in addition to regular project management from the perspective of \"CX (customer experience)\" to continuously improve client satisfaction?",
    options: [
    "Do nothing — project completion is the only goal",
    "① Improving response speed (shortening the time to answer questions) ② Pre-emptive suggestions (proposing improvements before problems occur) ③ Collecting feedback through regular \"reflections\" ④ Accumulating small success experiences ⑤ Building personal relationships of trust with the person in charge",
    "offer a discount",
    "make frequent sales visits"
    ],
    answer: 1,
    explanation: "Improving CX is the accumulation of experiences that exceed expectations. 1) Response speed (responses to questions within 24 hours will increase trust), 2) Looking ahead (“We are preparing this for next month's release”), 3) Reflection (regularly asking, “Is there anything we can do to improve?”), 4) Relationship with the person in charge (not just about work, but appropriate chat and attentiveness).",
  },
  'brse-cm-006': {
    question: "Design the agenda and structure of reporting materials for monthly client reporting meetings.",
    answer: "Monthly report meeting (60 minutes):\\n\\nAgenda:\\n1. Review of the previous month (15 minutes):\\n - List of completed milestones/features\\n - Quality summary (number of bugs, test pass rate)\\n - Issues and resolution status\\n\\n2. Plan for the current month (10 minutes):\\n - Milestones/goals for this month\\n - Resource planning\\n - Dependencies (things to be done on the client side)\\n\\n3. Risks and issues (10 minutes):\\n - TOP3 risks and their countermeasures status\\n - Report of new issues\\n - Escalation items\\n\\n4. Improvement activities (10 minutes):\\n - Report on the effects of the previous month's improvement measures\\n - This month's improvement proposals\\n\\n5. Q&A/discussion (15 minutes):\\n - Feedback from clients\\n - Instructions and requests for the next month\\n\\nReport materials:\\n- 10-15 slides in total (concise)\\n- Heavy use of numbers and graphs (avoid text list)\\n- Visualize status in green/yellow/red traffic light format\\n- Created in Japanese, with supplementary notes for technical terms",
    explanation: "Client time is valuable. In order to share information efficiently in 60 minutes, we will focus on three things: \"visuals,\" \"numbers,\" and \"improvement.\" In particular, reporting on improvement activities gives the impression that you are a team that can solve problems, which directly leads to contract renewal.",
  },
  'brse-cm-007': {
    question: "If a client brings up a comparison with another offshore vendor and requests a price reduction, what is the best BrSE response?",
    options: [
    "Respond to price reductions immediately",
    "Present your company's strengths (quality track record, BrSE system, domain knowledge, team stability) with concrete data, explain the risks and costs of changing vendors from the perspective of TCO (Total Cost of Ownership), and then differentiate yourself by offering added value.",
    "speak ill of one's competitors",
    "If you don't lower the price, the contract will be terminated."
    ],
    answer: 1,
    explanation: "Price competition alone is unsustainable. Points of differentiation: 1) Quality performance (bug rate, customer satisfaction data), 2) Vendor change costs (knowledge transfer, start-up period, quality risks), 3) Team stability (turnover rate, average length of service), 4) Added value (improvement proposals, proactive response, domain knowledge). It is important to show \"overall value\" rather than \"cheap\".",
  },
  'brse-cm-008': {
    question: "Which KPI is the most important for maintaining long-term relationships with clients?",
    options: [
    "Number of projects only",
    "Net Promoter Score (NPS) — Comprehensive management of three factors: degree to which clients recommend your company to others, contract renewal rate (repeat rate), and account growth rate (expansion of transaction size)",
    "number of developers",
    "Number of sales visits"
    ],
    answer: 1,
    explanation: "KPIs for long-term relationships: ① NPS (recommendation level - an indicator of client satisfaction and loyalty), ② contract renewal rate (rate of continuing business, aim for 90% or more), ③ account growth rate (expanding business from the same client - more efficient than new sales). These three things form a virtuous cycle: High quality → High NPS → Contract renewal → Business expansion → Further investment → High quality...",
  },
  'brse-cm-009': {
    question: "As a Lead BrSE, you will design account management strategies for three major clients. Include relationship deepening, risk management, and growth strategies for each client.",
    answer: "Account management strategy:\\n\\n1. Client classification:\\n- Tier 1 (most important): Annual sales of 40% or more, transactions for 5 years or more\\n → Responsible: Senior BrSE + Lead BrSE direct involvement\\n → Strategy: Deepening partnerships, new business proposals, building relationships with management\\n\\n- Tier 2 (important): Annual sales of 25%, transactions for 3 years\\n → Responsible for: BrSE\\n → Strategy: Service expansion, new technology proposals, team additions\\n\\n- Tier 3 (growing): 15% annual sales, one-year transactions\\n → Responsible: BrSE\\n → Strategy: Building trust, creating a track record, stabilizing transactions\\n\\n2. Action plan for each client:\\n\\n[Tier 1] DEEP strategy:\\n- Quarterly strategy meeting (management level)\\n- Annual appreciation event (team visit, results announcement)\\n- Sharing technology roadmap and proposing advance investment\\n- Risk: High dependence → Diversify risk through growth of other clients\\n\\n[Tier 2] EXPAND strategy:\\n- Actively proposing new projects\\n- Horizontal expansion to other departments (obtaining referrals)\\n- Jointly holding technology study sessions\\n- Goal: Developing to Tier 1 within 2 years\\n\\n[Tier 3] STABILIZE strategy:\\n- Accumulation and visualization of quality performance\\n- Build trust with the person in charge (regular visits)\\n- Accumulate small successes\\n- Goal: To Tier 2 within one year\\n\\n3. Portfolio risk management:\\n- Client concentration risk: Tier 1 accounts for more than 40% of sales → Development of other clients\\n- Alert 3 months before contract renewal → Preparation for renewal negotiations\\n- Semi-annual portfolio review",
    explanation: "Account management is a superordinate concept of \"project management\". In addition to achieving success in individual projects, we strategically build long-term relationships with clients, expand business, and diversify risk. Tier classification allows you to allocate your limited resources (lead BrSE time) most effectively.",
  },
  'brse-est-001': {
    question: "What is “Ningetsu”?",
    options: [
    "Number of people born per month",
    "The unit of man-hours that one person works full-time for one month (approximately 20 business days) - For example, \"3 person months\" is the amount of work for 1 person x 3 months, or 3 people x 1 month.",
    "Project budget amount",
    "Number of test runs"
    ],
    answer: 1,
    explanation: "The person-month is the most common man-hour unit in the Japanese IT industry. 1 person-month ≈ 20 person-days ≈ 160 person-hours (8 hours per day). BrSE is calculated in person-months at the time of quotation and submitted to the client. Note: It is theoretically possible for 3 people to complete the work for 1 month, but in reality, it is often 1.2 to 1.5 times longer due to loss of parallel work and communication loss.",
  },
  'brse-est-002': {
    question: "When making an estimate, it is sufficient to estimate only the development man-hours. No administrative effort or buffers required.",
    answer: "False",
    explanation: "Items that should be included in the estimate: 1) Development man-hours (design + coding + unit tests), 2) Management man-hours (BrSE man-hours, progress management, report creation), 3) Testing man-hours (integration tests, comprehensive tests), 4) Buffer (risk response, 10-20% of the total), 5) Environment construction man-hours, 6) Document creation man-hours. Estimating only development man-hours is the cause of projects in the red.",
  },
  'brse-est-003': {
    question: "What is a quote \"buffer\"?",
    options: [
    "unnecessary costs",
    "Additional man-hours to cover unforeseen risks and challenges — typically 10-20% of total man-hours",
    "About profit margin",
    "About overtime pay"
    ],
    answer: 1,
    explanation: "Buffers are insurance. Types of risks: ① Specification change risk (change in client requirements), ② Technology risk (unexpected technical issues), ③ Resource risk (member withdrawal/sick leave), ④ Communication risk (rework due to misunderstanding). Offshore markets tend to have a large buffer.",
  },
  'brse-est-004': {
    question: "What is the \"Function Point Method\"?",
    options: [
    "How to calculate effort by number of lines of source code",
    "A method to objectively measure the size of a system based on the number and complexity of inputs, outputs, queries, internal files, and external interfaces — independent of development language and framework",
    "How to score team members' abilities",
    "How to estimate man-hours by number of meetings"
    ],
    answer: 1,
    explanation: "Five elements of FP (Function Point) method: ① External input (EI), ② External output (EO), ③ External inquiry (EQ), ④ Internal logic file (ILF), ⑤ External interface file (EIF). Calculate the FP value by weighting each element by complexity (low/medium/high). FP value x productivity coefficient (man-days/FP) = man-hours. It is widely used by Japanese system integrators.",
  },
  'brse-est-005': {
    question: "How should a BrSE respond if a client says, \"This quote is too high?\"",
    options: [
    "reduce the amount instantly",
    "Explain the basis for the estimate (e.g. effort breakdown, design/development/test ratio, assumptions) and present and negotiate alternatives such as scope adjustment or phased implementation.",
    "“This is the correct amount,” I replied.",
    "Match your competitors' prices"
    ],
    answer: 1,
    explanation: "Points of estimate negotiation: 1) Transparency of breakdown (visualization of how much it will cost for what), 2) Clarification of preconditions (specification finality, technical difficulty), 3) Presentation of alternative plans (scope reduction, phased release, quality level adjustment), 4) Comparison with actual values ​​of similar projects, 5) Explanation that \"making it cheaper = cutting something out\". Discounting prices without basis increases the risk of quality deterioration.",
  },
  'brse-est-006': {
    question: "Please estimate (person-days) the following functions: \"User management screen (list display, search, registration, editing, deletion, CSV output)\"",
    answer: "Estimate breakdown (man-days):\\n\\n1. Design process:\\n- Screen design: 2.0 man-days\\n- DB design (table/index): 1.0 man-days\\n- API design: 1.0 man-days\\n\\n2. Development process:\\n- List display (pagination/sorting): 2.0 man-days\\n- Search function (compound condition search): 1.5 man-days\\n- Registration function (validation/confirmation screen): 2.0 man-days\\n- Editing function (obtaining/updating existing data): 1.5 man-days\\n- Deletion function (logical deletion/confirmation dialog): 0.5 man-days\\n- CSV output (format/character code compatible): 1.5 man-days\\n3. Testing process:\\n- Test case creation: 1.5 man-days\\n- Unit testing: 2.0 man-days\\n- Integration testing: 1.5 man-days\\n\\n4. Others:\\n- Code review: 1.0 man-days\\n- BrSE management effort: 1.0 man-days\\n\\nTotal: 20.0 man-days (≒ 1.0 man-months)\\nBuffer (15%): 3.0 man-days\\nFinal estimate: 23.0 man-days (≒ 1.15 man-days)",
    explanation: "When estimating, we tend to think of it as just \"coding,\" but if you include design, testing, review, and management man-hours, the actual man-hours will be 2-3 times more. By subdividing each function, it becomes easier to explain to the client, and it also becomes possible to adjust the scope (such as \"move CSV output to Phase 2\").",
  },
  'brse-est-007': {
    question: "Which is the correct calculation method for the three-point estimation method (three-point estimation)?",
    options: [
    "(best value + worst value) / 2",
    "Expected value = (optimistic value + 4 x most likely value + pessimistic value) / 6 — Based on the PERT method, weighted average is calculated by placing weight 4 on the most possible value",
    "Best value × worst value / most possible value",
    "Average value of 3 estimates"
    ],
    answer: 1,
    explanation: "Three-point estimation (PERT): O=optimistic value (fastest case), M=most possible value (normal case), P=pessimistic value (worst case). Expected value = (O+4M+P)/6, standard deviation = (P-O)/6. Example: If O=5 days, M=8 days, P=17 days, expected value=(5+32+17)/6=9 days. This provides a more realistic number that reflects risk better than a single value estimate.",
  },
  'brse-est-008': {
    question: "We received our first RFP (Request for Proposal) from a new client. Design a process for creating rough estimates. Please also include risk countermeasures at the stage of low accuracy.",
    answer: "Rough estimate process:\\n\\n1. RFP analysis (2-3 days):\\n- Carefully read the RFP and identify requirements\\n- Create a list of unclear points → Ask questions to the client\\n- Refer to past performance data of similar projects\\n- Organize prerequisites (technology stack, environment, constraints)\\n\\n2. Create a rough estimate:\\n- Create a list of functions (large functions → medium function level)\\n- Classify the size of each function as S/M/L/XL\\n- Estimated based on past man-hour results for similar functions (FP method or analogy method)\\n- Add man-hours for testing, management, and environment construction (40-60% of development)\\n- Uncertainty buffer: Providing a range of ±30-50% at the rough estimation stage\\n\\n3. Risk countermeasures (low accuracy stage):\\n- Estimates are presented in \"range\" (e.g. 80-120 man-months) → final estimate after specifications are finalized\\n- Specify preconditions (re-estimate if specifications change)\\n- Staged estimate: re-estimate for Phase 2 and beyond after finalizing Phase 1 (requirements definition)\\n- Includes a list of risk items (technical difficulty level, external collaboration, data migration, etc.)\\n- Set expiration date for the estimate (e.g. valid for 30 days)\\n\\n4. Proposal structure:\\n- Project overview and understanding\\n- Development approach (methods, team structure, communication plan)\\n- Estimate (with breakdown) + Assumptions\\n- Schedule proposal\\n- Risks and countermeasures\\n- Company performance/similar projects",
    explanation: "Since the initial estimate is made with insufficient information, it is important to be honest about the limits of accuracy. By presenting the estimate in terms of width, you can avoid problems that may arise later, such as the estimate differing from the initial estimate. A stepwise estimation approach is recommended, increasing accuracy as specifications become clearer.",
  },
  'brse-est-009': {
    question: "As the lead BrSE, what are the most effective efforts to systematically improve estimation accuracy?",
    options: [
    "Use the same quote template for all projects",
    "Accumulate and analyze “estimate vs. actual” data for past projects and calculate and update estimation coefficients (productivity indicators) for each project type — a data-driven estimation improvement cycle",
    "Fixed to one person in charge of estimating",
    "Always estimate according to the client's budget"
    ],
    answer: 1,
    explanation: "PDCA cycle for improving estimation accuracy: P (planning) estimate creation → D (execution) project implementation → C (confirmation) analysis of differences between actual data and estimates → A (improvement) updating estimation coefficients. For example: If we have data that says ''CRUD screens on e-commerce sites average 2.5 person-days/screen'', the following estimate will have a strong basis. This accumulation becomes the estimating power of the organization.",
  },
  'brse-est-010': {
    question: "What is the \"Cone of Uncertainty\" in software estimation?",
    options: [
    "A graphic showing how uncertainty increases as a project nears completion",
    "A graphic showing how estimation accuracy improves over time as more project details are known",
    "A list of things that can go wrong in a project",
    "A method for calculating server costs",
    ""
    ],
    answer: 1,
    explanation: "At the start of a project, the range of possible outcomes is huge. As research and development progress, the \"cone\" narrows, and estimates become more precise. BrSEs should never give \"fixed\" estimates based on vague requirements.",
  },
  'brse-est-011': {
    question: "How do you handle \"Padding\" in estimations from your development team?",
    options: [
    "Cut all estimates in half to remove the padding",
    "Understand the reasons (risks",
    "uncertainty",
    "lack of skill) and negotiate a transparent buffer rather than hidden padding",
    "Add even more padding yourself just in case",
    "Complain to the client about the team",
    ""
    ],
    answer: 1,
    explanation: "Padding is often a response to fear or uncertainty. A good BrSE works with the team to identify specific risks and includes them in a visible \"Risk Buffer\" that is shared with the client.",
  },
  'brse-est-012': {
    question: "What is \"Three-Point Estimation\" (PERT)?",
    options: [
    "Getting estimates from three different people",
    "Calculating an estimate based on Optimistic (O)",
    "Most Likely (M)",
    "and Pessimistic (P) scenarios",
    "Estimating the time",
    "cost",
    "and quality",
    "A method using three different programming languages",
    ""
    ],
    answer: 1,
    explanation: "The PERT formula (O + 4M + P) / 6 provides a weighted average that accounts for both the \"best case\" and \"worst case\" scenarios, offering a more realistic estimate than a single number.",
  },
  'brse-est-013': {
    question: "What is \"Parkinson\\'s Law\" and how does it affect project deadlines?",
    options: [
    "A law about database index performance",
    "The principle that \"work expands so as to fill the time available for its completion\"",
    "A rule about the number of bugs per kiloline of code",
    "The law of diminishing returns in software testing",
    ""
    ],
    answer: 1,
    explanation: "If you give a team 1 month for a 2-week task, they will likely take the full month. BrSEs must set realistic but challenging deadlines to maintain momentum while avoiding burnout.",
  },
  'brse-est-014': {
    question: "Analogous estimation (using historical data from similar projects) is generally more accurate than Bottom-Up estimation.",
    answer: "False",
    explanation: "Bottom-Up estimation (breaking tasks down to the smallest level) is more time-consuming but typically much more accurate than Analogous estimation, which is high-level and relies on similarity.",
  },
  'brse-est-015': {
    question: "What is \"Function Point Analysis\" (FPA)?",
    options: [
    "A way to count the number of functions in a file",
    "A standardized method for measuring the functional size of software from a user\\'s perspective",
    "independent of technology",
    "A method for estimating server RAM usage",
    "A type of performance testing",
    ""
    ],
    answer: 1,
    explanation: "FPA focuses on \"what\" the software does (Inputs, Outputs, Inquiries, Files, Interfaces). It is highly respected by Japanese clients as a more objective measure than \"Story Points\" or \"Lines of Code\".",
  },
  'brse-est-016': {
    question: "What is the \"Wideband Delphi\" technique?",
    options: [
    "A high-speed internet connection",
    "A consensus-based estimation technique where a panel of experts provides anonymous estimates and then discusses them in several rounds until they converge",
    "A method for designing database tables",
    "A software used for project scheduling",
    ""
    ],
    answer: 1,
    explanation: "Wideband Delphi avoids \"Groupthink\" or being intimidated by a loud senior developer. Each person thinks independently before sharing, leading to more robust estimates.",
  },
  'brse-est-017': {
    question: "Why is the unit \"Person-Month\" (Man-Month) often criticized in project management?",
    options: [
    "Because it\\'s too expensive",
    "Because it assumes that people and months are interchangeable (e.g.",
    "that 10 people can do a 10-month task in 1 month)",
    "which is often false due to communication overhead",
    "Because it\\'s an old-fashioned term",
    "Because it doesn\\'t include weekends",
    ""
    ],
    answer: 1,
    explanation: "Brooks\\' Law states: \"Adding manpower to a late software project makes it later.\" Communication overhead grows exponentially as more people are added, meaning \"Person-Months\" can be misleading.",
  },
  'brse-est-018': {
    question: "What is \"Critical Chain Project Management\" (CCPM) and its approach to buffers?",
    options: [
    "Putting a buffer at the end of every task",
    "Moving individual task buffers to the end of a sequence of tasks (Project Buffer) or where a non-critical chain joins the critical chain (Feeding Buffer)",
    "Removing all buffers to work faster",
    "A specific type of Gantt chart",
    ""
    ],
    answer: 1,
    explanation: "By pooling buffers, CCPM protects the whole project against uncertainty more effectively than individual task \"padding",
  },
  'brse-ik-001': {
    question: "What is the difference between \"front end\" and \"back end\"?",
    options: [
    "The front end is the entrance to your company, the back end is the back door.",
    "The front end is the screen side that the user sees and operates (HTML/CSS/JavaScript), and the back end is the server side processing (API, DB, business logic).",
    "Design the front end, implement the back end",
    "New features on the front end, old features on the back end"
    ],
    answer: 1,
    explanation: "Front-end (FE): User interface, runs in the browser, Technology: HTML/CSS/JS, React/Vue/Angular. Backend (BE): Server-side processing, API provision, database operations, Technology: Java/PHP/Python/Node.js. BrSE needs to clarify the division of roles between FE and BE when communicating specifications.",
  },
  'brse-ik-002': {
    question: "What is Git? How does it relate to your work at BrSE?",
    options: [
    "project management tools",
    "Source code version control system — Manage the history of code changes and enable parallel work in team development. BrSE needs to understand branch strategy and release management",
    "text editor",
    "translation tools"
    ],
    answer: 1,
    explanation: "Basic concepts of Git: 1. Repository (code storage), 2. Branch (branching for parallel development), 3. Commit (recording changes), 4. Merging (integrating branches), 5. Pull request (requesting a review). As a BrSE: Release branch management, understanding branch strategy (Git Flow, etc.), and code management for each environment are required.",
  },
  'brse-ik-003': {
    question: "CI/CD (continuous integration/continuous delivery) only needs to be understood by developers and is not relevant to BrSE.",
    answer: "False",
    explanation: "CI/CD is also important for BrSE. CI (continuous integration): Automatically build and test when code is changed → Early detection of bugs. CD (continuous delivery): Automatic staging/production implementation after passing the test. As a BrSE: 1) Utilize CI results as quality indicators, 2) Manage release cycles, 3) Explain deployment plans to clients.",
  },
  'brse-ik-004': {
    question: "Which of the following is the correct correspondence between the HTTP methods used in REST API design and their uses?",
    options: [
    "GET=update, POST=get, PUT=delete, DELETE=create",
    "GET=data acquisition, POST=data creation, PUT=data update, DELETE=data deletion",
    "All can be done using POST",
    "The method is not important; all you need to decide is the URL."
    ],
    answer: 1,
    explanation: "Basics of RESTful API design: GET (retrieval, idempotent), POST (creation), PUT (full update), PATCH (partial update), DELETE (delete). BrSE must understand the API design in the specification and communicate it to the development team. It is also important to have the ability to read the JSON structure of API requests/responses.",
  },
  'brse-ik-005': {
    question: "What is \"microservices architecture\"? Why should BrSE know?",
    options: [
    "Develop in a small team",
    "An architecture in which a large system is developed and deployed by dividing it into small, independent services — BrSE needs to manage each service's scope of responsibility and inter-service communication (API) using specifications.",
    "Develop only with free and open source",
    "Skip the test and get it out quickly"
    ],
    answer: 1,
    explanation: "Characteristics of microservices: ① Each service can be deployed independently, ② Services communicate using API (REST/gRPC), ③ Technology stack can be selected for each service, ④ Services are “owned” by the team. Impact on BrSE: Specifications will be separated by service, API contract management will become important, and integration testing will become more important.",
  },
  'brse-ik-006': {
    question: "What is the difference between cloud services \"IaaS\", \"PaaS\", and \"SaaS\"?",
    options: [
    "All the same cloud services",
    "IaaS (infrastructure provision: virtual servers, etc.), PaaS (platform provision: application execution environment), SaaS (application provision: ready-to-use software)—Different scopes of responsibility",
    "Differences in service size",
    "Only difference in price"
    ],
    answer: 1,
    explanation: "Three layers of cloud: ①IaaS (AWS EC2, etc.): Provides a server and network, and manages everything above the OS yourself ②PaaS (Heroku, GAE, etc.): Provides an application execution environment, no infrastructure management required ③SaaS (Salesforce, Google Workspace, etc.): Use the app as is. BrSE must understand the client's infrastructure environment and communicate the environment specifications to the development team.",
  },
  'brse-ik-007': {
    question: "If a Japanese client requests \"Please report on security measures,\" which items should BrSE report?",
    options: [
    "Answer \"Security is fine\"",
    "① Measures status for OWASP Top 10 ② Authentication/authorization mechanism ③ Data encryption (communication: TLS, storage: AES) ④ Vulnerability scan results ⑤ Access log management ⑥ Security patch application status — Systematic reporting of specific technical measures",
    "Just report that you have virus software installed",
    "Report only password length"
    ],
    answer: 1,
    explanation: "Security is a non-functional requirement that Japanese clients (especially financial and medical) place the highest importance on. BrSE: Must have a basic understanding of OWASP Top 10 (SQL injection, XSS, etc.), an overview of authentication methods (OAuth2.0, JWT), types of encryption (common key AES/public key RSA/hash SHA), an overview of ISMS/ISMS guidelines, and be able to report to give clients peace of mind.",
  },
  'brse-ik-008': {
    question: "As a BrSE, please design a presentation structure when proposing migration to a new technology stack (e.g. React → Next.js, MySQL → PostgreSQL) to a client.",
    answer: "Technology migration proposal presentation:\\n\\n1. Current issues (Why):\\n- Specific limitations and problems of the current technology stack\\n- Shown with data: performance problems, increased maintenance costs, security vulnerabilities\\n- Risks of \"as is\" (end of technical support, difficulty in recruiting human resources, etc.)\\n\\n2. Proposed technology (What):\\n- Overview of the new technology (briefly and with technical terms)\\n- Adoption history (which companies/projects are using it)\\n- Comparison chart with existing technologies (performance, maintainability, learning cost)\\n3. Migration plan (How):\\n- Phased migration approach (step by step, not a big bang)\\n- Phase 1: Proof of Concept — Validate with small functionality (2-4 weeks)\\n- Phase 2: Pilot migration — Migrate one module (1-2 months)\\n- Phase 3: Full-scale migration — migrate the rest in stages\\n- Securing a parallel operation period\\n\\n4. Costs & Returns:\\n- Migration costs (man-hours, licenses, learning costs)\\n- Expected effects (improved performance, reduced maintenance costs, improved development efficiency)\\n- ROI estimation (recovery period)\\n5. Risks and countermeasures:\\n- Technology risks → Verification with PoC\\n- Team learning risks → Step-by-step training\\n- Migration failure risk → Rollback plan",
    explanation: "What clients want to hear is not ''technical details,'' but ''why are we changing, how much will it cost, and are there any risks?'' The value of BrSE is to translate explanations for engineers into business language and make proposals. The phased approach is consistent with the \"risk-averse\" culture of Japanese clients.",
  },
  'brse-ik-009': {
    question: "As a lead BrSE, which of the following is the most effective initiative to improve the IT technical knowledge of the entire team?",
    options: [
    "Require everyone to obtain IT qualifications",
    "① Monthly technology study sessions (sharing the latest technology trends) ② Formulation and updating of technology radar (evaluation and classification of adopted technologies) ③ Technology PoC culture (mechanism to test new technologies on a small scale) ④ In-house wiki that systematizes learning through actual projects — creating a system for a “learning organization”",
    "Invite external instructors every month",
    "Distribute technical books to everyone"
    ],
    answer: 1,
    explanation: "''Systemization'' is the key to raising the level of technical knowledge. ①Study session: Members take turns presenting (output is the best learning), ②Technology radar: Categorizing technologies by Adopt/Trial/Assess/Hold (not recommended), ③PoC: Practical learning with a culture of \"trying\", ④Wiki: Converting tacit knowledge to explicit knowledge. Rather than relying on individual self-improvement, we create a system for learning as an organization.",
  },
  'brse-jbc-001': {
    question: "What is the correct way to use \"Thank you for your hard work\" in a business email?",
    options: [
    "Used as a greeting to customers outside the company",
    "Used as a greeting to colleagues and superiors within the company (use ''Thank you for your help'' outside the company)",
    "Use as a self-introduction to someone you are meeting for the first time",
    "use as email subject",
    ""
    ],
    answer: 1,
    explanation: "\"Thank you for your hard work\" is a greeting for internal use. For customers outside the company, we use \"Thank you for your help\" and \"Thank you for your continued support.\" \"Thank you for your hard work\" is an expression used between superiors and subordinates, so be careful not to use it with your superiors.",
  },
  'brse-jbc-002': {
    question: "In Japanese business emails, it is okay to omit the subject line.",
    answer: "False",
    explanation: "Be sure to write the subject line. In Japanese business email, it is good manners to make the subject line clear of the content. For example: \"[Confirmation] 〇〇Project Progress Report (March)\", categorize by [] and write the specific content. Emails without a subject line can also be mistaken for spam.",
  },
  'brse-jbc-003': {
    question: "What is the correct expression to use when addressing the phone and identifying your company?",
    options: [
    "“This is Tanak from 〇〇 Co., Ltd.”",
    "\"I'm Tanak, I'm from 〇〇 company.\"",
    "“This is Mr. Tanak from 〇〇 company.”",
    "“My name is Tanak” (no company name)",
    ""
    ],
    answer: 0,
    explanation: "When you call, say ''This is 〇〇 from 〇〇 Co., Ltd.'' and give your company name + name. I don't use \"san\" for myself. ''Maimasu'' is a polite expression of ''desu.'' When calling from outside, the basic message is \"Thank you for calling. This is 〇〇 from 〇〇 Co., Ltd.\".",
  },
  'brse-jbc-004': {
    question: "What is the difference between \"I understand\" and \"I understand\"?",
    options: [
    "They have the same meaning, so it doesn't matter which one you use.",
    "\"I understand\" is a polite expression used for bosses and customers, and \"I understand\" is a casual expression used for colleagues and subordinates.",
    "\"I understand\" is a more polite expression.",
    "\"I understand\" can only be used in written form.",
    ""
    ],
    answer: 1,
    explanation: "\"I understand\" is the most polite expression, including humility, and is appropriate for customers and superiors. \"I understand\" is less polite and may be rude to your boss or customers. Stages: I understand (most polite) > I understand > I understand > I understand (casual)",
  },
  'brse-jbc-005': {
    question: "When someone says, \"Yes, we will consider it,\" at a meeting in Japan, what does that really mean?",
    options: [
    "Meaning to consider positively",
    "More likely to be an indirect refusal — Japanese business culture tends to avoid a direct “no.”",
    "means immediate approval",
    "It only means to consult someone else",
    ""
    ],
    answer: 1,
    explanation: "In Japanese business communication, it is important to \"read the atmosphere\". ''I'll consider it,'' ''It's difficult,'' and ''I'll give it a positive consideration'' often mean an indirect refusal. As a BrSE, it is important to understand the client's true intentions and accurately convey them to the Vietnamese team. It is effective to specifically ask, ''When can you respond by?''",
  },
  'brse-jbc-006': {
    question: "Which is the most appropriate structure for an apology email to a Japanese client?",
    options: [
    "Cause explanation → Apology → Countermeasures",
    "Apology → Cause explanation → Countermeasures → Measures to prevent recurrence → Apology again",
    "Countermeasure → Cause → Apology",
    "Apology only (no details needed)",
    ""
    ],
    answer: 1,
    explanation: "In Japanese business, an apology comes first, and it consists of: ① First, an apology (''We apologize for the inconvenience this time caused.'') ② Explanation of the cause (facts, not excuses) ③ Temporary measures (immediate action taken) ④ Permanent measures (measures to prevent recurrence) ⑤ Apology again and future determination. This structure is most effective in restoring trust.",
  },
  'brse-jbc-007': {
    question: "Which kind of honorific language is used for \"estimate\", \"proposal\", and \"meeting\"?",
    options: [
    "humble language — understate one's actions",
    "Polite language — make the ending polite",
    "Honorific language - Expressing respect for someone's actions \"o/go\" + noun is also used as a beautifying word",
    "Normal expressions that are not particularly honorific expressions",
    ""
    ],
    answer: 2,
    explanation: "The usage of adding ''o'' and ''go'' to nouns is classified as bikago (a type of polite language). In ''I will send you a quote,'' ''quote'' is a beautiful word, and ''I will send it to you'' is a humble word. Correct use of honorific language: Understanding honorific language (for the other person's actions), kenjogo (for one's own actions), and polite language (''desu'' and ''masu'') is essential for BrSE.",
  },
  'brse-jbc-008': {
    question: "Please write the subject line and opening line of a business email reporting delivery delays to a Japanese client.",
    answer: "Subject: [Report] 〇〇Project Request for change in delivery schedule\\n\\n〇〇 Co., Ltd.\\n〇〇 Department Mr. 〇〇\\n\\nThank you for your continued support. \\nThis is 〇〇 from △△ Co., Ltd. \\n\\nWe have a report regarding the 〇〇 project. \\nWe apologize for the inconvenience, but there is expected to be a delay of 3 business days from the originally scheduled delivery date (March 15th). \\n\\n■ Cause of delay\\nDuring the integration test for 〇〇 function, a defect related to 〇〇 was discovered.\\nIt is taking more time than expected to fix and retest. \\n\\n■ New estimated delivery date\\nWednesday, March 18, 2026\\n\\n■ Countermeasures\\n・Accelerated response by increasing the number of development team members (adding 2 people)\\n・Shortening the schedule by conducting tests in parallel.\\n\\nWe once again apologize for the inconvenience. \\nWe will strive to improve our processes to prevent this from happening in the future. \\n\\nThank you for your understanding.",
    explanation: "Structure of this email: ① Make the content clear in the subject line (make it clear that it is bad news) ② Official address and greeting ③ Report the problem ④ Explanation of the cause (be specific and concise) ⑤ New deadline ⑥ Countermeasures (specific actions) ⑦ Apology and determination to prevent recurrence. As a BrSE, the key to maintaining trust is to show \"transparency\" and \"concrete measures\" when reporting bad news.",
  },
  'brse-jbc-009': {
    question: "What are the most important communication skills for a BrSE in specification confirmation meetings with Japanese clients?",
    options: [
    "speak with perfect Japanese grammar",
    "Ability to ask questions to clarify ambiguous expressions while taking minutes - ability to ask questions such as \"What exactly does 〇〇 mean?\" and \"Can you give me an example?\"",
    "Being able to tell jokes in Japanese",
    "speak a lot during a meeting",
    ""
    ],
    answer: 1,
    explanation: "The most important skill for BrSE is the ability to ask questions that eliminate ambiguity. Japanese clients often communicate specifications implicitly, using vague expressions such as \"in a good way,\" \"appropriately,\" and \"in a common way.\" BrSE requires: 1) eliciting specific numbers and examples, 2) visually confirming with diagrams and mockups, and 3) documenting the confirmation details in minutes and obtaining approval.",
  },
  'brse-jbc-010': {
    question: "Design a communication plan between the Japanese client and the Vietnamese development team. Please consider time differences, language, and cultural differences when creating your BrSE plan.",
    answer: "Communication plan:\\n\\n1. Regular meeting structure:\\n- Morning meeting (9:00 Japan time = 7:00 Vietnam time): 15 minutes, Japanese, facilitated by BrSE\\n- Weekly report meeting (Friday 16:00 JST): 30 minutes, Japanese, progress/issues/next week's schedule\\n- Monthly report meeting (Friday of the end of the month 15:00 JST): 1 hour, Japanese, KPIs, risks, and improvement suggestions\\n\\n2. Daily communication:\\n- Slack/Teams: Japanese channel (for clients) + Vietnamese channel (for internal use)\\n- BrSE monitors both channels, translating and bridging\\n- Questions will be answered within 24 hours (considering time differences)\\n- In case of emergency: phone → email → chat priority\\n\\n3. Document management:\\n- Specifications: Original Japanese → Translated/summarized by BrSE into Vietnamese\\n- Design document: Created in Vietnamese → Translated by BrSE for Japanese review\\n- Minutes: Created in Japanese by BrSE, approved by client\\n- Quality report: Standardized using Japanese template\\n\\n4. Cultural gap response:\\n- Vietnamese side: Confirm even if you say there is no problem (sometimes you hesitate to report due to culture of face)\\n- Japanese side: Make ambiguous expressions concrete and then convey them to the Vietnamese side.\\n- Escalation: Thorough rules to report problems to BrSE as soon as possible\\n\\n5. Tools:\\n- Project management: Jira/Redmine (bilingual setting)\\n- Documentation: Confluence\\n- Communication: Slack + Zoom\\n- Translation support: Utilization of AI translation (DeepL) with review",
    explanation: "BrSE's communication plan must simultaneously solve three issues: language (bridging Japanese ⇔ Vietnamese), time difference (effective use of overlapping time), and culture (Japan's indirect communication ⇔ Vietnam's face-to-face culture). It is important to set regular meeting times, manage the language of documents, and take concrete measures to address cultural gaps.",
  },
  'brse-jbc-011': {
    question: "How should BrSE respond if a Japanese client says, \"That's a bit tough?\"",
    options: [
    "Just tell the Vietnamese side that it's a little difficult.",
    "It essentially means \"It's impossible/unacceptable,\" so dig deeper to find out what the problem is and suggest an alternative.",
    "Reply with “I’ll do my best” and proceed.",
    "Change to another topic and check later",
    ""
    ],
    answer: 1,
    explanation: "\"It's a little harsh\" is a Japanese euphemism that often means \"impossible/unacceptable.\" As a BrSE: ① Investigate in detail, ''Which part is specifically difficult?'' ② Prepare an alternative plan, ③ Accurately convey the substantive meaning (NO) to the Vietnamese side without translating the nuances. Literal translations are misleading.",
  },
  'brse-jbc-012': {
    question: "As a lead BrSE, you will design a Japanese business communication training program for new junior BrSEs. Please include a 3 month training plan.",
    answer: "Junior BrSE training program (3 months):\\n\\nMonth 1: Basic skills development\\n- Week 1-2: Business Japanese basics (honorific language system: distinguishing between respectful, humble, and polite language)\\n- Week 2: Business email writing (standard sentences, how to write subject lines, CC/BCC rules)\\n- Week 3: Telephone response basics (role-play practice for receiving and calling calls)\\n- Week 4: Minutes writing practice (attend senior BrSE's meetings and write minutes, corrective feedback)\\n- Evaluation: Create 10 business emails → senior review\\n\\nMonth 2: Practical skill development\\n- Week 5-6: Simulation of specification confirmation meeting (senior BrSE plays the role of a Japanese person, practice using ambiguous expressions)\\n- Week 7: How to write trouble report/apology emails (practice based on actual past cases)\\n- Week 8: Practice writing customer reports (weekly/monthly reports)\\n- OJT: Attend senior BrSE meetings, prepare questions → Actual role of asking 1-2 questions\\n- Evaluation: Specification confirmation role-play test (can you extract specific specifications from ambiguous requests?)\\n\\nMonth 3: Development of applied skills\\n- Week 9-10: Practice of estimate reporting and schedule negotiation\\n- Week 11: Complaint handling simulation (ability to respond in difficult situations)\\n- Week 12: Actual client support on a small project (backed up by a senior)\\n- Final evaluation: Mock project presentation (15 minutes of project report presentation in Japanese)\\n\\nContinuous learning:\\n- Support for obtaining JLPT N2 or higher\\n- Monthly BrSE study sessions (case study sharing)\\n- Regular sharing of client satisfaction feedback\\n- Mentoring system (pairing with senior BrSE)",
    explanation: "BrSE's Japanese communication skills cannot be acquired through classroom lectures alone. We will develop you in stages: basics (honorific language/email) → practice (meeting simulation) → application (actual client handling). In particular, role play (handling ambiguous Japanese expressions) and OJT (attending an actual meeting) are the most effective. After 3 months, I aim to reach a level where I can deal with clients independently.",
  },
  'brse-jbc-013': {
    question: "Which communication failure should BrSE most avoid when building relationships with Japanese clients?",
    options: [
    "Not being able to use honorific language perfectly",
    "Hiding problems or reporting them late — In Japanese business, ''horenso'' (reporting, communication, and consultation) is the basis of trust, and early reporting of bad news is most important.",
    "Japanese accent is not perfect",
    "Not speaking much at meetings",
    ""
    ],
    answer: 1,
    explanation: "What is most disliked in Japanese business culture is ''covering up problems'' and ''delaying reporting.'' Mistakes in honorific language are acceptable, but ''I knew about it but didn't report it'' completely loses credibility. Horenso's principles: (1) Report bad news quickly; (2) Reports consist of facts → impacts → countermeasures; and (3) It's better to share quickly, even if you preface it with \"We're still confirming it.\"",
  },
  'brse-jbc-014': {
    question: "When receiving instructions from your boss, which is the most appropriate response when you don't understand the instructions because they are vague?",
    options: [
    "Think for yourself and proceed in a way that seems good.",
    "Directly say, \"I don't understand what you mean.\"",
    "Confirm by rephrasing it in your own words, “From my understanding, does that mean 〇〇?”",
    "Continue listening without saying anything until the instructions are finished."
    ],
    answer: 2,
    explanation: "Leaving vague instructions will result in major rework later. A golden rule of business is to preface the request with, \"I'm sorry, but may I ask if you would like to confirm?\" and then paraphrase and confirm.",
  },
  'brse-jbc-015': {
    question: "When I'm having a Zoom meeting with a client, what's the etiquette way to tell someone that their voice is too low to hear?",
    options: [
    "Say, \"Your voice is low. Please speak louder.\"",
    "Politely say, ''I'm sorry, but it seems like your phone is a little far away, but may I call you again?''",
    "I pretend to hear and keep nodding.",
    "Just send \"I can't hear\" in chat"
    ],
    answer: 1,
    explanation: "The expression \"the audio is far away\" is a polite expression that includes the nuance of blaming the system rather than the other party. In business, it is important not to \"interrupt\" the other person's conversation, but to reconfirm the situation with good manners.",
  },
  'brse-jbc-016': {
    question: "Which is the most inappropriate timing to \"consult\" on \"Spinach\"?",
    options: [
    "Think of some solutions on your own before consulting.",
    "Consult with us when you can predict that a problem is likely to occur.",
    "Ask for advice when you realize that you cannot solve the problem on your own and a long time has passed since you have reached an impasse.",
    "Find a time when your boss is not busy and consult with him."
    ],
    answer: 2,
    explanation: "Delays in consultation directly lead to delays in the entire project. It is important to have a rule within yourself: ''Do a little research and if you don't understand something, ask immediately.'' In particular, BrSE acts as a bridge, so information stagnation is fatal.",
  },
  'brse-jbc-017': {
    question: "The client added the requirements verbally. Which of the following is an appropriate response on the spot?",
    options: [
    "Immediately reply, \"Okay, I'll do it.\"",
    "Say, \"I understand. Just to be safe, I will organize the current content and send it to you as evidence (minutes) by email,\" and try to prevent misunderstandings.",
    "Immediately refuse, saying, “I can’t do that because it’s not part of the contract.”",
    "Contact your development team immediately to start implementation"
    ],
    answer: 1,
    explanation: "Verbal agreements are a source of trouble later on. You must get into the habit of leaving BrSE in \"letters (evidence)\". This prevents scope creep and clarifies where responsibility lies.",
  },
  'brse-jbc-018': {
    question: "Please suggest a communication plan to overcome the situation in which the Japanese client is very strict about quality and doubts the management ability of the Vietnamese side due to a single small bug.",
    answer: "A plan to overcome the situation:\\n1. Data visualization: Graph historical bug rates, test density, and coverage to logically explain the quality control process. \\n2. Thorough double check: Introducing a final inspection process by Japanese leaders (BrSE, etc.). \\n3. Transparency in reporting: The process of not only ''found bugs'' but also ''how we tested and found none'' is made public. \\n4. Mutual understanding session: Hosted a web conference to share the quality standards of the Japanese side with all engineers on the Vietnamese side.",
    explanation: "Emotional mistrust can only be resolved through logic (data) and thorough processes (visualization). BrSE will play the role of converting \"anxiety\" on the Japanese side into \"concrete actions\" on the Vietnamese side.",
  },
  'brse-jbc-019': {
    question: "When sending a business email, you must include everyone's name in the body of the email, even if they are in CC.",
    answer: "False",
    explanation: "In the body of the email, you should basically only write the \"TO\" person. CC people don't write their names, but they recognize who is in CC. When sending an email to a business partner and designating everyone involved as TO, it is common to arrange them in order of job title.",
  },
  'brse-jbc-020': {
    question: "Which is the correct way to use the honorifics \"Onsha\" and \"Kisha\"?",
    options: [
    "Your company is the written word, your company is the spoken word.",
    "Your company is the spoken word, your company is the written word",
    "both can be used the same way",
    "Your company uses it for your colleagues, your company uses it for your customers."
    ],
    answer: 1,
    explanation: "Japanese business etiquette is to use \"Gosha\" when talking about interviews or meetings, and \"Gosha\" when writing emails or proposals. As a BrSE, I often write emails, so knowing how to use \"your company\" is essential.",
  },
  'brse-jbc-022': {
    question: "How should a BrSE behave if there is silence during a meeting with Japanese people?",
    options: [
    "I can't stand the silence and keep talking",
    "Understand that the other person is thinking about it, wait a few seconds to more than 10 seconds, and then gently ask, ''Do you have any concerns?''",
    "Force end the meeting",
    "I keep waiting for several minutes without saying anything."
    ],
    answer: 1,
    explanation: "Silence in Japanese meetings is often a period of ''thinking'' or ''choosing words.'' Talking too much one-sidedly is counterproductive. You will be expected to read the appropriate \"pauses\" and facilitate as necessary.",
  },
  'brse-jbc-023': {
    question: "The Vietnamese team says \"Yes,\" but I feel like they don't really understand. As a BrSE, please create a system to eliminate this \"hidden NO\" (pretending to understand).",
    answer: "How to solve it:\\n1. Comprehension quiz: After the instructions, ask for the output, ''Please summarize and explain the content in 5 minutes.'' \\n2. 5-minute Q&A: At the end of the meeting, make it a rule to ask, ''What seems to be the most difficult part?'' instead of ''Are there any questions?'' \\n3. Breakdown into WBS: Break down the instructions into tasks immediately and measure the level of understanding based on that resolution. \\n4. Ensuring psychological safety: Ensuring a code of conduct that says ''saying you don't know is not shameful, but risk avoidance.''",
    explanation: "Cultural “yes” is the biggest enemy of offshore development. The role of the Lead BrSE is to introduce a process that objectively measures the other party's level of understanding through a system, rather than just checking.",
  },
  'brse-jbc-024': {
    question: "When a Japanese client says \"Kento-shimasu\" (consider), what does it usually mean?",
    options: [
    "They have decided to buy immediately",
    "They will consider/review it (often a polite way of saying \"not right now\" or \"it\\'s difficult\")",
    "They want a discount",
    "The meeting is over",
    ""
    ],
    answer: 1,
    explanation: "Understanding the nuance of \"Kento-shimasu\" is vital for BrSEs. It doesn\\'t always mean \"we will definitely do it.\" It often requires follow-up to understand the true level of interest or the specific concerns.",
  },
  'brse-jbc-025': {
    question: "What is the \"Ringi\" system in Japanese companies?",
    options: [
    "A type of traditional dance",
    "A bottom-up decision-making process where a proposal is circulated for formal approval/seals (Hanko)",
    "A code review tool",
    "A marketing strategy",
    ""
    ],
    answer: 1,
    explanation: "The Ringi-sho (proposal document) passes through various levels of management for approval. BrSEs need patience as this process can take time, but once approved, implementation usually moves fast.",
  },
  'brse-jbc-026': {
    question: "When receiving a business card (Meishi) from a Japanese client, what is the WRONG thing to do?",
    options: [
    "Accept it with both hands",
    "Put it in your pocket immediately after glance",
    "Place it on the table in front of you during the meeting",
    "Read the name and title aloud to confirm",
    ""
    ],
    answer: 1,
    explanation: "Putting a business card away immediately is considered disrespectful. You should treat it with care, examine it, and keep it on the table during the meeting to remember the person\\'s name and role.",
  },
  'brse-jbc-027': {
    question: "What is the concept of \"Omotenashi\" in the context of BrSE service quality?",
    options: [
    "Being very aggressive in sales",
    "Anticipating the client\\'s needs and providing hospitality/service without being asked",
    "Using a lot of technical jargon",
    "Finishing tasks exactly on the deadline and no earlier",
    ""
    ],
    answer: 1,
    explanation: "In a professional context, Omotenashi means being proactive — for example, proposing a performance fix before the client even notices the lag. It\\'s about building deep trust through high quality.",
  },
  'brse-jbc-028': {
    question: "In a meeting room, the person with the highest rank should sit closest to the door (Shimoza).",
    answer: "False",
    explanation: "The person with the highest rank (Kamiza) sits furthest from the door, usually in the most comfortable seat. The \"Shimoza\" (lower seat) closest to the door is for the most junior/serving members.",
  },
  'brse-jbc-029': {
    question: "Which Keigo category is used to lower yourself or your own group to show respect to the listener?",
    options: [
    "Sonkeigo (Respectful)",
    "Kenjougo (Humble)",
    "Teineigo (Polite)",
    "Meishi (Noun)",
    ""
    ],
    answer: 1,
    explanation: "Kenjougo (e.g., \"Moushimasu\" instead of \"Iimasu\") is used when the BrSE talks about their own team\\'s actions to the client. Using Sonkeigo for yourself is a major mistake.",
  },
  'brse-jbc-030': {
    question: "When answering a phone call and keeping the client waiting, what is the appropriate phrase to say when you return to the line?",
    options: [
    "Moshi moshi",
    "Omatase-itashimashita (Thank you for waiting)",
    "Nan desu ka?",
    "Chotto matte kudasai",
    ""
    ],
    answer: 1,
    explanation: "Even if the wait was short, \"Omatase-itashimashita\" is standard etiquette. \"Moshi moshi\" is generally avoided in professional business calls when answering.",
  },
  'brse-jbc-031': {
    question: "In a business email to someone you haven\\'t contacted in a long time, what is a standard opening phrase?",
    options: [
    "Ohayou gozaimasu",
    "Gobusata-shite-orimasu (I apologize for the long silence)",
    "Ogenki desu ka?",
    "Hisashiburi!",
    ""
    ],
    answer: 1,
    explanation: "\"Gobusata-shite-orimasu\" is a formal way to acknowledge a lapse in communication. It shows the BrSE respects the relationship history.",
  },
  'brse-jbc-032': {
    question: "When visiting a Japanese client\\'s office for the first time, what is the standard practice regarding \"Omiyage\" (souvenirs)?",
    options: [
    "Don\\'t bring anything",
    "it\\'s seen as a bribe",
    "Bringing a small",
    "nicely wrapped gift (usually food from your region) is a common way to build goodwill",
    "Bring a very expensive personal gift for the CEO",
    "Bring a gift and open it yourself in front of them",
    ""
    ],
    answer: 1,
    explanation: "Omiyage is about relationship building, not bribery. It should be something the whole office can share (like individually wrapped cookies) and should be presented with a humble phrase like \"Tsumaranai mono desu ga...\".",
  },
  'brse-jbc-033': {
    question: "In a standard 4-seater taxi with a Japanese client, where is the \"Kamiza\" (most honorable seat)?",
    options: [
    "The front passenger seat next to the driver",
    "The rear seat behind the driver",
    "The rear seat behind the front passenger",
    "The middle of the rear seat",
    ""
    ],
    answer: 1,
    explanation: "In a car, the seat directly behind the driver is the highest honor. The BrSE should usually sit in the front passenger seat to handle directions or payments.",
  },
  'brse-jc-001': {
    question: "Which of the following is the correct meaning of \"Horensou\"?",
    options: [
    "Japanese vegetable names",
    "Reporting, communication, and consultation — basic communication principles in Japanese business",
    "Japanese accounting procedures",
    "Japanese quality control method",
    ""
    ],
    answer: 1,
    explanation: "Horenso is one of the most important principles in Japanese business. Reporting (telling the government the results), communication (sharing information with related parties), and consultation (asking for advice when you have a problem or are unsure of a decision). Especially in offshore development, the lack of communication leads to client anxiety. The golden rule is to report bad news as soon as possible.",
  },
  'brse-jc-002': {
    question: "When exchanging business cards in Japan, it is okay to put the other person's business card in your pocket immediately after receiving it.",
    answer: "False",
    explanation: "A business card is considered to be a person's alter ego. Correct manners: 1) Accept the card with both hands, 2) Say \"Thank you, please,\" 3) Place the business card you received on the table to your left when looking at it (during a meeting), and 4) Place it in the business card holder after the interview. It is also not acceptable to place objects or write notes on business cards.",
  },
  'brse-jc-003': {
    question: "What is \"nemawashi\" in Japanese business?",
    options: [
    "Preparing meeting minutes",
    "Informally consult with stakeholders to obtain agreement and understanding before formal meetings.",
    "Creating a project estimate",
    "Evaluating team members",
    ""
    ],
    answer: 1,
    explanation: "Nemawashi is an important concept in Japanese business culture. If you make a new proposal ''out of the blue'' in a formal meeting, stakeholders may object. By giving individual explanations, listening to opinions, and making necessary adjustments in advance, it will be easier to reach an agreement at the meeting. As a BrSE, it is effective to do some research before making a proposal to the Japanese side.",
  },
  'brse-jc-004': {
    question: "What are the typical problems that Japan's \"reading the air\" culture causes in offshore development?",
    options: [
    "Development speed slows down",
    "Discrepancies in the recognition of specifications occur because clients do not explicitly convey what they implicitly expect — BrSE plays the role of converting tacit knowledge into explicit knowledge",
    "Team atmosphere deteriorates",
    "Translation costs increase",
    ""
    ],
    answer: 1,
    explanation: "Japanese clients sometimes communicate with the assumption that they will understand without you having to say it. Examples: \"Please make it look nice\", \"This is how it would normally be\". However, the Vietnamese side tends to implement \"just what they are told\". A key role of BrSE is to bridge this cultural gap — documenting implicit expectations into concrete specifications.",
  },
  'brse-jc-005': {
    question: "What is Japan's \"Ringi\" system? How does it affect BrSE's work?",
    options: [
    "Japanese quality inspection system",
    "A decision-making process in which proposals and decisions are documented and circulated in sequence to relevant management for approval — BrSEs need to be flexible in their schedules as this causes decisions to take time.",
    "Japanese tax procedures",
    "How to review code for a project",
    ""
    ],
    answer: 1,
    explanation: "Ringi is a consensus-building process in Japanese organizations. Create a proposal and get an approval stamp (stamp) from the person in charge → section manager → manager → executive in order. For this reason: (1) It takes several days to several weeks to make a decision, (2) BrSE needs to create a schedule with plenty of time for approving quotations and requesting schedule changes, and (3) It is possible to make the approval process smoother by making arrangements in advance.",
  },
  'brse-jc-006': {
    question: "How should BrSE deal with the difference between \"honne\" and \"tatemae\" in Japanese business?",
    options: [
    "Always believe in the truth and act",
    "There is no need to distinguish between true intentions and tatemae.",
    "Find out their true feelings not only in meetings (official occasions) but also in informal settings (lunch, drinking parties), and make decisions based on information from both. Prevent discrepancies in recognition by checking with documents",
    "Ask directly, “Please tell me what you really think.”",
    ""
    ],
    answer: 2,
    explanation: "Honne (true feelings) and tatemae (official opinion) are characteristics of Japanese communication. There are many formal statements at meetings, and it is easier to express your true feelings in individual conversations and informal settings. As a BrSE: ① Don't feel relieved just by superficial agreement. ② Create opportunities for one-on-one confirmation. ③ Be sure to document decisions and get confirmation. ④ Double-check, ''Is this understanding correct?''",
  },
  'brse-jc-007': {
    question: "Please design a training program to teach Vietnamese development teams \"how to work with Japanese clients.\" Include cultural considerations, communication differences, and common mistakes.",
    answer: "Training program \"How to work with Japanese clients\":\\n\\n1. Basic concepts of Japanese culture (1 hour):\\n- The importance of horenso and how to put it into practice\\n- The concepts of honne and tatemae (explained with examples)\\n- A culture of reading the atmosphere → The importance of explicit confirmation\\n- A culture of punctuality (acting 5 minutes early)\\n- Level of expectations for quality (''aim for perfection'' instead of ''it's OK if it works'')\\n\\n2. Differences in communication (1 hour):\\n- Direct (Vietnam) vs. indirect (Japan)\\n- \"Yes\" may mean \"I'm listening\" rather than \"agree\"\\n- The true meaning of \"I'll consider it\" and \"It's difficult\"\\n- Silence is time to think, don't rush\\n- Level of politeness in emails\\n\\n3. Common mistakes (case study, 1 hour):\\n- Case 1: A feature that was not written in the specifications was expected as ''natural'' but was not implemented.\\n- Case 2: A bug was discovered, but the report was delayed, and the client's trust was lost.\\n- Case 3: ''We said we could do it,'' but the reality was that it was difficult, and we were unable to meet the deadline.\\n- Case 4: Testing was insufficient, and the client discovered the bug right away, resulting in a lack of confidence in the quality.\\n- In each case: Discuss what went wrong and what should have been done.\\n\\n4. Practical exercise (1 hour):\\n- Role play: Report progress to the Japanese client (BrSE)\\n- Email creation: Write a delay report email\\n- Specification confirmation: Create a list of concrete questions from vague specifications\\n\\n5. DO/DON\\'T Checklist:\\n- DO: Report problems early, check specifications in writing, prioritize quality\\n- DON\\'T: Hide the problem, proceed with “it’s probably okay”, skip the test",
    explanation: "The biggest challenge for Vietnamese developers when working with Japanese clients is the difference in cultural expectations. They differ not only in their technical capabilities, but also in their communication methods, quality expectations, and the frequency and content of reports. Training using case studies is more practical and effective than abstract cultural theory.",
  },
  'brse-jc-008': {
    question: "Which of the following should BrSE focus on most when building relationships of trust with Japanese clients?",
    options: [
    "perfect Japanese ability",
    "offer a cheap quote",
    "Consistency in keeping promises (delivery dates, quality, frequency of communication) — Make sure to carry out even small promises, and consult in advance about things that cannot be done.",
    "Participating in every Japanese drinking party",
    ""
    ],
    answer: 2,
    explanation: "What Japanese people value most is \"reliability.\" Trust is built not by big achievements, but by the accumulation of small daily promises: (1) keep what you say, (2) meet deadlines (make promises with plenty of time), (3) don't lower quality standards, and (4) report problems early without hiding them. Conversely, once trust is lost, it takes a very long time to recover.",
  },
  'brse-jc-009': {
    question: "Please explain the multi-subcontracting structure (general contractor structure) of Japanese SIers (system integrators), and design the challenges faced when a Vietnamese offshore team is positioned within this structure and countermeasures as a BrSE lead.",
    answer: "Multiple subcontracting structure in Japan's IT industry:\\n\\nStructural explanation:\\n- Primary recipient (main contractor): Major SIer (NTT Data, Fujitsu, etc.) receives orders from clients\\n- Secondary recipient: Mid-sized SIer receives some orders from the main contractor\\n- Tertiary recipient and below: Subcontracting to smaller companies\\n- Vietnam offshore: Usually the position of 2nd to 3rd subcontractors\\n\\nIssue:\\n1. Communication distance: End client → Main contractor → Secondary recipient → Vietnam (message game)\\n2. Deterioration of requirements: Information is missing or altered at each layer\\n3. Ambiguity of quality requirements: Original quality standards are not accurately communicated\\n4. Responsibility: Responsibility when a problem occurs is unclear\\n5. Pressure on profit margin: Receive orders at low unit prices with multiple margins\\n\\nMeasures:\\n1. Information quality control:\\n- Specification completeness checklist (Identify ambiguous areas and ask questions upon receipt)\\n- Establish a formal flow for changing specifications (do not accept verbal instructions)\\n- Have the prime contractor participate in review meetings as much as possible\\n\\n2. Quality assurance:\\n- State quality standards in the contract (test coverage, bug rate, document quality)\\n- Report test results in detail in Japanese (showing attitude towards quality)\\n- Provide training on Japanese quality standards to the Vietnamese team\\n\\n3. Building relationships:\\n- Securing direct communication channels (reducing the middle layer as much as possible)\\n- Build trust with stakeholders through regular visits to Japan\\n- Build presence through value-added proposals (not just what is said, but also suggestions for improvement)\\n\\n4. Business strategy:\\n- Strategy to acquire direct transactions (prime projects) based on track record\\n- Differentiate with technical capabilities and quality and avoid price competition\\n- Build expertise in specific domains (Fintech, EC, etc.)",
    explanation: "The multiple subcontracting structure of the Japanese IT industry poses challenges for Vietnam Offshore in terms of both information quality and profit margins. As a lead BrSE, it is important to have a system to prevent information from deteriorating, to \"visualize\" quality, and to have a strategy for acquiring prime projects in the medium to long term.",
  },
  'brse-jc-010': {
    question: "As the end of the Japanese company's fiscal year (end of March) approaches, what precautions do I need to take as a BrSE lead?",
    options: [
    "you don't need to do anything special",
    "In preparation for sudden additions of projects due to budget exhaustion, changes in personnel due to personnel changes, and contract renewal negotiations for next year: (1) Secure sufficient capacity, (2) Prepare proposals for next year, (3) Prepare handover documents.",
    "take a vacation",
    "Plan a team year-end party",
    ""
    ],
    answer: 1,
    explanation: "The end of the fiscal year in Japan (the end of March) is an important time: (1) There is a possibility that additional projects will suddenly come in due to the budget being exhausted (securing resources), (2) Personnel in charge (PM, SE, PL) will change due to personnel changes in April (handover handling), and (3) Contract renewal and estimate submission for next year (prepare from January-February). As a Lead BrSE, you will be able to predict and proactively predict the annual year-end cycle and demonstrate your credibility.",
  },
  'brse-op-001': {
    question: "What are the biggest benefits of offshore development?",
    options: [
    "Development quality will definitely improve",
    "Reduce costs and secure development resources — Take advantage of the difference in labor costs and secure engineering resources that are lacking in Japan overseas.",
    "Communication becomes unnecessary",
    "Delivery time will definitely be shortened",
    ""
    ],
    answer: 1,
    explanation: "Advantages of offshore development: 1) Cost reduction (regional differences in labor costs), 2) Securing resources (resolving the shortage of domestic engineers), 3) Possibility of a 24-hour development system that takes advantage of time differences. On the other hand, disadvantages: communication costs, difficulty in quality control, cultural differences. BrSE is responsible for balancing these.",
  },
  'brse-op-002': {
    question: "In offshore development, as long as the specifications are written accurately, communication is minimal and there is no problem.",
    answer: "False",
    explanation: "Even if the specifications are perfect, communication is essential. Reasons: (1) There is tacit knowledge that cannot be conveyed through specifications alone, (2) Questions about specifications inevitably arise during development, (3) It is necessary to respond quickly to change requests, and (4) A feedback loop is necessary to share quality standards. \"Documentation + regular communication\" is the key to offshore success.",
  },
  'brse-op-003': {
    question: "Which is correct as the main role of BrSE (Bridge SE)?",
    options: [
    "Developers who just write code",
    "Acting as a liaison between Japanese clients and Vietnamese development teams — a hub for specification translation and communication, quality control, progress management, and communication.",
    "Conduct only sales activities",
    "Performs Japanese translation only",
    ""
    ],
    answer: 1,
    explanation: "The role of BrSE is wide-ranging: 1) Translation and communication of specifications (translating not only language but also cultural nuances), 2) Quality control (infiltrating Japanese quality standards to Vietnamese side), 3) Progress management (understanding and reporting the situation on both sides), and 4) Coordinating problem solving (bridging technical and cultural issues). He is not just an interpreter, but a key person in the success of the project.",
  },
  'brse-op-004': {
    question: "What is the difference between a \"laboratory type contract\" and a \"contract type contract\" in offshore development?",
    options: [
    "Another name for the same contract form",
    "The laboratory type secures a dedicated team on a fixed monthly basis (input-based), while the contract-based type pays a fixed amount for the deliverables (output-based) — the location of risk is different.",
    "Lab type is for short-term projects, contract type is for long-term projects",
    "Laboratory type is for domestic contracts, contract type is for overseas contracts.",
    ""
    ],
    answer: 1,
    explanation: "Lab type (close to a quasi-delegation contract): A dedicated team is secured on a monthly basis, flexible development is possible, and resource risk is on the client side. Contract type: Deliverables and delivery dates are promised, but the quality risk is on the vendor's side. BrSE must propose an appropriate contract form according to the nature of the project and implement management methods according to risk.",
  },
  'brse-op-005': {
    question: "Which of the following should a BrSE do to strengthen the QA (quality assurance) process in offshore development?",
    options: [
    "Leave all testing to the client side",
    "Create a test plan → Review test cases in Japanese → Visualize test execution reports → Systematically manage defect triage and tracking",
    "Don't test until you find a bug",
    "Testing is left to the discretion of the individual developer.",
    ""
    ],
    answer: 1,
    explanation: "Quality issues in offshore development directly lead to a loss of trust. BrSE's QA management: ① Create test plans according to client quality standards, ② BrSE reviews test cases (confirms consistency with Japanese specifications), ③ Visualizes test results in Japanese (number of bugs, severity, progress rate), ④ Reports critical bugs to the client immediately.",
  },
  'brse-op-006': {
    question: "Design a typical workflow for an offshore development project (specification receipt → development → testing → delivery) and describe the specific actions that BrSE should take in each phase.",
    answer: "Offshore development workflow:\\n\\n1. Specification reception phase:\\n- Receive specifications from client\\n- BrSE action: Read the specification → Create a list of unclear points → Question the client → Complete the specification based on the answers → Translate into Vietnamese/English → Conduct briefing session for the development team\\n\\n2. Estimation/planning phase:\\n- Estimate man-hours with the development team\\n- BrSE action: Confirmation of technical risks → Creation of schedule including buffers → Submission of estimate to client → Creation of WBS after agreement\\n\\n3. Development phase:\\n- Team carries out design and coding\\n- BrSE action: Daily progress check → Creation and sending of weekly reports → Bridging questions regarding specifications → Implementation of design review → Participation in code review\\n\\n4. Testing phase:\\n- QA team conducts testing\\n- BrSE action: Review test plan → Confirm test results → Prioritize bugs → Track fix status → Create quality report\\n\\n5. Delivery phase:\\n- Organize deliverables and submit to client\\n- BrSE action: Check with deliverables checklist → Create delivery note → Prepare operating instructions → Support client review → Manage responses to issues raised",
    explanation: "The involvement of BrSE is essential in each phase. We manage quality and communication consistently, from understanding specifications to post-delivery support, rather than \"just throwing it and calling it a day.\" In particular, the ''list of unclear points'' and ''briefing sessions'' when receiving specifications are critical—if we don't have a common understanding here, rework will increase in subsequent processes.",
  },
  'brse-op-007': {
    question: "What are the best practices to minimize \"specification recognition discrepancies\" that often occur in offshore development?",
    options: [
    "If the specifications are made thicker, discrepancies will disappear.",
    "Conducting specification confirmation meetings (Q&A meetings) + Creating mockups of important screens + Managing questionnaires (Q&A sheets) that document questions about specifications + Prototype review before coding",
    "Developers interpret and implement their own",
    "Discrepancies are inevitable, so accept them.",
    ""
    ],
    answer: 1,
    explanation: "Measures to minimize discrepancies in specification recognition: (1) Align the understanding of both parties through Q&A meetings (specification walk-throughs), (2) Visually check with mockups of important screens, (3) Document all questions on the Q&A sheet and obtain approval, (4) Feed early with a short development cycle, and (5) Show prototypes of important functions in advance. ''Check too much'' is just right.",
  },
  'brse-op-008': {
    question: "Which KPI is appropriate for measuring the performance of an offshore development team?",
    options: [
    "Lines of code only",
    "Quality (bug density, UAT passing rate), productivity (velocity, number of completed stories), process (on-time delivery rate, Q&A response speed), customer satisfaction (NPS, repeat rate)",
    "Overtime hours only",
    "Members' Japanese level only",
    ""
    ],
    answer: 1,
    explanation: "Multifaceted KPIs are required: (1) Quality: Bug density (bugs/KLOC), number of post-release bugs, test coverage, (2) Productivity: Velocity trend, actual/planned ratio, (3) Process: On-time delivery rate, specification Q&A response speed, (4) Customer: Customer satisfaction survey, contract renewal rate. We measure with a balance rather than a single indicator, and connect it to improvement activities.",
  },
  'brse-op-009': {
    question: "As a Lead BrSE, you will design the offshore development onboarding process for new clients. Include mechanisms to maximize the probability of success for your first project.",
    answer: "Offshore development onboarding process:\\n\\nPre-contract (2-4 weeks):\\n- Hearing about client's development culture and quality standards\\n- Confirming past offshore experience and challenges\\n- Proposing a small trial project (1-2 months)\\n- Team composition and BrSE assignment\\n\\nStart-up period (1-2 weeks):\\n- Kickoff meeting: Project overview, team introduction, communication rules agreement\\n- Development environment setup (VPN, repository, CI/CD, chat tools)\\n- Sharing and agreeing on coding standards and quality standards\\n- Developing a communication plan (regular meetings, reporting formats, escalations)\\n- Creating the first version of a glossary\\n\\nInitial project (4-8 weeks — trial period):\\n- Start with small and clearly specified tasks\\n- Daily progress sharing (15-minute morning meeting)\\n- Weekly review meeting (issues and improvements)\\n- BrSE reviews all deliverables before client submission\\n- Collects client feedback every two weeks\\n\\nTransition to stable phase:\\n- Successful trial → Full-scale go-live contract\\n- Process improvement report (lessons learned from trial)\\n- Team expansion plan\\n- Setting KPIs and establishing a regular review system\\n\\nMeasures to prevent failure:\\n- Intentionally secure a large buffer for the first time (estimate x 1.3)\\n- Early detection of problems through daily checks\\n- Senior BrSE backs up the first project\\n- Implementation of Japanese culture training within the team",
    explanation: "If the first project fails, it is extremely difficult to regain trust. The most effective strategy is to start small with trials and expand after gaining success. By ensuring a large buffer and increasing BrSE involvement more than usual, initial quality risks are minimized.",
  },
  'brse-pm-001': {
    question: "What is WBS (Work Breakdown Structure)?",
    options: [
    "Abbreviation for Web-Based System",
    "A structure diagram that hierarchically decomposes a project's work — divides deliverables into smaller tasks and serves as the basis for effort estimation and schedule management.",
    "Wireframe design document",
    "Test result summary table"
    ],
    answer: 1,
    explanation: "WBS is a basic tool for project management. Hierarchically decompose into large deliverables → intermediate deliverables → work packages → individual tasks. BrSE manages work on the Vietnamese side based on the WBS and reports progress to the Japanese client. Without a WBS, it will be difficult to overlook work and accurately monitor progress.",
  },
  'brse-pm-002': {
    question: "Which of the following is the correct use for a Gantt chart?",
    options: [
    "View code review results",
    "Visualize task schedules, dependencies, and progress with bar charts — see at a glance what needs to be completed by when",
    "Graph display of sales data",
    "Database ER diagram"
    ],
    answer: 1,
    explanation: "A Gantt chart arranges time on the horizontal axis and tasks on the vertical axis, and the length of the bar represents the period. It is an essential management tool for Japanese projects, and is used to report progress to clients, understand critical paths, and plan resource allocation. BrSE requires the ability to create and update Gantt charts in Japanese.",
  },
  'brse-pm-003': {
    question: "For offshore projects, weekly reports to the client must be written in Japanese.",
    answer: "True",
    explanation: "Japanese is the standard for reports for Japanese clients. Typical contents of a weekly report: 1) This week's results (completed tasks), 2) Progress rate (planned vs. actual), 3) Issues/risks, 4) Next week's schedule, 5) Q&A items. Created by BrSE and reviewed by PM if necessary. A high-quality Japanese report is directly connected to the client's sense of security and trust.",
  },
  'brse-pm-004': {
    question: "What is the critical path? How important is it in offshore development?",
    options: [
    "Most important source code paths",
    "The longest path in the project (a chain of tasks that if delayed will delay the entire project) - BrSE should manage this with particular care, as delays in tasks above this will directly lead to delivery delays.",
    "List of tasks that can be completed in the shortest possible time",
    "Important communication path for security"
    ],
    answer: 1,
    explanation: "Tasks on the critical path have zero margin (float) = 1 day late is 1 day late due date. As a BrSE: ① Prioritize progress confirmation of tasks on the critical path, ② Set buffers in advance for risky tasks, ③ Determine the acceptable range for delays in non-critical tasks.",
  },
  'brse-pm-005': {
    question: "What is the state of the project if CPI < 1.0 in EVM (Earned Value Management)?",
    options: [
    "progressing on budget",
    "Over budget — Actual costs exceed the planned amount of work and corrective action is required.",
    "Efficient under budget",
    "project was canceled"
    ],
    answer: 1,
    explanation: "CPI (Cost Performance Index) = EV/AC. CPI < 1.0 = Not cost effective (over budget). SPI (Schedule Performance Index) = EV/PV. SPI < 1.0 = schedule delay. As a BrSE: (1) Calculate and report both indicators on a monthly basis, (2) Analyze the cause and propose corrective measures if it is below 1.0, (3) Check trends (improvement/deterioration).",
  },
  'brse-pm-006': {
    question: "Create a resource plan for a 2-month project with a 5-person Vietnamese development team. Please include role division, skill matrix, and utilization rate.",
    answer: "Resource planning:\\n\\n1. Team composition (5 people):\\n- BrSE (1 person): Specification translation, client support, quality control [Operating rate: 80% for this project",
    explanation: "When planning resources, it is important to plan not only the number of people, but also skills and utilization rates. Skill matrix allows you to visualize the strengths/weaknesses of members, and make appropriate task assignments and risk countermeasures. BrSE presents resource plans to clients and builds trust in the team structure.",
  },
  'brse-pm-007': {
    question: "What is the first action that BrSE should take if an offshore project falls behind schedule?",
    options: [
    "Working overtime without reporting to the client",
    "Analyze the cause of the delay → Identify the scope of impact → Develop a recovery plan (increase in personnel/parallel work/scope adjustment) → Report the cause, impact, and countermeasures to the client → Execute after obtaining agreement",
    "Substitute team members on the fly",
    "Request a deadline extension without reporting a delay"
    ],
    answer: 1,
    explanation: "Managing bad news is the most important skill for BrSE. Order: ① Fact confirmation (what is delayed and how much?), ② Cause analysis (specification changes? Technical issues? Lack of resources?), ③ Impact analysis (impact on other tasks, impact on final delivery date), ④ Recovery plan formulation (prepare multiple plans), ⑤ Early report to client (report together with countermeasures). The worst thing to do is hide it.",
  },
  'brse-pm-008': {
    question: "What should I be careful about when reporting \"80% progress\" at a progress meeting with a Japanese client?",
    options: [
    "80% is enough",
    "Report the progress rate based on objective criteria (number of completed functions/total number of functions, number of passed tests/total number of tests, etc.) - A subjective statement of \"about 80% completed\" cannot be trusted. Report the possibility that risks are concentrated in the remaining 20%.",
    "inflated to 90%",
    "No need to report progress rate"
    ],
    answer: 1,
    explanation: "To avoid the \"90% syndrome\" (the remaining 10% never gets finished): 1) Use an objective indicator as the progress rate (completed/total number), 2) Define completion clearly (coding complete? Testing complete? Review completed?), 3) Add the risk of remaining work (\"The remaining 20% ​​contains complex functions\"), and 4) Indicate the expected completion date with evidence. Japanese clients place a high value on numerical accuracy.",
  },
  'brse-pm-009': {
    question: "As a lead BrSE, please design a PMO-like management system to manage multiple offshore projects (3-5 projects at the same time).",
    answer: "Multi-project management system:\\n\\n1. Portfolio management:\\n- Dashboard listing all projects (project name, client, phase, progress, risk level, BrSE person)\\n- Weekly portfolio review meeting (all BrSEs participating, 30 minutes)\\n- Red/yellow/blue traffic light management (red = emergency response required, yellow = caution required, blue = normal)\\n\\n2. Resource management:\\n- Visualization of utilization rates for all members (shared spreadsheets/tools)\\n- Rules for moving resources between projects (application for utilization adjustment one week in advance)\\n- Pool management of specialized skills (list of experts in specific frameworks/domains)\\n\\n3. Standardization of quality:\\n- Quality standards common to all projects (coding standards, test standards, document quality)\\n- Unification of templates (reports, specifications, test plans)\\n- Comparison of all projects for monthly quality metrics\\n\\n4. Knowledge management:\\n- Accumulating lessons learned for each project\\n- Monthly study sessions (each BrSE takes turns presenting cases)\\n- Continuously updating FAQ and best practice collection\\n\\n5. Risk management:\\n- Integrated management of risk list for all projects\\n- Overall countermeasures for common risks (exchange fluctuations, personnel retirement, etc.)\\n- Escalation rules: 3 stages: Item BrSE → Lead BrSE → Manager",
    explanation: "Lead BrSEs who manage 3-5 projects at the same time need a systematic management system rather than individual management. Move from individual to team management with dashboards, standardization, and knowledge sharing. Signal management can instantly determine where you should focus your attention.",
  },
  'brse-pm-010': {
    question: "What does \"milestone\" refer to in project management?",
    options: [
    "team member name",
    "Key project milestones (intermediate goals) — serve as criteria for evaluating progress and moving forward to the next phase",
    "Types of programming languages",
    "server specs"
    ],
    answer: 1,
    explanation: "Milestones are important points that cannot be delayed, such as delivery dates, design completion dates, and test start dates. BrSE manages schedules by counting backwards from milestones.",
  },
  'brse-pm-011': {
    question: "What is the difference between \"risk avoidance\" and \"risk mitigation\" in project risk management?",
    options: [
    "both have the same meaning",
    "\"Avoidance\" means eliminating the risk itself (e.g., cutting difficult functions), and \"mitigation\" means reducing the probability of occurrence or impact (e.g., strengthening reviews).",
    "“Avoid” means ignore, “mitigate” means report.",
    "\"Mitigation\" is always better"
    ],
    answer: 1,
    explanation: "The four categories of risk countermeasures (avoidance, mitigation, transfer, and acceptance) often appear in exams. BrSE requires a flexible response, such as ''reducing'' technical risks and suggesting ''avoidance'' of excessive requests.",
  },
  'brse-pm-012': {
    question: "Which actions should a BrSE not take in project \"change management\"?",
    options: [
    "Technically investigate the scope of impact of changes",
    "Immediately accept verbal additional requests from the client by saying “it’s possible” and have the team implement them.",
    "Estimate the additional effort required for changes",
    "Log changes to configuration management tools"
    ],
    answer: 1,
    explanation: "Making cheap verbal promises can lead to problems later on, such as \"I said what I didn't say,\" and an overload on the team. It should always go through a formal process (impact analysis, estimation, approval).",
  },
  'brse-pm-013': {
    question: "Which is the most appropriate decision when a task that is not on the \"critical path\" is delayed?",
    options: [
    "Immediately commit all resources as this will directly lead to a delay in the entire project.",
    "If it is within the buffer (spare time), it is not an immediate crisis, but we will strengthen monitoring to make sure it does not become a new critical path.",
    "can be completely ignored",
    "Abort the task"
    ],
    answer: 1,
    explanation: "Delays other than the critical path can also become the new \"longest path\" depending on the degree of severity, potentially delaying the entire process. This should be closely monitored as part of a \"sensitivity analysis.\"",
  },
  'brse-pm-014': {
    question: "A new lead BrSE was added to a project that was in flames (serious delays and poor quality). Create an action plan for your first week.",
    answer: "Action plan:\\n1. Visualize the situation: Organize the unfinished tasks (WBS) and number of remaining bugs, and measure the distance to the true \"Done\". \\n2. Re-prioritization: Negotiate with clients to focus resources on the highest priority feature (MVP). \\n3. Strengthen communication: Set up a \"War Room\" to share progress and block items on a daily basis. \\n4. Psychological care: Inspire exhausted teams and introduce efficient recovery plans (automation, parallel work, etc.) that do not rely solely on overtime.",
    explanation: "To recover from a flare-up, it is first necessary to \"accurately understand the current situation\" and \"choose between options (scope adjustment).\" You are required to form new agreements with clients based on data without being emotional.",
  },
  'brse-pm-015': {
    question: "The “stakeholder analysis” should be reviewed not only at the beginning of the project but also periodically during the project.",
    answer: "True",
    explanation: "During a project, the person in charge at the client side may change or new departments may become involved. Staying on top of changes in influence is the key to success.",
  },
  'brse-pm-016': {
    question: "What is the main purpose of creating a Project Charter?",
    options: [
    "to use up the project budget",
    "To formally acknowledge the existence of the project and define its objectives, key stakeholders, and the authority of those responsible.",
    "To specify how to write source code",
    "to schedule a meeting"
    ],
    answer: 1,
    explanation: "The charter is like the \"constitution\" of the project. If this is ambiguous, you will end up having a dispute about what the project is trying to achieve in the first place.",
  },
  'brse-pm-017': {
    question: "In distributed agile development (Japan and Vietnam), what should the lead BrSE focus on to prevent sprint interruptions?",
    options: [
    "Check all the codes yourself",
    "Thoroughly refine the product backlog in advance so that the content of the sprint backlog meets the \"Definition of Ready\"",
    "Eliminate holidays on the Vietnamese side",
    "Update your development tools to the latest version"
    ],
    answer: 1,
    explanation: "Offshore, there are many cases where the ship stops because the specifications are not understood during the sprint. A lead BrSE's skill is to bring the specifications to a \"ready\" state in advance.",
  },
  'brse-pm-018': {
    question: "In quality control (QA), which is the correct interpretation when the \"bug curve (reliability growth curve)\" becomes flat?",
    options: [
    "Since all bugs are gone, it can be released immediately.",
    "It is possible that all bugs have been exhausted, but it is also possible that the tests are simply stagnant (the test cases have simply finished), so this should be determined in conjunction with the test density.",
    "test is failing",
    "Developers are hiding bugs"
    ],
    answer: 1,
    explanation: "It is dangerous to judge based on the curve alone. It is necessary to look at the correlation with the test case completion rate and strictly distinguish whether bugs are less likely to occur or bugs are not occurring because they are not tested.",
  },
  'brse-pm-019': {
    question: "Please create a 6-month roadmap for transferring (takeover) the maintenance and operation of an existing huge legacy project to the Vietnamese side.",
    answer: "Transfer roadmap:\\n1. 1st-2nd month (analysis): Deciphering documents, building the environment, shadowing (observing work on the Japanese side). \\n2. 3rd-4th month (co-work): Start with simple bug fixes. Absorb knowledge while receiving reviews from the Japanese side. \\n3. 5th month (reverse shadowing): The Vietnamese side will take the lead in the work, and the Japanese side will check. \\n4. 6th month (stabilization): Production transfer completed. Improved regular health checks and maintenance processes.",
    explanation: "Migrating legacy systems is very risky. A phased takeover, in which responsibility is transferred in stages, is the safest approach.",
  },
  'brse-pm-020': {
    question: "What is the \"Critical Path\" in project management and why should a BrSE care?",
    options: [
    "The path the project takes to the server room",
    "The longest sequence of dependent tasks that determines the shortest possible project duration",
    "A list of all team members\\' birthdays",
    "The most expensive software license in the project",
    ""
    ],
    answer: 1,
    explanation: "Any delay in a task on the critical path directly delays the project finish date. BrSEs must monitor these tasks closely since a delay in a \"technical design\" task (usually on the critical path) will push the entire delivery.",
  },
  'brse-pm-021': {
    question: "How do you handle \"Scope Creep\" when a Japanese client makes \"small\" informal requests during a meeting?",
    options: [
    "Accept them all to keep the client happy",
    "Politely listen",
    "document the request",
    "and explain that any change needs a formal impact assessment (cost",
    "time",
    "quality)",
    "Refuse immediately and walk out",
    "Ignore the request and hope they forget",
    ""
    ],
    answer: 1,
    explanation: "In Japanese business, \"small\" requests can accumulate into huge delays. Always acknowledge the request but insist on a formal change control process to maintain the project\\'s health and transparency.",
  },
  'brse-pm-022': {
    question: "What is the \"Iron Triangle\" of project management?",
    options: [
    "Scope",
    "Time",
    "Cost",
    "Quality",
    "Speed",
    "Price",
    "Code",
    "Test",
    "Deploy",
    "Manager",
    "Developer",
    "Client",
    ""
    ],
    answer: 0,
    explanation: "Project success is limited by the trade-offs between Scope (features), Time (deadlines), and Cost (resources). If you increase scope, you must also increase time or cost, or quality will suffer.",
  },
  'brse-pm-023': {
    question: "What is an \"Agile Release Train\" (ART) in scaled agile, often managed by a Release Train Engineer?",
    options: [
    "A physical train for commuters",
    "A long-lived team of Agile teams (~50-125 people) that increments value together",
    "An automated deployment pipeline",
    "A sprint planning tool",
    ""
    ],
    answer: 1,
    explanation: "ART is a key concept in SAFe (Scaled Agile Framework). It helps multiple teams stay synchronized on a shared mission and vision, delivering value every 8-12 weeks.",
  },
  'brse-pm-024': {
    question: "A WBS (Work Breakdown Structure) should focus on \"deliverables\" rather than \"activities\".",
    answer: "True",
    explanation: "A product-oriented WBS makes it easier to track progress and ensure that all necessary outputs are defined, whereas activity-oriented lists can miss small but vital tasks.",
  },
  'brse-pm-025': {
    question: "In EVM (Earned Value Management), what does an SPI of 0.8 indicate?",
    options: [
    "The project is ahead of schedule",
    "The project is on schedule",
    "The project is behind schedule (only 80% of the planned work has been completed)",
    "The project is over budget",
    ""
    ],
    answer: 2,
    explanation: "SPI (Schedule Performance Index) = EV / PV. A value less than 1.0 means the project is progressing slower than planned. BrSEs need to explain these metrics to clients during monthly reviews.",
  },
  'brse-pm-026': {
    question: "What is the difference between \"Resource Leveling\" and \"Resource Smoothing\"?",
    options: [
    "Leveling can delay the project finish date to stay within resource limits; Smoothing only adjusts within the existing float and doesn\\'t delay the finish date",
    "They are the same",
    "Leveling is for hardware",
    "Smoothing is for software",
    "Smoothing is always better",
    ""
    ],
    answer: 0,
    explanation: "Resource leveling is used when resources are strictly limited. Resource smoothing is used when the deadline is fixed but we want to avoid spikes and dips in team workload.",
  },
  'brse-pm-027': {
    question: "What is a \"Stakeholder Engagement Assessment Matrix\"?",
    options: [
    "A list of stakeholder phone numbers",
    "A tool to compare the current versus desired engagement levels of stakeholders (Unaware",
    "Resistant",
    "Neutral",
    "Supportive",
    "Leading)",
    "A performance review for the client",
    "A survey about project satisfaction",
    ""
    ],
    answer: 1,
    explanation: "This matrix helps the BrSE identify where communication efforts need to be focused. For example, moving a \"Resistant\" key stakeholder to \"Supportive\" is critical for project success.",
  },
  'brse-pm-028': {
    question: "What is a key activity during the \"Project Closure\" phase?",
    options: [
    "Deleteting all project files",
    "Conducting a \"Lessons Learned\" session to capture what went well and what didn\\'t for future projects",
    "Starting the next project immediately without a break",
    "Ignoring the final payment",
    ""
    ],
    answer: 1,
    explanation: "Lessons Learned (Post-Mortem) is vital for organizational growth. Capturing the specific challenges of an offshore collaboration helps avoid repeating the same mistakes in the next project.",
  },
  'brse-qt-001': {
    question: "Which items should be included in a \"test case\" for software testing?",
    options: [
    "Tester name only",
    "Test ID, test item, preconditions, test procedure, test data, expected result, actual result, pass/fail judgment",
    "Copy source code",
    "Estimated amount"
    ],
    answer: 1,
    explanation: "Essential elements of a test case: 1) Test ID (control number), 2) Test item (what to test), 3) Preconditions (state required before test execution), 4) Test procedure (step by step), 5) Test data (specific input values), 6) Expected result (definition of correct behavior), 7) Actual result (actual behavior), 8) Pass/fail judgment (OK/NG). BrSE reviews test cases and confirms consistency with Japanese specifications.",
  },
  'brse-qt-002': {
    question: "What is the difference between \"unit test\", \"integration test\" and \"comprehensive test\"?",
    options: [
    "all the same tests",
    "Unit test: Check the operation of individual modules/functions, Integration test: Check the cooperation between modules, Comprehensive test: Check the operation of the entire system (in an environment close to production)",
    "Single = Japan, Combined = Vietnam, Comprehensive = Test conducted by client",
    "Differences in the number of participants"
    ],
    answer: 1,
    explanation: "Correspondence with the V-shaped model: Detailed design ↔ Unit testing (UT), Basic design ↔ Integration testing (IT), Requirements definition ↔ Comprehensive testing (ST). When offshore, unit and integration tests are usually carried out by the Vietnamese side, and comprehensive tests and UAT are carried out by the client side. BrSE is responsible for developing the test plan and quality reviewing the results.",
  },
  'brse-qt-003': {
    question: "Bug reports must include both \"expected behavior\" and \"actual behavior.\"",
    answer: "True",
    explanation: "Required items for a bug report: 1) Bug ID, 2) Title (brief summary), 3) Reproduction steps (step-by-step), 4) Expected behavior, 5) Actual behavior, 6) Severity (Critical/Major/Minor), 7) Environment information (OS, browser, version), 8) Screenshots/video. It's not enough to just say something isn't working properly — you need information that developers can reproduce and fix.",
  },
  'brse-qt-004': {
    question: "Which is the most common cause of quality problems in offshore development?",
    options: [
    "Lack of technical skills of Vietnamese engineers",
    "Discrepancies in the recognition of specifications — The Vietnamese side has implemented a different interpretation of ambiguous expressions in the Japanese specifications, and it is not detected even in tests because it “works as implemented”",
    "Issues with the technology stack used",
    "Effects of time difference"
    ],
    answer: 1,
    explanation: "More than 70% of the root causes of quality problems are due to \"misperceptions of specifications.\" BrSE quality improvement measures: (1) Check with specific examples when communicating specifications, (2) Review prototypes before starting development, (3) Verify against specifications when creating test cases, (4) Test from the client's perspective (not \"tests that the developer is satisfied with\" but \"tests that the client is satisfied with\").",
  },
  'brse-qt-005': {
    question: "What is the \"test evidence\" required by Japanese clients?",
    options: [
    "Verbally communicate that the test has been administered",
    "Evidence of test execution — Documentation that proves the test was executed correctly, such as screenshots, test result logs, and database status screens.",
    "About test plan",
    "Developer's daily work report"
    ],
    answer: 1,
    explanation: "Test evidence is an element of quality control that Japanese clients value. Types of evidence: ① Screen capture (before input/after execution), ② DB data confirmation results, ③ Corresponding part of log file, ④ Contents of API response. Evidence quality points: Date and time are known, linkage with test case ID is clear, abnormal tests also leave evidence. BrSE reviews the quality of evidence.",
  },
  'brse-qt-006': {
    question: "What is \"Bug Density\"? How do you use it as a quality indicator?",
    options: [
    "The severity of the bug",
    "Number of bugs per thousand lines of code (KLOC) — for example, 5 bugs/KLOC. An indicator that objectively evaluates the quality level by comparing it with industry averages and past project results.",
    "Time period when bugs are concentrated",
    "Number of bugs reported per day"
    ],
    answer: 1,
    explanation: "Bug density = total number of bugs / amount of code (KLOC). General guideline: 6-12 bugs/KLOC during development, 0.5-3 bugs/KLOC at release. How to use: 1) Understand quality trends by comparing with past projects, 2) Determine testing sufficiency (if the bug density is extremely low, there is a possibility of insufficient testing), 3) Detect quality variations by comparing between modules.",
  },
  'brse-qt-007': {
    question: "Please design a quality report to \"visualize\" the quality of your offshore team to Japanese clients. Please describe the structure of the monthly quality report and the metrics that should be included.",
    answer: "Monthly Quality Report Structure:\\n\\n1. Executive Summary:\\n- Quality Status: 🟢Good / 🟡Attention / 🔴Needs Action\\n- Key KPIs: Bug Density, Test Coverage, Deliverable Acceptance Rate\\n\\n2. Test Progress:\\n- Test Execution Rate (Number of Tests Executed/Planned)\\n- Test Pass Rate (Number of Passed/Number of Tests Executed)\\n- Graph: Trends in the number of daily test executions and pass rate\\n\\n3. Bug analysis:\\n- Total number of bugs, breakdown of new/fixed/unfixed\\n- Distribution by severity (Critical/Major/Minor)\\n- Bug occurrence trend (increase/decrease graph)\\n- Bug density: X bugs/KLOC\\n- Bug fixing time (average, maximum)\\n\\n4. Quality metrics:\\n- Number of code review issues and response rate\\n- Unit test coverage rate\\n- Results of static analysis (SonarQube, etc.)\\n5. Client issue management:\\n- Number of client feedback and response status\\n- Points of improvement/deterioration from the previous month\\n\\n6. Improvement activities:\\n- This month's improvement measures and effects\\n- Next month's improvement plan\\n- Root cause analysis (Analysis of causes of Top 3 bugs)",
    explanation: "Japanese clients are not reassured by a qualitative report that says ''the quality is okay.'' Visualizing the quality status with numbers and graphs, and reporting any problems with cause analysis and improvement measures will help build trust. Quality reports are not ''something to get people scolded'' but ''a tool to earn trust.''",
  },
  'brse-qt-008': {
    question: "What is the appropriate response for BrSE when a Japanese client complains that a large number of bugs were found during acceptance testing (UAT)?",
    options: [
    "''That's a specification change,'' counters.",
    "After apologizing, analyze the root cause of the bug leak, present specific measures to improve the testing process (review test cases, strengthen reviews, improve test coverage), and promise to prevent recurrence.",
    "There is no problem if all the bugs are fixed",
    "Blame the QA team"
    ],
    answer: 1,
    explanation: "Frequent bugs at the UAT stage greatly damage trust. Response: 1. Apologize sincerely, 2. Analyze the bug (problem with understanding the specifications? Insufficient testing? Environmental differences?), 3. Present a plan to improve the root cause in writing, 4. Promise an implementation schedule for the improvement, 5. Report the improvement results in the next iteration. Demonstrating a willingness to improve is the first step in restoring trust.",
  },
  'brse-qt-009': {
    question: "As a Lead BrSE, which approach is most effective for building a culture of quality across your organization?",
    options: [
    "Introduce a strict penalty system",
    "Fostering a culture in which quality is not something that is ensured in the testing process, but something that is built in throughout the process — design reviews, strict adherence to coding standards, code reviews, quality gates in CI/CD pipelines, visualization of quality metrics, and continuous improvement.",
    "Quality control is outsourced to an external specialized organization",
    "Respond to quality issues after they occur"
    ],
    answer: 1,
    explanation: "Building a quality culture: (1) Instilling the mindset that \"quality is an investment, not a cost.\" (2) Building in quality in upstream processes (design reviews); (3) Setting up quality gates through automation (CI/CD, static analysis, automatic testing); (4) Reviewing and improving quality issues during retrospectives; (5) Visualizing and praising quality results. The key to sustainable improvement is to create an environment where quality improvement occurs naturally, rather than through punishment.",
  },
  'brse-qt-010': {
    question: "What is \"regression testing\"?",
    options: [
    "Tests that add new features",
    "A test to check whether bugs (degeneration) have occurred in other normal parts due to the effect of modifying a program.",
    "Test to measure processing speed",
    "Test to check the beauty of the design"
    ],
    answer: 1,
    explanation: "Regression testing is used to prevent ''what used to work no longer'' due to modifications or additions. BrSE identifies the impact range and suggests the minimum and effective regression test range.",
  },
  'brse-qt-011': {
    question: "Which values ​​should be tested with Boundary Value Analysis? (Example: Input between 1 and 100)",
    options: [
    "average value like 50",
    "0",
    "1",
    "100",
    "Boundary like 101 and the value immediately before and after it",
    "random random numbers",
    "Obviously large numbers like 999"
    ],
    answer: 1,
    explanation: "Bugs are most likely to occur near boundaries (such as mistakes in inequality signs). BrSE checks whether boundary values ​​are correctly covered during test case review.",
  },
  'brse-qt-012': {
    question: "What are the main reasons why Japanese clients are so particular about \"test coverage\"?",
    options: [
    "Because we want to increase the total number of tests",
    "We want to prove with objective numbers that the tests were carried out without any omissions, giving us peace of mind regarding quality.",
    "To prevent developers from slacking off",
    "To improve the appearance of the report"
    ],
    answer: 1,
    explanation: "Japanese clients are more concerned about ''how much testing has not been done'' than ''how much testing has been done.'' It is important to be able to explain coverage using indicators such as C0 (instruction coverage) and C1 (branch coverage).",
  },
  'brse-qt-013': {
    question: "Which action should BrSE take based on the principle of \"bugs are unevenly distributed (bugs are concentrated in specific modules)\"?",
    options: [
    "Replace the developer of a buggy module",
    "Identify areas where bugs occur frequently and focus on strengthening testing around those areas and related modules, or suggest refactoring.",
    "Increase testing of modules with fewer bugs",
    "Equalize testing time for all modules"
    ],
    answer: 1,
    explanation: "Similar to the 20:80 rule (Pareto's principle), bugs are concentrated in specific complex areas. BrSE statistically judges risks and optimally allocates resources.",
  },
  'brse-qt-014': {
    question: "Please suggest ways to improve the quality of a project that is experiencing frequent degradation.",
    answer: "Improvement measures:\\n1. Thorough configuration management: Review the Git flow rules and tighten the review process for conflict resolution. \\n2. Introduction of automatic regression tests: Incorporate automatic tests (E2E) for critical functions and run them every push using CI/CD. \\n3. Pre-release check sheet: Require items to check for degradation before merging and before release. \\n4. Incident analysis: Identify the cause of why the degradation occurred and share measures to prevent recurrence with the entire team.",
    explanation: "Degrades occur not only due to technical mistakes but also due to poor processes. It is necessary to approach this from both automation and process perspectives.",
  },
  'brse-qt-015': {
    question: "If the test result is \"NG\", it is necessary to leave evidence such as a screenshot, but if the test result is \"OK\", it is not necessary.",
    answer: "False",
    explanation: "Evidence of \"OK\" is important in order to prove that \"it was working at that time\" when a bug occurs later. Japanese clients value OK evidence as well.",
  },
  'brse-qt-016': {
    question: "In which cases is it most effective to use a decision table?",
    options: [
    "When screen transitions are complicated",
    "When checking the logic in which the system's actions change in complex ways depending on the combination of multiple conditions.",
    "If you have a large amount of data",
    "When checking response speed"
    ],
    answer: 1,
    explanation: "Decision tables are the best way to prevent omissions due to combinations of conditions. BrSE converts the complex logic in specifications into decision tables to ensure completeness of test cases.",
  },
  'brse-qt-017': {
    question: "As a lead BrSE, which system should I introduce to improve the skills of the Vietnamese QA team?",
    options: [
    "Give a bonus depending on the number of bugs found",
    "Create a culture of mutually reviewing the quality of bug reports to improve the resolution of reproduction steps and cause analysis",
    "Completely separate QA and development teams",
    "Write all test cases in Japanese"
    ],
    answer: 1,
    explanation: "Rather than simply finding many bugs, writing a \"high-quality report\" increases development efficiency and contributes to improving the overall quality of the project.",
  },
  'brse-qt-018': {
    question: "What are the main benefits of implementing static analysis tools (such as SonarQube)?",
    options: [
    "System runs faster",
    "You can analyze source code without moving it and automatically detect code duplication, complexity, vulnerabilities, and violations of coding standards programmatically.",
    "Automatically creates test cases",
    "Generate documentation automatically"
    ],
    answer: 1,
    explanation: "Human reviews have their limitations. Parts that can be checked automatically by tools should be automated, and humans should focus on reviewing complex parts such as logic.",
  },
  'brse-qt-019': {
    question: "As the lead BrSE, please formulate \"quality governance (control)\" rules for the department where 10 projects are running in parallel.",
    answer: "Quality Governance Rules:\\n1. Phase gate review: At the end of each process (design, implementation, testing), the lead BrSE approves whether the standard checklist has been met. \\n2. Standard metrics reporting: Weekly reporting will be required in a format common to all projects (progress rate, bug density, number of review issues). \\n3. Cross-sectional QA review: Introduction of a \"cross-review system\" in which BrSEs from other projects conduct quality reviews from an external perspective. \\n4. Quality Alert Criteria: Set thresholds for immediate intervention when bug rates are abnormally high (or low).",
    explanation: "In order to prevent quality from varying from project to project, it is necessary to establish a minimum level of \"company-wide standards\" that must be followed, and to have a system to objectively check these standards.",
  },
  'brse-qt-020': {
    question: "What is \"Regression Testing\" and why is it vital in offshore maintenance projects?",
    options: [
    "Testing only the new features",
    "Re-running previously passed tests to ensure that new changes or bug fixes haven\\'t broken existing functionality",
    "Testing the database performance",
    "A manual test of the UI only",
    ""
    ],
    answer: 1,
    explanation: "Regression testing ensures \"side effects\" are caught. In offshore projects with frequent updates, automated regression suites are essential to maintain client trust and prevent old bugs from reappearing.",
  },
  'brse-qt-021': {
    question: "What is the \"Seven Testing Principles\" from ISTQB that a BrSE should advocate?",
    options: [
    "Always test everything at 7 PM",
    "Testing shows presence of bugs (not absence)",
    "Exhaustive testing is impossible",
    "Early testing",
    "Defect clustering",
    "Pesticide paradox",
    "Testing is context dependent",
    "Absence-of-errors fallacy",
    "Seven different types of browsers for testing",
    "QA",
    "Dev",
    "BA",
    "PO",
    "PM",
    "CEO",
    "User",
    ""
    ],
    answer: 1,
    explanation: "These principles help manage client expectations. For example, \"Early testing\" saves costs, and \"Testing is context dependent\" explains why we test a banking app differently than a blog.",
  },
  'brse-qt-022': {
    question: "What is \"Exploratory Testing\" and when is it useful?",
    options: [
    "Testing by exploring the server files",
    "Unstructured testing where the tester \"explores\" the app without pre-defined scripts to find edge cases",
    "Testing if the app works in different countries",
    "A type of automated load testing",
    ""
    ],
    answer: 1,
    explanation: "Exploratory testing relies on the tester\\'s experience and creativity. It is excellent for finding complex bugs that scripted tests might miss, often performed before a major release.",
  },
  'brse-qt-023': {
    question: "What is \"Static Analysis\" in quality assurance?",
    options: [
    "Running the app and checking for crashes",
    "Examining the code",
    "requirements",
    "or design without executing the program (e.g.",
    "rolled",
    "code reviews)",
    "Testing the app on a static IP address",
    "A test that never changes",
    ""
    ],
    answer: 1,
    explanation: "Static analysis catches errors early. Code reviews and automated linting tools find syntax issues, security vulnerabilities, and logic flaws before the code even reaches the test environment.",
  },
  'brse-qt-024': {
    question: "A \"Defect Density\" metric measures the number of bugs found per unit of size (e.g., per 1,000 lines of code).",
    answer: "True",
    explanation: "Defect density helps identify \"problem areas\" in the code. If one module has a much higher density than others, it may need refactoring or more intensive testing.",
  },
  'brse-qt-025': {
    question: "What is the \"Shift-Left\" testing approach?",
    options: [
    "Testing only the left side of the screen",
    "Starting testing activities as early as possible in the lifecycle (e.g.",
    "reviewing requirements before coding)",
    "Moving the deadline to an earlier date",
    "Replacing testers with developers",
    ""
    ],
    answer: 1,
    explanation: "Finding a bug during requirement review costs 100x less than finding it in production. Shift-left emphasizes prevention over detection.",
  },
  'brse-qt-026': {
    question: "What is the primary difference between Black-box and White-box testing?",
    options: [
    "Black-box uses dark mode; White-box uses light mode",
    "Black-box tests functionality without looking at the internal code; White-box tests internal structure and logic of the code",
    "Black-box is for hardware; White-box for software",
    "They are the same",
    ""
    ],
    answer: 1,
    explanation: "BrSEs often handle Black-box (User perspective) while Tech Leads focus on White-box (Unit tests, code paths). Both are necessary for full coverage.",
  },
  'brse-qt-027': {
    question: "What is the main goal of \"UAT\" (User Acceptance Testing)?",
    options: [
    "To find as many bugs as possible",
    "To verify that the system meets the business requirements and is ready for use by the end-users",
    "To test the server performance",
    "To finish the project faster",
    ""
    ],
    answer: 1,
    explanation: "UAT isn\\'t about finding minor bugs, but about \"Acceptance\". If the user can complete their primary tasks, the system is accepted, even if some small polish is needed.",
  },
  'brse-qt-028': {
    question: "What is \"Statement Coverage\" vs \"Condition Coverage\" in white-box testing?",
    options: [
    "Statement is about sentences; Condition is about weather",
    "Statement coverage ensures every line of code is executed; Condition coverage ensures every logical path in an IF statement is tested (True and False)",
    "They are the same metric",
    "Only statement coverage matters",
    ""
    ],
    answer: 1,
    explanation: "100% statement coverage doesn\\'t mean 100% logic coverage. You might execute every line but still miss a bug that only occurs when a specific condition is false.",
  },
  'brse-rm-001': {
    question: "What is project risk?",
    options: [
    "About the project budget",
    "Uncertain events that can affect the achievement of project goals—if they occur, they will have a negative impact on delivery, quality, and cost.",
    "Technology used in the project",
    "Evaluation of project members"
    ],
    answer: 1,
    explanation: "Definition of risk: \"A problem that has not yet occurred, but may occur.\" Risk ≠ Problem (the problem has already occurred). Characteristics of risk: (1) There is a probability of occurrence, (2) There is a degree of impact if it occurs, (3) Preliminary measures can be taken. As a BrSE, we prevent problems from occurring by identifying risks in advance and taking countermeasures.",
  },
  'brse-rm-002': {
    question: "What is the \"probability of occurrence\" and \"impact\" matrix used for?",
    options: [
    "For evaluation of team members",
    "To prioritize risks — prioritize risks with a high probability of occurrence and high impact.",
    "To calculate the project budget",
    "To determine the number of test cases"
    ],
    answer: 1,
    explanation: "The risk matrix maps each risk by placing the degree of impact (high/medium/low) on the vertical axis and the probability of occurrence (high/medium/low) on the horizontal axis. High probability x high impact = top priority measures, low probability x low impact = monitoring only. BrSE creates a list of risks at the start of a project, prioritizes them in a matrix, and plans countermeasures.",
  },
  'brse-rm-003': {
    question: "Risk management only needs to be done once, at the beginning of the project.",
    answer: "False",
    explanation: "Risk management is a continuous process. Identify risks at the beginning of a project and re-evaluate them during phase transitions or when circumstances change. Add new risks as they are discovered and update the status of existing risks. Incorporating weekly or monthly risk reviews into regular meetings is recommended.",
  },
  'brse-rm-004': {
    question: "Which of the following is the most important risk specific to offshore development?",
    options: [
    "Technical risk only",
    "Communication risk (discrepancies in perception due to language, culture, and time differences), human resources risk (member turnover), quality risk (bugs due to lack of understanding of specifications), exchange rate risk (cost fluctuations due to currency fluctuations)",
    "Weather risk only",
    "Legal risk only"
    ],
    answer: 1,
    explanation: "Offshore-specific risks: ① Communication (discrepancies in specifications, cultural differences, time differences) → Countermeasures: Q&A management, regular meetings, glossary ② Human resources (separation of key members, skill gaps) → Countermeasures: Knowledge sharing, backup system ③ Quality (differences with Japanese quality standards) → Countermeasures: code reviews, test evidence ④ Currency exchange (VND/JPY fluctuations) → Countermeasures: Specifying exchange conditions in long-term contracts",
  },
  'brse-rm-005': {
    question: "Which of the four risk response strategy options are correct?",
    options: [
    "4-level evaluation of A/B/C/D",
    "Avoid: Eliminating risk factors, Mitigate: Lowering the probability and impact, Transfer: Transferring to a third party, Accept: Acknowledging the risk and allowing it.",
    "4 levels: upper/middle/lower/none",
    "4 phases: development/testing/management/maintenance"
    ],
    answer: 1,
    explanation: "Examples of risk response: ① Avoidance: Forgo adopting new technologies with high technical risks and select proven technologies ② Mitigation: Cross-training and document maintenance to reduce the risk of member turnover ③ Transfer: Outsourcing vulnerability testing to a specialized security company for security risks ④ Acceptance: Only monitor the current situation for risks with low probability of occurrence and small impact",
  },
  'brse-rm-006': {
    question: "Design a Risk Register for your offshore project. Please describe the items to be included and how they will be managed.",
    answer: "Risk register design:\\n\\nItem structure:\\n| No | Category | Risk content | Probability of occurrence (1-5) | Impact (1-5) | Risk score | Countermeasures | Person in charge | Deadline | Status | Notes |\\n\\nCategory examples:\\n- Specifications (specification changes, ambiguity of specifications)\\n- Technology (new technology, performance, security)\\n- Human resources (turnover, lack of skills, lack of resources)\\n- Communication (language, time difference, cultural difference)\\n- External (external exchange, legal regulations, dependence on third parties)\\n\\nManagement method:\\n1. Initial identification at the start of the project (all team members participate)\\n2. Regular weekly risk review (new additions, status updates)\\n3. Risk score = probability x impact\\n4. Score 15 or higher → Immediately implement countermeasures\\n5. Score 10-14 → Develop countermeasure plan\\n6. Score 9 or below → Monitor (watch list)\\n7. Report the top 5 risks to the client monthly",
    explanation: "The Risk Register is a “living document”. There's no point in just making something and leaving it on the shelf. Update with weekly reviews to add new risks and check progress against countermeasures. By reporting risks to our Japanese clients, we give them a sense of trust that we are proactively managing risks.",
  },
  'brse-rm-007': {
    question: "In the middle of the project, a key member (tech lead) suddenly resigned. How should BrSE respond?",
    options: [
    "Wait until you hire a replacement",
    "① Immediately report to client (with impact assessment and interim measures) ② Maximize knowledge transfer (secure handover period) ③ Reallocate tasks within the team ④ Assign alternative members ⑤ Re-evaluate impact on schedule and propose adjustments",
    "Wait for the team to adapt naturally",
    "This risk could not be foreseen, so it cannot be helped."
    ],
    answer: 1,
    explanation: "Retirement of key members is a high probability risk. Preliminary measures: (1) Preventing knowledge from becoming individualized (documents, pair programming), (2) Developing backup personnel, (3) Contractual arrangements to ensure handover period. Post-incident measures: early reporting, rapid knowledge transfer, and minimizing impact. The question is not whether the situation was \"unforeseeable\" but whether measures were taken in advance.",
  },
  'brse-rm-008': {
    question: "What is a “Contingency Plan”?",
    options: [
    "regular project plan",
    "Alternative plans that are prepared in advance to be activated in the event that a risk actually occurs - Developed in advance in the form of \"If XX occurs, do △△\"",
    "Plan to cancel the project",
    "Plan to add budget"
    ],
    answer: 1,
    explanation: "Examples of contingency plans: ① Server failure → Prepare procedures for switching to a backup environment ② Retirement of a key member → Maintain a handover document and replacement candidate list ③ Delivery delay → Consider recovery scenarios (increase in personnel, scope reduction, parallel work) in advance ④ Security incident → Prepare an incident response flow. The job of a professional is to prepare before you wake up, rather than thinking about it after you wake up.",
  },
  'brse-rm-009': {
    question: "As a Lead BrSE, you will design an integrated risk management framework for multiple offshore projects. Include common risk management and individual project risk reporting.",
    answer: "Integrated risk management framework:\\n\\n1. Risk governance structure:\\n- Risk owner: Lead BrSE (integrated management)\\n- Risk person in charge of each deal: Each deal BrSE\\n- Escalation destination: Manager/CTO\\n\\n2. Common risk catalog:\\n- Create a database of risks that have occurred from all past deals by category\\n- Screen risks from the catalog when starting a new deal\\n- Category: Specifications, technology, people, communication, external, finance\\n\\n3. Integrated risk dashboard:\\n- Displays a list of TOP3 risks for all projects\\n- Risk score trend graph (visualization of improvement/deterioration)\\n- Signal management: 🔴(high risk of 3 or more cases) 🟡(1-2 cases) 🟢(none)\\n\\n4. Risk review process:\\n- For each case: Weekly risk review (BrSE+TL)\\n- Overall: Monthly integrated risk review (all BrSEs participating)\\n- High risk cases: Emergency review (immediately upon occurrence)\\n\\n5. Accumulation of lessons learned:\\n- Post-mortem implementation when risks materialize\\n- Reflecting lessons learned in catalog (prevention of recurrence)\\n- Quarterly \"Risk management review\" meeting\\n\\n6. KPI:\\n- Risk pre-identification rate (percentage identified before it manifests) Target: 80% or more\\n- Trends in the number of serious incidents (monthly)\\n- Countermeasure implementation rate (execution rate of planned measures)",
    explanation: "The value of integrated risk management is that lessons learned from individual cases can be shared across the organization to avoid repeating the same mistakes. The risk catalog functions as an ''organizational memory'' and can provide advance warning that ''this risk has occurred in the past'' in new cases.",
  },
  'brse-rm-010': {
    question: "What should you do during the “Identify Risk” phase?",
    options: [
    "ignoring the risk",
    "Identifying risks that may affect the project and documenting their characteristics (what will happen and why)",
    "Determine only the person responsible for risk",
    "increase the budget"
    ],
    answer: 1,
    explanation: "Identification is the first step in risk management. It is important to use brainstorming, checklists, and learn from the past to thoroughly identify everything.",
  },
  'brse-rm-011': {
    question: "What is a typical example of \"transfer\" of risk?",
    options: [
    "cancel the project",
    "Transferring the impact of risk to a third party, such as purchasing insurance, outsourcing to a specialist, or setting disclaimers in contracts",
    "make an effort to reduce risk",
    "believe that there is no risk"
    ],
    answer: 1,
    explanation: "This is a strategy to distribute risks that cannot be borne by the company (e.g. compensation due to cyber attacks, special technical issues) to external parties.",
  },
  'brse-rm-012': {
    question: "How should risks registered on the “Watch List” be managed?",
    options: [
    "I don't need to see it again",
    "Low priority, but continually monitored during periodic reviews to ensure the situation does not change and become a significant risk.",
    "Delete immediately",
    "Dedicate all resources to countermeasures"
    ],
    answer: 1,
    explanation: "Risks that may be small now but have the potential to become large in the future should be left as ''monitoring targets'' without abandoning them.",
  },
  'brse-rm-013': {
    question: "What do you call the budget and period for responding to \"unknown risks (unexpected situations)\"?",
    options: [
    "reserve fund",
    "Management Reserve",
    "Contingency Reserve",
    "pocket money"
    ],
    answer: 1,
    explanation: "Contingencies are for known unknowns (risks that have been identified), and management reserves are for unknown unknowns (risks that could not be identified).",
  },
  'brse-rm-014': {
    question: "A Japanese client told me, ''I absolutely cannot change the delivery date, but I would like you to include all additional requirements.'' How do you manage and negotiate risk?",
    answer: "Risk Management and Negotiation Strategies:\\n1. Visualize Tradeoffs: Use the scope, delivery, quality, and cost rectangle (the project iron triangle) to quantify the impact of additional requirements on other factors. \\n2. Prioritization (MoSCoW method): Divide all requirements into Must/Should/Could/Wont, propose to complete the Must within the deadline, and divide the others into phases. \\n3. Risk of additional resources: Explain the increase in communication costs and loss of training period due to increased staff. \\n4. Consensus building: Rather than a complete \"yes,\" come up with a counterproposal that says \"it's possible under these conditions (priorities).\"",
    explanation: "The biggest risk is accepting unreasonable demands from clients. The role of the senior BrSE is to aim for \"co-creative\" solutions using logical data and alternative ideas.",
  },
  'brse-rm-015': {
    question: "When a risk occurs, it becomes an \"incident (problem)\" and is deleted from the risk management table and moved to the problem management table (Issue Log).",
    answer: "True",
    explanation: "The moment it occurs, it becomes a \"problem (fact)\" rather than a \"risk (possibility).\" Move control and track resolution actions.",
  },
  'brse-rm-016': {
    question: "What is the main purpose of performing Sensitivity Analysis in Project Risk?",
    options: [
    "to analyze emotions",
    "To identify which uncertain factors (variables) have the greatest impact on the project outcome (e.g. the extent to which a single delay affects the entire project)",
    "To measure the motivation of members",
    "To check the failure rate of computers"
    ],
    answer: 1,
    explanation: "By knowing where the most critical points are, you can focus your limited resources on the most effective measures.",
  },
  'brse-rm-017': {
    question: "As a lead BrSE, which attitude should you most avoid when \"risk sharing\" with clients?",
    options: [
    "Communicating bad information early",
    "Answer vaguely, \"It's probably okay,\" and hide the risk until it becomes obvious (problem).",
    "Presenting countermeasures as a set",
    "Accurately indicate the scope of risk impact"
    ],
    answer: 1,
    explanation: "“Bad News First” is the golden rule. The worst thing for Japanese clients is \"last minute reporting\". If you speak quickly, you will gain cooperation, but if you speak late, it will lead to mistrust.",
  },
  'brse-rm-018': {
    question: "What is \"Secondary Risk\" after risk treatment?",
    options: [
    "second most important risk",
    "New risks that arise as a result of implementing certain risk countermeasures (e.g., increased training costs and risk of misunderstandings increase due to measures to increase personnel)",
    "risk of second occurrence",
    "reserve risk"
    ],
    answer: 1,
    explanation: "Measures taken with the best intentions can lead to other problems. When formulating countermeasures, it is necessary to consider this secondary risk.",
  },
  'brse-rm-019': {
    question: "As the lead BrSE, please formulate review items for risk management in the \"post-mortem\" (after-the-fact analysis) that will be conducted after the project ends.",
    answer: "Post-mortem/reflection items:\\n1. Understanding rate: What percentage of the total risks could have been identified in advance? \\n2. Effectiveness of measures: Were the measures taken actually effective? (Didn't I miss it?)\\n3. Signs of manifestation: Were you able to detect the \"trigger\" before the problem occurred? \\n4. Impact estimation accuracy: Was there a discrepancy between the expected impact and the actual impact? \\n5. Knowledge: Have you sorted out risks that were unique to this project and common risks that may occur in other projects?",
    explanation: "Reflection increases your organization's risk sensitivity and increases the success rate of your next project. Instead of blaming yourself for mistakes, treat them as learning opportunities.",
  },
  'brse-rs-001': {
    question: "Which of the following is correct regarding the role of \"requirements definition document\" in Japanese system development?",
    options: [
    "A document that summarizes the program source code",
    "A document that defines the client's business requirements and functional and non-functional requirements for the system — the starting point for development",
    "Developer evaluation sheet",
    "Report of test results"
    ],
    answer: 1,
    explanation: "The requirements definition document is the top-level document that defines \"what to create.\" Describe business flow, functional requirements, non-functional requirements (performance, security, etc.), and restrictions. BrSE must accurately understand this document and communicate it to the development team.",
  },
  'brse-rs-002': {
    question: "What is the difference between \"basic design document\" and \"detailed design document\"?",
    options: [
    "different versions of the same content",
    "The basic design document describes the overall system structure, screen transitions, and DB design (WHAT), and the detailed design document describes the logic and algorithms inside the module (HOW).",
    "The basic design document is written in Japanese, and the detailed design document is written in English.",
    "The basic design document is created by the client, and the detailed design document is created by the developer."
    ],
    answer: 1,
    explanation: "Basic design (external design): Overall system architecture, screen design, DB design, API design, screen transitions — parts visible to the user. Detailed design (internal design): Processing logic, class design, and sequence diagram for each module — detailed specifications for developers. For BrSE, it is especially important to understand the basic design document.",
  },
  'brse-rs-003': {
    question: "Japanese specifications cannot be changed once they are finalized.",
    answer: "False",
    explanation: "Specification changes occur on a daily basis. The important thing is the change management process: ① Receipt of change request → ② Impact range analysis → ③ Estimation of impact on man-hours and schedule → ④ Client approval → ⑤ Update of design documents and test plans → ⑥ Implementation. It is important that BrSE conducts change management through a formal process and does not make changes based solely on verbal instructions.",
  },
  'brse-rs-004': {
    question: "What is the \"CRUD table\" often used in Japanese specifications?",
    options: [
    "cost management table",
    "A table listing which operations each screen/function performs on data: Create, Read, Update, or Delete.",
    "Team structure chart",
    "Test case list"
    ],
    answer: 1,
    explanation: "CRUD table (CRUD Matrix) visualizes the relationship between data and functions. Arrange data entities (tables) on the vertical axis and functions/screens on the horizontal axis, and write C/R/U/D in each cell. This makes it possible to 1) confirm data consistency, 2) discover missing functions, and 3) analyze the scope of impact. BrSE understands data flow based on CRUD tables.",
  },
  'brse-rs-005': {
    question: "Please read the following information from the Japanese screen specifications and convert it into development instructions for the Vietnamese development team: \"User registration screen - name (required), email address (required, format check), password (required, 8 or more characters, mixed alphanumeric characters), confirmation password\"",
    answer: "User Registration Screen Specification:\\n\\n| Field | Type | Required | Validation Rules | Error Message |\\n|-------|------|----------|-----------------|---------------|\\n| Full Name | text input | ✅ | Max 100 chars",
    explanation: "Although the Japanese specification describes the functionality concisely, it is necessary to clarify specific validation rules, error messages, and screen operations for the development team. BrSE reads between the lines of the specification and details it to a level where developers don't get lost.",
  },
  'brse-rs-006': {
    question: "Which of the following is appropriate as a \"non-functional requirement\" in Japanese specifications?",
    options: [
    "User registration function",
    "Screen response time is within 3 seconds, support for 1000 concurrent users, data encryption (AES-256), and 99.9% availability",
    "CSV output function",
    "Form printing function"
    ],
    answer: 1,
    explanation: "Categories of non-functional requirements (NFR): performance (response time, throughput), reliability (99.9% availability, disaster recovery time), security (encryption, authentication), scalability (number of concurrent connections, amount of data), maintainability (documentation, code quality). BrSE tends to overlook non-functional requirements, which determine system quality.",
  },
  'brse-rs-007': {
    question: "If there are many ambiguous points in the specifications received from the Japanese client, please design a Q&A (question management) process as BrSE.",
    answer: "Q&A process design:\\n\\n1. Specification review phase (1-2 days):\\n- BrSE + technical lead + QA read the specifications carefully\\n- Each person records their questions on the Q&A sheet (Excel)\\n- Category classification: Unspecified specifications, contradictions, unknown assumptions, missing non-functional requirements\\n2. Q&A sheet structure:\\n- No. | Category | Relevant part (page/item number) | Question content | Proposal (Proposed Interpretation of BrSE) | Answer | Respondent | Date | Status\\n- The \"Proposal\" column is important: Instead of \"Which is A or B?\", indicate your interpretation by saying \"I understand that it is A, but is it correct?\"\\n\\n3. Q&A meeting (1-2 times a week):\\n- Check the questions in order of priority\\n- Resolve critical questions (that block the start of development) first\\n- Be sure to record the answers on the Q&A sheet (don't just do it verbally)\\n\\n4. Feedback on answers:\\n- Create supplementary materials for the specifications based on the answers\\n- Share with the development team (translated version of the Q&A sheet)\\n- Revise the estimate/schedule if there is an impact\\n\\n5. Close management:\\n- Track unanswered Q&A on a weekly basis\\n- Escalate if waiting for answers impedes development\\n- Set all Q&A closing as a milestone",
    explanation: "The biggest risk is to proceed without understanding vague specifications. Systematically eliminate ambiguity with a structured Q&A process. By presenting a ''proposal (their own interpretation),'' the client can respond with a ''yes/no'' response, increasing response efficiency.",
  },
  'brse-rs-008': {
    question: "Which items should BrSE pay particular attention to when reading the \"table definition document\" in Japanese specifications?",
    options: [
    "English table name only",
    "NULL tolerance/NOT NULL constraints, foreign key relations, index design, data type and size, initial value (default value), character code — these directly affect program implementation",
    "Table color coding only",
    "Creation date and time only"
    ],
    answer: 1,
    explanation: "Important items in the table definition document: ① NOT NULL constraint (affects required input and validation), ② foreign key (affects relationship between tables and JOIN queries), ③ index (affects search performance), ④ data type/size (VARCHAR(50) vs TEXT, etc.), ⑤ default value (affects initial data insertion), ⑥ character code (UTF-8 is standard for Japanese support).",
  },
  'brse-rs-009': {
    question: "As a lead BrSE, please design a specification management method when conducting agile development with Japanese clients. Please include any differences and transition points from traditional waterfall specifications.",
    answer: "Agile x Offshore specification management:\\n\\nTraditional WF type specification:\\n- Requirements definition document → Basic design document → Detailed design document (all created in advance)\\n- Problems: Weak against changes, take time to create, outdated during implementation\\n\\nAgile type specification management:\\n\\n1. Backlog-based specification management:\\n- Epic (large functional unit) → Story (functional unit from user perspective) → Task (technical task)\\n- Specify acceptance criteria (AC) for each story\\n- BrSE creates AC in Japanese and obtains client approval\\n\\n2. \"Just Enough\" document:\\n- Overall architecture: Basic design level overview (created once, updated as needed)\\n- Screen specifications: Figma mockup + screen item definition (created in sprint units)\\n- API specifications: Swagger/OpenAPI (automatically generated from code)\\n- DB design: ER diagram + Main table definitions (updated incrementally)\\n\\n3. Specification flow within a sprint:\\n- Sprint planning: Confirm detailed specifications of the story (BrSE+client)\\n- During development: Daily confirmation (chat-based Q&A)\\n- Sprint review: Confirm recognition of specifications with demo\\n- Specification changes: Add to backlog, address in next sprint\\n\\n4. Point of transition:\\n- Japanese clients tend to \"want to decide everything first\" → Step-by-step explanation\\n- At first, create detailed specifications for important screens in advance, and do the rest within the sprint.\\n- Make sure the client has an attitude of \"changes are welcome.\"\\n- Quality control is carried out in each sprint (do not test all together at the end)",
    explanation: "The key to Agile x Offshore is the balance between the \"level of detail\" and \"timing\" of specifications. It's inefficient to detail everything upfront, but not detailing anything will lead your offshore team astray. \"Just Enough\" = Creating specifications with the necessary level of detail when necessary - this is the design power of Lead BrSE.",
  },
  'brse-rs-010': {
    question: "What is the main purpose of \"use case description\" in specifications?",
    options: [
    "To write the system source code",
    "To prevent the omission of functions by describing the interaction between the user and the system in a step-by-step scenario format.",
    "To determine screen colors and fonts",
    "To determine the database index"
    ],
    answer: 1,
    explanation: "Use cases start from \"what the user wants to do.\" By writing this, developers can understand \"why this feature is needed\" and implement it better.",
  },
  'brse-rs-011': {
    question: "When writing the \"input check specification\", which important aspects are often omitted by BrSE?",
    options: [
    "Input item name",
    "Error message wording, focus position at the time of error, sanitizing (illegal character removal) rules",
    "input box length",
    "background color"
    ],
    answer: 1,
    explanation: "If you don't decide what will happen when an error occurs, developers will create messages based on their own judgment, leading to UI inconsistencies and vulnerabilities.",
  },
  'brse-rs-012': {
    question: "What kind of functions require state transition diagrams (state machine diagrams)?",
    options: [
    "User list display function",
    "A function where the state of data changes depending on a specific event, such as \"Draft → Waiting for approval → Approved → Publish\", and the possible operations change accordingly.",
    "Simple calculation function",
    "Image upload function"
    ],
    answer: 1,
    explanation: "In systems with workflows, without a state transition diagram, serious bugs such as buttons being pressed in inappropriate states are likely to occur.",
  },
  'brse-rs-013': {
    question: "In a \"replacement of an existing system\" project, which action is the most important to clarify the difference (Fit/Gap) between the old and new specifications?",
    options: [
    "Design a new system from scratch",
    "Read all the source code of the old system, extract the current \"correct\" logic, and reflect it in the requirements definition document.",
    "Ignore the old system",
    "Ask the client just once, “Are you okay with the same old system?”"
    ],
    answer: 1,
    explanation: "The biggest risk with replacement is loss of specifications or outdated content. Recognize that the current source (especially complex calculation logic, etc.) is the only correct answer, and carefully extract specifications.",
  },
  'brse-rs-014': {
    question: "Please list the items that should be considered as non-functional requirements when defining the requirements for an EC site with \"multilingual support (Japanese, English, Vietnamese)\".",
    answer: "Multilingual NFR items:\\n1. Character code: Consistent multilingual display using UTF-8. \\n2. Time zone: Appropriate conversion process for server time, DB time, and display time. \\n3. Currency/decimal point: Unification of currency symbols in each country and rounding rules such as rounding. \\n4. Performance: Minimize delays due to loading multilingual resources (i18n files). \\n5. Searchability: Ability to respond to ambiguous Japanese searches (hiragana, katakana, kanji).",
    explanation: "Multilingual support is more than just translation; these non-functional aspects greatly contribute to the stability of the system. BrSE needs to go beyond simply being a \"language bridge\" and lead these technologically.",
  },
  'brse-rs-015': {
    question: "ER diagrams (entity-relationship diagrams) are used to visualize not only the physical structure of a database, but also business rules (such as one-to-many relationships).",
    answer: "True",
    explanation: "ER diagrams simultaneously represent data structure and business constraints. By reading this, BrSE can deeply understand the meaning of the data handled by the system.",
  },
  'brse-rs-016': {
    question: "Which of the following should be included in the \"Common Specifications\" section of the specification?",
    options: [
    "Validation rules for only one specific screen",
    "Date format (YYYY/MM/DD), common button design, error message display location, common permission management rules",
    "personal notes",
    "Log output code"
    ],
    answer: 1,
    explanation: "By defining common specifications, there is no need to write the same thing over and over again in the specifications for each screen, preventing inconsistencies in specifications and greatly improving implementation efficiency.",
  },
  'brse-rs-017': {
    question: "As a lead BrSE, what review process would you implement to ensure zero bugs due to \"misreading\" of the specifications?",
    options: [
    "Strongly tell the developer, \"Please don't make this mistake.\"",
    "A \"specification reading meeting\" by three-party review (Japanese creator, BrSE, Vietnamese implementer) will be made compulsory, and misunderstandings will be resolved on the spot.",
    "completely ignore reviews",
    "Rely solely on automatic checks by tools"
    ],
    answer: 1,
    explanation: "The biggest bug in offshore is \"translation/interpretation error\". The most reliable solution is for people with different linguistic and cultural backgrounds to gather and \"synchronize their understanding\" while looking at the same screen.",
  },
  'brse-rs-018': {
    question: "Which is the most important testing perspective in the \"Data Migration Specification\"?",
    options: [
    "screen appearance",
    "Inconsistency in the number of data items before and after migration, data type conversion errors, and constraints violations (NULL, uniqueness, etc.)",
    "font size",
    "Exact number of seconds the migration took"
    ],
    answer: 1,
    explanation: "Data migration is an irreversible task. In particular, it is necessary to verify the risk that garbage data from the old system will be caught in the new system's NOT NULL constraints, causing the system to stop.",
  },
  'brse-rs-019': {
    question: "As the lead BrSE, you will develop document management rules to ensure \"traceability\" of the entire product.",
    answer: "Traceability rules:\\n1. Unification of ID system: Assign common sequential numbers to requirements (REQ-xx), design (DES-xx), and tests (TST-xx) and link them to each other. \\n2. RTM (Requirements Traceability Matrix): Maintains a list of which designs, codes, and tests verified all requirements. \\n3. Tool integration: Automatically link Jira tickets, GitHub PR, and Confluence pages, allowing you to track all history from one requirement. \\n4. Stricter change history: Be sure to record the ''Reason for Change'' rather than just ''updates''.",
    explanation: "With traceability, you can instantly know which tests should be re-run if this requirement changes. This is of decisive value in the maintenance of large-scale, long-term projects.",
  },
  'brse-rw-001': {
    question: "We received vague instructions from a Japanese client: ''Please make that feature look a little nicer.'' What should I do first as a BrSE?",
    options: [
    "Give instructions to the Vietnamese development team using your own sense of style",
    "Ask the Japanese side questions to make it more concrete, such as, ''What exactly are the requirements for a ''good feeling''?Are there any sites or screen images that can be used as references?''",
    "Due to unclear specifications, development will be temporarily halted.",
    "Ask Vietnamese developers directly and let them decide"
    ],
    answer: 1,
    explanation: "Japan's culture of \"reading the air\" and ambiguous instructions based on \"Aun's breathing\" are the most dangerous aspects of offshore development. Since BrSE plays the role of a bridge that converts tacit knowledge into explicit knowledge, it is necessary to conduct interviews to incorporate it into concrete specifications and requirements without passing it on as is.",
  },
  'brse-rw-002': {
    question: "The Vietnamese development team asked, \"How should we handle the behavior in cases that are not in the specifications?\" I don't have time until the delivery date. How will you respond?",
    options: [
    "Give priority to the delivery date and instruct to proceed with the method that is easiest to implement.",
    "Immediately contact the person in charge on the Japanese side, present two possible solutions and the amount of work required for each, and ask for a decision.",
    "It was a mistake on the Japanese side that it was not written in the specifications, so I told them there was no need to implement it.",
    "Make your own decisions and report to the Japanese side later."
    ],
    answer: 1,
    explanation: "Missing specifications often occur. If BrSE makes an arbitrary decision, there is a high risk of rework later, so we always check with the client. At that time, instead of simply asking, \"What would you like to do?\", by presenting options (solutions), you can speed up the client's decision-making process.",
  },
  'brse-rw-003': {
    question: "During a regular meeting (web meeting), I could not hear the Japanese client's fast-talking explanations and could only understand half of the content. What should I do?",
    options: [
    "Pretend you understand and ask your team members privately if they can watch the recording later.",
    "Simply say, ''I'm sorry, but I'm not sure what you understand, so could you please explain again a little more slowly?''",
    "Listen silently and give up on creating minutes.",
    "Continue to say \"Yes, I understand\" at random."
    ],
    answer: 1,
    explanation: "Proceeding without understanding is the biggest cause of fatal misunderstandings in offshore development. In Japanese business as well, it is more honest to check things on the spot rather than proceeding with uncertainty, and can prevent major troubles (misunderstandings) later on.",
  },
  'brse-rw-004': {
    question: "The day before the delivery date, we received a report from the Vietnamese development team saying, ''Actually, there are so many bugs that we won't be able to deliver tomorrow.'' What action should BrSE take next?",
    options: [
    "We immediately notified the Japanese client that ''delivery will be delayed due to quality issues'' (Horenso's ''Hou''), and quickly confirmed the current number of bugs and the prospects for recovery.",
    "I got angry at the Vietnamese team and forced them to stay up all night to deliver tomorrow.",
    "Deliver the product with bugs so that the Japanese side doesn't find out.",
    "Wait until the client contacts you"
    ],
    answer: 0,
    explanation: "In Japanese business, the golden rule is \"bad news first\" (report the bad news as soon as possible). Concealment and late reporting undermine trust the most. The correct way to report the incident is to first report only the facts, and then provide a detailed report on the cause and recovery plan.",
  },
  'brse-rw-005': {
    question: "[Yes or No] We received 50 review points (bugs and fixes) from the Japanese side at once. In order to avoid demoralizing the Vietnamese team, BrSE should communicate only half of the 25 cases in advance, and secretly communicate the rest at a later date.",
    answer: "False",
    explanation: "×. If you do it in small portions, you will end up in a situation where you will not be able to finish the revisions no matter how long it takes, which will actually lower your motivation and make it difficult to manage your schedule. The correct approach is to accurately share all issues, prioritize them, and proceed with corrections in a planned manner.",
  },
  'brse-rw-006': {
    question: "The holidays in Japan and Vietnam overlap, which is likely to affect the project schedule. What should BrSE do at the time of kickoff?",
    options: [
    "The first time I make a holiday excuse when I'm behind schedule.",
    "At the kickoff, share the calendar of Vietnamese holidays (such as Tet) with the Japanese side and agree on a master schedule that takes into account the reduction in working days.",
    "The Vietnamese side will be required to work on public holidays in full accordance with the Japanese calendar.",
    "Estimate the delivery date appropriately"
    ],
    answer: 1,
    explanation: "Holidays due to differences in culture and systems (differences in holiday calendars) are a unique risk of offshore development. If you later say, ''Vietnam was closed because it's a public holiday,'' you'll get into trouble. It is important to reflect this in the master schedule at the initial stage and ensure that all parties involved are on the same page.",
  },
  'brse-rw-007': {
    question: "A Vietnamese development team complains that ''Japan's QA (testing team)'s bugs are too detailed. They point out even 1 pixel discrepancies.'' How will BrSE respond?",
    options: [
    "Just tell them, “Japanese people are very particular, so be patient.”",
    "Complain to the QA team, ''This is too detailed, please test more roughly.''",
    "Explain the background that Japanese end users are sensitive to UI/UX quality, and work to agree on guidelines for quality standards (how much is acceptable) with the QA side at the specification stage.",
    "Ignoring the development team's complaints and forcing them to fix it"
    ],
    answer: 2,
    explanation: "Japan's \"high standards of quality\" can be difficult for offshore teams to understand. The role of a bridge is to explain the background of why something is considered important (such as end-user expectations) and at the same time create clear agreed standards to prevent excessive quality.",
  },
  'brse-rw-008': {
    question: "A critical system bug has occurred in production. The Japanese side is very angry. What should I emphasize most in the \"Problem Report\" submitted as a BrSE?",
    options: [
    "Name of specific programmer who created the bug and punishment",
    "Emotional excuse: “The Vietnamese team did their best, but…”",
    "The cause of the occurrence (why it happened) and \"permanent recurrence prevention measures (process improvement)\" to prevent the same bug from occurring again in the future",
    "Counterargument that the specifications on the Japanese side were poorly written"
    ],
    answer: 2,
    explanation: "In Japanese business, much emphasis is placed on reporting ''why it happened (root cause)'' and ''how to prevent it (recurrence prevention measures)'' rather than the mistake itself. Rather than blaming individuals, showing an approach that solves problems through \"mechanisms\" such as review systems and testing processes will help restore trust.",
  },
  'brse-rw-009': {
    question: "During a requirements meeting with a client, a request was made that was technically unfeasible (or extremely expensive). What is the appropriate response as a BrSE?",
    options: [
    "Coldly refuse on the spot, saying, ''That's absolutely impossible.''",
    "Just say \"Yes, I can\" and take it home, then regret it later.",
    "''It is difficult at the moment due to the technical constraints of 〇〇, but as an alternative method, we can achieve a similar goal at a low cost.Would you consider it?''",
    "Listen silently and ignore during implementation"
    ],
    answer: 2,
    explanation: "BrSE's high-value-added communication is not simply denying that it can't be done, but logically explaining why it is difficult (budget, technology, delivery date) and presenting an \"alternative\" that can achieve the client's business objectives.",
  },
  'brse-rw-010': {
    question: "[True or False] In order to improve translation efficiency, the best way for BrSE to do this is to take the Japanese specifications as is, run them through Google Translate without thinking, and then pass the Vietnamese version to the development team.",
    answer: "False",
    explanation: "×. Literal translations can mislead developers because they lack the \"context unique to system development\" and \"Japanese tacit knowledge.\" BrSE must interpret the content as systematic behavior and logic, and add illustrations and supplementary explanations as necessary to \"complete the context through free translation.\"",
  },
  'brse-rw-011': {
    question: "Midway through the project, the client began frequently requesting \"specification changes.\" The budget and delivery date are fixed. What is the senior BrSE's approach to avoid project failure?",
    options: [
    "We work overtime for free to avoid hurting the client's mood.",
    "Reject all change requests as \"Phase 2 and beyond\"",
    "Create a change management table and visualize the ''scope of impact,'' ''required man-hours,'' and ''risk of schedule delay'' due to additional specifications. Negotiate with the client which features to trade off within the current scope.",
    "abandon a project midway through"
    ],
    answer: 2,
    explanation: "This is a response to scope creep (never-ending specification expansion). Rather than simply refusing with a \"no,\" the correct control method is to visualize the fact that changes require cost and time using data (such as a change management table) and leave the trade-off decision to the client.",
  },
  'brse-rw-012': {
    question: "The system staff at the head office in Japan and the on-site business users have different opinions and are caught in the middle. How should I act as a BrSE?",
    options: [
    "The person in charge of the system is the one paying the money, so they ignore the opinions of the users on site.",
    "Create a document that organizes the points of conflict between the two parties, the technical feasibility of the system, and business advantages and disadvantages, and form a consensus in a three-party meeting involving both parties.",
    "Implement both opinions as is and complicate the system",
    "Let the Vietnamese development team decide which opinion to adopt."
    ],
    answer: 1,
    explanation: "In conflicts between stakeholders, BrSE needs to act as a facilitator. The role of the senior team member is to sort out each other's arguments from a technical and operational perspective and try to build consensus through Nemawashi and coordination meetings.",
  },
  'brse-rw-013': {
    question: "Vietnam's development team has a high turnover rate, and knowledge is becoming individualized, making project handover difficult. Which of the following is the most effective remedy for this situation?",
    options: [
    "Appeal directly to the president to double your salary",
    "There is no problem if you immediately hire a new person to replace the person who left your job.",
    "Thoroughly operate Wiki (documentation) within the project, introduce a code review culture and pair programming, and build a system (standardization) in which know-how is distributed and shared throughout the team.",
    "BrSE rewrites all code by himself"
    ],
    answer: 2,
    explanation: "\"Eliminating individualization\" and \"knowledge management\" are important issues in offshore development. By incorporating processes for document modernization, standardization, and uniform code quality, you can create a team that is resistant to the risk of resource fluctuations, even if people quit.",
  },
  'brse-rw-014': {
    question: "We won a large-scale offshore development project from a major Japanese financial institution. However, customers are strongly opposed to offshore services due to concerns about security and quality. As a senior BrSE, please write a \"proposal for an offshore system/process\" to eliminate customer concerns.",
    answer: "Proposed approach to dispel customer concerns:\\n\\n1. Building a security system:\\n・Presentation of physical measures (no smartphones allowed, development in a dedicated secure room). \\n・Presentation of network measures (use of VDI/VPN, prohibition of local storage of source code and customer data). \\n・Show proof of information security education (ISO27001). \\n\\n2. Visualization of the quality assurance process: \\n・We explained that we will formulate a test plan that complies with Japanese quality standards (JSTQB, etc.), rather than leaving everything to Vietnam. \\n・Proposed a system to introduce test automation (CI/CD environment) and eliminate human errors. \\n・Multiple code reviews (static analysis using tools + peer review + final confirmation by senior tech lead). \\n\\n3. Maintaining transparency in communication: \\n・We promise 100% visibility of progress and issues through weekly regular meetings and daily reports. \\n・Perform monthly objective quality metrics reports based on KPIs (bug detection rate, estimated man-hours, etc.). \\n\\nProving with \"systems and data\" is most effective for conservative clients such as financial institutions.",
    explanation: "For mission-critical projects such as financial institutions, logical proofs such as ''defense through physical/logical infrastructure such as secure rooms'' and ''elimination of human error using process tools'' are required, rather than the mentality of ''I will do my best.''",
  },
  'brse-rw-015': {
    question: "You are a lead BrSE who brings together many BrSEs. During one project, a young BrSE in charge of the project was on the verge of depression, and there were numerous complaints from clients. The cause was caught between ''the client's recklessness (frequent changes in specifications)'' and ''the Vietnamese team's lack of development ability.'' Create a one-week rescue plan to get your project back on track.",
    answer: "One-week rescue plan for the burning project:\\n\\n[Day 1: Understand the current situation and stop bleeding (triage)]\\n・Temporarily take over the workload of young BrSEs and provide mental care. Take immediate leave if necessary. \\n - Immediately notify the client that ''I, as the lead BrSE, will intervene and rebuild the system,'' and temporarily stop (Freeze) the current development work. \\n\\n[Day 2-3: Inventory and visualization of issues]\\n・Clean out all the current \"change request list,\" \"remaining tasks,\" and \"current bugs\" and create a fact-based list. \\n・Hearing and analyzing the technical issues of the Vietnamese team (why they are behind, where are the skill gaps). \\n\\n[Day 4: Redefining the scope and negotiating with the client]\\n・Conducted an emergency meeting with the client. Calmly explains the mechanism of quality collapse caused by frequent specification changes using data (bug occurrence rate, etc.). \\n・Redefine the ''minimum scope (MVP) that can be reliably delivered with current resources and time,'' and negotiate and agree on phase separation for overlapping requirements. \\n\\n[Day 5-7: Restructuring of systems and processes]\\n・Assign additional senior engineers to the development team to provide help and establish a support system to solve technical issues. \\n・Stricter change management process (rules that do not accept arbitrary changes and require written agreement). \\n・Establish a backup system (clarification of escalation path) when young BrSEs return and resume development safely.",
    explanation: "The lead class requires \"firefighting (troubleshooting)\" skills. Rather than forcing people to work hard based on mental theory, the question is whether they can quickly implement the basic management principles of 1) protecting people (separating the burden), 2) objectively visualizing the situation, 3) negotiating scope with clients on an equal footing, and 4) fundamentally revising processes and systems.",
  },
  'brse-tm-001': {
    question: "Which is the most important thing to keep an offshore development team motivated?",
    options: [
    "keep raising salaries",
    "Setting clear goals, fair evaluations, providing opportunities for growth, and recognizing (recognizing) team achievements—intrinsic motivation is important, not just money.",
    "work overtime every day",
    "leaving everything to the individual's discretion"
    ],
    answer: 1,
    explanation: "Herzberg's Motivation Theory: Hygiene factors (salary, environment, etc. that would not cause dissatisfaction) prevent dissatisfaction, but motivating factors (growth, recognition, sense of accomplishment, responsibility) increase motivation. As a BrSE: ① Clarify the purpose of the project and the roles of members, ② Provide opportunities to improve skills, ③ Provide specific feedback on good work, ④ Share positive feedback from clients.",
  },
  'brse-tm-002': {
    question: "BrSE is responsible not only for project management, but also for supporting the career growth of team members.",
    answer: "True",
    explanation: "BrSE is also responsible for the career growth of its members. ① Technical skills improvement plan (opportunity to learn new technology), ② Support for improving Japanese language ability, ③ Sharing of domain knowledge, ④ Gradual assignment of more responsible tasks, ⑤ Career consultation in 1on1 meetings. The growth of members is directly linked to improving the quality of the team, which in turn leads to the retention of human resources.",
  },
  'brse-tm-003': {
    question: "Which is most important when onboarding new members?",
    options: [
    "Delegate important tasks from day one",
    "Step-by-step launch by setting up the development environment, explaining the coding rules, briefing on the project outline, and assigning a mentor (senior).",
    "No special onboarding required — just learn on your own",
    "Finished by handing out training materials"
    ],
    answer: 1,
    explanation: "Onboarding checklist: ① Development environment (source code, tools, access rights), ② Project overview (purpose, architecture, team structure), ③ Coding rules and review standards, ④ Mentor/Buddy assignment, ⑤ Tasks for the first two weeks (starting with small bug fixes and simple features). It usually takes 2-4 weeks to start up. Good onboarding leads to early productivity gains.",
  },
  'brse-tm-004': {
    question: "How should BrSE handle technical disagreements within the offshore team?",
    options: [
    "Always adopt the opinions of superiors",
    "Organize the merits and demerits of both opinions, facilitate discussions based on objective data (performance tests, maintainability, learning costs, etc.), and encourage consensus building as a team.",
    "ignore one side's opinion to avoid controversy",
    "push one's opinion"
    ],
    answer: 1,
    explanation: "Technical conflict is a sign of healthy debate. As a BrSE: 1) Listen to both opinions equally, 2) Guide the discussion with facts and data rather than emotions, 3) Propose a proposal to be verified with a prototype/PoC (proof of concept), 4) Foster a culture where the entire team respects the decision after agreement is reached, 5) Set judgment criteria from the perspective of project requirements (delivery date, maintainability, team skills).",
  },
  'brse-tm-005': {
    question: "What is the purpose of “1on1 Meeting” and its value to BrSE?",
    options: [
    "A meeting just to check on the progress of a task",
    "Regular dialogue with individual members — A place to quickly identify and address work issues, career counseling, motivation, and interpersonal issues within the team.",
    "A place to communicate performance evaluations",
    "technical study session"
    ],
    answer: 1,
    explanation: "1on1 is \"time for members\". What BrSE should do: 1) Hold regular meetings (30 minutes every other week recommended), 2) Have members set topics (don't let the boss lead them), 3) Listen to what they are having trouble with at work, what they would like to improve as a team, and their career goals, 4) Identify and deal with problems early (signs of resignation, accumulation of dissatisfaction). If you neglect 1on1, you will only notice the problem when a member leaves.",
  },
  'brse-tm-006': {
    question: "What is a team's \"Bus Factor\"? Why should BrSE care about this indicator?",
    options: [
    "Team commuting metrics",
    "Degree of risk that the project will stop if a specific member leaves - A bus coefficient of 1 (stops if one person leaves) is extremely dangerous and requires knowledge sharing",
    "Expense management indicators for bus transportation",
    "Metrics about the number of test runs"
    ],
    answer: 1,
    explanation: "Bus coefficient = “How many people must be hit by a bus before the project stops?” (metaphor). Ideally 3 or more. Countermeasures: (1) Documentation of important knowledge, (2) Regular code reviews (knowledge sharing), (3) Pair programming/mob programming, (4) Rotation (the same person does not continue to be in charge of the same module). As a BrSE, I understand the team's bus coefficient and improve weak points.",
  },
  'brse-tm-007': {
    question: "Design a strategy to increase staff retention for an offshore development team (10 people). Please consider the characteristics of Vietnam IT industry.",
    answer: "Human resource retention strategy:\\n\\n1. Challenges in the Vietnam IT industry:\\n- Average length of service: 2-3 years (job changes are common)\\n- High expectations for salary increase\\n- Emphasis on technical challenges and career growth\\n- Tendency to emphasize work-life balance\\n\\n2. Measures to improve retention rate:\\n\\nFinancial measures:\\n- Market-level salary (reviewed at least once a year)\\n- Project achievement bonus\\n- Japanese language qualification acquisition allowance (JLPT N3 → monthly allowance)\\n\\nGrowth opportunity:\\n- Business trip/training program to Japan (1-2 people per year, 3-6 months)\\n- Technical conference participation support\\n- In-house study session (twice a month, technology + Japanese)\\n- Career path clarification (Dev → TL → BrSE → PM)\\n\\nTeam culture:\\n- Flat communication\\n- Celebrating successes (internal recognition, sharing feedback from clients)\\n- Regular team events (team lunch once a month)\\n- Flexible working arrangements (remote work possible)\\n\\nEarly alerts:\\n- Checking motivation with monthly 1-on-1 meetings\\n- Checking for signs of resignation (decreased interest in work, sudden decrease in overtime, changes in SNS activity)\\n- Early handling of dissatisfaction (immediately addressing anything that can be improved)\\n\\n3. KPI:\\n- Annual turnover rate target: 15% or less\\n- Member satisfaction survey (quarterly)\\n- Trends in average length of service",
    explanation: "The turnover rate in Vietnam's IT industry is higher than in other industries, and competition for talented personnel is fierce. Salary alone does not differentiate us; growth opportunities (business trips to Japan, career path) and team culture are differentiators. The strongest staying power is when members feel that they want to work on this team.",
  },
  'brse-tm-008': {
    question: "As a lead BrSE, which approach is most effective in developing junior BrSEs?",
    options: [
    "Give training materials and let them learn on their own",
    "Mentoring system + OJT (gradual experience in actual projects) + regular feedback — Attend senior BrSE projects and gradually expand their role",
    "Let me just study for the Japanese language test",
    "Assign one person to take charge of a case immediately"
    ],
    answer: 1,
    explanation: "Stages of BrSE training: ① Observation period (1-2 months): Attends senior meetings and takes minutes ② Support period (2-4 months): Responsible for small specifications confirmation and Q&A under senior supervision ③ Leading period (4-6 months): Responsible for small projects (backed up by seniors) ④ Independent period (after 6 months): Responsible for medium-sized projects independently. Provide regular feedback and skill assessments at each stage to identify and improve issues.",
  },
  'brse-tm-009': {
    question: "As a lead BrSE, you will design the organizational structure of a 30-person offshore development department. Include team composition, job hierarchy, skills matrix, and talent development plan.",
    answer: "Organizational structure with 30 people:\\n\\n1. Organizational hierarchy:\\n- Lead BrSE (1 person): Overall department management, client relationship building, strategy\\n- Senior BrSE (2-3 people): BrSE for large-scale projects, junior BrSE guidance\\n- BrSE (3-4 people): BrSE for small and medium-sized projects\\n- Tech lead (3 people): Technical judgment, architectural design, code review\\n- Senior developer (5-6 people): Implementation of complex functions, junior guidance\\n- Developers (8-10 people): Function implementation, testing\\n- QA (3-4 people): Test design, execution, automation\\n\\n2. Team composition (3 teams x 8-10 people):\\n- Team A: BrSE + TL + 3 Dev + 1 QA (Client A project)\\n- Team B: BrSE + TL + 3 Dev + 1 QA (Client B project)\\n- Team C: BrSE + TL + 2 Dev + 1 QA (small multiple projects)\\n- Floating: 1 Senior BrSE + 2 Senior Devs (inter-project support)\\n\\n3. Career path:\\n- Dev → Senior Dev → TL → (Technical course: Architect / Management course: BrSE → Senior BrSE → Lead BrSE)\\n- Visualize each member's current location and goals with a skill matrix\\n\\n4. Human resource development:\\n- Monthly skill improvement study sessions (technical + Japanese + soft skills)\\n- Quarterly skill evaluation and development plan update\\n- Business trip training in Japan for 1-2 people per year\\n- BrSE Academy (in-house training program: 6-month course)",
    explanation: "Even with a scale of 30 people, it is necessary to divide teams and clearly define roles. The concept of floating members (inter-project support) is important and contributes to load distribution and knowledge sharing during peak times. Clarifying career paths is the key to staff retention — it is important for members to feel that they can grow in this organization.",
  },
  'brse-tm-010': {
    question: "What does \"Psychological Safety\" mean within a team?",
    options: [
    "Keep your office locked and secure",
    "A state in which members feel confident that they will not be shamed, rejected, or punished for expressing their opinions, questions, concerns, or failures.",
    "Everyone always smiles",
    "Never point out if you make a mistake"
    ],
    answer: 1,
    explanation: "Teams with higher psychological safety report bugs and risks faster, resulting in higher quality. Conversely, fearful teams tend to hide bad information.",
  },
  'brse-tm-011': {
    question: "In which phase of the Tuckman Model can a team achieve maximum results?",
    options: [
    "Forming",
    "Performing",
    "Storming",
    "Norming"
    ],
    answer: 1,
    explanation: "After going through formation → confusion → unification, the functional stage (the period when results are produced) is reached for the first time. BrSE should not be afraid of periods of confusion and should appropriately facilitate them to lead them to a period of unification.",
  },
  'brse-tm-012': {
    question: "What is the appropriate attitude for a BrSE to take when reviewing a \"design document\" prepared by a member?",
    options: [
    "Just say \"No\" and push back",
    "Focus on ''improving the product'' rather than ''denying the person's personality,'' and present specific reasons for correction and solutions. Also, convey the good points at the same time.",
    "rewrite everything yourself",
    "ignore mistakes"
    ],
    answer: 1,
    explanation: "The purpose of reviews is to improve the product and educate members. A balance is required that maintains psychological safety while not compromising technical standards.",
  },
  'brse-tm-013': {
    question: "What is the best action for a BrSE practicing \"servant leadership\" to take?",
    options: [
    "order members to obey",
    "Dedicated to eliminating blockages and providing necessary resources and support to help team members perform at their best.",
    "doing nothing",
    "what stands out most"
    ],
    answer: 1,
    explanation: "Leaders are not rulers, but servants. Supporting members increases the autonomy and productivity of the entire team.",
  },
  'brse-tm-014': {
    question: "A conflict arose between the lead engineer and the UI designer over \"ease of implementation\" and \"beauty of design.\" How do you arbitrate?",
    answer: "Mediation approach:\\n1. Encourage a return to common purpose (product success, user experience). \\n2. Cost/impact analysis: Use data to visualize the man-hours required to fully implement the design and the impact on users if simplified. \\n3. Presenting an alternative: Propose an intermediate solution that maintains the design intent (beauty, ease of use) and has a low implementation burden (separation into phases, use of different UI elements). \\n4. Consensus building: Finally, gather the materials to ask the product owner/client for a decision.",
    explanation: "The criteria is not ''which is right'' but ''what is best for the product.'' We work to reach realistic compromises while respecting professionalism.",
  },
  'brse-tm-015': {
    question: "''Spinach'' (reporting, communication, and consultation) should not only be done from subordinates to superiors, but also from superiors to subordinates in order to maintain information transparency.",
    answer: "True",
    explanation: "Information transparency is the foundation of trust. Sharing the situation (client's intentions, project crisis, etc.) from your boss increases the team's sense of unity.",
  },
  'brse-tm-016': {
    question: "What does A (Attainable) mean in \"Goal Setting (SMART Principles)\"?",
    options: [
    "bright goals",
    "achievable and realistic goals",
    "aspirational goal",
    "don't give up"
    ],
    answer: 1,
    explanation: "Goals that are too high will reduce motivation, and goals that are too low will stop you from growing. It is the administrator's skill to set a line that ''if you try hard enough, you can reach.''",
  },
  'brse-tm-017': {
    question: "As the lead BrSE, which of the following is the most appropriate response when the Vietnamese team cannot adapt to the Japanese side's \"read the atmosphere\" culture?",
    options: [
    "''Read the atmosphere more,'' he says in terms of psychology.",
    "Create a system that converts all tacit understanding into \"explicit documents and words\" and communicates it without expecting that \"you will understand without saying it\"",
    "remove people who cannot adapt",
    "Change all Japanese culture to Vietnam"
    ],
    answer: 1,
    explanation: "Cultural barriers cannot be overcome through psychological theory. ''Converting tacit knowledge into explicit knowledge'' is BrSE's technology and becomes our strength as an organization.",
  },
  'brse-tm-018': {
    question: "What is management that takes advantage of the \"Pygmalion effect\"?",
    options: [
    "Treat members harshly",
    "A phenomenon in which when managers believe in the potential of members and set expectations for them, members try to meet those expectations and their performance improves.",
    "to leave alone",
    "to compete"
    ],
    answer: 1,
    explanation: "The expectation that you can do it is a powerful motivator. On the other hand, if you cast a curse that says \"I can't do it\", you will truly be unable to do it (golem effect).",
  },
  'brse-tm-019': {
    question: "As a lead BrSE, please design a \"mentorship program\" to develop future BrSE candidates (engineers).",
    answer: "Mentorship Program:\\n1. Matching: Create a pair with a senior BrSE as a mentor and a candidate as a mentee. \\n2. Gradual participation in practical work: 20% of engineering work will be allocated to \"BrSE assistance (document translation, Q&A support)\". \\n3. Shadowing: Attend client meetings and observe how negotiations proceed. \\n4. Soft skills training: Provide lectures on logical thinking, Japanese language education, critical path thinking, etc. \\n5. Gradual evaluation: Evaluate \"aptitude as a BrSE\" from multiple angles every three months and provide feedback.",
    explanation: "BrSE requires different muscles than engineers. By combining on-site experience with theoretical learning, we support smooth career changes.",
  },
  'brse-tm-020': {
    question: "What is the \"Tuckman Model\" of team development that a BrSE should be aware of?",
    options: [
    "A model for database table normalization",
    "The stages of team growth: Forming",
    "Storming",
    "Norming",
    "Performing",
    "and Adjourning",
    "A specific type of sprint retrospective",
    "A method for estimating code complexity",
    ""
    ],
    answer: 1,
    explanation: "Teams don\\'t become productive immediately. They go through a period of conflict (Storming) before establishing rules (Norming) and reaching high productivity (Performing). BrSEs need to manage the \"Storming\" phase carefully in offshore teams.",
  },
  'brse-tm-021': {
    question: "How do you handle a \"Hero Culture\" in an offshore development team?",
    options: [
    "Give the \"Hero\" a bonus every month",
    "Encourage knowledge sharing",
    "documentation",
    "and pair programming to reduce dependency on a single person",
    "Make everyone else work as hard as the hero",
    "Promote the hero to PM immediately",
    ""
    ],
    answer: 1,
    explanation: "Hero culture (where one person knows everything) is a major risk (Bus Factor = 1). BrSEs should promote a culture where the team succeeds together through collaboration and shared knowledge.",
  },
  'brse-tm-022': {
    question: "What is \"Psychological Safety\" and why is it important in a BrSE managed team?",
    options: [
    "Keeping the office door locked",
    "A belief that one will not be punished or humiliated for speaking up with ideas",
    "questions",
    "concerns",
    "or mistakes",
    "Ensuring every developer has a comfortable chair",
    "Providing free mental health apps",
    ""
    ],
    answer: 1,
    explanation: "In many offshore cultures, admitting a mistake is seen as \"losing face.\" BrSEs must create a safe environment where errors are reported early so they can be fixed before they impact the client.",
  },
  'brse-tm-023': {
    question: "What is the \"Situational Leadership\" theory proposed by Hersey and Blanchard?",
    options: [
    "Leading based on the current weather situation",
    "Adapting your leadership style (Directing",
    "Coaching",
    "Supporting",
    "Delegating) based on the maturity and competence of your team members",
    "Always being the most technical person in the room",
    "Replacing everyone who disagrees with you",
    ""
    ],
    answer: 1,
    explanation: "A BrSE might need to be \"Directing\" with a junior developer but should be \"Delegating\" to a senior Tech Lead. Using the wrong style can cause frustration or micromanagement.",
  },
  'brse-tm-024': {
    question: "Constructive feedback should be given in private (Praise in Public, Critique in Private).",
    answer: "True",
    explanation: "Critiquing someone in front of their peers can cause them to lose face and build resentment. Private feedback is more effective for growth and maintains team harmony.",
  },
  'brse-tm-025': {
    question: "According to Herzberg\\'s Two-Factor Theory, which of the following is a \"Motivator\" (leads to satisfaction) rather than a \"Hygiene\" factor (just prevents dissatisfaction)?",
    options: [
    "Salary",
    "Working conditions",
    "Recognition and Achievement",
    "Company policy",
    ""
    ],
    answer: 2,
    explanation: "Hygiene factors (salary, environment) won\\'t make people work harder, but their absence causes pain. True motivation comes from recognition, the work itself, and growth opportunities.",
  },
  'brse-tm-026': {
    question: "What is the \"GROW\" model in coaching developers?",
    options: [
    "Get Rich Or Whine",
    "Goal",
    "Reality",
    "Options",
    "Will (or Way forward)",
    "Grid",
    "Row",
    "Object",
    "Width",
    "Generate",
    "Review",
    "Optimize",
    "Win",
    ""
    ],
    answer: 1,
    explanation: "GROW is a simple framework for coaching. The BrSE helps the developer define a goal, assess their current reality, brainstorm options, and commit to a specific path forward.",
  },
  'brse-tm-027': {
    question: "How do you handle a \"Communication Gap\" caused by different regional holidays (e.g., Vietnam\\'s Tet vs. Japan\\'s Golden Week)?",
    options: [
    "Force everyone to work on their holidays",
    "Plan resources and milestones far in advance",
    "communicating the holiday schedules and buffer periods to the other side months earlier",
    "Ignore the holidays and hope for the best",
    "Cancel the project during those weeks",
    ""
    ],
    answer: 1,
    explanation: "Holiday management is a classic BrSE challenge. Transparency and early planning are the only ways to avoid \"surprises\" that frustrate the client or the team.",
  },
  'brse-tm-028': {
    question: "What is the \"Halo Effect\" in performance reviews?",
    options: [
    "A bug in the UI rendering",
    "A cognitive bias where one positive trait (e.g.",
    "being good at Java) influences the overall evaluation of the person (e.g.",
    "assuming they are also good at leadership)",
    "A method for tracking server uptime",
    "A type of light in the office",
    ""
    ],
    answer: 1,
    explanation: "BrSEs must guard against bias. Just because a developer has great technical skills doesn\\'t mean their communication or teamwork is also great; they should be evaluated on each criteria separately.",
  },
  'brse-tt-001': {
    question: "Which is the most appropriate English translation of \"requirements definition\"?",
    options: [
    "Detailed Design",
    "Requirements Definition / Requirements Specification",
    "System Testing",
    "Code Review",
    ""
    ],
    answer: 1,
    explanation: "\"Requirements Definition\" = Requirements Definition/Specification. Correspondence between Japanese IT terminology and English: Requirements Definition → Basic Design → Basic Design/High-Level Design, Detailed Design → Detailed Design, Unit Testing → Integration Testing, Comprehensive Test → System Testing. BrSE needs to understand these correspondences accurately.",
  },
  'brse-tt-002': {
    question: "When translating Japanese specifications, what is the English translation for \"screen transition diagram\"?",
    options: [
    "Screen Layout",
    "Screen Transition Diagram / Screen Flow Diagram",
    "Database Schema",
    "Network Topology",
    ""
    ],
    answer: 1,
    explanation: "Screen Transition/Flow Diagram. Related terms: Screen list → Screen List, Screen design document → Screen Design Document/UI Specification, Screen item definition → Screen Item Definition, Screen mockup → Screen Mockup/Wireframe. BrSE must accurately translate screen-related terms and convey them to the development team.",
  },
  'brse-tt-003': {
    question: "In technical translation, the meaning can be accurately conveyed by directly translating the Japanese text.",
    answer: "False",
    explanation: "In technical translation, literal translation often does not make sense. Example: The literal translation of \"Please handle XX\" is \"Please handle XX\", but it is unclear what exactly will be done. BrSE needs to determine the meaning of \"response\" from the context and convert it into concrete actions such as \"fix,\" \"investigate,\" and \"test\" before translating.",
  },
  'brse-tt-004': {
    question: "Which of the following is correct regarding the correspondence between each phase of the \"V-shaped model\" in the Japanese development process?",
    options: [
    "Requirements definition → coding → testing (implemented in order)",
    "Requirements definition ⇔ comprehensive testing, basic design ⇔ integration testing, detailed design ⇔ unit testing — each design phase on the left has a corresponding test phase on the right.",
    "Design and testing are independent and have no correspondence.",
    "All tests are performed together after development",
    ""
    ],
    answer: 1,
    explanation: "Correspondence in the V-shaped model: Requirements definition → comprehensive testing (ST), basic design → integration testing (IT), detailed design → unit testing (UT). This V-shaped model is standard for Japanese system integrators. BrSE must understand the deliverables and testing aspects of each phase and accurately communicate them to the Vietnamese team.",
  },
  'brse-tt-005': {
    question: "Please convert the following Japanese specification into a concrete specification that can be understood by the English/Vietnamese development team: \"If the user enters an invalid value, an appropriate error should be displayed.\"",
    answer: "Specific specifications after conversion:\\n\\n1. Validation Rules:\\n- Email field: Must match email format (RFC 5322). Error: \"Invalid email format\"\\n- Phone field: Must be 10-11 digits",
    explanation: "Ambiguous expressions such as \"appropriately\" and \"incorrectly\" that are often found in Japanese specifications leave a lot of room for interpretation by the development team, leading to variations in implementation. BrSE's role is to convert these into concrete rules (what is illegal, how to display them, when to display them) and then pass them on to the development team.",
  },
  'brse-tt-006': {
    question: "Which is the most important reason why BrSE creates and manages a \"glossary\" in technical translation?",
    options: [
    "To speed up translation",
    "To unify the translation of technical terms within a project and prevent variations in notation between different BrSEs and documents.",
    "To study for the Japanese Language Proficiency Test",
    "To show off your translation skills to clients",
    ""
    ],
    answer: 1,
    explanation: "Glossary is the foundation of translation quality. Example: It is confusing to translate \"screen\" in one place as \"screen\" and in another as \"page\". Key points to manage the glossary: ​​(1) Define project-specific terms, (2) Support in three languages: Japanese, English, and Vietnamese, (3) Add new terms each time, (4) Share with the entire team, and (5) Review and update regularly.",
  },
  'brse-tt-007': {
    question: "Design the translation process for large projects (200+ pages of specifications). Include quality control, scheduling, and utilization of translation tools.",
    answer: "Large-scale specification translation process:\\n\\n1. Preparation phase (1-2 days):\\n- Checking the overall structure and creating a translation plan\\n- Creating/updating a glossary (based on the glossary of an existing project)\\n- Prioritizing: Translating specifications on the critical path first\\n- Preparing translation memory (TM): Reusing past translation assets\\n2. Translation phase (main work):\\n- Generate primary translation with AI translation (DeepL/ChatGPT)\\n- BrSE reviews and corrects technical accuracy (post-editing)\\n- Special attention: reification of ambiguous Japanese expressions, completion of abbreviations, context-sensitive translation\\n- Target per day: 15-20 pages (including post-editing)\\n\\n3. Quality control:\\n- Level 1: Terminology consistency check (verification with glossary)\\n- Level 2: Technical accuracy review (confirmed by senior BrSE or technical lead)\\n- Level 3: Create checklist for ambiguous specifications → Ask client\\n- Checklist: Accuracy of numbers, missing translations of figures, consistency of references\\n\\n4. Tool utilization:\\n- Translation support tool: memoQ",
    explanation: "For large-scale translations, \"translating everything manually\" is inefficient. AI translation + human post-editing is the current optimal solution. AI provides speed, BrSE provides technical accuracy and contextual understanding. Leverage translation memories (TM) to avoid retranslating the same phrases and reuse assets between projects.",
  },
  'brse-tt-008': {
    question: "What points should BrSE pay attention to regarding the expression \"to do 〇〇\" which is often used in Japanese specifications?",
    options: [
    "“To do” is a command, so it can be translated as is.",
    "The level of requirements for “to do” is ambiguous — check with the client whether it falls under “MUST,” “SHOULD,” or “MAY,” before translating and communicating.",
    "You can ignore “to do”",
    "Translate all “to do” as “MUST”",
    ""
    ],
    answer: 1,
    explanation: "RFC 2119 requirement levels: MUST, SHOULD, MAY. All Japanese words for ''〇〇do'' have the same tone, but the actual strength of the request differs. Example: \"Passwords must be at least 8 characters\" (MUST) vs. \"Screen color should be based on blue\" (SHOULD). BrSE must determine the requirement level from the context and accurately communicate it to the development team.",
  },
  'brse-tt-009': {
    question: "As a Lead BrSE, you will design translation quality standards and translation asset management (terminology, translation memory) mechanisms for the entire company. Please include sharing across multiple projects and educating new BrSEs.",
    answer: "Company-wide translation quality control system:\\n\\n1. Translation quality standards:\\n- Quality level definition:\\n - Lv.1 Reference translation (draft): AI translation + minor corrections, for internal sharing\\n - Lv.2 Business use translation: AI + BrSE review, for development team\\n - Lv.3 Official translation: BrSE translation + senior review, for client submission\\n- Quality checklist for each level\\n- Translation error classification: Fatal (reverse meaning), Serious (lack of information), Minor (inconsistency in expression)\\n\\n2. Translation asset management:\\n- Company-wide glossary (master): 1000+ common IT terms\\n- Project glossary: Add project-specific terms\\n- Translation memory: Past translations are stored in a DB, referenced when creating new translations\\n- Management tools: Version management with Airtable/Notion + GitHub\\n- Update flow: BrSE → Review → Master reflection (monthly)\\n\\n3. Sharing between projects:\\n- Glossary master can be accessed by all BrSEs\\n- Translation template collection (frequently used email text, report formats)\\n- Best practice sharing meeting (monthly, 30 minutes)\\n\\n4. New BrSE education:\\n- Translation guideline training (2 hours)\\n- Training on how to use glossary\\n- OJT: Copying seniors' translations → Receive review\\n- Translation test (monthly): Translate the assignment specification, evaluated by senior staff\\n\\n5. KPI:\\n- Number of specification discrepancies due to translation (target: 0 per month)\\n- Terminology unification rate (target: 95% or more)\\n- Translation efficiency (pages/day)\\n- Client translation quality feedback",
    explanation: "Translation quality tends to be individualized, but by managing it as an organization, it is possible to improve quality and efficiency. Glossaries and translation memories are \"translation assets\" and become more valuable as the number of projects increases. Defining quality levels avoids the inefficiency of applying the highest quality translation to every document.",
  },
  'brse-tt-010': {
    question: "What should I be aware of when translating the difference between \"defect\" and \"bug\" in Japanese?",
    options: [
    "They have exactly the same meaning, so you can always translate them as \"bug\".",
    "\"Defect\" has a broader meaning (Defect/Issue/Malfunction) and can refer not only to deviations from specifications but also to hardware problems, so it is used differently depending on the context.",
    "I don't use \"defect\" because it's an old word.",
    "\"Bug\" is not an honorific word"
    ],
    answer: 1,
    explanation: "While \"bug\" is easier to convey to engineers, \"defect\", \"issue\", or \"non-conformity\" may be more appropriate in formal reports for clients.",
  },
  'brse-tt-011': {
    question: "What is the most appropriate English statement when reporting to a client that \"It does not work according to the specifications\"?",
    options: [
    "It does not work as specified.",
    "It is different from the document.",
    "The current behavior deviates from the functional requirements defined in the specification (Section 3.2).",
    "Broken function."
    ],
    answer: 2,
    explanation: "By pointing specifically to \"which part of the specification\" and using the phrase \"deviates from,\" your report will be objective and professional.",
  },
  'brse-tt-012': {
    question: "When explaining the technical term ''Kandokoro'' to the development team, how should I translate it to make it easier to understand?",
    options: [
    "Hand place",
    "Key points / Critical points / Tips for success",
    "I dont know",
    "Skill points"
    ],
    answer: 1,
    explanation: "Figurative expressions unique to Japanese cannot be understood even if translated literally. It is necessary to break down and translate the word into its intended meaning of ''the most important point'' or ''trick.''",
  },
  'brse-tt-013': {
    question: "What should I keep in mind when translating the instruction to \"follow existing practices\"?",
    options: [
    "Just say \"It's the same as before\"",
    "Clarify \"which version and which features\" and specifically translate it as \"Following the existing implementation of [specific module]\"",
    "I interpret this to mean doing things in a new way.",
    "refuse translation"
    ],
    answer: 1,
    explanation: "\"Following\" is a useful word, but for developers it is often unclear \"what to look at,\" so it is necessary for BrSE to specify \"the source code and documents to look at.\"",
  },
  'brse-tt-014': {
    question: "What is the most effective way for BrSE to use AI (ChatGPT) when translating Japanese \"vague specifications\" into English?",
    options: [
    "Translate everything directly to ChatGPT",
    "1. First, let the AI ​​point out \"logical contradictions and deficiencies\" in Japanese. \\n2. BrSE fills in the gaps and then translate it. \\n3. BrSE makes a final check to see if the output translation is technically correct.",
    "Doesn't use AI at all",
    "Let AI create specifications on its own"
    ],
    answer: 1,
    explanation: "AI is good at grammar, but it doesn't notice the context of the project or the \"missing information\". BrSE가The strongest system is one in which AI helps with \"upstream interpretation\" and humans take the final \"responsibility.\"",
  },
  'brse-tt-015': {
    question: "IT terminology abbreviations (e.g. API, DB, UI) are generally written in alphabetical order even in Japanese specifications.",
    answer: "True",
    explanation: "These are terms that are common throughout the world, and forcing them to open in Japanese (application interfaces, etc.) will actually make it more difficult to understand.",
  },
  'brse-tt-016': {
    question: "If a client says, \"Please proceed in the direction of ...\", how should it be interpreted when translating?",
    options: [
    "It hasn't been decided yet so you have to wait.",
    "Interpreted as \"Approve the policy of ...\" and translated as \"Please proceed based on [current proposed plan]\"",
    "means to go in the opposite direction",
    "means to do it properly"
    ],
    answer: 1,
    explanation: "In Japanese, \"in the direction of\" often means substantial consent (a green light). BrSE needs to translate this as a clear statement of intent and accelerate development.",
  },
  'brse-tt-017': {
    question: "As the lead BrSE, what is the purpose of creating a project-wide \"collection of NG words and forbidden phrases (e.g. prohibition of ambiguous command words)\"?",
    options: [
    "to be stricter in language",
    "To forcibly increase the resolution of communication and reduce rework costs due to discrepancies at the company-wide level.",
    "To make you forget Japanese",
    "To scare young BrSEs"
    ],
    answer: 1,
    explanation: "By creating rules that prohibit words such as \"Good\" and \"Good,\" and force numbers and illustrations, engineers' productivity will increase as a result.",
  },
  'brse-tt-018': {
    question: "In technical translation, what is the advantage of rewriting sentences that are \"passive\" (to be done) into \"active\" (to be done)?",
    options: [
    "fewer characters",
    "“Who/what” performs the action (subject) becomes clear, making it easier to match the system implementation logic.",
    "Because Japanese is cooler",
    "There is no particular advantage"
    ],
    answer: 1,
    explanation: "Japanese specifications often have passive sentences with no subject, but programs are active blocks of logic. \"Subject supplementation\" is one of the most valuable tasks in BrSE translation.",
  },
  'brse-tt-019': {
    question: "As lead BrSE, you will design a system to ensure that a bug report written by a Vietnamese engineer in \"broken Japanese\" does not damage the client's trust.",
    answer: "Mechanism for improving report quality:\\n1. Thorough use of templates: Fix Japanese patterns (situation, expected value, actual, cause) and have them just fill in the templates. \\n2. Incorporating AI automatic proofreading: Install a button in Slack or Jira to \"convert to natural Japanese before posting\". \\n3. BrSE inspection flow: Reports that are visible to clients are given a final check by BrSE with the status set to \"Pending Review.\" \\n4. Japanese feedback: Gently correct your Japanese mistakes and share them with your team as phrases you can use next time.",
    explanation: "It's harsh to expect perfect Japanese from engineers, but we do need to provide professional reports to our clients. We cover both technology and process.",
  },
}
