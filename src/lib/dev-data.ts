export const WRITING_URL = "https://nabiloladosu.vercel.app";
export const DEV_URL = "https://nabiloladosu-dev.vercel.app";

// public: anyone can open it. internal: company-only, described but not linked. private: the code exists but the repo isn't public.
export type Visibility = "public" | "internal" | "private";
export const visibilityLabel: Record<Visibility, string> = { public: "Public", internal: "Internal", private: "Private repo" };

export type Project = {
  slug: string;
  home?: true;
  title: string;
  kind: string;
  partOf?: string;
  visibility: Visibility;
  summary: string;
  stack: string[];
  highlights: string[];
  links?: { href: string; label: string }[];
};

export type Umbrella = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  projects: Project[];
};

export const devStats = [
  { n: "5", l: "Production repos shipped to" },
  { n: "516", l: "Live API routes mapped for a Go rewrite" },
  { n: "3", l: "Client apps: web, admin & mobile" },
  { n: "2", l: "Infra generations, Workers to ECS Fargate" },
];

export const umbrellas: Umbrella[] = [
  {
    slug: "tireda",
    title: "Tireda Technologies",
    kicker: "Work · 2025–Present",
    summary: "Fintech products for MAMVest, an investment platform by Mango Asset Management, and JustPayroll, a payroll SaaS. I work across the mobile app, the web apps, the APIs and AWS.",
    projects: [
      {
        slug: "mamvest-app",
        home: true,
        title: "MAMVest app (new)",
        kind: "Mobile app · Ionic",
        visibility: "public",
        summary: "A ground-up redesign of the MAMVest investment app, rebuilt page by page from Figma with exact pixel fidelity and wired to the new Go API.",
        stack: ["Ionic 9", "Angular 21", "Capacitor 8", "Signals", "Firebase", "Paystack"],
        highlights: [
          "Live against the real API: signup with BVN and PIN, sign-in, individual, joint and corporate accounts, mutual funds, treasury bills, fixed deposits, withdrawals and card top-ups.",
          "Firebase push notifications on Android and iOS, with an in-app notifications page behind the dashboard bell.",
          "Found a fixed-deposit order that answered \"Queued\" but never landed: traced it to an SQS queue nothing was draining, and moved the flow to the queue that was.",
          "Every page is verified by rendering it against the Figma export, not by eye.",
        ],
        links: [
          { href: "https://apps.apple.com/ng/app/mamvest/id6744264670", label: "Current app on the App Store" },
          { href: "https://play.google.com/store/apps/details?id=com.mamvest.app", label: "Google Play" },
        ],
      },
      {
        slug: "go-rewrite",
        title: "Go API rewrite",
        kind: "Backend · Go",
        partOf: "MAMVest app",
        visibility: "internal",
        summary: "The new backend behind the app: a production Express/Lambda API rewritten as a containerized Go service, keeping every external contract identical so existing clients never notice.",
        stack: ["Go", "Gin", "pgx/v5", "PostgreSQL", "SQS", "Docker", "GitHub Actions"],
        highlights: [
          "Enumerated 516 live routes across the admin and client APIs from the source, not from assumptions.",
          "Two binaries over one codebase: separate admin and client servers sharing internal packages and one Postgres database.",
          "Preserved non-obvious contracts, like a login flow that signals state through 16 distinct status strings.",
          "Ported the notification endpoints from the old TypeScript API and fixed the CI when it broke on push.",
        ],
      },
      {
        slug: "customer-webapp",
        title: "MAMVest customer web app",
        kind: "Web app · Angular",
        visibility: "public",
        summary: "The browser version of MAMVest, where customers fund wallets, invest and manage their accounts.",
        stack: ["Angular 17", "NGXS", "Tailwind CSS", "Paystack", "Flutterwave", "FCM"],
        highlights: [
          "Integrated a dual-gateway card-payment flow that puts Paystack and Flutterwave behind one contract.",
          "Joint-account three-holder support, KYC documents, minor accounts and statement currency selection.",
          "Fixed a privacy bug where the previous user's name flashed after login, by reloading the profile and clearing storage on logout.",
        ],
        links: [{ href: "https://client.mamvest.com", label: "client.mamvest.com" }],
      },
      {
        slug: "backoffice",
        title: "MAMVest backoffice",
        kind: "Internal admin · Angular",
        visibility: "internal",
        summary: "The staff-only admin platform that runs MAMVest: orders, KYC, customers and notifications. It isn't public, so there's nothing to link, but a lot of my work lives here.",
        stack: ["Angular 17", "NGXS", "Signals", "Firebase", "S3"],
        highlights: [
          "A push-notification system: a broadcast composer with audience targeting, an ads tab with S3 images, delivery logs and a per-admin bell and inbox.",
          "Bulk relationship-manager reassignment, and date-ranged Excel order exports through presigned S3 URLs.",
          "Director date-of-birth KYC, corporate multi-account attachment with signatory selection, and a savings product category.",
        ],
      },
      {
        slug: "justpayroll",
        home: true,
        title: "JustPayroll",
        kind: "SaaS · full-stack & infra",
        visibility: "public",
        summary: "A payroll SaaS with a Paystack-funded organization wallet, where money only moves after approval and never on the HTTP request path.",
        stack: ["Hono", "Prisma", "PostgreSQL", "Angular 21", "SQS FIFO", "Lambda", "ECS Fargate", "Terraform"],
        highlights: [
          "Approval publishes to an SQS FIFO queue keyed by organization; the wallet is debited by the consumer, so concurrent payrolls for one org can't race.",
          "OAuth (Google, GitHub, Microsoft, Facebook) plus email OTP over SES, with JWTs in HttpOnly cookies.",
          "Fixed a connection-exhaustion risk by memoizing one Prisma client: 115 call sites against an 81-connection ceiling.",
          "Moved the platform off Cloudflare Workers to Docker on EC2, then to ECS Fargate behind an ALB with Terraform and GitHub Actions OIDC deploys.",
        ],
        links: [{ href: "https://justpayroll.ng", label: "justpayroll.ng" }],
      },
      {
        slug: "tireda-website",
        title: "Tireda website",
        kind: "Company website · Angular",
        visibility: "public",
        summary: "Tireda's company site, which I built alone from design to deployment: one page covering the hero, services, portfolio, tech stack, testimonials and a full project-enquiry form.",
        stack: ["Angular 19", "Tailwind CSS v4", "Reactive Forms", "AWS CodeBuild"],
        highlights: [
          "Standalone Angular components with Tailwind CSS v4, and the router's in-memory scrolling driving the anchor links between sections.",
          "A shared component library of text, select, textarea and checkbox inputs plus service, portfolio and testimonial cards, each styled through its own directive.",
          "A project-enquiry form with reactive validation, a file attachment encoded to base64, and two bot traps: a hidden honeypot field and a minimum time-on-page check.",
          "An AWS CodeBuild pipeline that picks the environment (dev, uat, stage or prod) from the pushed branch and ships the static build.",
        ],
        links: [{ href: "https://www.tireda.com", label: "tireda.com" }],
      },
    ],
  },
  {
    slug: "blank",
    title: "Blank",
    kicker: "Personal project · Built solo",
    summary: "A strategic all-vs-one card game. I built the whole repo: the rules, the engine, the card catalog and the tests.",
    projects: [
      {
        slug: "blank-game",
        home: true,
        title: "The Blank Card Game",
        kind: "Card game · TypeScript",
        visibility: "private",
        summary: "Hold the Blank card for enough rotations to win while everyone else attacks you. The rotations you need drop from 5 to 1 every time it changes hands.",
        stack: ["TypeScript", "Vitest", "npm workspaces", "Node 20"],
        highlights: [
          "The whole game runs through one pure function, processAction(state, action) → newState, so the same rules can power offline play, an AI opponent and an authoritative server.",
          "An action validator rejects illegal moves before anything is applied, so a client can never force one.",
          "Defense chains: Guard, Mirror, Redirect and Weave bounce an attack around the table through an effect stack, while the original attacker stays the one who benefits.",
          "23 cards, from Steal and Swap to Mimic, Shapeshifter and Antimatter, are defined as data in their own package, not hard-coded into the engine.",
          "A seeded RNG (mulberry32) lives in the game state, so every shuffle and random effect can be replayed and checked from the seed.",
          "When the Blank changes hands, the win requirement steps down, the rotation count resets and the new holder becomes the rotation marker.",
          "I transcribed the rulebook into the repo and marked every ambiguous rule in the code as a RULES TODO, so open design questions stay visible instead of silently guessed.",
          "24 Vitest tests cover setup, turn order, abilities and win conditions.",
        ],
      },
    ],
  },
  {
    slug: "unity",
    title: "Unity games",
    kicker: "Personal projects · Where it started",
    summary: "Small 2D and physics games in Unity and C#. This is how I got from mechanical engineering into software.",
    projects: [
      {
        slug: "stack-attack",
        home: true,
        title: "Stack Attack",
        kind: "Physics game · Unity 6",
        visibility: "private",
        summary: "A 20-second race to drag cups into a 3-2-1 pyramid anywhere on the table, scored every physics frame.",
        stack: ["Unity 6", "C#", "Input System", "TextMesh Pro"],
        highlights: [
          "A pyramid validator that checks spacing, slot alignment and how upright each cup is, every physics frame, wherever on the table you build.",
          "A round state machine: countdown, play, buzzer and results, with input locked outside play.",
          "A cup tray that restocks at random positions and angles whenever a cup is grabbed, knocked out or destroyed.",
        ],
      },
      {
        slug: "flappy-birds",
        title: "Flappy Birds",
        kind: "2D game · Unity",
        visibility: "public",
        summary: "Flap through an endless stream of pipes for as long as you can.",
        stack: ["Unity", "C#", "2D physics"],
        highlights: [
          "Flight runs on a Rigidbody2D: each press of space sets an upward velocity, and gravity does the rest.",
          "A spawner releases pipes on a timer at random heights within a set range.",
          "An invisible trigger between each pipe pair scores a point, and any collision brings up a game-over screen with a one-click restart.",
        ],
        links: [{ href: "https://github.com/Alpha-Espada/Flappy-Birds", label: "GitHub" }],
      },
      {
        slug: "snow-boarder",
        title: "Snow Boarder",
        kind: "2D game · Unity",
        visibility: "public",
        summary: "Ride a hand-built slope, keep your balance and make it to the finish line.",
        stack: ["Unity", "C#", "2D physics", "Particles"],
        highlights: [
          "Speed comes from a SurfaceEffector2D on the slope, and holding up boosts it.",
          "Torque-based rotation for balance and flips.",
          "Land on your head and a crash detector fires a particle burst and crash sound, then reloads the level.",
          "A dust trail that only runs while the board is touching snow, and a finish line with its own effect and sound.",
        ],
        links: [{ href: "https://github.com/Alpha-Espada/Snow-Boarder", label: "GitHub" }],
      },
      {
        slug: "delivery-driver",
        title: "Delivery Driver",
        kind: "2D game · Unity",
        visibility: "public",
        summary: "A top-down driving game: pick up packages and drop them off with customers around town.",
        stack: ["Unity", "C#", "2D physics"],
        highlights: [
          "Steering and throttle read from Unity's input axes and scaled by frame time, so the car handles the same at any frame rate.",
          "Speed boosts you can drive through, and a slowdown whenever you hit something.",
          "The car changes color while it's carrying a package, and the camera follows in LateUpdate so it never jitters.",
        ],
        links: [{ href: "https://github.com/Alpha-Espada/Delivery-Driver", label: "GitHub" }],
      },
      {
        slug: "quiz-game",
        title: "Quiz Game",
        kind: "Game · Unity",
        visibility: "public",
        summary: "A timed multiple-choice quiz with a radial countdown.",
        stack: ["Unity", "C#", "ScriptableObjects", "TextMesh Pro"],
        highlights: [
          "Each question is a ScriptableObject asset, so new ones are authored in the editor without touching code.",
          "A two-phase timer: 30 seconds to answer, then 10 seconds showing the right answer before the next question.",
          "After a choice the buttons lock, and the correct answer is highlighted whether you got it or not.",
        ],
        links: [{ href: "https://github.com/Alpha-Espada/Quiz-Game", label: "GitHub" }],
      },
    ],
  },
];

export const devServices = [
  { t: "Full-stack product engineering", d: "Features taken end to end, from the API contract and the database to the screen people use.", items: ["Contract-first REST APIs", "PostgreSQL with Prisma or pgx", "Payments, auth & notifications", "Shipped together, front and back"], turn: "TypeScript · Go" },
  { t: "Frontend & mobile", d: "Interfaces built to match the design exactly, on the web and on Android and iOS.", items: ["Angular 17–21, Signals & NGXS", "Ionic + Capacitor apps", "Tailwind CSS design systems", "Checked against Figma, not by eye"], turn: "Angular · Ionic" },
  { t: "Backend & cloud", d: "Services that stay correct under load, deployed on AWS with infrastructure as code.", items: ["Go and Node services", "SQS, Lambda & ECS Fargate", "Terraform & GitHub Actions OIDC", "Root-causing production bugs"], turn: "AWS · Terraform" },
];

export const devPillars = [
  { num: "01", title: "Contract first", copy: "I pin down the API shape before building either side, and I read the source to confirm it instead of guessing." },
  { num: "02", title: "Root cause, not symptom", copy: "I trace a bug from its failure signature through logs, queues and the database, then fix it where every caller benefits." },
  { num: "03", title: "Simplest thing that holds", copy: "I follow the repo's conventions, refuse shortcuts that trade safety for speed, and leave code easier to read than I found it." },
];

export const aiPhases = [
  { p: "Figma to working screens", m: "Agent-assisted", d: "The agent builds from Figma exports, renders the page in a browser and compares it with the design. The bar is pixel-exact." },
  { p: "Skills & project memory", m: "Written by me", d: "Design-system skills and running handoff logs keep the agent on our tokens and conventions from one session to the next." },
  { p: "Contracts from source", m: "Verified", d: "I point the agent at backend commits so it reads the real request and response shapes, never guessed ones." },
  { p: "Review & ship", m: "100% human", d: "Nothing ships on the agent's authority. I review every diff, make the design calls and own what goes out." },
];

export const bugs = [
  { tag: "Payments", t: "Wallet top-ups that vanished", d: "Cold starts used up the Lambda's 5 DB connections, so the payment webhook timed out. The error was swallowed and the bank still got a 200, so it never retried. Fixed the success reporting and the retry path." },
  { tag: "Concurrency", t: "Two users, one account number", d: "A virtual account number was only marked used after a slow rename at the bank. Now it's claimed in one atomic step and returned to the pool if the rename fails." },
  { tag: "Mobile", t: "Direct debit that failed only on iPhone", d: "The app sent window.location.origin as the callback, which is capacitor://localhost on iOS. Our validator allowed it; Paystack didn't." },
  { tag: "Auth", t: "Admins bounced back to login after 2FA", d: "The route guard waited on app state that never filled when permissions came back empty, timed out after 5 seconds and redirected." },
];

export const stack = [
  "TypeScript", "Go", "SQL", "Angular", "Signals", "NGXS", "RxJS", "Ionic + Capacitor", "Tailwind CSS",
  "Node.js", "Express", "Hono", "Gin", "Prisma", "pgx", "PostgreSQL", "AWS ECS & Lambda", "SQS FIFO",
  "RDS, S3, CloudFront", "Terraform", "Docker", "GitHub Actions OIDC", "Paystack", "Flutterwave", "Firebase Cloud Messaging",
];

export const devExperience = [
  { role: "Frontend Developer (Angular)", org: "Tireda Technologies", time: "Oct 2025–Present", note: "Full-stack delivery and operations on MAMVest and JustPayroll, spanning Angular, Node, Go and AWS." },
  { role: "Freelance Content Writer", org: "Soap Central, Deltia's Gaming, Game Rant", time: "2024–2026", note: "600+ published articles. It's why I can explain technical work clearly to people who aren't engineers." },
];
