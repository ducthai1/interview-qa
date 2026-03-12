import type { QuestionTranslationMap } from '../types'

export const brseEn: QuestionTranslationMap = {
  'brse-jc-001': {
    question: `Which of the following is the correct meaning of "Horensou"?`,
    options: [
      `Japanese vegetable names`,
      `Reporting, communication, and consultation — basic communication principles in Japanese business`,
      `Japanese accounting procedures`,
      `Japanese quality control method`
    ],
    explanation: `Horenso is one of the most important principles in Japanese business. Reporting (telling the government the results), communication (sharing information with related parties), and consultation (asking for advice when you have a problem or are unsure of a decision). Especially in offshore development, the lack of communication leads to client anxiety. The golden rule is to report bad news as soon as possible.`,
  },
  'brse-jc-002': {
    question: `When exchanging business cards in Japan, it is okay to put the other person's business card in your pocket immediately after receiving it.`,
    explanation: `A business card is considered to be a person's alter ego. Correct manners: 1) Accept the card with both hands, 2) Say "Thank you, please," 3) Place the business card you received on the table to your left when looking at it (during a meeting), and 4) Place it in the business card holder after the interview. It is also not acceptable to place objects or write notes on business cards.`,
  },
  'brse-jc-003': {
    question: `What is "nemawashi" in Japanese business?`,
    options: [
      `Preparing meeting minutes`,
      `Informally consult with stakeholders to obtain agreement and understanding before formal meetings.`,
      `Creating a project estimate`,
      `Evaluating team members`
    ],
    explanation: `Nemawashi is an important concept in Japanese business culture. If you make a new proposal \`\`out of the blue'' in a formal meeting, stakeholders may object. By giving individual explanations, listening to opinions, and making necessary adjustments in advance, it will be easier to reach an agreement at the meeting. As a BrSE, it is effective to do some research before making a proposal to the Japanese side.`,
  },
  'brse-jc-004': {
    question: `What are the typical problems that Japan's "reading the air" culture causes in offshore development?`,
    options: [
      `Development speed slows down`,
      `Discrepancies in the recognition of specifications occur because clients do not explicitly convey what they implicitly expect — BrSE plays the role of converting tacit knowledge into explicit knowledge`,
      `Team atmosphere deteriorates`,
      `Translation costs increase`
    ],
    explanation: `Japanese clients sometimes communicate with the assumption that they will understand without you having to say it. Examples: "Please make it look nice", "This is how it would normally be". However, the Vietnamese side tends to implement "just what they are told". A key role of BrSE is to bridge this cultural gap — documenting implicit expectations into concrete specifications.`,
  },
  'brse-jc-005': {
    question: `What is Japan's "Ringi" system? How does it affect BrSE's work?`,
    options: [
      `Japanese quality inspection system`,
      `A decision-making process in which proposals and decisions are documented and circulated in sequence to relevant management for approval — BrSEs need to be flexible in their schedules as this causes decisions to take time.`,
      `Japanese tax procedures`,
      `How to review code for a project`
    ],
    explanation: `Ringi is a consensus-building process in Japanese organizations. Create a proposal and get an approval stamp (stamp) from the person in charge → section manager → manager → executive in order. For this reason: (1) It takes several days to several weeks to make a decision, (2) BrSE needs to create a schedule with plenty of time for approving quotations and requesting schedule changes, and (3) It is possible to make the approval process smoother by making arrangements in advance.`,
  },
  'brse-jc-006': {
    question: `How should BrSE deal with the difference between "honne" and "tatemae" in Japanese business?`,
    options: [
      `Always believe in the truth and act`,
      `There is no need to distinguish between true intentions and tatemae.`,
      `Find out their true feelings not only in meetings (official occasions) but also in informal settings (lunch, drinking parties), and make decisions based on information from both. Prevent discrepancies in recognition by checking with documents`,
      `Ask directly, “Please tell me what you really think.”`
    ],
    explanation: `Honne (true feelings) and tatemae (official opinion) are characteristics of Japanese communication. There are many formal statements at meetings, and it is easier to express your true feelings in individual conversations and informal settings. As a BrSE: ① Don't feel relieved just by superficial agreement. ② Create opportunities for one-on-one confirmation. ③ Be sure to document decisions and get confirmation. ④ Double-check, \`\`Is this understanding correct?''`,
  },
  'brse-jc-007': {
    question: `Please design a training program to teach Vietnamese development teams "how to work with Japanese clients." Include cultural considerations, communication differences, and common mistakes.`,
    answer: `Training program “How to work with Japanese clients”: 

1. Basic concepts of Japanese culture (1 hour): 
- The importance of Horenso and how to put it into practice 
- The concept of honne and tatemae (explained with examples) 
- Culture of reading the atmosphere → importance of explicit confirmation 
- Culture of punctuality (acting 5 minutes early) 
- Expected level of quality ("Aim for perfection" rather than "It's OK if it works") 

2. Differences in Communication (1 hour): 
- Direct (Vietnam) vs indirect (Japan) 
- "Yes" may not mean "I agree" but "I'm listening" 
- The true meaning of "I'll consider it" and "It's difficult." 
- Silence is time to think, don't rush it. 
- Level of politeness of email 

3. Common failures (case studies, 1 hour): 
- Case 1: A feature not written in the specifications was expected as "natural" but was not implemented. 
- Case 2: Found a bug but reported it late and lost the client's trust 
- Case 3: I said "I can do it" but it was actually difficult and I couldn't meet the deadline. 
- Case 4: Insufficient testing, client quickly discovers bugs and loses confidence in quality 
- In each case: discuss what went wrong and what should have been done 

4. Practical exercise (1 hour): 
- Role play: Report progress to Japanese client role (BrSE) 
- Email creation: Write a delay report email 
- Specification confirmation: Create a concrete question list from vague specifications 

5. DO/DON'T Checklist: 
- DO: Report problems quickly, check specifications in documents, and prioritize quality 
- DON'T: hide the problem, proceed with "probably okay", skip the test`,
    explanation: `The biggest challenge for Vietnamese developers when working with Japanese clients is the difference in cultural expectations. They differ not only in their technical capabilities, but also in their communication methods, quality expectations, and the frequency and content of reports. Training using case studies is more practical and effective than abstract cultural theory.`,
  },
  'brse-jc-008': {
    question: `Which of the following should BrSE focus on most when building relationships of trust with Japanese clients?`,
    options: [
      `perfect Japanese ability`,
      `offer a cheap quote`,
      `Consistency in keeping promises (delivery dates, quality, frequency of communication) — Make sure to carry out even small promises, and consult in advance about things that cannot be done.`,
      `Participating in every Japanese drinking party`
    ],
    explanation: `What Japanese people value most is "reliability." Trust is built not by big achievements, but by the accumulation of small daily promises: (1) keep what you say, (2) meet deadlines (make promises with plenty of time), (3) don't lower quality standards, and (4) report problems early without hiding them. Conversely, once trust is lost, it takes a very long time to recover.`,
  },
  'brse-jc-009': {
    question: `Please explain the multi-subcontracting structure (general contractor structure) of Japanese SIers (system integrators), and design the challenges faced when a Vietnamese offshore team is positioned within this structure and countermeasures as a BrSE lead.`,
    answer: `Multiple subcontracting structure in Japan's IT industry: 

Structure description: 
- Primary reception (primary contractor): Major system integrators (NTT Data, Fujitsu, etc.) receive orders from clients. 
- Secondary reception: Mid-sized SIer receives some orders from the main contractor 
- 3rd order or below: Subcontracted to a smaller company 
- Vietnam Offshore: Usually 2nd to 3rd subcontractor position 

Challenge: 
1. Communication distance: End client → primary contractor → secondary recipient → Vietnam (message game) 
2. Deterioration of requirements: Information is missing or altered at each layer 
3. Ambiguity of quality requirements: original quality standards are not accurately communicated 
4. Responsibility: Responsibility when a problem occurs is unclear 
5. Pressure on profit margin: Orders received at low unit prices due to multiple margins 

Measures: 
1. Information quality control: 
- Specification completeness checklist (clarify ambiguous areas and ask questions upon receipt) 
- Establishment of a formal flow for changing specifications (no verbal instructions will be accepted) 
- Involve the prime contractor in review meetings as much as possible 

2. Quality Assurance: 
- Clarify quality standards at the time of contract (test coverage, bug rate, document quality) 
- Detailed report of test results in Japanese (shows attitude towards quality) 
- Provided training on Japanese quality standards to Vietnamese team 

3. Relationship building: 
- Securing direct communication channels (reducing the middle layer as much as possible) 
- Build trust with stakeholders through regular visits to Japan 
- Establish a presence through value-added proposals (not just what is said, but also suggestions for improvements) 

4. Business strategy: 
- Strategy to acquire direct transactions (prime deals) based on track record 
- Differentiate yourself with technical capabilities and quality and avoid price competition 
- Building expertise in specific domains (Fintech, EC, etc.)`,
    explanation: `The multiple subcontracting structure of the Japanese IT industry poses challenges for Vietnam Offshore in terms of both information quality and profit margins. As a lead BrSE, it is important to have a system to prevent information from deteriorating, to "visualize" quality, and to have a strategy for acquiring prime projects in the medium to long term.`,
  },
  'brse-jc-010': {
    question: `As the end of the Japanese company's fiscal year (end of March) approaches, what precautions do I need to take as a BrSE lead?`,
    options: [
      `you don't need to do anything special`,
      `In preparation for sudden additions of projects due to budget exhaustion, changes in personnel due to personnel changes, and contract renewal negotiations for next year: (1) Secure sufficient capacity, (2) Prepare proposals for next year, (3) Prepare handover documents.`,
      `take a vacation`,
      `Plan a team year-end party`
    ],
    explanation: `The end of the fiscal year in Japan (the end of March) is an important time: (1) There is a possibility that additional projects will suddenly come in due to the budget being exhausted (securing resources), (2) Personnel in charge (PM, SE, PL) will change due to personnel changes in April (handover handling), and (3) Contract renewal and estimate submission for next year (prepare from January-February). As a Lead BrSE, you will be able to predict and proactively predict the annual year-end cycle and demonstrate your credibility.`,
  },
  'brse-jbc-001': {
    question: `What is the correct way to use "Thank you for your hard work" in a business email?`,
    options: [
      `Used as a greeting to customers outside the company`,
      `Used as a greeting to colleagues and superiors within the company (use \`\`Thank you for your help'' outside the company)`,
      `Use as a self-introduction to someone you are meeting for the first time`,
      `use as email subject`
    ],
    explanation: `"Thank you for your hard work" is a greeting for internal use. For customers outside the company, we use "Thank you for your help" and "Thank you for your continued support." "Thank you for your hard work" is an expression used between superiors and subordinates, so be careful not to use it with your superiors.`,
  },
  'brse-jbc-002': {
    question: `In Japanese business emails, it is okay to omit the subject line.`,
    explanation: `Be sure to write the subject line. In Japanese business email, it is good manners to make the subject line clear of the content. For example: "[Confirmation] 〇〇Project Progress Report (March)", categorize by [] and write the specific content. Emails without a subject line can also be mistaken for spam.`,
  },
  'brse-jbc-003': {
    question: `What is the correct expression to use when addressing the phone and identifying your company?`,
    options: [
      `“This is Tanak from 〇〇 Co., Ltd.”`,
      `"I'm Tanak, I'm from 〇〇 company."`,
      `“This is Mr. Tanak from 〇〇 company.”`,
      `“My name is Tanak” (no company name)`
    ],
    explanation: `When you call, say \`\`This is 〇〇 from 〇〇 Co., Ltd.'' and give your company name + name. I don't use "san" for myself. \`\`Maimasu'' is a polite expression of \`\`desu.'' When calling from outside, the basic message is "Thank you for calling. This is 〇〇 from 〇〇 Co., Ltd.".`,
  },
  'brse-jbc-004': {
    question: `What is the difference between "I understand" and "I understand"?`,
    options: [
      `They have the same meaning, so it doesn't matter which one you use.`,
      `"I understand" is a polite expression used for bosses and customers, and "I understand" is a casual expression used for colleagues and subordinates.`,
      `"I understand" is a more polite expression.`,
      `"I understand" can only be used in written form.`
    ],
    explanation: `"I understand" is the most polite expression, including humility, and is appropriate for customers and superiors. "I understand" is less polite and may be rude to your boss or customers. Stages: I understand (most polite) > I understand > I understand > I understand (casual)`,
  },
  'brse-jbc-005': {
    question: `When someone says, "Yes, we will consider it," at a meeting in Japan, what does that really mean?`,
    options: [
      `Meaning to consider positively`,
      `More likely to be an indirect refusal — Japanese business culture tends to avoid a direct “no.”`,
      `means immediate approval`,
      `It only means to consult someone else`
    ],
    explanation: `In Japanese business communication, it is important to "read the atmosphere". \`\`I'll consider it,'' \`\`It's difficult,'' and \`\`I'll give it a positive consideration'' often mean an indirect refusal. As a BrSE, it is important to understand the client's true intentions and accurately convey them to the Vietnamese team. It is effective to specifically ask, \`\`When can you respond by?''`,
  },
  'brse-jbc-006': {
    question: `Which is the most appropriate structure for an apology email to a Japanese client?`,
    options: [
      `Cause explanation → Apology → Countermeasures`,
      `Apology → Cause explanation → Countermeasures → Measures to prevent recurrence → Apology again`,
      `Countermeasure → Cause → Apology`,
      `Apology only (no details needed)`
    ],
    explanation: `In Japanese business, an apology comes first, and it consists of: ① First, an apology (\`\`We apologize for the inconvenience this time caused.'') ② Explanation of the cause (facts, not excuses) ③ Temporary measures (immediate action taken) ④ Permanent measures (measures to prevent recurrence) ⑤ Apology again and future determination. This structure is most effective in restoring trust.`,
  },
  'brse-jbc-007': {
    question: `Which kind of honorific language is used for "estimate", "proposal", and "meeting"?`,
    options: [
      `humble language — understate one's actions`,
      `Polite language — make the ending polite`,
      `Honorific language - Expressing respect for someone's actions "o/go" + noun is also used as a beautifying word`,
      `Normal expressions that are not particularly honorific expressions`
    ],
    explanation: `The usage of adding \`\`o'' and \`\`go'' to nouns is classified as bikago (a type of polite language). In \`\`I will send you a quote,'' \`\`quote'' is a beautiful word, and \`\`I will send it to you'' is a humble word. Correct use of honorific language: Understanding honorific language (for the other person's actions), kenjogo (for one's own actions), and polite language (\`\`desu'' and \`\`masu'') is essential for BrSE.`,
  },
  'brse-jbc-008': {
    question: `Please write the subject line and opening line of a business email reporting delivery delays to a Japanese client.`,
    answer: `Subject: [Report] 〇〇Project Request for change in delivery schedule 

〇〇 Co., Ltd. 
〇〇 Department〇〇 

Thank you for your continued support. 
I am 〇〇 from △△ Co., Ltd. 

We have a report regarding the 〇〇 project. 
We apologize for the inconvenience, but from the originally scheduled delivery date (March 15th) 
We anticipate a delay of 3 business days. 

■ Cause of delay 
During the integration test of 〇〇 function, a defect related to 〇〇 was discovered. 
Corrections and retesting are taking longer than expected. 

■ Estimated delivery date after change 
Wednesday, March 18, 2026 

■ Countermeasures 
・Accelerate response by increasing the number of development team members (additional 2 people) 
・Shorter schedule by running tests in parallel 

We apologize again for the inconvenience. 
We will strive to improve our processes to prevent this from happening in the future. 

Thank you for your understanding.`,
    explanation: `Structure of this email: ① Make the content clear in the subject line (make it clear that it is bad news) ② Official address and greeting ③ Report the problem ④ Explanation of the cause (be specific and concise) ⑤ New deadline ⑥ Countermeasures (specific actions) ⑦ Apology and determination to prevent recurrence. As a BrSE, the key to maintaining trust is to show "transparency" and "concrete measures" when reporting bad news.`,
  },
  'brse-jbc-009': {
    question: `What are the most important communication skills for a BrSE in specification confirmation meetings with Japanese clients?`,
    options: [
      `speak with perfect Japanese grammar`,
      `Ability to ask questions to clarify ambiguous expressions while taking minutes - ability to ask questions such as "What exactly does 〇〇 mean?" and "Can you give me an example?"`,
      `Being able to tell jokes in Japanese`,
      `speak a lot during a meeting`
    ],
    explanation: `The most important skill for BrSE is the ability to ask questions that eliminate ambiguity. Japanese clients often communicate specifications implicitly, using vague expressions such as "in a good way," "appropriately," and "in a common way." BrSE requires: 1) eliciting specific numbers and examples, 2) visually confirming with diagrams and mockups, and 3) documenting the confirmation details in minutes and obtaining approval.`,
  },
  'brse-jbc-010': {
    question: `Design a communication plan between the Japanese client and the Vietnamese development team. Please consider time differences, language, and cultural differences when creating your BrSE plan.`,
    answer: `Communication plan: 

1. Regular meeting structure: 
- Morning meeting (9:00 Japan time = 7:00 Vietnam time): 15 minutes, Japanese, facilitated by BrSE 
- Weekly report meeting (Friday 16:00 JST): 30 minutes, Japanese, progress/issues/next week's schedule 
- Monthly report meeting (Friday of the month 15:00 JST): 1 hour, Japanese, KPI/risk/improvement proposal 

2. Daily communication: 
- Slack/Teams: Japanese channel (for clients) + Vietnamese channel (for internal use) 
- BrSE monitors, translates and bridges both channels 
- Questions answered within 24 hours (taking into account time differences) 
- In case of emergency: Phone → Email → Chat priority 

3. Document management: 
- Specifications: Original Japanese → Translated/summarized into Vietnamese by BrSE 
- Design document: Created in Vietnamese → Translated by BrSE for Japanese review 
- Minutes: Prepared in Japanese by BrSE, approved by client 
- Quality report: unified with Japanese template 

4. Addressing cultural gaps: 
- Vietnamese side: Check even if you say there is no problem (sometimes people hesitate to report due to face-conscious culture) 
- Japanese side: Make ambiguous expressions concrete and then convey them to the Vietnamese side 
- Escalation: Thorough rules to report problems to BrSE as soon as possible 

5. Tools: 
- Project management: Jira/Redmine (bilingual setting) 
- Documentation: Confluence 
- Communication: Slack + Zoom 
- Translation support: Utilization of AI translation (DeepL) with reviews`,
    explanation: `BrSE's communication plan must simultaneously solve three issues: language (bridging Japanese ⇔ Vietnamese), time difference (effective use of overlapping time), and culture (Japan's indirect communication ⇔ Vietnam's face-to-face culture). It is important to set regular meeting times, manage the language of documents, and take concrete measures to address cultural gaps.`,
  },
  'brse-jbc-011': {
    question: `How should BrSE respond if a Japanese client says, "That's a bit tough?"`,
    options: [
      `Just tell the Vietnamese side that it's a little difficult.`,
      `It essentially means "It's impossible/unacceptable," so dig deeper to find out what the problem is and suggest an alternative.`,
      `Reply with “I’ll do my best” and proceed.`,
      `Change to another topic and check later`
    ],
    explanation: `"It's a little harsh" is a Japanese euphemism that often means "impossible/unacceptable." As a BrSE: ① Investigate in detail, \`\`Which part is specifically difficult?'' ② Prepare an alternative plan, ③ Accurately convey the substantive meaning (NO) to the Vietnamese side without translating the nuances. Literal translations are misleading.`,
  },
  'brse-jbc-012': {
    question: `As a lead BrSE, you will design a Japanese business communication training program for new junior BrSEs. Please include a 3 month training plan.`,
    answer: `Junior BrSE training program (3 months): 

Month 1: Basic skills development 
- Week 1-2: Business Japanese basics (honorific language system: how to use honorific language, humble language, and polite language) 
- Week 2: Business email writing (standard sentences, how to write subject lines, CC/BCC rules) 
- Week 3: Telephone response basics (role play practice of receiving and calling calls) 
- Week 4: Minute writing practice (attending senior BrSE meetings and writing minutes, feedback on corrections) 
- Evaluation: Created 10 business emails → Senior review 

Month 2: Practical skill development 
- Week 5-6: Simulation of specification confirmation meeting (senior BrSE plays the role of a Japanese person and practices using ambiguous expressions) 
- Week 7: How to write a problem report/apology email (practice based on actual past cases) 
- Week 8: Practice creating customer reports (weekly/monthly reports) 
- OJT: Attend senior BrSE meetings, prepare questions → actually ask 1-2 questions 
- Evaluation: Specification confirmation role play test (can you derive specific specifications from vague requirements?) 

Month 3: Applied skill development 
- Week 9-10: Estimate report/schedule negotiation practice 
- Week 11: Complaint handling simulation (ability to respond in difficult situations) 
- Week 12: Actual client support on small projects (backed up by seniors) 
- Final evaluation: Mock project presentation (15 minutes project report presentation in Japanese) 

Continuous learning: 
- Support for acquiring JLPT N2 or higher 
- Monthly BrSE study session (case study sharing) 
- Regular sharing of client satisfaction feedback 
- Mentorship system (pairing with senior BrSE)`,
    explanation: `BrSE's Japanese communication skills cannot be acquired through classroom lectures alone. We will develop you in stages: basics (honorific language/email) → practice (meeting simulation) → application (actual client handling). In particular, role play (handling ambiguous Japanese expressions) and OJT (attending an actual meeting) are the most effective. After 3 months, I aim to reach a level where I can deal with clients independently.`,
  },
  'brse-jbc-013': {
    question: `Which communication failure should BrSE most avoid when building relationships with Japanese clients?`,
    options: [
      `Not being able to use honorific language perfectly`,
      `Hiding problems or reporting them late — In Japanese business, \`\`horenso'' (reporting, communication, and consultation) is the basis of trust, and early reporting of bad news is most important.`,
      `Japanese accent is not perfect`,
      `Not speaking much at meetings`
    ],
    explanation: `What is most disliked in Japanese business culture is \`\`covering up problems'' and \`\`delaying reporting.'' Mistakes in honorific language are acceptable, but \`\`I knew about it but didn't report it'' completely loses credibility. Horenso's principles: (1) Report bad news quickly; (2) Reports consist of facts → impacts → countermeasures; and (3) It's better to share quickly, even if you preface it with "We're still confirming it."`,
  },
  'brse-tt-001': {
    question: `Which is the most appropriate English translation of "requirements definition"?`,
    options: [
      `Detailed Design`,
      `Requirements Definition / Requirements Specification`,
      `System Testing`,
      `Code Review`
    ],
    explanation: `"Requirements Definition" = Requirements Definition/Specification. Correspondence between Japanese IT terminology and English: Requirements Definition → Basic Design → Basic Design/High-Level Design, Detailed Design → Detailed Design, Unit Testing → Integration Testing, Comprehensive Test → System Testing. BrSE needs to understand these correspondences accurately.`,
  },
  'brse-tt-002': {
    question: `When translating Japanese specifications, what is the English translation for "screen transition diagram"?`,
    options: [
      `Screen Layout`,
      `Screen Transition Diagram / Screen Flow Diagram`,
      `Database Schema`,
      `Network Topology`
    ],
    explanation: `Screen Transition/Flow Diagram. Related terms: Screen list → Screen List, Screen design document → Screen Design Document/UI Specification, Screen item definition → Screen Item Definition, Screen mockup → Screen Mockup/Wireframe. BrSE must accurately translate screen-related terms and convey them to the development team.`,
  },
  'brse-tt-003': {
    question: `In technical translation, the meaning can be accurately conveyed by directly translating the Japanese text.`,
    explanation: `In technical translation, literal translation often does not make sense. Example: The literal translation of "Please handle XX" is "Please handle XX", but it is unclear what exactly will be done. BrSE needs to determine the meaning of "response" from the context and convert it into concrete actions such as "fix," "investigate," and "test" before translating.`,
  },
  'brse-tt-004': {
    question: `Which of the following is correct regarding the correspondence between each phase of the "V-shaped model" in the Japanese development process?`,
    options: [
      `Requirements definition → coding → testing (implemented in order)`,
      `Requirements definition ⇔ comprehensive testing, basic design ⇔ integration testing, detailed design ⇔ unit testing — each design phase on the left has a corresponding test phase on the right.`,
      `Design and testing are independent and have no correspondence.`,
      `All tests are performed together after development`
    ],
    explanation: `Correspondence in the V-shaped model: Requirements definition → comprehensive testing (ST), basic design → integration testing (IT), detailed design → unit testing (UT). This V-shaped model is standard for Japanese system integrators. BrSE must understand the deliverables and testing aspects of each phase and accurately communicate them to the Vietnamese team.`,
  },
  'brse-tt-005': {
    question: `Please convert the following Japanese specification into a concrete specification that can be understood by the English/Vietnamese development team: "If the user enters an invalid value, an appropriate error should be displayed."`,
    answer: `Specific specifications after conversion: 

1. Validation Rules: 
- Email field: Must match email format (RFC 5322). Error: "Invalid email format" 
- Phone field: Must be 10-11 digits, numbers only. Error: "Phone must be 10-11 digits" 
- Required fields: Cannot be empty. Error: "This field is required" 
- Date field: Must be valid date, not in the past. Error: "Please enter a valid date" 

2.Error Display Rules: 
- Error message appears below the input field in red (#DC2626) 
- Error icon (⚠️) appears to the left of the message 
- Field border changes to red 
- Error is shown immediately on blur (when user leaves the field) 
- All errors cleared when valid input is entered 

3. Form Submission: 
- If any validation error exists, disable submit button 
- Show summary of all errors at the top of the form on submit attempt`,
    explanation: `Ambiguous expressions such as "appropriately" and "incorrectly" that are often found in Japanese specifications leave a lot of room for interpretation by the development team, leading to variations in implementation. BrSE's role is to convert these into concrete rules (what is illegal, how to display them, when to display them) and then pass them on to the development team.`,
  },
  'brse-tt-006': {
    question: `Which is the most important reason why BrSE creates and manages a "glossary" in technical translation?`,
    options: [
      `To speed up translation`,
      `To unify the translation of technical terms within a project and prevent variations in notation between different BrSEs and documents.`,
      `To study for the Japanese Language Proficiency Test`,
      `To show off your translation skills to clients`
    ],
    explanation: `Glossary is the foundation of translation quality. Example: It is confusing to translate "screen" in one place as "screen" and in another as "page". Key points to manage the glossary: ​​(1) Define project-specific terms, (2) Support in three languages: Japanese, English, and Vietnamese, (3) Add new terms each time, (4) Share with the entire team, and (5) Review and update regularly.`,
  },
  'brse-tt-007': {
    question: `Design the translation process for large projects (200+ pages of specifications). Include quality control, scheduling, and utilization of translation tools.`,
    answer: `Large-scale specification translation process: 

1. Preparation phase (1-2 days): 
- Check the overall structure and create a translation plan 
- Create/update glossary (based on existing project glossary) 
- Prioritization: Translate specifications on the critical path first 
- Translation memory (TM) preparation: reuse past translation assets 

2. Translation phase (main work): 
- Generate primary translation with AI translation (DeepL/ChatGPT) 
- BrSE reviewed and corrected for technical accuracy (post-edited) 
- Special attention: reification of ambiguous Japanese expressions, abbreviation completion, context-sensitive translation 
- Daily goal: 15-20 pages (including post-editing) 

3. Quality control: 
- Level 1: Terminology consistency check (verification with glossary) 
- Level 2: Technical accuracy review (verified by senior BrSE or technical lead) 
- Level 3: Create a checklist for ambiguous specifications → Questions to the client 
- Checklist: Accuracy of numbers, missing translations of figures and tables, consistency of references 

4. Tool utilization: 
- Translation support tools: memoQ, Memsource (translation memory utilization) 
- AI translation: DeepL API (improving efficiency of primary translation) 
- Terminology management: Excel or dedicated tools (MultiTerm, etc.) 
- Version control: Specification version control and differential translation 

5. Differential translation (compatible with specification changes): 
- Translate only the changed parts (no need to retranslate the whole thing) 
- Track translation status with change control log 
- Confirm the scope of impact of specification changes and update related parts.`,
    explanation: `For large-scale translations, "translating everything manually" is inefficient. AI translation + human post-editing is the current optimal solution. AI provides speed, BrSE provides technical accuracy and contextual understanding. Leverage translation memories (TM) to avoid retranslating the same phrases and reuse assets between projects.`,
  },
  'brse-tt-008': {
    question: `What points should BrSE pay attention to regarding the expression "to do 〇〇" which is often used in Japanese specifications?`,
    options: [
      `“To do” is a command, so it can be translated as is.`,
      `The level of requirements for “to do” is ambiguous — check with the client whether it falls under “MUST,” “SHOULD,” or “MAY,” before translating and communicating.`,
      `You can ignore “to do”`,
      `Translate all “to do” as “MUST”`
    ],
    explanation: `RFC 2119 requirement levels: MUST, SHOULD, MAY. All Japanese words for \`\`〇〇do'' have the same tone, but the actual strength of the request differs. Example: "Passwords must be at least 8 characters" (MUST) vs. "Screen color should be based on blue" (SHOULD). BrSE must determine the requirement level from the context and accurately communicate it to the development team.`,
  },
  'brse-tt-009': {
    question: `As a Lead BrSE, you will design translation quality standards and translation asset management (terminology, translation memory) mechanisms for the entire company. Please include sharing across multiple projects and educating new BrSEs.`,
    answer: `Company-wide translation quality control system: 

1. Translation quality standards: 
- Quality level definition: 
- Lv.1 Reference translation (draft): AI translation + minor corrections, for internal sharing 
- Lv.2 Business use translation: AI+BrSE review, for development teams 
- Lv.3 Official translation: BrSE translation + senior review, for client submission 
- Quality checklist for each level 
- Translation error classification: fatal (inverted meaning), serious (missing information), minor (inconsistent expression) 

2. Translation asset management: 
- Company-wide glossary (master): 1000+ common IT terms 
- Project Glossary: Add project-specific terms 
- Translation memory: DB of past translations, referenced when creating new translations 
- Management tools: Airtable/Notion + version management with GitHub 
- Update flow: BrSE → Review → Master reflection (monthly) 

3. Cross-project sharing: 
- Glossary master is accessible to all BrSEs 
- Collection of translation templates (frequently used email texts, report formats) 
- Best practice sharing meeting (monthly, 30 minutes) 

4. New BrSE education: 
- Translation guideline training (2 hours) 
- Training on how to use the glossary 
- OJT: Copy your senior's translation → Receive a review 
- Translation test (monthly): The assignment specification is translated and evaluated by seniors. 

5.KPI: 
- Number of specification discrepancies due to translation (target: 0 per month) 
- Terminology uniformity rate (target: 95% or more) 
- Translation efficiency (pages/day) 
- Client translation quality feedback`,
    explanation: `Translation quality tends to be individualized, but by managing it as an organization, it is possible to improve quality and efficiency. Glossaries and translation memories are "translation assets" and become more valuable as the number of projects increases. Defining quality levels avoids the inefficiency of applying the highest quality translation to every document.`,
  },
  'brse-rs-001': {
    question: `Which of the following is correct regarding the role of "requirements definition document" in Japanese system development?`,
    options: [
      `A document that summarizes the program source code`,
      `A document that defines the client's business requirements and functional and non-functional requirements for the system — the starting point for development`,
      `Developer evaluation sheet`,
      `Report of test results`
    ],
    explanation: `The requirements definition document is the top-level document that defines "what to create." Describe business flow, functional requirements, non-functional requirements (performance, security, etc.), and restrictions. BrSE must accurately understand this document and communicate it to the development team.`,
  },
  'brse-rs-002': {
    question: `What is the difference between "basic design document" and "detailed design document"?`,
    options: [
      `different versions of the same content`,
      `The basic design document describes the overall system structure, screen transitions, and DB design (WHAT), and the detailed design document describes the logic and algorithms inside the module (HOW).`,
      `The basic design document is written in Japanese, and the detailed design document is written in English.`,
      `The basic design document is created by the client, and the detailed design document is created by the developer.`
    ],
    explanation: `Basic design (external design): Overall system architecture, screen design, DB design, API design, screen transitions — parts visible to the user. Detailed design (internal design): Processing logic, class design, and sequence diagram for each module — detailed specifications for developers. For BrSE, it is especially important to understand the basic design document.`,
  },
  'brse-rs-003': {
    question: `Japanese specifications cannot be changed once they are finalized.`,
    explanation: `Specification changes occur on a daily basis. The important thing is the change management process: ① Receipt of change request → ② Impact range analysis → ③ Estimation of impact on man-hours and schedule → ④ Client approval → ⑤ Update of design documents and test plans → ⑥ Implementation. It is important that BrSE conducts change management through a formal process and does not make changes based solely on verbal instructions.`,
  },
  'brse-rs-004': {
    question: `What is the "CRUD table" often used in Japanese specifications?`,
    options: [
      `cost management table`,
      `A table listing which operations each screen/function performs on data: Create, Read, Update, or Delete.`,
      `Team structure chart`,
      `Test case list`
    ],
    explanation: `CRUD table (CRUD Matrix) visualizes the relationship between data and functions. Arrange data entities (tables) on the vertical axis and functions/screens on the horizontal axis, and write C/R/U/D in each cell. This makes it possible to 1) confirm data consistency, 2) discover missing functions, and 3) analyze the scope of impact. BrSE understands data flow based on CRUD tables.`,
  },
  'brse-rs-005': {
    question: `Please read the following information from the Japanese screen specifications and convert it into development instructions for the Vietnamese development team: "User registration screen - name (required), email address (required, format check), password (required, 8 or more characters, mixed alphanumeric characters), confirmation password"`,
    answer: `User Registration Screen Specification: 

| Field | Type | Required | Validation Rules | Error Message | 
|-------|------|----------|-----------------|---------------| 
| Full Name | text input | ✅ | Max 100 chars, no special characters | "Please enter your name" | 
| Email | email input | ✅ | RFC5322 format, unique in DB | "Please enter a valid email address" | 
| Password | password input | ✅ | Min 8 chars, at least 1 letter + 1 number | "Password must be at least 8 characters and include letters and numbers" | 
| Confirm Password | password input | ✅ | Must match Password field | "Passwords do not match" | 

Behavior: 
- Submit button disabled until all required fields are filled 
- Real-time validation on blur 
- On success: redirect to login page with success message 
- On duplicate email: show error "This email address is already registered"`,
    explanation: `Although the Japanese specification describes the functionality concisely, it is necessary to clarify specific validation rules, error messages, and screen operations for the development team. BrSE reads between the lines of the specification and details it to a level where developers don't get lost.`,
  },
  'brse-rs-006': {
    question: `Which of the following is appropriate as a "non-functional requirement" in Japanese specifications?`,
    options: [
      `User registration function`,
      `Screen response time is within 3 seconds, support for 1000 concurrent users, data encryption (AES-256), and 99.9% availability`,
      `CSV output function`,
      `Form printing function`
    ],
    explanation: `Categories of non-functional requirements (NFR): performance (response time, throughput), reliability (99.9% availability, disaster recovery time), security (encryption, authentication), scalability (number of concurrent connections, amount of data), maintainability (documentation, code quality). BrSE tends to overlook non-functional requirements, which determine system quality.`,
  },
  'brse-rs-007': {
    question: `If there are many ambiguous points in the specifications received from the Japanese client, please design a Q&A (question management) process as BrSE.`,
    answer: `Q&A process design: 

1. Specification review phase (1-2 days): 
- BrSE + technical lead + QA carefully read the specifications 
- Each person records their questions on a Q&A sheet (Excel) 
- Category classification: Specifications unknown, contradictions, assumptions unknown, non-functional requirements missing 

2. Composition of Q&A sheet: 
- No. | Category | Applicable part (page/item number) | Question content | Proposal (proposed interpretation of BrSE) | Answer | Respondent | Date | Status 
- The "suggestion" column is important: instead of "Which is A or B?", indicate your interpretation by saying "I understand that it is A, but is it correct?" 

3. Q&A meeting (1-2 times a week): 
- See questions in priority order 
- Resolve critical issues (hindering development start) first 
- Be sure to record your answers on the Q&A sheet (don't just give them verbally) 

4. Answer feedback: 
- Create supplementary materials for specifications based on answers 
- Share with the development team (translated version of Q&A sheet) 
- Revise the estimate/schedule if there is any impact. 

5. Close management: 
- Track unanswered Q&A weekly 
- Escalate if waiting for a response hinders development 
- Set all Q&A closes as milestones`,
    explanation: `The biggest risk is to proceed without understanding vague specifications. Systematically eliminate ambiguity with a structured Q&A process. By presenting a \`\`proposal (their own interpretation),'' the client can respond with a \`\`yes/no'' response, increasing response efficiency.`,
  },
  'brse-rs-008': {
    question: `Which items should BrSE pay particular attention to when reading the "table definition document" in Japanese specifications?`,
    options: [
      `English table name only`,
      `NULL tolerance/NOT NULL constraints, foreign key relations, index design, data type and size, initial value (default value), character code — these directly affect program implementation`,
      `Table color coding only`,
      `Creation date and time only`
    ],
    explanation: `Important items in the table definition document: ① NOT NULL constraint (affects required input and validation), ② foreign key (affects relationship between tables and JOIN queries), ③ index (affects search performance), ④ data type/size (VARCHAR(50) vs TEXT, etc.), ⑤ default value (affects initial data insertion), ⑥ character code (UTF-8 is standard for Japanese support).`,
  },
  'brse-rs-009': {
    question: `As a lead BrSE, please design a specification management method when conducting agile development with Japanese clients. Please include any differences and transition points from traditional waterfall specifications.`,
    answer: `Agile x offshore specification management: 

Traditional WF type specifications: 
- Requirements definition document → Basic design document → Detailed design document (all prepared in advance) 
- Problems: Resistant to change, slow to create, outdated when implemented 

Agile specification management: 

1. Backlog-based specification management: 
- Epic (large functional unit) → Story (functional unit from user perspective) → Task (technical task) 
- Specify acceptance criteria (AC) for each story 
- BrSE prepares AC in Japanese and gets client approval 

2. “Just Enough” Document: 
- Overall architecture: basic design level overview (created once, updated as needed) 
- Screen specifications: Figma mockup + screen item definition (created in each sprint) 
- API specification: Swagger/OpenAPI (automatically generated from code) 
- DB design: ER diagram + main table definition (incrementally updated) 

3. Specification flow within a sprint: 
- Sprint planning: Confirm detailed specifications of story (BrSE+Client) 
- Under development: Daily confirmation (chat-based Q&A) 
- Sprint review: Confirm recognition of specifications with demo 
- Specification change: Added to backlog, addressed in next sprint 

4. Migration points: 
- Japanese clients tend to "want to decide everything first" → Step-by-step explanation 
- At first, create detailed specifications for important screens in advance, and do the rest within the sprint. 
- Encourage clients to have a "change is welcome" attitude 
- Quality control is performed in each sprint (not tested all together at the end)`,
    explanation: `The key to Agile x Offshore is the balance between the "level of detail" and "timing" of specifications. It's inefficient to detail everything upfront, but not detailing anything will lead your offshore team astray. "Just Enough" = Creating specifications with the necessary level of detail when necessary - this is the design power of Lead BrSE.`,
  },
  'brse-pm-001': {
    question: `What is WBS (Work Breakdown Structure)?`,
    options: [
      `Abbreviation for Web-Based System`,
      `A structure diagram that hierarchically decomposes a project's work — divides deliverables into smaller tasks and serves as the basis for effort estimation and schedule management.`,
      `Wireframe design document`,
      `Test result summary table`
    ],
    explanation: `WBS is a basic tool for project management. Hierarchically decompose into large deliverables → intermediate deliverables → work packages → individual tasks. BrSE manages work on the Vietnamese side based on the WBS and reports progress to the Japanese client. Without a WBS, it will be difficult to overlook work and accurately monitor progress.`,
  },
  'brse-pm-002': {
    question: `Which of the following is the correct use for a Gantt chart?`,
    options: [
      `View code review results`,
      `Visualize task schedules, dependencies, and progress with bar charts — see at a glance what needs to be completed by when`,
      `Graph display of sales data`,
      `Database ER diagram`
    ],
    explanation: `A Gantt chart arranges time on the horizontal axis and tasks on the vertical axis, and the length of the bar represents the period. It is an essential management tool for Japanese projects, and is used to report progress to clients, understand critical paths, and plan resource allocation. BrSE requires the ability to create and update Gantt charts in Japanese.`,
  },
  'brse-pm-003': {
    question: `For offshore projects, weekly reports to the client must be written in Japanese.`,
    explanation: `Japanese is the standard for reports for Japanese clients. Typical contents of a weekly report: 1) This week's results (completed tasks), 2) Progress rate (planned vs. actual), 3) Issues/risks, 4) Next week's schedule, 5) Q&A items. Created by BrSE and reviewed by PM if necessary. A high-quality Japanese report is directly connected to the client's sense of security and trust.`,
  },
  'brse-pm-004': {
    question: `What is the critical path? How important is it in offshore development?`,
    options: [
      `Most important source code paths`,
      `The longest path in the project (a chain of tasks that if delayed will delay the entire project) - BrSE should manage this with particular care, as delays in tasks above this will directly lead to delivery delays.`,
      `List of tasks that can be completed in the shortest possible time`,
      `Important communication path for security`
    ],
    explanation: `Tasks on the critical path have zero margin (float) = 1 day late is 1 day late due date. As a BrSE: ① Prioritize progress confirmation of tasks on the critical path, ② Set buffers in advance for risky tasks, ③ Determine the acceptable range for delays in non-critical tasks.`,
  },
  'brse-pm-005': {
    question: `What is the state of the project if CPI < 1.0 in EVM (Earned Value Management)?`,
    options: [
      `progressing on budget`,
      `Over budget — Actual costs exceed the planned amount of work and corrective action is required.`,
      `Efficient under budget`,
      `project was canceled`
    ],
    explanation: `CPI (Cost Performance Index) = EV/AC. CPI < 1.0 = Not cost effective (over budget). SPI (Schedule Performance Index) = EV/PV. SPI < 1.0 = schedule delay. As a BrSE: (1) Calculate and report both indicators on a monthly basis, (2) Analyze the cause and propose corrective measures if it is below 1.0, (3) Check trends (improvement/deterioration).`,
  },
  'brse-pm-006': {
    question: `Create a resource plan for a 2-month project with a 5-person Vietnamese development team. Please include role division, skill matrix, and utilization rate.`,
    answer: `Resource planning: 

1. Team composition (5 people): 
- BrSE (1 person): Specification translation, client support, quality control [Operating rate: 80% for this project, 20% for other projects] 
- Tech lead (1 person): Architecture design, code review, technical issue resolution [Operating rate: 100%] 
- Developers (2 people): Function implementation/unit testing [Operating rate: 100%] 
- QA (1 person): Test design, test implementation, bug management [Operating rate: Month 1: 50% test preparation, Month 2: 100% test execution] 

2. Skill matrix: 
| Members | Language | Framework | DB | Japanese | Domain Knowledge | 
| BrSE | ○ | ○ | △ | N2 | ○ | 
| TL | ◎ | ◎ | ○ | N3 | △ | 
| Dev1 | ○ | ○ | ○ | - | △ | 
| Dev2 | ○ | △ | ○ | - | × | 
| QA | △ | △ | ○ | N3 | ○ | 

3. Risk countermeasures: 
- Lack of experience with Dev2 framework → TL supports pair programming 
- QA monthly operation rate is low → test planning and test case creation brought forward 
- Backup when BrSE is absent → TL can support clients in case of emergency`,
    explanation: `When planning resources, it is important to plan not only the number of people, but also skills and utilization rates. Skill matrix allows you to visualize the strengths/weaknesses of members, and make appropriate task assignments and risk countermeasures. BrSE presents resource plans to clients and builds trust in the team structure.`,
  },
  'brse-pm-007': {
    question: `What is the first action that BrSE should take if an offshore project falls behind schedule?`,
    options: [
      `Working overtime without reporting to the client`,
      `Analyze the cause of the delay → Identify the scope of impact → Develop a recovery plan (increase in personnel/parallel work/scope adjustment) → Report the cause, impact, and countermeasures to the client → Execute after obtaining agreement`,
      `Substitute team members on the fly`,
      `Request a deadline extension without reporting a delay`
    ],
    explanation: `Managing bad news is the most important skill for BrSE. Order: ① Fact confirmation (what is delayed and how much?), ② Cause analysis (specification changes? Technical issues? Lack of resources?), ③ Impact analysis (impact on other tasks, impact on final delivery date), ④ Recovery plan formulation (prepare multiple plans), ⑤ Early report to client (report together with countermeasures). The worst thing to do is hide it.`,
  },
  'brse-pm-008': {
    question: `What should I be careful about when reporting "80% progress" at a progress meeting with a Japanese client?`,
    options: [
      `80% is enough`,
      `Report the progress rate based on objective criteria (number of completed functions/total number of functions, number of passed tests/total number of tests, etc.) - A subjective statement of "about 80% completed" cannot be trusted. Report the possibility that risks are concentrated in the remaining 20%.`,
      `inflated to 90%`,
      `No need to report progress rate`
    ],
    explanation: `To avoid the "90% syndrome" (the remaining 10% never gets finished): 1) Use an objective indicator as the progress rate (completed/total number), 2) Define completion clearly (coding complete? Testing complete? Review completed?), 3) Add the risk of remaining work ("The remaining 20% ​​contains complex functions"), and 4) Indicate the expected completion date with evidence. Japanese clients place a high value on numerical accuracy.`,
  },
  'brse-pm-009': {
    question: `As a lead BrSE, please design a PMO-like management system to manage multiple offshore projects (3-5 projects at the same time).`,
    answer: `Multi-project management system: 

1. Portfolio management: 
- Dashboard listing all projects (project name, client, phase, progress, risk level, BrSE person) 
- Weekly portfolio review meeting (all BrSE participants, 30 minutes) 
- Red/yellow/blue traffic light management (red = emergency response required, yellow = caution required, blue = normal) 

2. Resource management: 
- Visualization of utilization rate of all members (shared spreadsheet/tool) 
- Resource transfer rules between projects (application for utilization rate adjustment 1 week in advance) 
- Pool management of specialized skills personnel (list of specific framework/domain experts) 

3. Standardization of quality: 
- Common quality standards for all projects (coding standards, testing standards, document quality) 
- Unification of templates (reports, specifications, test plans) 
- Monthly quality metrics comparison across all projects 

4. Knowledge management: 
- Accumulate lessons learned for each project 
- Monthly study session (each BrSE takes turns presenting case studies) 
- Continuously updating FAQ and best practice collection 

5. Risk management: 
- Integrated management of risk list for all projects 
- Overall countermeasures for common risks (exchange fluctuations, personnel retirement, etc.) 
- Escalation rules: 3 stages: Item BrSE → Lead BrSE → Manager`,
    explanation: `Lead BrSEs who manage 3-5 projects at the same time need a systematic management system rather than individual management. Move from individual to team management with dashboards, standardization, and knowledge sharing. Signal management can instantly determine where you should focus your attention.`,
  },
  'brse-tm-001': {
    question: `Which is the most important thing to keep an offshore development team motivated?`,
    options: [
      `keep raising salaries`,
      `Setting clear goals, fair evaluations, providing opportunities for growth, and recognizing (recognizing) team achievements—intrinsic motivation is important, not just money.`,
      `work overtime every day`,
      `leaving everything to the individual's discretion`
    ],
    explanation: `Herzberg's Motivation Theory: Hygiene factors (salary, environment, etc. that would not cause dissatisfaction) prevent dissatisfaction, but motivating factors (growth, recognition, sense of accomplishment, responsibility) increase motivation. As a BrSE: ① Clarify the purpose of the project and the roles of members, ② Provide opportunities to improve skills, ③ Provide specific feedback on good work, ④ Share positive feedback from clients.`,
  },
  'brse-tm-002': {
    question: `BrSE is responsible not only for project management, but also for supporting the career growth of team members.`,
    explanation: `BrSE is also responsible for the career growth of its members. ① Technical skills improvement plan (opportunity to learn new technology), ② Support for improving Japanese language ability, ③ Sharing of domain knowledge, ④ Gradual assignment of more responsible tasks, ⑤ Career consultation in 1on1 meetings. The growth of members is directly linked to improving the quality of the team, which in turn leads to the retention of human resources.`,
  },
  'brse-tm-003': {
    question: `Which is most important when onboarding new members?`,
    options: [
      `Delegate important tasks from day one`,
      `Step-by-step launch by setting up the development environment, explaining the coding rules, briefing on the project outline, and assigning a mentor (senior).`,
      `No special onboarding required — just learn on your own`,
      `Finished by handing out training materials`
    ],
    explanation: `Onboarding checklist: ① Development environment (source code, tools, access rights), ② Project overview (purpose, architecture, team structure), ③ Coding rules and review standards, ④ Mentor/Buddy assignment, ⑤ Tasks for the first two weeks (starting with small bug fixes and simple features). It usually takes 2-4 weeks to start up. Good onboarding leads to early productivity gains.`,
  },
  'brse-tm-004': {
    question: `How should BrSE handle technical disagreements within the offshore team?`,
    options: [
      `Always adopt the opinions of superiors`,
      `Organize the merits and demerits of both opinions, facilitate discussions based on objective data (performance tests, maintainability, learning costs, etc.), and encourage consensus building as a team.`,
      `ignore one side's opinion to avoid controversy`,
      `push one's opinion`
    ],
    explanation: `Technical conflict is a sign of healthy debate. As a BrSE: 1) Listen to both opinions equally, 2) Guide the discussion with facts and data rather than emotions, 3) Propose a proposal to be verified with a prototype/PoC (proof of concept), 4) Foster a culture where the entire team respects the decision after agreement is reached, 5) Set judgment criteria from the perspective of project requirements (delivery date, maintainability, team skills).`,
  },
  'brse-tm-005': {
    question: `What is the purpose of “1on1 Meeting” and its value to BrSE?`,
    options: [
      `A meeting just to check on the progress of a task`,
      `Regular dialogue with individual members — A place to quickly identify and address work issues, career counseling, motivation, and interpersonal issues within the team.`,
      `A place to communicate performance evaluations`,
      `technical study session`
    ],
    explanation: `1on1 is "time for members". What BrSE should do: 1) Hold regular meetings (30 minutes every other week recommended), 2) Have members set topics (don't let the boss lead them), 3) Listen to what they are having trouble with at work, what they would like to improve as a team, and their career goals, 4) Identify and deal with problems early (signs of resignation, accumulation of dissatisfaction). If you neglect 1on1, you will only notice the problem when a member leaves.`,
  },
  'brse-tm-006': {
    question: `What is a team's "Bus Factor"? Why should BrSE care about this indicator?`,
    options: [
      `Team commuting metrics`,
      `Degree of risk that the project will stop if a specific member leaves - A bus coefficient of 1 (stops if one person leaves) is extremely dangerous and requires knowledge sharing`,
      `Expense management indicators for bus transportation`,
      `Metrics about the number of test runs`
    ],
    explanation: `Bus coefficient = “How many people must be hit by a bus before the project stops?” (metaphor). Ideally 3 or more. Countermeasures: (1) Documentation of important knowledge, (2) Regular code reviews (knowledge sharing), (3) Pair programming/mob programming, (4) Rotation (the same person does not continue to be in charge of the same module). As a BrSE, I understand the team's bus coefficient and improve weak points.`,
  },
  'brse-tm-007': {
    question: `Design a strategy to increase staff retention for an offshore development team (10 people). Please consider the characteristics of Vietnam IT industry.`,
    answer: `Talent retention strategy: 

1. Challenges of Vietnam IT industry: 
- Average length of service: 2-3 years (change of job is common) 
- High expectations for salary increase 
- Focus on technical challenges and career growth 
- Tendency to emphasize work-life balance 

2. Measures to improve retention rate: 

Financial measures: 
- Market level salary (reviewed at least once a year) 
- Project achievement bonus 
- Japanese language qualification acquisition allowance (JLPT N3 → monthly allowance) 

Growth opportunities: 
- Japan business trip/training program (1-2 people per year, 3-6 months) 
- Technical conference participation support 
- In-house study sessions (twice a month, technical + Japanese) 
- Career path clarification (Dev→TL→BrSE→PM) 

Team culture: 
- Flat communication 
- Celebrating successes (internal awards, sharing client feedback) 
- Regular team events (team lunch once a month) 
- Flexible working system (remote work possible) 

Early alert: 
-Monthly 1on1 motivation check 
- Check for signs of retirement (decreased interest in work, sudden decrease in overtime, changes in SNS activity) 
- Early handling of dissatisfaction (Immediately address any issues that can be improved) 

3.KPI: 
- Annual turnover rate target: 15% or less 
- Member satisfaction survey (quarterly) 
- Trends in average years of service`,
    explanation: `The turnover rate in Vietnam's IT industry is higher than in other industries, and competition for talented personnel is fierce. Salary alone does not differentiate us; growth opportunities (business trips to Japan, career path) and team culture are differentiators. The strongest staying power is when members feel that they want to work on this team.`,
  },
  'brse-tm-008': {
    question: `As a lead BrSE, which approach is most effective in developing junior BrSEs?`,
    options: [
      `Give training materials and let them learn on their own`,
      `Mentoring system + OJT (gradual experience in actual projects) + regular feedback — Attend senior BrSE projects and gradually expand their role`,
      `Let me just study for the Japanese language test`,
      `Assign one person to take charge of a case immediately`
    ],
    explanation: `Stages of BrSE training: ① Observation period (1-2 months): Attends senior meetings and takes minutes ② Support period (2-4 months): Responsible for small specifications confirmation and Q&A under senior supervision ③ Leading period (4-6 months): Responsible for small projects (backed up by seniors) ④ Independent period (after 6 months): Responsible for medium-sized projects independently. Provide regular feedback and skill assessments at each stage to identify and improve issues.`,
  },
  'brse-tm-009': {
    question: `As a lead BrSE, you will design the organizational structure of a 30-person offshore development department. Include team composition, job hierarchy, skills matrix, and talent development plan.`,
    answer: `Organizational structure with 30 people: 

1. Organizational hierarchy: 
- Lead BrSE (1 person): Overall department management, client relationship building, strategy 
- Senior BrSE (2-3 people): BrSE for large-scale projects, junior BrSE guidance 
- BrSE (3-4 people): Responsible for BrSE for small and medium-sized projects 
- Tech lead (3 people): Technical judgment, architecture design, code review 
- Senior developers (5-6 people): Implementation of complex functions, junior guidance 
- Developers (8-10 people): Function implementation, testing 
- QA (3-4 people): Test design/execution/automation 

2. Team composition (3 teams x 8-10 people): 
- Team A: BrSE + TL + 3 Dev + 1 QA (Client A project) 
- Team B: BrSE + TL + 3 Dev + 1 QA (Client B project) 
- Team C: BrSE + TL + 2 Dev + 1 QA (multiple small projects) 
- Floating: 1 Senior BrSE + 2 Senior Devs (inter-project support) 

3. Career path: 
- Dev → Senior Dev → TL → (Technical course: Architect / Management course: BrSE → Senior BrSE → Lead BrSE) 
- Visualize each member's current location and goals with skill matrix 

4. Human resource development: 
- Monthly skill improvement study session (technical + Japanese + soft skills) 
- Quarterly skill evaluation and development plan update 
- Training trip to Japan for 1-2 people per year 
- BrSE Academy (in-house training program: 6-month course)`,
    explanation: `Even with a scale of 30 people, it is necessary to divide teams and clearly define roles. The concept of floating members (inter-project support) is important and contributes to load distribution and knowledge sharing during peak times. Clarifying career paths is the key to staff retention — it is important for members to feel that they can grow in this organization.`,
  },
  'brse-cm-001': {
    question: `What should BrSE keep in mind most during the first meeting with a Japanese client?`,
    options: [
      `Start talking about technical matters right away`,
      `Careful self-introduction and company introduction → Listening to the client's issues and needs → Confirming what you have understood — "Listening attitude" is the first step to building trust`,
      `Give a long presentation about your company's achievements`,
      `Get a quote now`
    ],
    explanation: `Key points for the first meeting: 1) Exchange business cards (observe good manners), 2) Briefly introduce the company (within 5 minutes), 3) Spend 80% of your time listening to what the client has to say, 4) Listen while taking notes (this shows your seriousness), 5) Reiterate what you have understood, and 6) End by clarifying your next action. We respect Japan's culture of "building relationships first."`,
  },
  'brse-cm-002': {
    question: `A good service is to answer "Yes, we can" to all requests from clients.`,
    explanation: `Saying "yes" to anything is dangerous. Honestly telling people what is \`\`impossible'' or \`\`difficult'' will lead to long-term trust. Correct approach: ① First, understand the request accurately; ② Check internally the feasibility; ③ If it is not possible, present an alternative; ④ If possible, clarify the conditions (cost, time). The worst thing you can do is say, “I can do it,” and then say, “I couldn’t.”`,
  },
  'brse-cm-003': {
    question: `What is "Expectation Management"?`,
    options: [
      `Setting high expectations for clients`,
      `Set realistic expectations and transparently share progress to avoid gaps between client expectations and actual deliverables.`,
      `Manage expected sales`,
      `Management of members' goals`
    ],
    explanation: `Points for managing expectations: 1. First, clarify what you can and cannot do. 2. Always keep what you commit to. 3. Share progress regularly and report any gaps early. 4. Ideally, under-promise, over-deliver (promise modestly and deliver more).`,
  },
  'brse-cm-004': {
    question: `If a client makes a strong complaint that "the same problem has occurred again," which is the most appropriate response for BrSE?`,
    options: [
      `Just reply, "I'll look into it."`,
      `① Apologize immediately ② Identify the cause and implement interim measures within 24 hours ③ Root cause analysis (5 Whys) ④ Submit permanent measures and recurrence prevention measures in writing ⑤ Follow-up report on the implementation status of countermeasures — Recurrence will seriously damage trust.`,
      `"It's the team's fault," he explains.`,
      `I will deal with it at a later date.`
    ],
    explanation: `Recurring problems are the worst case scenario and can seriously damage trust. It is important to thoroughly analyze the root cause of why it happened again (previous countermeasures were insufficient) and propose preventative measures (process improvements, addition of automated tests, etc.). Countermeasures that rely on individual attention can lead to relapse.`,
  },
  'brse-cm-005': {
    question: `What can BrSE do in addition to regular project management from the perspective of "CX (customer experience)" to continuously improve client satisfaction?`,
    options: [
      `Do nothing — project completion is the only goal`,
      `① Improving response speed (shortening the time to answer questions) ② Pre-emptive suggestions (proposing improvements before problems occur) ③ Collecting feedback through regular "reflections" ④ Accumulating small success experiences ⑤ Building personal relationships of trust with the person in charge`,
      `offer a discount`,
      `make frequent sales visits`
    ],
    explanation: `Improving CX is the accumulation of experiences that exceed expectations. 1) Response speed (responses to questions within 24 hours will increase trust), 2) Looking ahead (“We are preparing this for next month's release”), 3) Reflection (regularly asking, “Is there anything we can do to improve?”), 4) Relationship with the person in charge (not just about work, but appropriate chat and attentiveness).`,
  },
  'brse-cm-006': {
    question: `Design the agenda and structure of reporting materials for monthly client reporting meetings.`,
    answer: `Monthly report meeting (60 minutes): 

Agenda: 
1. Review of the previous month (15 minutes): 
- List of completed milestones/features 
- Quality summary (number of bugs, test passing rate) 
- Issues and solutions 

2. Plan for the current month (10 minutes): 
- This month's milestones/goals 
- Resource planning 
- Dependencies (required on the client side) 

3. Risks/Challenges (10 minutes): 
- TOP3 risks and countermeasure status 
- Report new issues 
- Escalation matters 

4. Improvement activities (10 minutes): 
- Report on the effects of the previous month's improvement measures 
- This month's improvement suggestions 

5. Q&A/Discussion (15 minutes): 
- Feedback from clients 
- Instructions/requests for next month 

Report materials: 
- 10-15 slides in total (briefly) 
- Use lots of numbers and graphs (avoid text list) 
- Visualize status in green/yellow/red traffic light format 
- Created in Japanese, with supplementary information for technical terms`,
    explanation: `Client time is valuable. In order to share information efficiently in 60 minutes, we will focus on three things: "visuals," "numbers," and "improvement." In particular, reporting on improvement activities gives the impression that you are a team that can solve problems, which directly leads to contract renewal.`,
  },
  'brse-cm-007': {
    question: `If a client brings up a comparison with another offshore vendor and requests a price reduction, what is the best BrSE response?`,
    options: [
      `Respond to price reductions immediately`,
      `Present your company's strengths (quality track record, BrSE system, domain knowledge, team stability) with concrete data, explain the risks and costs of changing vendors from the perspective of TCO (Total Cost of Ownership), and then differentiate yourself by offering added value.`,
      `speak ill of one's competitors`,
      `If you don't lower the price, the contract will be terminated.`
    ],
    explanation: `Price competition alone is unsustainable. Points of differentiation: 1) Quality performance (bug rate, customer satisfaction data), 2) Vendor change costs (knowledge transfer, start-up period, quality risks), 3) Team stability (turnover rate, average length of service), 4) Added value (improvement proposals, proactive response, domain knowledge). It is important to show "overall value" rather than "cheap".`,
  },
  'brse-cm-008': {
    question: `Which KPI is the most important for maintaining long-term relationships with clients?`,
    options: [
      `Number of projects only`,
      `Net Promoter Score (NPS) — Comprehensive management of three factors: degree to which clients recommend your company to others, contract renewal rate (repeat rate), and account growth rate (expansion of transaction size)`,
      `number of developers`,
      `Number of sales visits`
    ],
    explanation: `KPIs for long-term relationships: ① NPS (recommendation level - an indicator of client satisfaction and loyalty), ② contract renewal rate (rate of continuing business, aim for 90% or more), ③ account growth rate (expanding business from the same client - more efficient than new sales). These three things form a virtuous cycle: High quality → High NPS → Contract renewal → Business expansion → Further investment → High quality...`,
  },
  'brse-cm-009': {
    question: `As a Lead BrSE, you will design account management strategies for three major clients. Include relationship deepening, risk management, and growth strategies for each client.`,
    answer: `Account management strategy: 

1. Client classification: 
- Tier 1 (most important): Annual sales of 40% or more, transactions for more than 5 years 
→ Responsibilities: Senior BrSE + Lead BrSE Direct involvement 
→ Strategy: Deepening partnerships, proposing new businesses, building relationships with management 

- Tier 2 (important): 25% annual sales, 3 years deal 
→ Person in charge: BrSE 
→ Strategy: Expand services, propose new technologies, increase team members 

- Tier 3 (growing): 15% annual sales, 1 year trading 
→ Person in charge: BrSE 
→ Strategy: Building trust, creating a track record, stabilizing transactions 

2. Action plan for each client: 

[Tier1] DEEP strategy: 
- Quarterly strategy meetings (management level) 
- Annual appreciation event (team visit, results presentation) 
- Sharing of technology roadmap and advance investment proposal 
- Risk: High dependence → Risk diversification due to growth of other clients 

[Tier2] EXPAND strategy: 
- Actively proposing new projects 
- Horizontal expansion to other departments (acquisition of referrals) 
- Joint holding of technical study sessions 
- Goal: Develop to Tier 1 within 2 years 

[Tier3] STABILIZE strategy: 
- Accumulation and visualization of quality results 
- Building a relationship of trust with the person in charge (regular visits) 
- Accumulate small successes 
- Goal: To Tier 2 within 1 year 

3. Portfolio risk management: 
- Client concentration risk: Tier 1 exceeds 40% of sales → Develop other clients 
- Alert 3 months before contract renewal → Preparation for renewal negotiations 
- Semi-annual portfolio review`,
    explanation: `Account management is a superordinate concept of "project management". In addition to achieving success in individual projects, we strategically build long-term relationships with clients, expand business, and diversify risk. Tier classification allows you to allocate your limited resources (lead BrSE time) most effectively.`,
  },
  'brse-est-001': {
    question: `What is “Ningetsu”?`,
    options: [
      `Number of people born per month`,
      `The unit of man-hours that one person works full-time for one month (approximately 20 business days) - For example, "3 person months" is the amount of work for 1 person x 3 months, or 3 people x 1 month.`,
      `Project budget amount`,
      `Number of test runs`
    ],
    explanation: `The person-month is the most common man-hour unit in the Japanese IT industry. 1 person-month ≈ 20 person-days ≈ 160 person-hours (8 hours per day). BrSE is calculated in person-months at the time of quotation and submitted to the client. Note: It is theoretically possible for 3 people to complete the work for 1 month, but in reality, it is often 1.2 to 1.5 times longer due to loss of parallel work and communication loss.`,
  },
  'brse-est-002': {
    question: `When making an estimate, it is sufficient to estimate only the development man-hours. No administrative effort or buffers required.`,
    explanation: `Items that should be included in the estimate: 1) Development man-hours (design + coding + unit tests), 2) Management man-hours (BrSE man-hours, progress management, report creation), 3) Testing man-hours (integration tests, comprehensive tests), 4) Buffer (risk response, 10-20% of the total), 5) Environment construction man-hours, 6) Document creation man-hours. Estimating only development man-hours is the cause of projects in the red.`,
  },
  'brse-est-003': {
    question: `What is a quote "buffer"?`,
    options: [
      `unnecessary costs`,
      `Additional man-hours to cover unforeseen risks and challenges — typically 10-20% of total man-hours`,
      `About profit margin`,
      `About overtime pay`
    ],
    explanation: `Buffers are insurance. Types of risks: ① Specification change risk (change in client requirements), ② Technology risk (unexpected technical issues), ③ Resource risk (member withdrawal/sick leave), ④ Communication risk (rework due to misunderstanding). Offshore markets tend to have a large buffer.`,
  },
  'brse-est-004': {
    question: `What is the "Function Point Method"?`,
    options: [
      `How to calculate effort by number of lines of source code`,
      `A method to objectively measure the size of a system based on the number and complexity of inputs, outputs, queries, internal files, and external interfaces — independent of development language and framework`,
      `How to score team members' abilities`,
      `How to estimate man-hours by number of meetings`
    ],
    explanation: `Five elements of FP (Function Point) method: ① External input (EI), ② External output (EO), ③ External inquiry (EQ), ④ Internal logic file (ILF), ⑤ External interface file (EIF). Calculate the FP value by weighting each element by complexity (low/medium/high). FP value x productivity coefficient (man-days/FP) = man-hours. It is widely used by Japanese system integrators.`,
  },
  'brse-est-005': {
    question: `How should a BrSE respond if a client says, "This quote is too high?"`,
    options: [
      `reduce the amount instantly`,
      `Explain the basis for the estimate (e.g. effort breakdown, design/development/test ratio, assumptions) and present and negotiate alternatives such as scope adjustment or phased implementation.`,
      `“This is the correct amount,” I replied.`,
      `Match your competitors' prices`
    ],
    explanation: `Points of estimate negotiation: 1) Transparency of breakdown (visualization of how much it will cost for what), 2) Clarification of preconditions (specification finality, technical difficulty), 3) Presentation of alternative plans (scope reduction, phased release, quality level adjustment), 4) Comparison with actual values ​​of similar projects, 5) Explanation that "making it cheaper = cutting something out". Discounting prices without basis increases the risk of quality deterioration.`,
  },
  'brse-est-006': {
    question: `Please estimate (person-days) the following functions: "User management screen (list display, search, registration, editing, deletion, CSV output)"`,
    answer: `Estimate breakdown (person-days): 

1. Design process: 
- Screen design: 2.0 person days 
- DB design (table index): 1.0 person days 
- API design: 1.0 person days 

2. Development process: 
- List display (pagination/sorting): 2.0 person-days 
- Search function (combined condition search): 1.5 person days 
- Registration function (validation/confirmation screen): 2.0 person days 
- Editing function (obtaining/updating existing data): 1.5 person days 
- Deletion function (logical deletion/confirmation dialog): 0.5 person days 
- CSV output (format/character code compatible): 1.5 person days 

3. Testing process: 
- Test case creation: 1.5 person days 
- Unit testing: 2.0 person days 
- Integration testing: 1.5 person days 

4. Others: 
- Code review: 1.0 person-days 
- BrSE management effort: 1.0 man-day 

Total: 20.0 person-days (≒ 1.0 person-months) 
Buffer (15%): 3.0 person days 
Final estimate: 23.0 man-days (≒ 1.15 man-months)`,
    explanation: `When estimating, we tend to think of it as just "coding," but if you include design, testing, review, and management man-hours, the actual man-hours will be 2-3 times more. By subdividing each function, it becomes easier to explain to the client, and it also becomes possible to adjust the scope (such as "move CSV output to Phase 2").`,
  },
  'brse-est-007': {
    question: `Which is the correct calculation method for the three-point estimation method (three-point estimation)?`,
    options: [
      `(best value + worst value) / 2`,
      `Expected value = (optimistic value + 4 x most likely value + pessimistic value) / 6 — Based on the PERT method, weighted average is calculated by placing weight 4 on the most possible value`,
      `Best value × worst value / most possible value`,
      `Average value of 3 estimates`
    ],
    explanation: `Three-point estimation (PERT): O=optimistic value (fastest case), M=most possible value (normal case), P=pessimistic value (worst case). Expected value = (O+4M+P)/6, standard deviation = (P-O)/6. Example: If O=5 days, M=8 days, P=17 days, expected value=(5+32+17)/6=9 days. This provides a more realistic number that reflects risk better than a single value estimate.`,
  },
  'brse-est-008': {
    question: `We received our first RFP (Request for Proposal) from a new client. Design a process for creating rough estimates. Please also include risk countermeasures at the stage of low accuracy.`,
    answer: `Estimate process: 

1. RFP analysis (2-3 days): 
- Careful reading of RFP and identification of requirements 
- Create a list of unknown points → Questions to the client 
- Reference past performance data of similar projects 
- Organize prerequisites (technology stack, environment, constraints) 

2. Creating a rough estimate: 
- Creating a list of functions (large function → medium function level) 
- Classify the size of each function as S/M/L/XL 
- Approximately estimated from past man-hour results for similar functions (FP method or analogy method) 
- Added man-hours for testing, management, and environment construction (40-60% of development) 
- Uncertainty buffer: ±30-50% range is proposed at the rough estimation stage 

3. Risk countermeasures (low accuracy stage): 
- Estimates will be presented in terms of width (e.g. 80-120 man-months) → Final estimate will be provided after specifications are finalized. 
- Specify assumptions (“Re-estimate if specifications change”) 
- Staged estimation: After Phase 1 (requirements definition) is finalized, re-estimate Phase 2 and beyond. 
- With risk item list (technical difficulty, external collaboration, data migration, etc.) 
- Set quote expiration date (e.g. valid for 30 days) 

4. Proposal structure: 
- Project overview and understanding 
- Development approach (methodology, team structure, communication plan) 
- Estimate (with breakdown) + prerequisites 
- Draft schedule 
- Risks and countermeasures 
- Company track record/similar projects`,
    explanation: `Since the initial estimate is made with insufficient information, it is important to be honest about the limits of accuracy. By presenting the estimate in terms of width, you can avoid problems that may arise later, such as the estimate differing from the initial estimate. A stepwise estimation approach is recommended, increasing accuracy as specifications become clearer.`,
  },
  'brse-est-009': {
    question: `As the lead BrSE, what are the most effective efforts to systematically improve estimation accuracy?`,
    options: [
      `Use the same quote template for all projects`,
      `Accumulate and analyze “estimate vs. actual” data for past projects and calculate and update estimation coefficients (productivity indicators) for each project type — a data-driven estimation improvement cycle`,
      `Fixed to one person in charge of estimating`,
      `Always estimate according to the client's budget`
    ],
    explanation: `PDCA cycle for improving estimation accuracy: P (planning) estimate creation → D (execution) project implementation → C (confirmation) analysis of differences between actual data and estimates → A (improvement) updating estimation coefficients. For example: If we have data that says \`\`CRUD screens on e-commerce sites average 2.5 person-days/screen'', the following estimate will have a strong basis. This accumulation becomes the estimating power of the organization.`,
  },
  'brse-rm-001': {
    question: `What is project risk?`,
    options: [
      `About the project budget`,
      `Uncertain events that can affect the achievement of project goals—if they occur, they will have a negative impact on delivery, quality, and cost.`,
      `Technology used in the project`,
      `Evaluation of project members`
    ],
    explanation: `Definition of risk: "A problem that has not yet occurred, but may occur." Risk ≠ Problem (the problem has already occurred). Characteristics of risk: (1) There is a probability of occurrence, (2) There is a degree of impact if it occurs, (3) Preliminary measures can be taken. As a BrSE, we prevent problems from occurring by identifying risks in advance and taking countermeasures.`,
  },
  'brse-rm-002': {
    question: `What is the "probability of occurrence" and "impact" matrix used for?`,
    options: [
      `For evaluation of team members`,
      `To prioritize risks — prioritize risks with a high probability of occurrence and high impact.`,
      `To calculate the project budget`,
      `To determine the number of test cases`
    ],
    explanation: `The risk matrix maps each risk by placing the degree of impact (high/medium/low) on the vertical axis and the probability of occurrence (high/medium/low) on the horizontal axis. High probability x high impact = top priority measures, low probability x low impact = monitoring only. BrSE creates a list of risks at the start of a project, prioritizes them in a matrix, and plans countermeasures.`,
  },
  'brse-rm-003': {
    question: `Risk management only needs to be done once, at the beginning of the project.`,
    explanation: `Risk management is a continuous process. Identify risks at the beginning of a project and re-evaluate them during phase transitions or when circumstances change. Add new risks as they are discovered and update the status of existing risks. Incorporating weekly or monthly risk reviews into regular meetings is recommended.`,
  },
  'brse-rm-004': {
    question: `Which of the following is the most important risk specific to offshore development?`,
    options: [
      `Technical risk only`,
      `Communication risk (discrepancies in perception due to language, culture, and time differences), human resources risk (member turnover), quality risk (bugs due to lack of understanding of specifications), exchange rate risk (cost fluctuations due to currency fluctuations)`,
      `Weather risk only`,
      `Legal risk only`
    ],
    explanation: `Offshore-specific risks: ① Communication (discrepancies in specifications, cultural differences, time differences) → Countermeasures: Q&A management, regular meetings, glossary ② Human resources (separation of key members, skill gaps) → Countermeasures: Knowledge sharing, backup system ③ Quality (differences with Japanese quality standards) → Countermeasures: code reviews, test evidence ④ Currency exchange (VND/JPY fluctuations) → Countermeasures: Specifying exchange conditions in long-term contracts`,
  },
  'brse-rm-005': {
    question: `Which of the four risk response strategy options are correct?`,
    options: [
      `4-level evaluation of A/B/C/D`,
      `Avoid: Eliminating risk factors, Mitigate: Lowering the probability and impact, Transfer: Transferring to a third party, Accept: Acknowledging the risk and allowing it.`,
      `4 levels: upper/middle/lower/none`,
      `4 phases: development/testing/management/maintenance`
    ],
    explanation: `Examples of risk response: ① Avoidance: Forgo adopting new technologies with high technical risks and select proven technologies ② Mitigation: Cross-training and document maintenance to reduce the risk of member turnover ③ Transfer: Outsourcing vulnerability testing to a specialized security company for security risks ④ Acceptance: Only monitor the current situation for risks with low probability of occurrence and small impact`,
  },
  'brse-rm-006': {
    question: `Design a Risk Register for your offshore project. Please describe the items to be included and how they will be managed.`,
    answer: `Risk register design: 

Item composition: 
| No | Category | Risk details | Occurrence probability (1-5) | Impact level (1-5) | Risk score | Countermeasures | Person in charge | Deadline | Status | Remarks | 

Category example: 
- Specifications (specification changes, ambiguity of specifications) 
- Technology (new technology, performance, security) 
- Human resources (turnover, lack of skills, lack of resources) 
- Communication (language, time difference, cultural difference) 
- External (exchange, legal regulations, third party dependence) 

Management method: 
1. Initial identification at the start of the project (all team members involved) 
2. Regular weekly risk review (new additions, status updates) 
3. Risk score = Probability × Impact 
4. Score 15 or higher → Immediately take measures 
5. Score 10-14 → Develop countermeasure plan 
6. Score 9 or below → Monitor (watch list) 
7. Report TOP5 risks to clients monthly`,
    explanation: `The Risk Register is a “living document”. There's no point in just making something and leaving it on the shelf. Update with weekly reviews to add new risks and check progress against countermeasures. By reporting risks to our Japanese clients, we give them a sense of trust that we are proactively managing risks.`,
  },
  'brse-rm-007': {
    question: `In the middle of the project, a key member (tech lead) suddenly resigned. How should BrSE respond?`,
    options: [
      `Wait until you hire a replacement`,
      `① Immediately report to client (with impact assessment and interim measures) ② Maximize knowledge transfer (secure handover period) ③ Reallocate tasks within the team ④ Assign alternative members ⑤ Re-evaluate impact on schedule and propose adjustments`,
      `Wait for the team to adapt naturally`,
      `This risk could not be foreseen, so it cannot be helped.`
    ],
    explanation: `Retirement of key members is a high probability risk. Preliminary measures: (1) Preventing knowledge from becoming individualized (documents, pair programming), (2) Developing backup personnel, (3) Contractual arrangements to ensure handover period. Post-incident measures: early reporting, rapid knowledge transfer, and minimizing impact. The question is not whether the situation was "unforeseeable" but whether measures were taken in advance.`,
  },
  'brse-rm-008': {
    question: `What is a “Contingency Plan”?`,
    options: [
      `regular project plan`,
      `Alternative plans that are prepared in advance to be activated in the event that a risk actually occurs - Developed in advance in the form of "If XX occurs, do △△"`,
      `Plan to cancel the project`,
      `Plan to add budget`
    ],
    explanation: `Examples of contingency plans: ① Server failure → Prepare procedures for switching to a backup environment ② Retirement of a key member → Maintain a handover document and replacement candidate list ③ Delivery delay → Consider recovery scenarios (increase in personnel, scope reduction, parallel work) in advance ④ Security incident → Prepare an incident response flow. The job of a professional is to prepare before you wake up, rather than thinking about it after you wake up.`,
  },
  'brse-rm-009': {
    question: `As a Lead BrSE, you will design an integrated risk management framework for multiple offshore projects. Include common risk management and individual project risk reporting.`,
    answer: `Integrated risk management framework: 

1. Risk governance system: 
- Risk Owner: Lead BrSE (Integrated Management) 
- Risk manager for each project: BrSE for each project 
- Escalate to: Manager/CTO 

2. Common Risk Catalog: 
- Create a database of risks that occurred from all past projects by category 
- Screen risks from the catalog when starting a new project 
- Categories: Specifications, Technology, People, Communication, External, Finance 

3. Integrated risk dashboard: 
- List of TOP3 risks of all projects 
- Risk score trend graph (visualization of improvement/deterioration) 
- Signal management: 🔴(High risk of 3 or more cases) 🟡(1-2 cases) 🟢(None) 

4. Risk review process: 
- Each project: Weekly risk review (BrSE+TL) 
- Overall: Monthly integrated risk review (all BrSE participants) 
- High-risk cases: Urgent review (immediately upon occurrence) 

5. Accumulation of lessons learned: 
- Post-mortem implementation if risks materialize 
- Reflect lessons learned in catalog (prevent recurrence) 
- Quarterly "Risk Management Review" meeting 

6.KPI: 
- Risk pre-identification rate (percentage identified before actualization) target: 80% or more 
- Trends in the number of serious incidents (monthly) 
- Measure implementation rate (execution rate of planned measures)`,
    explanation: `The value of integrated risk management is that lessons learned from individual cases can be shared across the organization to avoid repeating the same mistakes. The risk catalog functions as an \`\`organizational memory'' and can provide advance warning that \`\`this risk has occurred in the past'' in new cases.`,
  },
  'brse-qt-001': {
    question: `Which items should be included in a "test case" for software testing?`,
    options: [
      `Tester name only`,
      `Test ID, test item, preconditions, test procedure, test data, expected result, actual result, pass/fail judgment`,
      `Copy source code`,
      `Estimated amount`
    ],
    explanation: `Essential elements of a test case: 1) Test ID (control number), 2) Test item (what to test), 3) Preconditions (state required before test execution), 4) Test procedure (step by step), 5) Test data (specific input values), 6) Expected result (definition of correct behavior), 7) Actual result (actual behavior), 8) Pass/fail judgment (OK/NG). BrSE reviews test cases and confirms consistency with Japanese specifications.`,
  },
  'brse-qt-002': {
    question: `What is the difference between "unit test", "integration test" and "comprehensive test"?`,
    options: [
      `all the same tests`,
      `Unit test: Check the operation of individual modules/functions, Integration test: Check the cooperation between modules, Comprehensive test: Check the operation of the entire system (in an environment close to production)`,
      `Single = Japan, Combined = Vietnam, Comprehensive = Test conducted by client`,
      `Differences in the number of participants`
    ],
    explanation: `Correspondence with the V-shaped model: Detailed design ↔ Unit testing (UT), Basic design ↔ Integration testing (IT), Requirements definition ↔ Comprehensive testing (ST). When offshore, unit and integration tests are usually carried out by the Vietnamese side, and comprehensive tests and UAT are carried out by the client side. BrSE is responsible for developing the test plan and quality reviewing the results.`,
  },
  'brse-qt-003': {
    question: `Bug reports must include both "expected behavior" and "actual behavior."`,
    explanation: `Required items for a bug report: 1) Bug ID, 2) Title (brief summary), 3) Reproduction steps (step-by-step), 4) Expected behavior, 5) Actual behavior, 6) Severity (Critical/Major/Minor), 7) Environment information (OS, browser, version), 8) Screenshots/video. It's not enough to just say something isn't working properly — you need information that developers can reproduce and fix.`,
  },
  'brse-qt-004': {
    question: `Which is the most common cause of quality problems in offshore development?`,
    options: [
      `Lack of technical skills of Vietnamese engineers`,
      `Discrepancies in the recognition of specifications — The Vietnamese side has implemented a different interpretation of ambiguous expressions in the Japanese specifications, and it is not detected even in tests because it “works as implemented”`,
      `Issues with the technology stack used`,
      `Effects of time difference`
    ],
    explanation: `More than 70% of the root causes of quality problems are due to "misperceptions of specifications." BrSE quality improvement measures: (1) Check with specific examples when communicating specifications, (2) Review prototypes before starting development, (3) Verify against specifications when creating test cases, (4) Test from the client's perspective (not "tests that the developer is satisfied with" but "tests that the client is satisfied with").`,
  },
  'brse-qt-005': {
    question: `What is the "test evidence" required by Japanese clients?`,
    options: [
      `Verbally communicate that the test has been administered`,
      `Evidence of test execution — Documentation that proves the test was executed correctly, such as screenshots, test result logs, and database status screens.`,
      `About test plan`,
      `Developer's daily work report`
    ],
    explanation: `Test evidence is an element of quality control that Japanese clients value. Types of evidence: ① Screen capture (before input/after execution), ② DB data confirmation results, ③ Corresponding part of log file, ④ Contents of API response. Evidence quality points: Date and time are known, linkage with test case ID is clear, abnormal tests also leave evidence. BrSE reviews the quality of evidence.`,
  },
  'brse-qt-006': {
    question: `What is "Bug Density"? How do you use it as a quality indicator?`,
    options: [
      `The severity of the bug`,
      `Number of bugs per thousand lines of code (KLOC) — for example, 5 bugs/KLOC. An indicator that objectively evaluates the quality level by comparing it with industry averages and past project results.`,
      `Time period when bugs are concentrated`,
      `Number of bugs reported per day`
    ],
    explanation: `Bug density = total number of bugs / amount of code (KLOC). General guideline: 6-12 bugs/KLOC during development, 0.5-3 bugs/KLOC at release. How to use: 1) Understand quality trends by comparing with past projects, 2) Determine testing sufficiency (if the bug density is extremely low, there is a possibility of insufficient testing), 3) Detect quality variations by comparing between modules.`,
  },
  'brse-qt-007': {
    question: `Please design a quality report to "visualize" the quality of your offshore team to Japanese clients. Please describe the structure of the monthly quality report and the metrics that should be included.`,
    answer: `Monthly quality report structure: 

1. Executive summary: 
- Quality status: 🟢Good / 🟡Warning / 🔴Needs action 
- Key KPIs: Bug density, test coverage, deliverable acceptance rate 

2. Test progress: 
- Test execution rate (number of executed/planned tests) 
- Test pass rate (passed/number of tests executed) 
- Graph: Trends in the number of test executions and pass rate by day 

3. Bug analysis: 
- Total number of bugs, breakdown of new/fixed/unfixed bugs 
- Distribution by importance (Critical/Major/Minor) 
- Bug occurrence trend (increase/decrease graph) 
- Bug density: X bugs/KLOC 
- Bug fix time (average, maximum) 

4. Quality metrics: 
- Number of code review issues and response rate 
- Unit test coverage rate 
- Results of static analysis (SonarQube etc.) 

5. Client complaint management: 
- Number of client feedback and response status 
- Improvement/deterioration points from previous month 

6. Improvement activities: 
- This month's improvement measures and effects 
- Next month's improvement plan 
- Root cause analysis (Top 3 bug cause analysis)`,
    explanation: `Japanese clients are not reassured by a qualitative report that says \`\`the quality is okay.'' Visualizing the quality status with numbers and graphs, and reporting any problems with cause analysis and improvement measures will help build trust. Quality reports are not \`\`something to get people scolded'' but \`\`a tool to earn trust.''`,
  },
  'brse-qt-008': {
    question: `What is the appropriate response for BrSE when a Japanese client complains that a large number of bugs were found during acceptance testing (UAT)?`,
    options: [
      `\`\`That's a specification change,'' counters.`,
      `After apologizing, analyze the root cause of the bug leak, present specific measures to improve the testing process (review test cases, strengthen reviews, improve test coverage), and promise to prevent recurrence.`,
      `There is no problem if all the bugs are fixed`,
      `Blame the QA team`
    ],
    explanation: `Frequent bugs at the UAT stage greatly damage trust. Response: 1. Apologize sincerely, 2. Analyze the bug (problem with understanding the specifications? Insufficient testing? Environmental differences?), 3. Present a plan to improve the root cause in writing, 4. Promise an implementation schedule for the improvement, 5. Report the improvement results in the next iteration. Demonstrating a willingness to improve is the first step in restoring trust.`,
  },
  'brse-qt-009': {
    question: `As a Lead BrSE, which approach is most effective for building a culture of quality across your organization?`,
    options: [
      `Introduce a strict penalty system`,
      `Fostering a culture in which quality is not something that is ensured in the testing process, but something that is built in throughout the process — design reviews, strict adherence to coding standards, code reviews, quality gates in CI/CD pipelines, visualization of quality metrics, and continuous improvement.`,
      `Quality control is outsourced to an external specialized organization`,
      `Respond to quality issues after they occur`
    ],
    explanation: `Building a quality culture: (1) Instilling the mindset that "quality is an investment, not a cost." (2) Building in quality in upstream processes (design reviews); (3) Setting up quality gates through automation (CI/CD, static analysis, automatic testing); (4) Reviewing and improving quality issues during retrospectives; (5) Visualizing and praising quality results. The key to sustainable improvement is to create an environment where quality improvement occurs naturally, rather than through punishment.`,
  },
  'brse-op-001': {
    question: `What are the biggest benefits of offshore development?`,
    options: [
      `Development quality will definitely improve`,
      `Reduce costs and secure development resources — Take advantage of the difference in labor costs and secure engineering resources that are lacking in Japan overseas.`,
      `Communication becomes unnecessary`,
      `Delivery time will definitely be shortened`
    ],
    explanation: `Advantages of offshore development: 1) Cost reduction (regional differences in labor costs), 2) Securing resources (resolving the shortage of domestic engineers), 3) Possibility of a 24-hour development system that takes advantage of time differences. On the other hand, disadvantages: communication costs, difficulty in quality control, cultural differences. BrSE is responsible for balancing these.`,
  },
  'brse-op-002': {
    question: `In offshore development, as long as the specifications are written accurately, communication is minimal and there is no problem.`,
    explanation: `Even if the specifications are perfect, communication is essential. Reasons: (1) There is tacit knowledge that cannot be conveyed through specifications alone, (2) Questions about specifications inevitably arise during development, (3) It is necessary to respond quickly to change requests, and (4) A feedback loop is necessary to share quality standards. "Documentation + regular communication" is the key to offshore success.`,
  },
  'brse-op-003': {
    question: `Which is correct as the main role of BrSE (Bridge SE)?`,
    options: [
      `Developers who just write code`,
      `Acting as a liaison between Japanese clients and Vietnamese development teams — a hub for specification translation and communication, quality control, progress management, and communication.`,
      `Conduct only sales activities`,
      `Performs Japanese translation only`
    ],
    explanation: `The role of BrSE is wide-ranging: 1) Translation and communication of specifications (translating not only language but also cultural nuances), 2) Quality control (infiltrating Japanese quality standards to Vietnamese side), 3) Progress management (understanding and reporting the situation on both sides), and 4) Coordinating problem solving (bridging technical and cultural issues). He is not just an interpreter, but a key person in the success of the project.`,
  },
  'brse-op-004': {
    question: `What is the difference between a "laboratory type contract" and a "contract type contract" in offshore development?`,
    options: [
      `Another name for the same contract form`,
      `The laboratory type secures a dedicated team on a fixed monthly basis (input-based), while the contract-based type pays a fixed amount for the deliverables (output-based) — the location of risk is different.`,
      `Lab type is for short-term projects, contract type is for long-term projects`,
      `Laboratory type is for domestic contracts, contract type is for overseas contracts.`
    ],
    explanation: `Lab type (close to a quasi-delegation contract): A dedicated team is secured on a monthly basis, flexible development is possible, and resource risk is on the client side. Contract type: Deliverables and delivery dates are promised, but the quality risk is on the vendor's side. BrSE must propose an appropriate contract form according to the nature of the project and implement management methods according to risk.`,
  },
  'brse-op-005': {
    question: `Which of the following should a BrSE do to strengthen the QA (quality assurance) process in offshore development?`,
    options: [
      `Leave all testing to the client side`,
      `Create a test plan → Review test cases in Japanese → Visualize test execution reports → Systematically manage defect triage and tracking`,
      `Don't test until you find a bug`,
      `Testing is left to the discretion of the individual developer.`
    ],
    explanation: `Quality issues in offshore development directly lead to a loss of trust. BrSE's QA management: ① Create test plans according to client quality standards, ② BrSE reviews test cases (confirms consistency with Japanese specifications), ③ Visualizes test results in Japanese (number of bugs, severity, progress rate), ④ Reports critical bugs to the client immediately.`,
  },
  'brse-op-006': {
    question: `Design a typical workflow for an offshore development project (specification receipt → development → testing → delivery) and describe the specific actions that BrSE should take in each phase.`,
    answer: `Offshore development workflow: 

1. Specification reception phase: 
- Receive specifications from client 
- BrSE action: Reading the specifications → Creating a list of unclear points → Questioning the client → Complementing the specifications based on the answers → Translating into Vietnamese/English → Holding a briefing session for the development team 

2. Estimation/Planning Phase: 
- Estimate effort with development team 
- BrSE action: Confirm technical risk → Create schedule including buffer → Submit quotation to client → Create WBS after agreement 

3. Development phase: 
- Designed and coded by team 
- BrSE actions: Daily progress check → Creating and sending weekly reports → Interacting with questions regarding specifications → Conducting design reviews → Participating in code reviews 

4. Testing phase: 
- Tested by QA team 
- BrSE actions: Review test plan → Confirm test results → Prioritize bugs → Track fix status → Create quality report 

5. Delivery phase: 
- Organize deliverables and submit to client 
- BrSE action: Confirm with deliverables checklist → Create delivery note → Prepare operating procedure manual → Support client review → Manage responses to issues pointed out`,
    explanation: `The involvement of BrSE is essential in each phase. We manage quality and communication consistently, from understanding specifications to post-delivery support, rather than "just throwing it and calling it a day." In particular, the \`\`list of unclear points'' and \`\`briefing sessions'' when receiving specifications are critical—if we don't have a common understanding here, rework will increase in subsequent processes.`,
  },
  'brse-op-007': {
    question: `What are the best practices to minimize "specification recognition discrepancies" that often occur in offshore development?`,
    options: [
      `If the specifications are made thicker, discrepancies will disappear.`,
      `Conducting specification confirmation meetings (Q&A meetings) + Creating mockups of important screens + Managing questionnaires (Q&A sheets) that document questions about specifications + Prototype review before coding`,
      `Developers interpret and implement their own`,
      `Discrepancies are inevitable, so accept them.`
    ],
    explanation: `Measures to minimize discrepancies in specification recognition: (1) Align the understanding of both parties through Q&A meetings (specification walk-throughs), (2) Visually check with mockups of important screens, (3) Document all questions on the Q&A sheet and obtain approval, (4) Feed early with a short development cycle, and (5) Show prototypes of important functions in advance. \`\`Check too much'' is just right.`,
  },
  'brse-op-008': {
    question: `Which KPI is appropriate for measuring the performance of an offshore development team?`,
    options: [
      `Lines of code only`,
      `Quality (bug density, UAT passing rate), productivity (velocity, number of completed stories), process (on-time delivery rate, Q&A response speed), customer satisfaction (NPS, repeat rate)`,
      `Overtime hours only`,
      `Members' Japanese level only`
    ],
    explanation: `Multifaceted KPIs are required: (1) Quality: Bug density (bugs/KLOC), number of post-release bugs, test coverage, (2) Productivity: Velocity trend, actual/planned ratio, (3) Process: On-time delivery rate, specification Q&A response speed, (4) Customer: Customer satisfaction survey, contract renewal rate. We measure with a balance rather than a single indicator, and connect it to improvement activities.`,
  },
  'brse-op-009': {
    question: `As a Lead BrSE, you will design the offshore development onboarding process for new clients. Include mechanisms to maximize the probability of success for your first project.`,
    answer: `Offshore development onboarding process: 

Pre-contract (2-4 weeks): 
- Hearing about client's development culture and quality standards 
- Check past offshore experience and challenges 
- Small-scale trial project proposal (1-2 months) 
- Team composition and BrSE assignment 

Start-up period (1-2 weeks): 
- Kickoff meeting: project overview, team introduction, communication rules agreement 
- Development environment setup (VPN, repository, CI/CD, chat tools) 
- Sharing and agreeing on coding standards and quality standards 
- Developing a communication plan (regular meetings, reporting formats, escalations) 
- Creation of the first edition of the glossary 

Initial project (4-8 weeks — trial period): 
- Start with small, well-defined tasks 
- Daily progress sharing (15 minute morning meeting) 
- Weekly review meeting (issues and improvements) 
- BrSE reviews all deliverables before client submission 
- Collect client feedback every two weeks 

Transition to stable phase: 
- Successful trial → Full-scale operation contract 
- Process improvement report (lessons learned from trials) 
- Team expansion plan 
- KPI setting and regular review system construction 

Failure prevention measures: 
- Deliberately secure a large buffer for the first time (estimate x 1.3) 
- Early detection of problems with daily checks 
- Senior BrSE backs up the first project 
- Implementation of Japanese culture training within the team`,
    explanation: `If the first project fails, it is extremely difficult to regain trust. The most effective strategy is to start small with trials and expand after gaining success. By ensuring a large buffer and increasing BrSE involvement more than usual, initial quality risks are minimized.`,
  },
  'brse-ik-001': {
    question: `What is the difference between "front end" and "back end"?`,
    options: [
      `The front end is the entrance to your company, the back end is the back door.`,
      `The front end is the screen side that the user sees and operates (HTML/CSS/JavaScript), and the back end is the server side processing (API, DB, business logic).`,
      `Design the front end, implement the back end`,
      `New features on the front end, old features on the back end`
    ],
    explanation: `Front-end (FE): User interface, runs in the browser, Technology: HTML/CSS/JS, React/Vue/Angular. Backend (BE): Server-side processing, API provision, database operations, Technology: Java/PHP/Python/Node.js. BrSE needs to clarify the division of roles between FE and BE when communicating specifications.`,
  },
  'brse-ik-002': {
    question: `What is Git? How does it relate to your work at BrSE?`,
    options: [
      `project management tools`,
      `Source code version control system — Manage the history of code changes and enable parallel work in team development. BrSE needs to understand branch strategy and release management`,
      `text editor`,
      `translation tools`
    ],
    explanation: `Basic concepts of Git: 1. Repository (code storage), 2. Branch (branching for parallel development), 3. Commit (recording changes), 4. Merging (integrating branches), 5. Pull request (requesting a review). As a BrSE: Release branch management, understanding branch strategy (Git Flow, etc.), and code management for each environment are required.`,
  },
  'brse-ik-003': {
    question: `CI/CD (continuous integration/continuous delivery) only needs to be understood by developers and is not relevant to BrSE.`,
    explanation: `CI/CD is also important for BrSE. CI (continuous integration): Automatically build and test when code is changed → Early detection of bugs. CD (continuous delivery): Automatic staging/production implementation after passing the test. As a BrSE: 1) Utilize CI results as quality indicators, 2) Manage release cycles, 3) Explain deployment plans to clients.`,
  },
  'brse-ik-004': {
    question: `Which of the following is the correct correspondence between the HTTP methods used in REST API design and their uses?`,
    options: [
      `GET=update, POST=get, PUT=delete, DELETE=create`,
      `GET=data acquisition, POST=data creation, PUT=data update, DELETE=data deletion`,
      `All can be done using POST`,
      `The method is not important; all you need to decide is the URL.`
    ],
    explanation: `Basics of RESTful API design: GET (retrieval, idempotent), POST (creation), PUT (full update), PATCH (partial update), DELETE (delete). BrSE must understand the API design in the specification and communicate it to the development team. It is also important to have the ability to read the JSON structure of API requests/responses.`,
  },
  'brse-ik-005': {
    question: `What is "microservices architecture"? Why should BrSE know?`,
    options: [
      `Develop in a small team`,
      `An architecture in which a large system is developed and deployed by dividing it into small, independent services — BrSE needs to manage each service's scope of responsibility and inter-service communication (API) using specifications.`,
      `Develop only with free and open source`,
      `Skip the test and get it out quickly`
    ],
    explanation: `Characteristics of microservices: ① Each service can be deployed independently, ② Services communicate using API (REST/gRPC), ③ Technology stack can be selected for each service, ④ Services are “owned” by the team. Impact on BrSE: Specifications will be separated by service, API contract management will become important, and integration testing will become more important.`,
  },
  'brse-ik-006': {
    question: `What is the difference between cloud services "IaaS", "PaaS", and "SaaS"?`,
    options: [
      `All the same cloud services`,
      `IaaS (infrastructure provision: virtual servers, etc.), PaaS (platform provision: application execution environment), SaaS (application provision: ready-to-use software)—Different scopes of responsibility`,
      `Differences in service size`,
      `Only difference in price`
    ],
    explanation: `Three layers of cloud: ①IaaS (AWS EC2, etc.): Provides a server and network, and manages everything above the OS yourself ②PaaS (Heroku, GAE, etc.): Provides an application execution environment, no infrastructure management required ③SaaS (Salesforce, Google Workspace, etc.): Use the app as is. BrSE must understand the client's infrastructure environment and communicate the environment specifications to the development team.`,
  },
  'brse-ik-007': {
    question: `If a Japanese client requests "Please report on security measures," which items should BrSE report?`,
    options: [
      `Answer "Security is fine"`,
      `① Measures status for OWASP Top 10 ② Authentication/authorization mechanism ③ Data encryption (communication: TLS, storage: AES) ④ Vulnerability scan results ⑤ Access log management ⑥ Security patch application status — Systematic reporting of specific technical measures`,
      `Just report that you have virus software installed`,
      `Report only password length`
    ],
    explanation: `Security is a non-functional requirement that Japanese clients (especially financial and medical) place the highest importance on. BrSE: Must have a basic understanding of OWASP Top 10 (SQL injection, XSS, etc.), an overview of authentication methods (OAuth2.0, JWT), types of encryption (common key AES/public key RSA/hash SHA), an overview of ISMS/ISMS guidelines, and be able to report to give clients peace of mind.`,
  },
  'brse-ik-008': {
    question: `As a BrSE, please design a presentation structure when proposing migration to a new technology stack (e.g. React → Next.js, MySQL → PostgreSQL) to a client.`,
    answer: `Technology transition proposal presentation: 

1. Current issues (Why): 
- Specific limitations and problems of the current technology stack 
- Data shows: performance issues, increased maintenance costs, security vulnerabilities 
- Risks of “as is” (end of technical support, difficulty in recruiting human resources, etc.) 

2. Proposed technology (What): 
- Overview of new technology (concisely explain technical terms) 
- Adoption record (in which companies/projects is it used?) 
- Comparison table with existing technologies (performance, maintainability, learning cost) 

3. Migration planning (How): 
- Gradual migration approach (step by step, not big bang) 
- Phase 1: PoC (proof of concept) — small-scale feature validation (2-4 weeks) 
- Phase 2: Pilot migration — migrate one module (1-2 months) 
- Phase 3: Full-scale migration — migrate the rest in stages 
- Securing parallel operation period 

4. Cost/Effectiveness (Investment & Return): 
- Migration costs (man hours, licenses, learning costs) 
- Expected effects (improved performance, reduced maintenance costs, improved development efficiency) 
- ROI estimation (investment payback period) 

5. Risks and countermeasures: 
- Technical risk → Verification with PoC 
- Team learning risk → step-by-step training 
- Migration failure risk → rollback plan`,
    explanation: `What clients want to hear is not \`\`technical details,'' but \`\`why are we changing, how much will it cost, and are there any risks?'' The value of BrSE is to translate explanations for engineers into business language and make proposals. The phased approach is consistent with the "risk-averse" culture of Japanese clients.`,
  },
  'brse-ik-009': {
    question: `As a lead BrSE, which of the following is the most effective initiative to improve the IT technical knowledge of the entire team?`,
    options: [
      `Require everyone to obtain IT qualifications`,
      `① Monthly technology study sessions (sharing the latest technology trends) ② Formulation and updating of technology radar (evaluation and classification of adopted technologies) ③ Technology PoC culture (mechanism to test new technologies on a small scale) ④ In-house wiki that systematizes learning through actual projects — creating a system for a “learning organization”`,
      `Invite external instructors every month`,
      `Distribute technical books to everyone`
    ],
    explanation: `\`\`Systemization'' is the key to raising the level of technical knowledge. ①Study session: Members take turns presenting (output is the best learning), ②Technology radar: Categorizing technologies by Adopt/Trial/Assess/Hold (not recommended), ③PoC: Practical learning with a culture of "trying", ④Wiki: Converting tacit knowledge to explicit knowledge. Rather than relying on individual self-improvement, we create a system for learning as an organization.`,
  },
  'brse-rw-001': {
    question: `We received vague instructions from a Japanese client: \`\`Please make that feature look a little nicer.'' What should I do first as a BrSE?`,
    options: [
      `Give instructions to the Vietnamese development team using your own sense of style`,
      `Ask the Japanese side questions to make it more concrete, such as, \`\`What exactly are the requirements for a \`\`good feeling''?Are there any sites or screen images that can be used as references?''`,
      `Due to unclear specifications, development will be temporarily halted.`,
      `Ask Vietnamese developers directly and let them decide`
    ],
    explanation: `Japan's culture of "reading the air" and ambiguous instructions based on "Aun's breathing" are the most dangerous aspects of offshore development. Since BrSE plays the role of a bridge that converts tacit knowledge into explicit knowledge, it is necessary to conduct interviews to incorporate it into concrete specifications and requirements without passing it on as is.`,
  },
  'brse-rw-002': {
    question: `The Vietnamese development team asked, "How should we handle the behavior in cases that are not in the specifications?" I don't have time until the delivery date. How will you respond?`,
    options: [
      `Give priority to the delivery date and instruct to proceed with the method that is easiest to implement.`,
      `Immediately contact the person in charge on the Japanese side, present two possible solutions and the amount of work required for each, and ask for a decision.`,
      `It was a mistake on the Japanese side that it was not written in the specifications, so I told them there was no need to implement it.`,
      `Make your own decisions and report to the Japanese side later.`
    ],
    explanation: `Missing specifications often occur. If BrSE makes an arbitrary decision, there is a high risk of rework later, so we always check with the client. At that time, instead of simply asking, "What would you like to do?", by presenting options (solutions), you can speed up the client's decision-making process.`,
  },
  'brse-rw-003': {
    question: `During a regular meeting (web meeting), I could not hear the Japanese client's fast-talking explanations and could only understand half of the content. What should I do?`,
    options: [
      `Pretend you understand and ask your team members privately if they can watch the recording later.`,
      `Simply say, \`\`I'm sorry, but I'm not sure what you understand, so could you please explain again a little more slowly?''`,
      `Listen silently and give up on creating minutes.`,
      `Continue to say "Yes, I understand" at random.`
    ],
    explanation: `Proceeding without understanding is the biggest cause of fatal misunderstandings in offshore development. In Japanese business as well, it is more honest to check things on the spot rather than proceeding with uncertainty, and can prevent major troubles (misunderstandings) later on.`,
  },
  'brse-rw-004': {
    question: `The day before the delivery date, we received a report from the Vietnamese development team saying, \`\`Actually, there are so many bugs that we won't be able to deliver tomorrow.'' What action should BrSE take next?`,
    options: [
      `We immediately notified the Japanese client that \`\`delivery will be delayed due to quality issues'' (Horenso's \`\`Hou''), and quickly confirmed the current number of bugs and the prospects for recovery.`,
      `I got angry at the Vietnamese team and forced them to stay up all night to deliver tomorrow.`,
      `Deliver the product with bugs so that the Japanese side doesn't find out.`,
      `Wait until the client contacts you`
    ],
    explanation: `In Japanese business, the golden rule is "bad news first" (report the bad news as soon as possible). Concealment and late reporting undermine trust the most. The correct way to report the incident is to first report only the facts, and then provide a detailed report on the cause and recovery plan.`,
  },
  'brse-rw-005': {
    question: `[Yes or No] We received 50 review points (bugs and fixes) from the Japanese side at once. In order to avoid demoralizing the Vietnamese team, BrSE should communicate only half of the 25 cases in advance, and secretly communicate the rest at a later date.`,
    explanation: `×. If you do it in small portions, you will end up in a situation where you will not be able to finish the revisions no matter how long it takes, which will actually lower your motivation and make it difficult to manage your schedule. The correct approach is to accurately share all issues, prioritize them, and proceed with corrections in a planned manner.`,
  },
  'brse-rw-006': {
    question: `The holidays in Japan and Vietnam overlap, which is likely to affect the project schedule. What should BrSE do at the time of kickoff?`,
    options: [
      `The first time I make a holiday excuse when I'm behind schedule.`,
      `At the kickoff, share the calendar of Vietnamese holidays (such as Tet) with the Japanese side and agree on a master schedule that takes into account the reduction in working days.`,
      `The Vietnamese side will be required to work on public holidays in full accordance with the Japanese calendar.`,
      `Estimate the delivery date appropriately`
    ],
    explanation: `Holidays due to differences in culture and systems (differences in holiday calendars) are a unique risk of offshore development. If you later say, \`\`Vietnam was closed because it's a public holiday,'' you'll get into trouble. It is important to reflect this in the master schedule at the initial stage and ensure that all parties involved are on the same page.`,
  },
  'brse-rw-007': {
    question: `A Vietnamese development team complains that \`\`Japan's QA (testing team)'s bugs are too detailed. They point out even 1 pixel discrepancies.'' How will BrSE respond?`,
    options: [
      `Just tell them, “Japanese people are very particular, so be patient.”`,
      `Complain to the QA team, \`\`This is too detailed, please test more roughly.''`,
      `Explain the background that Japanese end users are sensitive to UI/UX quality, and work to agree on guidelines for quality standards (how much is acceptable) with the QA side at the specification stage.`,
      `Ignoring the development team's complaints and forcing them to fix it`
    ],
    explanation: `Japan's "high standards of quality" can be difficult for offshore teams to understand. The role of a bridge is to explain the background of why something is considered important (such as end-user expectations) and at the same time create clear agreed standards to prevent excessive quality.`,
  },
  'brse-rw-008': {
    question: `A critical system bug has occurred in production. The Japanese side is very angry. What should I emphasize most in the "Problem Report" submitted as a BrSE?`,
    options: [
      `Name of specific programmer who created the bug and punishment`,
      `Emotional excuse: “The Vietnamese team did their best, but…”`,
      `The cause of the occurrence (why it happened) and "permanent recurrence prevention measures (process improvement)" to prevent the same bug from occurring again in the future`,
      `Counterargument that the specifications on the Japanese side were poorly written`
    ],
    explanation: `In Japanese business, much emphasis is placed on reporting \`\`why it happened (root cause)'' and \`\`how to prevent it (recurrence prevention measures)'' rather than the mistake itself. Rather than blaming individuals, showing an approach that solves problems through "mechanisms" such as review systems and testing processes will help restore trust.`,
  },
  'brse-rw-009': {
    question: `During a requirements meeting with a client, a request was made that was technically unfeasible (or extremely expensive). What is the appropriate response as a BrSE?`,
    options: [
      `Coldly refuse on the spot, saying, \`\`That's absolutely impossible.''`,
      `Just say "Yes, I can" and take it home, then regret it later.`,
      `\`\`It is difficult at the moment due to the technical constraints of 〇〇, but as an alternative method, we can achieve a similar goal at a low cost.Would you consider it?''`,
      `Listen silently and ignore during implementation`
    ],
    explanation: `BrSE's high-value-added communication is not simply denying that it can't be done, but logically explaining why it is difficult (budget, technology, delivery date) and presenting an "alternative" that can achieve the client's business objectives.`,
  },
  'brse-rw-010': {
    question: `[True or False] In order to improve translation efficiency, the best way for BrSE to do this is to take the Japanese specifications as is, run them through Google Translate without thinking, and then pass the Vietnamese version to the development team.`,
    explanation: `×. Literal translations can mislead developers because they lack the "context unique to system development" and "Japanese tacit knowledge." BrSE must interpret the content as systematic behavior and logic, and add illustrations and supplementary explanations as necessary to "complete the context through free translation."`,
  },
  'brse-rw-011': {
    question: `Midway through the project, the client began frequently requesting "specification changes." The budget and delivery date are fixed. What is the senior BrSE's approach to avoid project failure?`,
    options: [
      `We work overtime for free to avoid hurting the client's mood.`,
      `Reject all change requests as "Phase 2 and beyond"`,
      `Create a change management table and visualize the \`\`scope of impact,'' \`\`required man-hours,'' and \`\`risk of schedule delay'' due to additional specifications. Negotiate with the client which features to trade off within the current scope.`,
      `abandon a project midway through`
    ],
    explanation: `This is a response to scope creep (never-ending specification expansion). Rather than simply refusing with a "no," the correct control method is to visualize the fact that changes require cost and time using data (such as a change management table) and leave the trade-off decision to the client.`,
  },
  'brse-rw-012': {
    question: `The system staff at the head office in Japan and the on-site business users have different opinions and are caught in the middle. How should I act as a BrSE?`,
    options: [
      `The person in charge of the system is the one paying the money, so they ignore the opinions of the users on site.`,
      `Create a document that organizes the points of conflict between the two parties, the technical feasibility of the system, and business advantages and disadvantages, and form a consensus in a three-party meeting involving both parties.`,
      `Implement both opinions as is and complicate the system`,
      `Let the Vietnamese development team decide which opinion to adopt.`
    ],
    explanation: `In conflicts between stakeholders, BrSE needs to act as a facilitator. The role of the senior team member is to sort out each other's arguments from a technical and operational perspective and try to build consensus through Nemawashi and coordination meetings.`,
  },
  'brse-rw-013': {
    question: `Vietnam's development team has a high turnover rate, and knowledge is becoming individualized, making project handover difficult. Which of the following is the most effective remedy for this situation?`,
    options: [
      `Appeal directly to the president to double your salary`,
      `There is no problem if you immediately hire a new person to replace the person who left your job.`,
      `Thoroughly operate Wiki (documentation) within the project, introduce a code review culture and pair programming, and build a system (standardization) in which know-how is distributed and shared throughout the team.`,
      `BrSE rewrites all code by himself`
    ],
    explanation: `"Eliminating individualization" and "knowledge management" are important issues in offshore development. By incorporating processes for document modernization, standardization, and uniform code quality, you can create a team that is resistant to the risk of resource fluctuations, even if people quit.`,
  },
  'brse-rw-014': {
    question: `We won a large-scale offshore development project from a major Japanese financial institution. However, customers are strongly opposed to offshore services due to concerns about security and quality. As a senior BrSE, please write a "proposal for an offshore system/process" to eliminate customer concerns.`,
    answer: `Proposed approach to dispel customer concerns: 

1. Building a security system: 
- Presentation of physical measures (no smartphones allowed, development in a dedicated secure room). 
- Presentation of network measures (use of VDI/VPN, prohibition of local storage of source code and customer data). 
・Show proof of implementation of information security education (ISO27001). 

2. Visualization of quality assurance process: 
・Explained that we will formulate a test plan that complies with Japanese quality standards (JSTQB, etc.), rather than leaving everything to Vietnam. 
- Introduced test automation (CI/CD environment) and proposed a mechanism to eliminate human errors. 
・Multiple code reviews (static analysis using tools + peer review + final confirmation by senior tech lead). 

3. Maintain transparency in communication: 
・We promise 100% visualization of progress and issues through weekly regular meetings and daily reports. 
・Perform monthly objective quality metrics reports based on KPIs (bug detection rate, estimated man-hours, etc.). 

Proving with "mechanisms and data" is most effective for conservative clients such as financial institutions.`,
    explanation: `For mission-critical projects such as financial institutions, logical proofs such as \`\`defense through physical/logical infrastructure such as secure rooms'' and \`\`elimination of human error using process tools'' are required, rather than the mentality of \`\`I will do my best.''`,
  },
  'brse-rw-015': {
    question: `You are a lead BrSE who brings together many BrSEs. During one project, a young BrSE in charge of the project was on the verge of depression, and there were numerous complaints from clients. The cause was caught between \`\`the client's recklessness (frequent changes in specifications)'' and \`\`the Vietnamese team's lack of development ability.'' Create a one-week rescue plan to get your project back on track.`,
    answer: `One-week rescue plan for the Burning Project: 

[Day 1: Understand the current situation and stop bleeding (triage)] 
・Temporarily take over the workload of young BrSEs and provide mental care. Take immediate leave if necessary. 
- Immediately notify the client that \`\`I, as the lead BrSE, will intervene and rebuild the system,'' and temporarily stop (Freeze) the current development work. 

[Day 2-3: Inventory and visualization of issues] 
-Create a fact-based list by identifying all the current "change request list," "remaining tasks," and "current bugs." 
- Interview and analyze the technical issues of the Vietnamese team (why they are behind, where are the skill gaps). 

[Day 4: Scope redefinition and client negotiations] 
・Conducted emergency meeting with client. Calmly explains the mechanism of quality collapse caused by frequent specification changes using data (bug occurrence rate, etc.). 
- Redefine the "minimum scope (MVP) that can be reliably delivered with current resources and time," and negotiate and agree on phase separation for overlapping requirements. 

[Day 5-7: Restructuring of systems and processes] 
- Assign additional senior engineers to the development team to provide help and establish a support system to resolve technical issues. 
- Tighten the change management process (rules that do not accept arbitrary changes and require written agreement). 
・Establish a backup system (clarification of escalation path) when young BrSEs return and resume development safely.`,
    explanation: `The lead class requires "firefighting (troubleshooting)" skills. Rather than forcing people to work hard based on mental theory, the question is whether they can quickly implement the basic management principles of 1) protecting people (separating the burden), 2) objectively visualizing the situation, 3) negotiating scope with clients on an equal footing, and 4) fundamentally revising processes and systems.`,
  },

}
