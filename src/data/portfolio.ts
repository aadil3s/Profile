export const profile = {
  name: "Aadil Shah",
  role: "Cybersecurity &",
  /** Rendered after the role, in gradient. */
  roleAccent: "SOC Analyst",
  tagline:
    "I build the detections a SOC runs on: SIEM pipelines, correlation rules, and attack timelines reconstructed from raw logs.",
  location: "Sydney, NSW",
  email: "aadil.shah2019@gmail.com",
  /** PDF exported from Aadil_Shah_Resume.docx. Re-export after editing the docx. */
  resumeUrl: "/Aadil_Shah_Resume.pdf",
  /** Shows a green pulsing dot in the hero. Set to null to hide the badge. */
  availability: "Open to SOC analyst & cybersecurity roles",
  about: [
    "Final-year Bachelor of Cybersecurity and Behaviour student at Western Sydney University, GPA 6.25/7.0 and Dean's List. In a university cyber range I stood up a Wazuh, Zeek and Suricata SIEM stack, authored the correlation rules, reconstructed attacks from raw logs, and mapped every technique to MITRE ATT&CK.",
    "My degree pairs security with behavioural science, which helps with two things: telling real alerts apart from noise, and understanding why someone fell for the attack in the first place. I'm looking for an entry-level SOC analyst or cybersecurity role in Sydney.",
  ],
};

/** Social links shown in the hero and footer. */
export const socials: { label: string; href: string; icon: "linkedin" | "github" | "mail" }[] = [
  { label: "GitHub", href: "https://github.com/aadil3s", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/aadiil-shah", icon: "linkedin" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

/** Quick-reference facts in the About section. */
export const facts: { label: string; value: string }[] = [
  { label: "Based in", value: "Sydney, NSW" },
  { label: "Degree", value: "BSc Cybersecurity & Behaviour" },
  { label: "GPA", value: "6.25 / 7.0, Dean's List 2024" },
  { label: "Languages", value: "English (Professional), Nepali (Native)" },
];

/** Small strip under the hero. Every figure here is traceable to the resume. */
export const stats: { value: string; label: string }[] = [
  { value: "6.25", label: "GPA / 7.0" },
  { value: "25", label: "Security tools" },
  { value: "3", label: "Forage programs" },
  { value: "100+", label: "Users supported" },
];

export type SkillIcon =
  | "radar"
  | "shield"
  | "network"
  | "crosshair"
  | "search"
  | "globe"
  | "terminal"
  | "server"
  | "lock";

export const skills: { category: string; icon: SkillIcon; items: string[] }[] = [
  {
    category: "SIEM & Detection",
    icon: "radar",
    items: ["Wazuh", "ELK Stack", "LogPoint", "Zeek", "Suricata", "Snort"],
  },
  {
    category: "Detection & Response",
    icon: "shield",
    items: [
      "Threat detection",
      "Alert triage",
      "Incident response",
      "Log analysis",
      "Correlation rules",
      "MITRE ATT&CK mapping",
      "Phishing analysis",
      "Vulnerability assessment",
    ],
  },
  {
    category: "Networking",
    icon: "network",
    items: ["TCP/IP", "DNS", "DHCP", "VLANs", "Firewalls", "HTTP/HTTPS", "SMTP", "ICMP"],
  },
  {
    category: "Offensive & Recon",
    icon: "crosshair",
    items: ["Nmap", "Nessus", "OpenVAS", "Metasploit", "Hydra", "SET"],
  },
  {
    category: "Digital Forensics",
    icon: "search",
    items: ["Wireshark", "Autopsy", "FTK Imager", "CyberChef", "PhotoRec"],
  },
  {
    category: "Threat Intel & OSINT",
    icon: "globe",
    items: ["VirusTotal", "Shodan", "AbuseIPDB", "IBM X-Force", "theHarvester", "Sherlock"],
  },
  {
    category: "Scripting & Web",
    icon: "terminal",
    items: ["Python", "Bash", "Java", "JavaScript", "HTML", "CSS", "PHP"],
  },
  {
    category: "Systems & Directory",
    icon: "server",
    items: ["Linux", "Windows", "macOS", "Active Directory"],
  },
  {
    category: "Cryptography & ITSM",
    icon: "lock",
    items: ["Encryption", "Hashing", "PKI", "Digital signatures", "ServiceNow"],
  },
];

export type Project = {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Purple-Team Cyber Range",
    period: "Mar 2026 - Jun 2026",
    description:
      "A three-machine virtualised range (Kali attacker, Windows 10 target, Ubuntu defence) set up to mimic a corporate network, then used to attack, detect and document end to end.",
    highlights: [
      "Onboarded host and network log sources into a Wazuh, Zeek and Suricata stack, with custom correlation rules written per attack path.",
      "Exposed a live egress-filtering gap by establishing a reverse shell over HTTP and simulating DNS tunnelling with dnscat2, then turned that covert C2 path into a documented detection use case.",
      "Reconstructed complete attack timelines by correlating SIEM alerts against packet captures, mapping every technique to MITRE ATT&CK.",
    ],
    tags: ["Wazuh", "Zeek", "Suricata", "MITRE ATT&CK", "Kali Linux", "dnscat2"],
    featured: true,
  },
  {
    title: "CyberGuardAI",
    period: "Mar 2026 - Jun 2026",
    description:
      "Capstone project: a Python and Streamlit platform that flags scam and deepfake threats, then walks the user through the right response.",
    highlights: [
      "Grounded in behavioural-nudge research (Thaler, Kahneman, Gollwitzer), turning theory into real-time prompts a non-technical user can act on.",
      "Designed end to end with Design Science Research methodology.",
    ],
    tags: ["Python", "Streamlit", "Behavioural Security", "AI", "DSR"],
  },
  {
    title: "Social Engineering Spyware Attack",
    period: "Oct 2024",
    description:
      "A controlled lab exercise compromising a Windows 10 host in an isolated environment, documented from both the attacker and the defender side.",
    highlights: [
      "Delivered a Metasploit payload for remote CMD access, demonstrating full system compromise.",
      "Documented the underlying weakness alongside its detection points.",
    ],
    tags: ["Metasploit", "Windows 10", "Social Engineering", "Isolated Lab"],
  },
];

export type Job = {
  company: string;
  role: string;
  location: string;
  period: string;
  category: "security" | "additional";
  points: string[];
};

export const experience: Job[] = [
  {
    company: "Western Sydney University - Cyber Range Lab",
    role: "SOC & Penetration Testing Intern",
    location: "Parramatta, NSW",
    period: "Mar 2026 - Jun 2026",
    category: "security",
    points: [
      "Built and operated a three-machine cyber range that surfaced live attacks in real time, by onboarding host and network log sources into a Wazuh, Zeek and Suricata SIEM stack and writing custom correlation rules per attack path.",
      "Reconstructed complete attack timelines across every purple-team exercise, by correlating SIEM alerts against packet captures and mapping each technique to MITRE ATT&CK.",
      "Ran red-team simulations using Nmap and Metasploit for reconnaissance, vulnerability assessment, payload delivery and credential attacks.",
      "Authored a runbook-style incident report per exercise (objective, findings, detection evidence, MITRE mapping, remediation) that doubled as a repeatable response playbook.",
    ],
  },
  {
    company: "Kathmandu Meridian School",
    role: "IT Support",
    location: "Kathmandu, Nepal",
    period: "Jun 2023 - Jan 2024",
    category: "security",
    points: [
      "Cut system downtime by 30% for 100+ users, by standardising proactive troubleshooting and first-line incident response across desktops, laptops and mobile.",
      "Hardened the campus network with VLAN segmentation across 10+ access points and switches, improving throughput and security.",
    ],
  },
  {
    company: "Avion International",
    role: "Warehouse Supervisor / Warehouse Associate",
    location: "Wetherill Park, NSW",
    period: "Nov 2024 - Present",
    category: "additional",
    points: [
      "Drove a 25% efficiency gain after promotion to Supervisor, by closing process gaps with corrective access and inventory controls.",
      "Enforced access controls and audit trails on high-value inventory, the same verification discipline that underpins log review and security monitoring.",
    ],
  },
  {
    company: "Woolworths",
    role: "Team Member",
    location: "Bass Hill, NSW",
    period: "Oct 2024 - Nov 2025",
    category: "additional",
    points: [
      "Maintained near-zero transaction error through peak trading under strict loss-prevention procedures.",
    ],
  },
];

export const certifications: {
  title: string;
  issuer: string;
  date: string;
  description: string;
  inProgress?: boolean;
}[] = [
  {
    title: "SOC Analyst Level 1 (SAL1)",
    issuer: "TryHackMe",
    date: "In progress",
    description:
      "Hands-on SOC certification: alert triage, threat detection, correlation and incident response in a SOC simulation.",
    inProgress: true,
  },
  {
    title: "Cyber Job Simulation",
    issuer: "Deloitte Australia, Forage",
    date: "Jun 2026",
    description:
      "Analysed web activity logs during a simulated breach to flag suspicious user activity.",
  },
  {
    title: "Cybersecurity Virtual Experience",
    issuer: "Mastercard, Forage",
    date: "Jun 2026",
    description:
      "Reported phishing threats as a Security Awareness Team analyst and assessed team training needs.",
  },
  {
    title: "Shields Up: Cybersecurity",
    issuer: "AIG, Forage",
    date: "Jun 2026",
    description:
      "Tracked CISA advisories and wrote a Python brute-force decryption script to avoid ransom payment (ethical exercise).",
  },
];

export const education: {
  school: string;
  qualification: string;
  location: string;
  period: string;
  details?: string;
}[] = [
  {
    school: "Western Sydney University",
    qualification: "Bachelor of Cybersecurity and Behaviour",
    location: "Parramatta, NSW",
    period: "Mar 2024 - Present",
    details:
      "GPA 6.25/7.0, Dean's List 2024. Coursework: Ethical Hacking, Software Engineering, Databases, Artificial Intelligence, IoT.",
  },
  {
    school: "Malpi Institute",
    qualification: "A-Levels: Mathematics, Physics, Computer Science, Business Studies",
    location: "Kathmandu, Nepal",
    period: "Jun 2021 - Aug 2023",
  },
];

export const leadership: { role: string; org: string; period: string }[] = [
  {
    role: "Vice-President",
    org: "Nepali Students at Western Sydney University",
    period: "Jan 2026 - Present",
  },
  {
    role: "President",
    org: "Computer Science Club, Kathmandu Meridian School",
    period: "Jan 2019 - Jan 2020",
  },
  {
    role: "Community Volunteer",
    org: "Local Food Bank, Kathmandu",
    period: "Sep 2019 - Jan 2024",
  },
];
