/* ------------------------------------------------------------------
   All editable content for the site lives in this file.
   Change text here; app.js renders it.
------------------------------------------------------------------- */
const NOTION = "https://sachin-saxena.notion.site/Sachin-s-Portfolio-30eeed262be582b0be8081276eb729c0";

window.SITE = {
  email: "sssaxena058@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/ytsaxena/",
    github: "https://github.com/ytsaxena",
    youtube: "https://www.youtube.com/@ITwalebhaiya",
    instagram: "https://www.instagram.com/ytsaxena/",
    outloud: "https://out-loud-mu.vercel.app/",
    notion: NOTION,
    resume: "resume.pdf"
  },

  /* ---------- Changelog (newest first) ---------- */
  changelog: [
    {
      v: "v4.0.0", when: "Unreleased", kind: "next",
      title: "Product Manager on your team",
      where: "Delhi NCR · open to APM / PM roles",
      notes: [
        ["added", "Engineer-grade PRDs, AI product judgment, and a habit of shipping."],
        ["added", "A 100K-person audience that already trusts how I explain products."]
      ],
      link: { label: "Start the conversation →", href: "#contact" }
    },
    {
      v: "v3.0.0", when: "Sep 2025 – now", kind: "major",
      title: "Mobile Lead, Product & Engineering · IF MedTech",
      where: "Navi Mumbai · AI healthcare",
      notes: [
        ["shipped", "Requirement-to-release for two AI health apps, Dr. Skin AI and Oravue AI."],
        ["changed", "Redesigned the Dr. Skin AI dashboard from direct user feedback."],
        ["added", "Release and compliance docs before Play Store submission, cutting engineering ↔ compliance review cycles."],
        ["added", "Became the client's main contact, clearing requirement ambiguity before it blocked a sprint."]
      ]
    },
    {
      v: "v2.2.0", when: "2025", kind: "minor",
      title: "AI Product Management · Airtribe",
      where: "16-week cohort",
      notes: [
        ["added", "PRDs, teardowns and GTM plans for Zepto, Zomato, Airbnb, Uber and more."],
        ["shipped", "OutLoud, a voice-first AI speaking coach built solo, from idea to live."]
      ],
      link: { label: "Browse the teardowns →", href: "#teardowns" }
    },
    {
      v: "v2.1.0", when: "Jun – Aug 2025", kind: "minor",
      title: "Software Engineer · TetraFolia Skills Games",
      where: "Gurugram",
      notes: [
        ["added", "CleverTap and Adjust analytics, so product could see real user behavior."],
        ["shipped", "User-facing features prioritized directly with product and backend under startup constraints."]
      ]
    },
    {
      v: "v2.0.0", when: "Jan – May 2025", kind: "major",
      title: "Software Engineer · Global Grand Gaming",
      where: "Bangalore",
      notes: [
        ["shipped", "Analytics instrumentation and Cashfree payments while the app scaled to 100K+ downloads."],
        ["added", "Firebase analytics and auth for growth and retention tracking."],
        ["added", "Onboarded junior interns onto third-party API workflows."]
      ]
    },
    {
      v: "v1.0.0", when: "Dec 2022 – Dec 2024", kind: "major",
      title: "Android Developer · Shunya Ekai Technologies",
      where: "Gurugram",
      notes: [
        ["shipped", "0→1 launch of PlusX Electric, an EV app for drivers and consumers."],
        ["changed", "Led the migration of a legacy IoT (MQTT) app to Kotlin."]
      ]
    },
    {
      v: "v0.1.0", when: "Apr – Jul 2022", kind: "minor",
      title: "Android Trainee · Inventia Technology Consultants",
      where: "Noida",
      notes: [["added", "First production code: UI changes across two live platforms."]]
    },
    {
      v: "v0.0.1", when: "2016 – 2022", kind: "minor",
      title: "B.Sc Computer Science → MCA",
      where: "DBRAU Agra · Bundelkhand University, Jhansi",
      notes: [["added", "Started the YouTube channel that grew to 100K+ subscribers."]]
    }
  ],

  /* ---------- Teardowns & PRDs ---------- */
  teardowns: [
    { brand: "Zepto", kind: "Growth case study", title: "Increase AOV on quick-commerce orders", q: "How do you grow basket size when delivery takes 10 minutes?", tags: ["Growth", "Monetization"], href: "https://drive.google.com/file/d/1v3Lo8zbIrvuOXzDWt1tkr4p1cFJmxrb4/view?usp=sharing" },
    { brand: "Zomato", kind: "Funnel & retention", title: "Driving growth through funnel optimization & retention", q: "Where does the order funnel leak, and what brings people back?", tags: ["Growth", "Retention"], href: NOTION + "#3aaeed262be58099b7e9c09fd184c386" },
    { brand: "Airbnb", kind: "PLG teardown", title: "Product-led growth & the revenue model", q: "Which product loops drive Airbnb's growth, and how do they make money?", tags: ["Growth", "PLG"], href: NOTION + "#3b0eed262be58014922ac414c3a823d4" },
    { brand: "Uber", kind: "Problem solving", title: "Find my Ride: improving the pickup experience", q: "Why do riders and drivers still miss each other at pickup?", tags: ["UX", "Problem solving"], href: "https://drive.google.com/file/d/11vwJumxg9LKpDkHNfqeKL-wwLrqsHCTy/view?usp=sharing" },
    { brand: "AI Master", kind: "Go-to-market", title: "GTM for an AI course for business professionals", q: "Who buys AI upskilling, and how do you reach them?", tags: ["GTM", "AI"], href: NOTION + "#3b0eed262be580acb98ecb2a2525563f" },
    { brand: "B2B SaaS", kind: "PRD", title: "Corporate learning & training platform", q: "What does an L&D team need to roll out training at scale?", tags: ["B2B", "PRD"], href: "https://drive.google.com/file/d/1sPMJsRBnsnMuAhxe3Ukekm0Kbtb4wC0i/view?usp=sharing" },
    { brand: "VitaFit", kind: "PRD", title: "Product requirements for two features", q: "Scoping two features end to end: users, flows, metrics, edge cases.", tags: ["PRD"], href: NOTION + "#39eeed262be580b08545f271425846b9" },
    { brand: "Nykaa", kind: "UX analysis", title: "Nykaa user experience analysis", q: "Where does India's beauty-commerce app help or slow down the shopper?", tags: ["UX"], href: "https://drive.google.com/file/d/1soBkNmrTJly3Rqg-QUOwEdTqsXIXvypO/view?usp=sharing" },
    { brand: "MyJio", kind: "UX evaluation", title: "Nielsen's usability heuristics & UX laws", q: "Scoring MyJio screen by screen against 10 heuristics.", tags: ["UX"], href: NOTION + "#394eed262be5808085cad6e8e62b213d" },
    { brand: "WhatsApp", kind: "Community strategy", title: "Community growth for data analysts in 14 days", q: "How do you grow an engaged WhatsApp community in two weeks?", tags: ["Growth", "Community"], href: NOTION + "#3b0eed262be580738cecfafbee2c195c" }
  ],

  /* ---------- Toolkit ---------- */
  toolkit: [
    { group: "Product", items: ["Requirement gathering", "PRDs", "Prioritization", "Roadmaps", "Agile / sprints", "Release planning", "Stakeholder mgmt", "User feedback", "Product analytics"] },
    { group: "AI stack", items: ["Claude Code", "Gemini API", "Sarvam AI", "n8n", "Google AI Studio", "Lovable", "ChatGPT"] },
    { group: "Analytics & ops", items: ["CleverTap", "Adjust", "Firebase Analytics", "Google Analytics", "Jira", "ClickUp", "Notion", "Figma", "Canva"] },
    { group: "Build", items: ["Kotlin", "Java", "Jetpack Compose", "Flutter", "REST APIs", "Firebase", "Google Maps", "SQL", "Play Console", "GitHub"] }
  ],

  /* ---------- "Ask my portfolio" knowledge base ----------
     keys: words that trigger the answer. a: paragraphs. src: shown as the retrieval source. */
  ask: {
    chips: ["What AI have you shipped?", "Why engineer → PM?", "How do you prioritize?", "Why should we hire you?", "How can I reach you?"],
    kb: [
      { keys: ["ai", "shipped", "built", "llm", "gemini", "model", "genai", "artificial"],
        a: ["Three AI products so far.", "OutLoud, which I built solo: a voice-first English speaking coach. On-device speech-to-text, Gemini for the interview with a local fallback, Sarvam's Bulbul v3 for the voice.", "At IF MedTech I own requirement-to-release for Dr. Skin AI and Oravue AI, two AI healthcare apps."],
        src: "Work › OutLoud, IF MedTech" },
      { keys: ["outloud", "speaking", "voice", "english", "coach", "sarvam", "bulbul"],
        a: ["OutLoud is for people who read and write English well but freeze when they speak it. Three spoken questions, one AI interviewer, one honest scorecard.", "The key trade-offs: on-device STT for zero latency, a local question bank so a Gemini outage never kills a session, and audio that never leaves the phone. Only the answer text goes to the model."],
        src: "Work › OutLoud" },
      { keys: ["engineer", "transition", "switch", "why pm", "developer", "background", "technical", "career"],
        a: ["I spent about three years shipping Android apps: an EV platform, a gaming app that passed 100K downloads, IoT migrations.", "I kept caring more about why we were building something than how. Now the engineering background is my edge: my PRDs are technically grounded, and I can spot a scope trap in sprint planning before it costs a week."],
        src: "Changelog › v1.0 → v3.0" },
      { keys: ["prioritize", "prioritization", "rice", "roadmap", "backlog", "decide", "tradeoff", "trade-off"],
        a: ["I start with user feedback and technical constraints together, then score the backlog. RICE when the numbers exist, a simple impact-vs-effort call when they don't.", "The rule I actually follow: usability beats technical convenience. That's how the Dr. Skin AI dashboard redesign got prioritized. Try the RICE lab in the Playground to see how a score moves."],
        src: "Work › Dr. Skin AI · Playground › RICE lab" },
      { keys: ["hire", "why you", "fit", "strength", "different", "unique", "value"],
        a: ["You get a PM who can read the codebase, write the PRD, and talk to the client in the same afternoon.", "I've owned delivery for AI health products, shipped my own AI product solo, and I explain product thinking to 100K+ people on YouTube, so communication is a strength, not a risk."],
        src: "Summary" },
      { keys: ["contact", "email", "reach", "phone", "call", "hire", "connect", "linkedin", "number"],
        a: ["Email is fastest: sssaxena058@gmail.com. Phone: +91 75260 07604.", "Or find me on LinkedIn at /in/ytsaxena. I'm in Gurugram and open to APM and PM roles across Delhi NCR."],
        src: "Contact" },
      { keys: ["youtube", "community", "teach", "mentor", "content", "speak", "talk", "linkedin followers", "channel"],
        a: ["I run IT Wale Bhaiya on YouTube (100K+ subscribers) and have 11K+ followers on LinkedIn. I post PM interview prep, career roadmaps and n8n automation tutorials for PMs.", "I've mentored 5,000+ developers and students, and spoken at Kotlin User Group Delhi, GL Bajaj, Galgotias and Bundelkhand University."],
        src: "Teaching in public" },
      { keys: ["case", "teardown", "prd", "study", "studies", "zepto", "zomato", "airbnb", "uber", "nykaa"],
        a: ["Ten teardowns and PRDs: AOV growth for Zepto, funnel and retention for Zomato, PLG for Airbnb, pickup UX for Uber, a Nielsen heuristic audit of MyJio, a B2B SaaS learning platform PRD, and more.", "They're all in the Teardowns section, and each card opens the full document."],
        src: "Teardowns" },
      { keys: ["tools", "stack", "skills", "analytics", "jira", "figma", "kotlin", "sql"],
        a: ["Product: PRDs, prioritization, roadmaps, sprints, release planning. Analytics: CleverTap, Adjust, Firebase, GA.", "AI: Claude Code, Gemini API, Sarvam AI, n8n, AI Studio. And I still write Kotlin, Java, Compose and Flutter when I need to prototype."],
        src: "Toolkit" },
      { keys: ["now", "current", "working", "today", "medtech", "skin", "oravue", "health"],
        a: ["I'm Mobile Lead for Product & Engineering at IF MedTech. I own requirement-to-release for two AI healthcare apps, Dr. Skin AI and Oravue AI.", "Recently I redesigned the Dr. Skin AI dashboard around direct user feedback, choosing usability over technical convenience."],
        src: "Experience › IF MedTech" },
      { keys: ["metric", "metrics", "data", "measure", "kpi", "numbers", "impact", "results"],
        a: ["I instrument before I optimize. At Grand Gaming I owned analytics and payments while the app scaled to 100K+ downloads. At TetraFolia I wired up CleverTap and Adjust so product decisions had data behind them.", "In OutLoud I track session starts, completions and skip rate. Skip rate tells me which questions are too hard."],
        src: "Changelog › v2.0, v2.1 · Work › OutLoud" },
      { keys: ["location", "where", "relocate", "remote", "city", "gurugram", "delhi", "ncr", "based"],
        a: ["Based in Gurugram and open to APM or PM roles anywhere in Delhi NCR."],
        src: "Contact" },
      { keys: ["education", "degree", "airtribe", "certification", "college", "mca", "study"],
        a: ["AI Product Management certification from Airtribe (16-week cohort, 2025). Before that, an MCA from Bundelkhand University and a B.Sc in Computer Science from DBRAU, Agra."],
        src: "Changelog › v0.0.1, v2.2" },
      { keys: ["fail", "mistake", "outage", "fallback", "risk", "privacy"],
        a: ["I design for failure up front. In OutLoud, if the Gemini API fails, the interview falls back to a local question bank, so a practice session never dies on a 500.", "Privacy is a default, not a setting: audio is transcribed on the device and never uploaded."],
        src: "Work › OutLoud" },
      { keys: ["hello", "hi", "hey", "who", "about", "yourself", "intro", "sachin"],
        a: ["Hi, I'm Sachin. I'm a Product Manager for mobile and AI products, and a former Android engineer. I've shipped EV, gaming, safety and AI health apps, built an AI speaking coach solo, and I teach product to 100K+ people on YouTube."],
        src: "Hero" },
      { keys: ["rupeeflow", "rupee", "expense", "finance", "fintech", "upi"],
        a: ["RupeeFlow is a side build: an offline, ad-free rupee expense tracker. It parses bank-statement PDFs and UPI SMS, auto-categorizes spends, and keeps a borrow & lend ledger. No bank data ever leaves the phone."],
        src: "Work › RupeeFlow" }
    ],
    fallback: ["I don't have that one indexed yet. This is keyword retrieval over my portfolio, not a full LLM.", "Try asking about AI products, prioritization, my switch from engineering, or how to reach me."]
  },

  /* ---------- Daily decision scenarios ----------
     answer: ship | iterate | skip. These are hypothetical, with Sachin's reasoning. */
  scenarios: [
    { text: "Your AI summary feature gets a fact wrong in 3% of outputs. Legal wants it pulled. Sales wants it live on Friday.",
      facts: [["Hallucination rate", "3%", "down"], ["Beta NPS", "+41", "up"]],
      answer: "iterate",
      why: "Launch with a tighter scope. Show sources next to every claim, add a one-tap “flag this”, and limit it to low-stakes documents first. Measure the flag rate weekly before you widen access.",
      frame: "Risk-tiered rollout · human-in-the-loop" },
    { text: "Quick commerce: a “add ₹60 more for free delivery” nudge in the cart lifted AOV by 12%. Checkout conversion fell by 4%.",
      facts: [["AOV", "+12%", "up"], ["Checkout conv.", "−4%", "down"]],
      answer: "iterate",
      why: "Look at contribution margin per session, not AOV alone. Then test two or three threshold values and suggest items that actually close the gap, so the nudge helps instead of blocking checkout.",
      frame: "North-star vs guardrail metric" },
    { text: "Your voice app can use cloud speech-to-text (1.2s delay, higher accuracy) or on-device (instant, 6% less accurate).",
      facts: [["Cloud latency", "1.2s", "down"], ["On-device accuracy", "−6%", "down"]],
      answer: "ship",
      why: "Ship on-device. In a speaking drill, a pause after every answer breaks the conversation, and that costs more than a few misheard words. Make the scoring tolerant of small transcription errors instead.",
      frame: "Latency vs quality · the OutLoud call" },
    { text: "A competitor launched an AI chatbot. Your CEO wants one on the homepage in two weeks.",
      facts: [["Support tickets / wk", "2,300", ""], ["Top reason", "Order status", ""]],
      answer: "skip",
      why: "Don't copy the feature, solve the job. If most tickets are about order status, a proactive tracking screen will beat a chatbot. Revisit the chatbot when the questions are open-ended.",
      frame: "Jobs to be done · problem before solution" },
    { text: "An AI skin-analysis model has confidence below 70% on 15% of uploaded photos.",
      facts: [["Low-confidence share", "15%", "down"], ["Top cause", "Bad lighting", ""]],
      answer: "iterate",
      why: "Never show a shaky result as an answer. Coach the user to retake the photo with better lighting, and for anything still uncertain, route to “consult a dermatologist” instead of guessing.",
      frame: "Graceful degradation · trust in health AI" },
    { text: "Onboarding has 5 screens. 38% of new users drop off on screen 3, which asks for their date of birth.",
      facts: [["Drop-off at step 3", "38%", "down"], ["DOB used by", "1 feature", ""]],
      answer: "iterate",
      why: "Move the question to the moment it's needed. Only one feature uses date of birth, so ask for it there. Every field in onboarding should justify itself on day one.",
      frame: "Progressive disclosure · funnel analysis" },
    { text: "Engineering estimates 6 weeks for an automated weekly-report feature. An n8n workflow could fake it in 2 days.",
      facts: [["Eng estimate", "6 wks", "down"], ["n8n version", "2 days", "up"]],
      answer: "ship",
      why: "Ship the n8n version to 50 users as a test, and watch whether they actually open the reports. If they do, the 6 weeks are justified and you already know what to build.",
      frame: "Wizard of Oz MVP · validated learning" },
    { text: "Daily push notifications raised D7 retention by 5%. Uninstalls went up by 2%.",
      facts: [["D7 retention", "+5%", "up"], ["Uninstalls", "+2%", "down"]],
      answer: "iterate",
      why: "Keep the gain and cut the annoyance. Cap frequency, make notifications about something the user did, and let people choose the time. Then check whether uninstalls come back down.",
      frame: "Guardrail metrics · personalization" },
    { text: "Your LLM feature costs ₹4 per query. Users on the ₹99/month plan average 30 queries.",
      facts: [["Cost / user / mo", "₹120", "down"], ["Revenue / user", "₹99", ""]],
      answer: "iterate",
      why: "Unit economics first. Cache repeat questions, route simple queries to a smaller model, and keep the big model for the hard ones. Add a fair-use limit only if that isn't enough.",
      frame: "Model routing · AI unit economics" },
    { text: "An A/B test of a new checkout shows +3% conversion. It ran for 5 days and p = 0.18.",
      facts: [["Lift", "+3%", "up"], ["p-value", "0.18", "down"]],
      answer: "skip",
      why: "Not ready to call. Five days misses weekly patterns and the result isn't significant. Run it for at least two full weeks at the sample size you planned before deciding.",
      frame: "Experiment design · statistical significance" },
    { text: "A client worth 30% of revenue wants a custom feature that no other customer has asked for.",
      facts: [["Revenue share", "30%", ""], ["Other requests", "0", "down"]],
      answer: "iterate",
      why: "Find the general problem behind the request. Build it as a configurable option other customers could use, time-box it, and agree on scope in writing before the sprint starts.",
      frame: "Stakeholder management · platform thinking" },
    { text: "UPI Autopay on subscriptions raised paid conversions by 18%. 9% of new subscribers say they didn't know it renews.",
      facts: [["Paid conversion", "+18%", "up"], ["“Didn't know” complaints", "9%", "down"]],
      answer: "iterate",
      why: "Growth built on confusion turns into refunds and bad reviews. Make the renewal date and amount unmissable, and send a reminder before the first charge. Keep Autopay.",
      frame: "Trust as a metric · dark-pattern check" },
    { text: "40 loud users on social media want dark mode. They are 2% of your daily active users.",
      facts: [["Requesters", "40", ""], ["Share of DAU", "2%", "down"]],
      answer: "skip",
      why: "Not now. Reach is tiny compared with the onboarding drop-off on the roadmap. Reply publicly so they feel heard, add it to the backlog, and check whether requests grow.",
      frame: "RICE · reach matters" },
    { text: "Your team can launch a Hindi version of the app in 3 weeks. 46% of sign-ups come from Tier-2 cities.",
      facts: [["Tier-2 sign-ups", "46%", "up"], ["Effort", "3 wks", ""]],
      answer: "ship",
      why: "Ship it for the flows that matter most first: onboarding, core action, payments. Measure activation for Hindi users against English users, then translate the long tail.",
      frame: "Bharat-first · activation metrics" }
  ],

  /* ---------- RICE lab sample backlog (OutLoud, sample numbers) ---------- */
  rice: [
    { name: "Hinglish answer mode", reach: 4200, impact: 3, conf: 70, effort: 4 },
    { name: "Daily practice streak & reminder", reach: 6800, impact: 2, conf: 80, effort: 2 },
    { name: "Role-based packs (PM, SDE, Sales)", reach: 3100, impact: 2, conf: 60, effort: 3 },
    { name: "Share scorecard to LinkedIn", reach: 5200, impact: 1, conf: 50, effort: 1.5 },
    { name: "Bigger offline question bank", reach: 1500, impact: 0.5, conf: 90, effort: 1 }
  ]
};
