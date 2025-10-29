export const supportedLanguages = ["en", "de"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export type LocalizedString = Record<SupportedLanguage, string>;
export type LocalizedStringArray = Record<SupportedLanguage, string[]>;

const makeCopy = (en: string, de: string): LocalizedString => ({ en, de });
const makeArrayCopy = (
  en: string[],
  de: string[],
): LocalizedStringArray => ({ en, de });

export const defaultLanguage: SupportedLanguage = "en";

export const siteConfig = {
  name: makeCopy("Shyamkumar Selvakumar", "Shyamkumar Selvakumar"),
  title: makeCopy("AI & Data Engineer", "KI- & Dateningenieur"),
  description: makeCopy(
    "Portfolio website of Shyamkumar Selvakumar",
    "Portfolio-Website von Shyamkumar Selvakumar",
  ),
  accentColor: "#1d4ed8",
  social: {
    email: "rdshyamvijay99@gmail.com",
    linkedin: "https://www.linkedin.com/in/shyamkumar7/",
    github: "https://github.com/rdshyamvijay",
  },
  aboutMe: makeCopy(
    "I’m an AI Engineer with a strong foundation in data engineering and analytics, focused on transforming complex data into intelligent, real-world applications. I design and build AI solutions, chatbots, and automation systems that streamline business processes and enhance decision-making. My work bridges LLMs, APIs, and data pipelines, turning raw information into meaningful, scalable AI products.",
    "Ich bin KI-Ingenieur mit fundiertem Hintergrund in Data Engineering und Analytics und verwandle komplexe Daten in intelligente, praxisnahe Anwendungen. Ich konzipiere und entwickle KI-Lösungen, Chatbots und Automatisierungssysteme, die Geschäftsprozesse optimieren und bessere Entscheidungen ermöglichen. Meine Arbeit verbindet LLMs, APIs und Datenpipelines, um Rohdaten in aussagekräftige, skalierbare KI-Produkte zu verwandeln.",
  ),
  skills: ["Javascript", "React", "Node.js", "Python", "AWS", "Docker"],
  techStacks: [],
  techStackSections: [
    {
      title: makeCopy("AI & Data Engineering", "KI- & Datenengineering"),
      stacks: [
        { name: "Python", icon: "/icons/python.svg", color: "#3776AB" },
        { name: "SQL", icon: "/icons/sql.svg", color: "#336791" },
        { name: "Snowflake", icon: "/icons/snowflake.svg", color: "#29B5E8" },
        { name: "Power BI", icon: "/icons/powerbi.svg", color: "#F2C811" },
        { name: "Tableau", icon: "/icons/tableau.svg", color: "#E8762C" },
        { name: "MySQL", icon: "/icons/mysql.svg", color: "#4479A1" },
        { name: "Oracle", icon: "/icons/oracle.svg", color: "#F80000" },
        { name: "Informatica", icon: "/icons/informatica.svg", color: "#FF4F1F" },
      ],
    },
    {
      title: makeCopy("AI Applications & Automation", "KI-Anwendungen & Automatisierung"),
      stacks: [
        { name: "OpenAI", icon: "/icons/openai.svg", color: "#10A37F" },
        { name: "Gemini AI", icon: "/icons/gemini.svg", color: "#4285F4" },
        { name: "LangChain", icon: "/icons/langchain.svg", color: "#2A7DE1" },
        { name: "Pinecone", icon: "/icons/pinecone.svg", color: "#00A388" },
        { name: "n8n", icon: "/icons/n8n.svg", color: "#FF6B6B" },
        { name: "Lovable", icon: "/icons/lovable.svg", color: "#FF71CF" },
        { name: "Cursor", icon: "/icons/cursor.svg", color: "#7950F2" },
        { name: "CrewAI", icon: "/icons/crewai.svg", color: "#0EA5E9" },
      ],
    },
    {
      title: makeCopy("Cloud & DevOps", "Cloud & DevOps"),
      stacks: [
        { name: "AWS", icon: "/icons/aws.svg", color: "#FF9900" },
        { name: "Firebase", icon: "/icons/firebase.svg", color: "#FFCA28" },
        { name: "Docker", icon: "/icons/docker.svg", color: "#0DB7ED" },
        { name: "Git", icon: "/icons/git.svg", color: "#F05032" },
        { name: "GitHub", icon: "/icons/github.svg", color: "#181717" },
        { name: "Visual Studio Code", icon: "/icons/vscode.svg", color: "#0065A9" },
      ],
    },
    {
      title: makeCopy("Web Development", "Webentwicklung"),
      stacks: [
        { name: "PHP", icon: "/icons/php.svg", color: "#777BB4" },
        { name: "Tailwind", icon: "/icons/tailwindcss.svg", color: "#38BDF8" },
        { name: "React", icon: "/icons/react.svg", color: "#61DAFB" },
        { name: "Blade", color: "#1A202C" },
        { name: "TypeScript", icon: "/icons/typescript.svg", color: "#3178C6" },
        { name: "CSS", icon: "/icons/css3.svg", color: "#1572B6" },
      ],
    },
  ],
  projects: [
    {
      name: makeCopy("AI Tile Visualizer App", "AI Tile Visualizer App"),
      description: makeCopy(
        "AI-powered tile visualization and design recommendation system. A smart tool that uses AI to analyze and render real-time tile design patterns for interior and construction projects, helping users preview textures, colours, and spatial layouts before implementation.",
        "KI-gestütztes System zur Kachelvisualisierung und Designempfehlung. Ein intelligentes Tool, das KI nutzt, um Fliesendesigns für Innenausbau- und Bauprojekte in Echtzeit zu analysieren und darzustellen, damit Nutzer Texturen, Farben und Raumlayouts vor der Umsetzung beurteilen können.",
      ),
      link: "https://github.com/rdshyamvijay/AI-Tile-Visualizer-app",
      skills: [
        "React",
        "Tailwind CSS",
        "Python",
        "Gemini API",
        "Firebase",
        "REST API",
      ],
    },
    {
      name: makeCopy("Bürgergeld AI Form Assistant", "Bürgergeld AI Form Assistant"),
      description: makeCopy(
        "AI-powered dynamic form assistant built with Laravel 12 and Google Gemini. It helps Bürgergeld applicants complete complex government forms via an adaptive conversational interface, remembers previous answers, fills related sections automatically, and ensures compliance with official templates while delivering ready-to-submit PDFs.",
        "KI-gestützter, dynamischer Formularassistent auf Basis von Laravel 12 und Google Gemini. Unterstützt Bürgergeld-Antragsteller:innen beim Ausfüllen komplexer Behördenformulare über eine adaptive, dialogbasierte Oberfläche, merkt sich Eingaben, füllt verwandte Abschnitte automatisch aus und stellt konforme, einreichfertige PDFs bereit.",
      ),
      link: "https://github.com/rdshyamvijay/Burgergeld-AI-Form-Assistant",
      skills: [
        "Laravel 12",
        "PHP 8.3",
        "Gemini API",
        "PDFtk",
        "Blade",
        "REST API",
      ],
    },
    {
      name: makeCopy(
        "Multi-AI Agent Customer Support System",
        "Multi-KI-Agenten-Kundensupportsystem",
      ),
      description: makeCopy(
        "An intelligent multi-agent framework for automating customer interactions. It orchestrates AI agents for ticket classification, query routing, and personalised responses, learning continuously from context and feedback.",
        "Ein intelligentes Multi-Agenten-Framework zur Automatisierung von Kundeninteraktionen. Es koordiniert KI-Agenten für Ticketklassifizierung, Anfragenrouting und personalisierte Antworten und lernt fortlaufend aus Kontext und Feedback.",
      ),
      link: "https://github.com/rdshyamvijay/Multi-AI-Agent-CustomerSupport",
      skills: [
        "Python",
        "LangChain",
        "OpenAI API",
        "CrewAI",
        "FastAPI",
      ],
    },
    {
      name: makeCopy("IoT Sensor Data Forecasting System", "IoT-Sensordaten-Vorhersagesystem"),
      description: makeCopy(
        "Developed a data-driven pipeline to forecast environmental sensor readings such as temperature and humidity using time-series modelling. Built an automated workflow for data cleaning, trend analysis, and predictive visualisation to support real-time IoT monitoring.",
        "Entwickelte eine datengetriebene Pipeline zur Vorhersage von Umweltsensordaten wie Temperatur und Luftfeuchtigkeit mit Zeitreihenmodellen. Implementierte einen automatisierten Workflow für Datenbereinigung, Trendanalyse und prognostische Visualisierung zur Unterstützung von Echtzeit-IoT-Monitoring.",
      ),
      link: "https://github.com/rdshyamvijay/sensor-data-forecasting-iot",
      skills: [
        "Python",
        "pandas",
        "scikit-learn",
        "statsmodels",
        "Random Forest",
        "Matplotlib",
        "Linear Regression",
        "Seaborn",
        "Jupyter Notebook",
      ],
    },
  ],
  experience: [
    {
      company: makeCopy("Outlier", "Outlier"),
      title: makeCopy("Coder – AI Trainer", "Coder – KI-Trainer:in"),
      dateRange: makeCopy("Nov 2024 – Aug 2025", "Nov 2024 – Aug 2025"),
      link: "https://outlier.ai/about-us",
      bullets: makeArrayCopy(
        [
          "Built and tested agentic AI environments and function-calling workflows.",
          "Conducted LLM evaluations and RLHF-based behavioral refinements.",
          "Improved AI reasoning, automation, and multi-turn interaction accuracy.",
        ],
        [
          "Entwickelte und testete agentische KI-Umgebungen sowie Function-Calling-Workflows.",
          "Führte LLM-Evaluierungen und RLHF-basierte Verhaltensoptimierungen durch.",
          "Verbesserte KI-Schlussfolgerung, Automatisierung und Genauigkeit mehrstufiger Interaktionen.",
        ],
      ),
    },
    {
      company: makeCopy("Autup AI", "Autup AI"),
      title: makeCopy("Co-Founder", "Mitgründer"),
      dateRange: makeCopy("Jun 2023 – Sep 2024", "Jun 2023 – Sep 2024"),
      link: undefined,
      bullets: makeArrayCopy(
        [
          "Founded an AI automation startup serving small businesses.",
          "Built chatbots, workflow tools, and end-to-end client automation.",
          "Managed product, sales, and delivery across multiple AI projects.",
        ],
        [
          "Gründete ein KI-Automatisierungs-Startup für kleine Unternehmen.",
          "Entwickelte Chatbots, Workflow-Tools und End-to-End-Automatisierung für Kund:innen.",
          "Verantwortete Produkt, Vertrieb und Delivery über mehrere KI-Projekte hinweg.",
        ],
      ),
    },
    {
      company: makeCopy("Flex", "Flex"),
      title: makeCopy("Associate Engineer – IT", "Associate Engineer – IT"),
      dateRange: makeCopy("Oct 2021 – Sep 2023", "Okt 2021 – Sep 2023"),
      link: "https://flex.com/",
      bullets: makeArrayCopy(
        [
          "Developed ETL pipelines integrating 10M+ records daily across databases.",
          "Automated dashboards and CI/CD workflows improving analytics efficiency.",
          "Led data migration to Snowflake cutting processing costs by 25%.",
        ],
        [
          "Entwickelte ETL-Pipelines, die täglich über 10 Mio. Datensätze über mehrere Datenbanken integrierten.",
          "Automatisierte Dashboards und CI/CD-Workflows und steigerte so die Analytics-Effizienz.",
          "Leitete die Datenmigration zu Snowflake und senkte die Verarbeitungskosten um 25 %.",
        ],
      ),
    },
  ],
  education: [
    {
      school: makeCopy(
        "Brandenburg University of Technology Cottbus-Senftenberg, Germany",
        "Brandenburgische Technische Universität Cottbus-Senftenberg, Deutschland",
      ),
      degree: makeCopy("M.Sc. Artificial Intelligence", "M.Sc. Künstliche Intelligenz"),
      dateRange: makeCopy("10/2023 – 10/2026 (expected)", "10/2023 – 10/2026 (erwartet)"),
      achievements: makeArrayCopy([], []),
      link: "https://www.b-tu.de/",
    },
    {
      school: makeCopy(
        "Hindusthan Institute of Technology - Anna University, India",
        "Hindusthan Institute of Technology - Anna University, Indien",
      ),
      degree: makeCopy("B.E. Computer Science and Engineering", "B.E. Informatik und Ingenieurwesen"),
      dateRange: makeCopy("06/2017 – 04/2021", "06/2017 – 04/2021"),
      achievements: makeArrayCopy([], []),
    },
  ],
  certificates: [
    {
      title: makeCopy("Advanced SQL for Data Science", "Advanced SQL for Data Science"),
      link: "https://drive.google.com/file/d/1GC6a_UcHilQQ_M-YxwqW84-3IC1b8JL3/view?usp=sharing",
    },
    {
      title: makeCopy("Crew AI", "Crew AI"),
      link: "https://drive.google.com/file/d/1PeUe8VWpqYzlPpwoACXIpjx0FRhe3H4c/view?usp=sharing",
    },
    {
      title: makeCopy("Data Analyst Associate Certification", "Data Analyst Associate Certification"),
      link: "https://www.datacamp.com/certificate/DAA0011618095303?dc_referrer=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      title: makeCopy(
        "Developing AI Systems with the OpenAI API",
        "Entwicklung von KI-Systemen mit der OpenAI API",
      ),
      link: "https://drive.google.com/file/d/1fTPZZm2HkzHvCypfJkXEYxCa46a49AC9/view?usp=sharing",
    },
    {
      title: makeCopy("KNIME Analytics Platform", "KNIME Analytics Platform"),
      link: "https://drive.google.com/file/d/1O4JJMc3zNVq2Vi4g9Im2_dnByWVbv7qs/view?usp=sharing",
    },
    {
      title: makeCopy("LLMOps Concepts", "LLMOps-Konzepte"),
      link: "https://drive.google.com/file/d/1blB5MohsUekbDIc56oVo2v-2tWhtsbvW/view?usp=sharing",
    },
    {
      title: makeCopy("Power BI – Integrating AI and ML", "Power BI – Integration von KI und ML"),
      link: "https://drive.google.com/file/d/1kSm19IvJOwLoW41yzj6DWCuapMq3E-1V/view?usp=sharing",
    },
    {
      title: makeCopy(
        "Prompt Engineering with the OpenAI API",
        "Prompt Engineering mit der OpenAI API",
      ),
      link: "https://drive.google.com/file/d/16GGwxOxaeenms3bmdBNd1kYJXXsgUVJK/view?usp=sharing",
    },
    {
      title: makeCopy("Tableau for Data Science", "Tableau für Data Science"),
      link: "https://drive.google.com/file/d/1D324y-FlRO1y3WPX-4TkE0VsXD4C3l8-/view?usp=sharing",
    },
    {
      title: makeCopy("Working with Hugging Face", "Arbeiten mit Hugging Face"),
      link: "https://drive.google.com/file/d/1FExEWxuJuwCZ5maVO2o5KUX8llJlpFdG/view?usp=sharing",
    },
    {
      title: makeCopy("Working with the OpenAI API", "Arbeiten mit der OpenAI API"),
      link: "https://drive.google.com/file/d/19tibLK2UZKvjh1XPlcw5E8VwV0WZms7A/view?usp=sharing",
    },
  ],
};
