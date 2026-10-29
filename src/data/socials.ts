export const identity = {
  name: "Muhammad Mubashar",
  brand: "Pasha Dev",
  handle: "@pasha_dev_",
  role: "AI Full Stack Developer",
  // TODO: replace with the real contact email once provided.
  email: null as string | null,
};

export type Social = { label: string; url: string; handle: string };

export const socials: Social[] = [
  { label: "GitHub", url: "https://github.com/pasha804", handle: "pasha804" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/pasha-dev/", handle: "pasha-dev" },
  { label: "Instagram", url: "https://instagram.com/pasha_dev_", handle: "@pasha_dev_" },
  { label: "TikTok", url: "https://www.tiktok.com/@pasha_dev_", handle: "@pasha_dev_" },
  { label: "Threads", url: "https://www.threads.net/@pasha_dev_", handle: "@pasha_dev_" },
];

export const navSections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "hackathons", label: "Hackathons" },
  { id: "services", label: "What I Build" },
  { id: "certificates", label: "Certificates" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
] as const;
