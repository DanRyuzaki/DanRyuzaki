import type { ReactNode } from "react";

type Link = {
  label: string;
  href: string;
  icon: ReactNode;
};

const links: Link[] = [
  {
    label: "GitHub",
    href: "https://github.com/DanRyuzaki",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.21 9.14 7.67 10.62.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.12.68-3.78-1.33-3.78-1.33-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.49-.28-5.11-1.25-5.11-5.55 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.42.11-2.96 0 0 .95-.3 3.11 1.15.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.16-1.46 3.11-1.15 3.11-1.15.61 1.54.23 2.68.11 2.96.72.79 1.16 1.79 1.16 3.02 0 4.31-2.63 5.27-5.13 5.55.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.77.54 4.46-1.48 7.67-5.67 7.67-10.62C23.25 5.48 18.27.5 12 .5Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/danryuzaki",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ryu.cifixion",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:danryuzaki00@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="h-[18px] w-[18px]"
      >
        <path d="M3 5.5h18v13H3v-13Z" strokeLinejoin="round" />
        <path d="M3.3 6 12 13l8.7-7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {links.map((l) => (
        <li key={l.label}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
            className="text-[color:var(--color-paper-dim)] transition-colors duration-200 hover:text-[color:var(--color-brass)] focus-visible:text-[color:var(--color-brass)]"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
