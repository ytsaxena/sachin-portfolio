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

  /* ---------- OutLoud funnel: users reaching each step (GA4, live product) ---------- */
  outloudFunnel: [
    ["Start a session", 60],
    ["Resolve mic permission", 21],
    ["Begin speaking", 20],
    ["Finish an answer", 17],
    ["Complete a session", 14]
  ],

  /* ---------- Changelog (newest first) ---------- */
  changelog: [
    {
      v: "v4.0.0", when: "Unreleased", kind: "next",
      title: "Product Manager on your team",
      where: "Delhi NCR · open to AI PM / TPM / PM roles",
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

  /* ---------- Sessions (videos on IT Wale Bhaiya) ----------
     img: a frame from the video. flow: true shows tools as the steps of the workflow. */
  sessions: [
    { kind: "n8n workflow", title: "Gmail reply tracker", q: "Finds the sent emails that got a reply and logs them in Google Sheets.",
      tools: ["Gmail", "JavaScript", "Google Sheets"], flow: true, img: "img/sessions/n8n-gmail-reply-tracker.jpg",
      alt: "n8n workflow: a manual trigger fetches sent and received Gmail messages, a JavaScript node matches the replies, and the results are appended to a Google Sheet",
      href: "https://www.youtube.com/watch?v=eTeoCBDXa4o" },
    { kind: "n8n workflow", title: "AI horoscope by email", q: "Reads a person's details from a Google Sheet, asks Gemini to write their horoscope, and emails it to them.",
      tools: ["Google Sheets", "Gemini", "Gmail"], flow: true, img: "img/sessions/n8n-ai-horoscope-email.jpg",
      alt: "n8n workflow: manual trigger, then Get row(s) in sheet, then Message a model with Gemini, then Send a message with Gmail",
      href: "https://www.youtube.com/watch?v=p2apAxMOuGc" },
    { kind: "n8n course · 1 hour", title: "n8n for beginners: complete course", q: "A no-code automation course for product managers, taught live in one hour.",
      tools: ["n8n", "No-code", "Beginners"], img: "img/sessions/n8n-beginner-course.jpg",
      alt: "Course thumbnail: n8n tutorial 2026, automate in 1 hour, complete beginner course",
      href: "https://www.youtube.com/watch?v=W7_RNmzrPdI" },
    { kind: "App growth · ASO", title: "Google Play Store ASO: how apps get millions of downloads", q: "Ranking higher with long-tail keywords, and reaching users on Android stores beyond the Play Store.",
      tools: ["ASO", "Play Store", "Growth"], img: "img/sessions/play-store-aso.jpg",
      alt: "Video thumbnail: Google Play Store optimization, how to get millions of downloads",
      href: "https://www.youtube.com/watch?v=Rnx3D_TOWwo" }
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
    chips: ["What AI have you shipped?", "What did OutLoud's data show?", "How do you run delivery?", "Why engineer → PM?", "Why should we hire you?"],
    kb: [
      { keys: ["ai", "shipped", "built", "llm", "gemini", "model", "genai", "artificial"],
        a: ["Three AI products so far.", "OutLoud, which I built solo: a voice-first English speaking coach. Browser speech-to-text, Gemini for the interview with a local fallback, Sarvam's Bulbul v3 for the voice.", "At IF MedTech I own requirement-to-release for Dr. Skin AI and Oravue AI, two AI healthcare apps."],
        src: "Work › OutLoud, IF MedTech" },
      { keys: ["outloud", "speaking", "voice", "english", "coach", "sarvam", "bulbul"],
        a: ["OutLoud is for people who read and write English well but freeze when they speak it. Three spoken questions, one AI interviewer, one honest scorecard.", "The key trade-offs: browser speech-to-text, so there's no audio pipeline to build or pay for; a local question bank so a Gemini outage never kills a session; and OutLoud never records or stores audio. Only the answer text goes to the model."],
        src: "Work › OutLoud" },
      { keys: ["outloud", "research", "users", "survey", "surveyed", "interview", "interviews", "funnel", "data", "traction", "ga4", "activation", "learn", "learned", "results"],
        a: ["Before building OutLoud I surveyed 33 people. 27+ wanted to practise with an AI, and 15+ had quit past attempts from inconsistency, not cost.", "In the live product GA4 tracked 60 users. The biggest drop was the mic permission prompt, 60 to 21, before any AI ran. Of the people who got past it, two in three finished a full session. Activation is 33% and AI reliability is 84%."],
        src: "Case study › OutLoud" },
      { keys: ["prompt", "prompts", "guardrail", "guardrails", "eval", "evals", "evaluation", "evaluate", "output", "outputs", "hallucination", "safety", "responsible", "quality", "reliability", "cost", "latency"],
        a: ["In OutLoud the prompt is the spec. Its rules are product decisions: never mention accent, judge ideas not grammar, name a win first, give exactly one fix, and never score below 40, because one harsh comment can make this user quit.", "I design for cost and failure too: two model calls per session instead of one per question, a fallback for every AI call, and reliability tracked as a metric. 84% of sessions were scored by the real model."],
        src: "Case study › OutLoud" },
      { keys: ["tpm", "program", "delivery", "release", "releases", "stakeholder", "stakeholders", "sprint", "sprints", "execution", "work with", "cross-functional", "qa", "dependencies", "launch", "run"],
        a: ["At IF MedTech I own requirement-to-release for two AI health apps: turning client and user needs into sprint scope across engineering, QA and design, and clearing requirement ambiguity before it blocks a sprint.", "Before Play Store submission I write the release and compliance docs, which cut the back-and-forth between engineering and compliance. On Suraksha I ran sprints in ClickUp and took it from concept to Play Store in 8 weeks."],
        src: "Experience › IF MedTech · Work › Suraksha" },
      { keys: ["engineer", "transition", "switch", "why pm", "developer", "background", "technical", "career"],
        a: ["I spent about three years shipping Android apps: an EV platform, a gaming app that passed 100K downloads, IoT migrations.", "I kept caring more about why we were building something than how. Now the engineering background is my edge: my PRDs are technically grounded, and I can spot a scope trap in sprint planning before it costs a week."],
        src: "Changelog › v1.0 → v3.0" },
      { keys: ["prioritize", "prioritization", "rice", "roadmap", "backlog", "decide", "tradeoff", "trade-off"],
        a: ["I start with user feedback and technical constraints together, then score the backlog. RICE when the numbers exist, a simple impact-vs-effort call when they don't.", "The rule I actually follow: usability beats technical convenience. That's how the Dr. Skin AI dashboard redesign got prioritized."],
        src: "Work › Dr. Skin AI" },
      { keys: ["hire", "why you", "fit", "strength", "different", "unique", "value"],
        a: ["You get a PM who can read the codebase, write the PRD, and talk to the client in the same afternoon.", "I've owned delivery for AI health products, shipped my own AI product solo, and I explain product thinking to 100K+ people on YouTube, so communication is a strength, not a risk."],
        src: "Summary" },
      { keys: ["contact", "email", "reach", "phone", "call", "hire", "connect", "linkedin", "number"],
        a: ["Email is fastest: sssaxena058@gmail.com. Phone: +91 75260 07604.", "Or find me on LinkedIn at /in/ytsaxena. I'm in Gurugram and open to AI PM, TPM and PM roles across Delhi NCR."],
        src: "Contact" },
      { keys: ["youtube", "community", "teach", "mentor", "content", "speak", "talk", "linkedin followers", "channel"],
        a: ["I run IT Wale Bhaiya on YouTube (100K+ subscribers) and have 11K+ followers on LinkedIn. I post PM interview prep, career roadmaps and n8n automation tutorials for PMs.", "I've mentored 5,000+ developers and students, and spoken at Kotlin User Group Delhi, GL Bajaj, Galgotias and Bundelkhand University."],
        src: "Teaching in public" },
      { keys: ["n8n", "automation", "automate", "workflow", "workflows", "aso", "play store", "session", "sessions", "tutorial", "video", "videos"],
        a: ["I teach hands-on sessions on my YouTube channel. Two n8n workflows: a Gmail reply tracker that logs replies in Google Sheets, and an AI horoscope emailer built on Google Sheets, Gemini and Gmail. There's also a one-hour n8n course for beginners.", "On the growth side, I have a session on Google Play Store ASO: long-tail keywords, and listing on Android stores beyond the Play Store."],
        src: "Sessions" },
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
        a: ["Based in Gurugram and open to AI PM, TPM or PM roles anywhere in Delhi NCR."],
        src: "Contact" },
      { keys: ["education", "degree", "airtribe", "certification", "college", "mca", "study"],
        a: ["AI Product Management certification from Airtribe (16-week cohort, 2025). Before that, an MCA from Bundelkhand University and a B.Sc in Computer Science from DBRAU, Agra."],
        src: "Changelog › v0.0.1, v2.2" },
      { keys: ["fail", "failure", "failed", "mistake", "outage", "fallback", "risk", "privacy"],
        a: ["I design for failure up front. In OutLoud, if the Gemini API fails, the interview falls back to a local question bank, so a practice session never dies on a 500.", "Privacy is a default, not a setting: OutLoud never records or stores audio, and only the transcript text goes to the model."],
        src: "Work › OutLoud" },
      { keys: ["hello", "hi", "hey", "who", "about", "yourself", "intro", "sachin"],
        a: ["Hi, I'm Sachin. I'm a Product Manager for mobile and AI products, and a former Android engineer. I've shipped EV, gaming, safety and AI health apps, built an AI speaking coach solo, and I teach product to 100K+ people on YouTube."],
        src: "Hero" },
      { keys: ["rupeeflow", "rupee", "expense", "finance", "fintech", "upi"],
        a: ["RupeeFlow is a side build: an offline, ad-free rupee expense tracker. It parses bank-statement PDFs and UPI SMS, auto-categorizes spends, and keeps a borrow & lend ledger. No bank data ever leaves the phone."],
        src: "Work › RupeeFlow" }
    ],
    fallback: ["I don't have that one indexed yet. This is keyword retrieval over my portfolio, not a full LLM.", "Try asking about AI products, prioritization, my switch from engineering, or how to reach me."]
  }
};
