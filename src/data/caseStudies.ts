import { TrendingUp, Phone, Database, type LucideIcon } from "lucide-react";

export interface CaseStudy {
  id: string;
  slug: string;
  company: string;
  category: string;
  metric: string;
  metricLabel: string;
  description: string;
  icon: LucideIcon;
  title?: string;
  subtitle?: string;
  problemStatement?: {
    main: string;
    points: { title: string; description: string }[];
  };
  techStack?: string[];
  timeline?: { week: string | number; title: string; description: string }[];
  pipeline?: { step: string | number; title: string; description: string }[];
  outcomes?: { metric: string; outcome: string }[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "auto-mobile-company",
    company: "Auto Mobile Company",
    category: "Customer Engagement",
    metric: "100 more enquires answered",
    metricLabel: "in Operational Costs",
    description:
      "Intelligent Voice Automation with Smart Human Handoff & Google Sheets Integration that revolutionized customer follow-ups.",
    icon: Phone,
    title: "AI-Powered IVR Calling System",
    subtitle:
      "Intelligent Voice Automation with Smart Human Handoff & Google Sheets Integration",
    problemStatement: {
      main: "The client faced high operational costs and missed opportunities due to limited human availability. Manual dialing caused response delays, inconsistent brand messaging, and poor lead prioritization, resulting in low conversion rates and unscalable support during peak hours.",
      points: [
        {
          title: "LIMITED AVAILABILITY",
          description: "Missed leads outside of 9-5 business hours.",
        },
        {
          title: "HIGH OPERATIONAL COST",
          description: "Call center staffing costs were unsustainable.",
        },
        {
          title: "DATA ENTRY ERRORS",
          description: "Manual logging led to 95% higher error rates.",
        },
        {
          title: "SLOW RESPONSE",
          description: "Callback delays cooled down warm leads.",
        },
      ],
    },
    techStack: [
      "Google Sheets (Data Source)",
      "AI Voice Engine (TTS/STT)",
      "NLP / LLM (Dialogue)",
      "N8N (Workflow)",
      "Twilio / Telephony API",
      "CRM Integration",
    ],
    timeline: [
      {
        week: "WEEK 1",
        title: "SETUP",
        description:
          "Integration of Google Sheets, Telephony setup & Workflow Triggers.",
      },
      {
        week: "WEEK 2",
        title: "TRAINING",
        description:
          "Voice Cloning, Knowledge Base configuration & Handoff logic.",
      },
      {
        week: "WEEK 3",
        title: "LAUNCH",
        description:
          "Testing boundaries, scaling call volume & monitoring analytics.",
      },
    ],
    pipeline: [
      {
        step: "1",
        title: "Data Integration & Automation",
        description:
          "System pulls prospect data (Name, Reason, History) from Google Sheets and automatically triggers calls based on optimal timing and priority.",
      },
      {
        step: "2",
        title: "AI Conversation Engine",
        description:
          "Engages prospects with natural, human-like dialogue using custom voice cloning, handling objections, and adapting flow based on responses.",
      },
      {
        step: "3",
        title: "Smart Human Handoff",
        description:
          "Detects complex queries or frustration and seamlessly transfers the call to a human agent with full context and a warm introduction.",
      },
      {
        step: "4",
        title: "Omnichannel Follow-up",
        description:
          "Automatically syncs results to CRM, sends SMS confirmations, and updates calendars instantly after call completion.",
      },
    ],
    outcomes: [
      {
        metric: "Efficiency Boost",
        outcome: "24/7 calling capability with zero human limits.",
      },
      {
        metric: "Cost Reduction",
        outcome: "80% reduction in call center operational costs.",
      },
      {
        metric: "Conversion Rates",
        outcome: "35% improvement in lead-to-customer conversion.",
      },
      {
        metric: "Customer Experience",
        outcome: "92% of users couldn't distinguish AI from human.",
      },
      {
        metric: "Scalability",
        outcome: "Scale from 100 to 10,000 calls without new hires.",
      },
    ],
  },
  {
    id: "2",
    slug: "marketing-agency",
    company: "Marketing Agency",
    category: "Marketing",
    metric: "300+ new visiters/day",
    metricLabel: "in Booked Appointments",
    description:
      "How a boutique agency used AI agents to qualify leads 24/7, turning missed calls into scheduled viewings automatically.",
    icon: TrendingUp,
    title: "Auto SEO & blog Posting",
    subtitle:
      "Turning missed calls into qualified viewings without lifting a finger.",
    problemStatement: {
      main: "Neon Realty was bleeding opportunities. With agents spending 6 hours a day vetting tire-kickers and missing 40% of inbound calls after hours, their marketing ROI was plummeting despite high traffic.",
      points: [
        {
          title: "LEAKY FUNNEL",
          description:
            "60% of leads went cold before an agent could reach them.",
        },
        {
          title: "AGENT BURNOUT",
          description: "Top performers were wasting time on low-quality leads.",
        },
        {
          title: "MISSED AFTER-HOURS",
          description:
            "Zero response capability for evening/weekend inquiries.",
        },
        {
          title: "SCHEDULING NIGHTMARE",
          description: "Endless back-and-forth emails to book simple viewings.",
        },
      ],
    },
    techStack: [
      "OpenAI GPT-4 (Intelligence)",
      "Vapi.ai (Voice AI)",
      "GoHighLevel (CRM)",
      "Make.com (Orchestration)",
      "Cal.com (Scheduling)",
    ],
    timeline: [
      {
        week: "WEEK 1",
        title: "DISCOVERY & SCRIPTING",
        description:
          "Auditing call logs, defining lead scoring criteria & crafting the AI persona.",
      },
      {
        week: "WEEK 2",
        title: "INTEGRATION",
        description:
          "Connecting Voice AI with CRM and Calendar scheduling logic.",
      },
      {
        week: "WEEK 3",
        title: "GO LIVE",
        description:
          "Soft launch on inbound marketing channels & performance tuning.",
      },
    ],
    pipeline: [
      {
        step: "1",
        title: "Ingest",
        description:
          "Lead calls or submits form. AI instantly engages via Voice or SMS.",
      },
      {
        step: "2",
        title: "Qualify",
        description:
          "AI asks 5 critical vetting questions (Budget, Location, Timeline, Credit).",
      },
      {
        step: "3",
        title: "Nurture/Schedule",
        description:
          "Qualified? AI books viewing directly into agent calendar. Unqualified? AI adds to long-term nurture drip.",
      },
      {
        step: "4",
        title: "Handoff",
        description:
          "Agent receives full transcript & lead score before the meeting starts.",
      },
    ],
    outcomes: [
      {
        metric: "Appointment Boom",
        outcome: "300% increase in qualified viewings booked.",
      },
      {
        metric: "Time Saved",
        outcome: "25+ hours saved per agent per week on admin work.",
      },
      {
        metric: "Response Time",
        outcome: "Instant response (under 10s) 24/7/365.",
      },
      {
        metric: "Zero Lead Leakage",
        outcome: "100% of inbound inquiries processed.",
      },
    ],
  },
  {
  id: "3",
  slug: "lead-scraping-outreach",
  company: "Manufacturing Industry",
  category: "Lead Generation",
  metric: "3000 Emails/Day",
  metricLabel: "in Lead Processing Capacity",
  description:
    "How a growth agency automated lead scraping, email verification, and multi-stage outreach to generate thousands of qualified prospects daily without manual work.",
  icon: TrendingUp,
  title: "Lead Scraping & Automated Outreach",
  subtitle:
    "Telegram-triggered data scraping with smart email validation and follow-ups.",
  problemStatement: {
    main:
      "The agency was wasting hours manually visiting websites, extracting business data, sending emails one by one, and tracking follow-ups. This caused lead drop-offs, human error, and zero scalability.",
    points: [
      {
        title: "MANUAL SCRAPING",
        description:
          "Websites had to be visited one by one to collect lead information.",
      },
      {
        title: "TEDIOUS EMAILING",
        description:
          "Every prospect required manual copy-paste and sending.",
      },
      {
        title: "MISSED FOLLOW-UPS",
        description:
          "Leads were forgotten without a reliable tracking system.",
      },
      {
        title: "INEFFICIENT PROCESS",
        description:
          "High effort produced low volume and burned out the team.",
      },
    ],
  },
  techStack: [
    "n8n (Core Automation Engine)",
    "Telegram API (Lead Input)",
    "Web Scrapers",
    "Google Sheets (Lead Database)",
    "Email Validation API",
    "SMTP / Email Service",
  ],
  timeline: [
    {
      week: "WEEK 1–2",
      title: "WORKFLOW SETUP",
      description:
        "Telegram bot, n8n environment, and scraping workflows configured.",
    },
    {
      week: "WEEK 3–5",
      title: "OUTREACH SYSTEM",
      description:
        "Email validation, sheet sync, and outreach sequences deployed.",
    },
    {
      week: "WEEK 6–8",
      title: "SCALE",
      description:
        "Follow-up logic tested and system scaled to 5,000+ leads per day.",
    },
  ],
  pipeline: [
    {
      step: "1",
      title: "Telegram Input",
      description:
        "User sends niche and location to the Telegram bot to trigger scraping.",
    },
    {
      step: "2",
      title: "Automated Scraping",
      description:
        "n8n scrapes business data and extracts emails and contact details.",
    },
    {
      step: "3",
      title: "Sheet Sync",
      description:
        "All leads are cleaned and organized inside Google Sheets.",
    },
    {
      step: "4",
      title: "Email Validation & Outreach",
      description:
        "Valid emails enter a personalized automated email sequence.",
    },
    {
      step: "5",
      title: "Smart Follow-ups",
      description:
        "Day 2, Day 7, and Day 14 follow-ups are sent automatically.",
    },
  ],
  outcomes: [
    {
      metric: "Time Saved",
      outcome: "40+ hours saved per week on manual lead work.",
    },
    {
      metric: "Lead Conversion",
      outcome: "Conversion increased from 15% to 20%.",
    },
    {
      metric: "Scraping Volume",
      outcome: "5,000+ leads scraped per day.",
    },
    {
      metric: "Email Throughput",
      outcome: "3,000+ emails sent daily.",
    },
    {
      metric: "Operational Efficiency",
      outcome: "10x more output with the same team.",
    },
  ],
}

];
