import { useNavigate } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";

const links = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Practice modes", href: "#adventure" },
  { label: "About", href: "#about" },
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="w-full">
      {/* FULL-WIDTH GLASS BAR */}
      <div className="w-full border-t border-sky-950/20 dark:border-white/10 shadow-[0_-4px_16px_rgba(15,23,42,0.04)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="min-h-[64px] flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
            {/* Logo */}
            <button
              type="button"
              onClick={() => navigate("/")}
              aria-label="Go to home"
              className="
                flex items-center gap-3
                self-center md:self-auto
                justify-center md:justify-start
              "
            >
              {/* Light mode → dark logo */}
              <img
                src={logoLight}
                alt="Sparks logo"
                className="h-9 w-9 object-contain dark:hidden"
              />

              {/* Dark mode → light logo */}
              <img
                src={logoDark}
                alt="Sparks logo"
                className="hidden h-9 w-9 object-contain dark:block"
              />
            </button>

            {/* Nav links */}
            <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-sm nav-text">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex items-center justify-center gap-2 md:justify-end">
              {[
                {
                  href: "https://www.linkedin.com/",
                  Icon: FaLinkedin,
                  label: "LinkedIn",
                },
                { href: "https://x.com/", Icon: FaXTwitter, label: "X" },
                { href: "https://github.com/", Icon: FaGithub, label: "GitHub" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="
                    h-10 w-10
                    inline-flex items-center justify-center
                    rounded-full
                    border border-sky-950/20 dark:border-white/10
                    bg-white/40 dark:bg-white/10
                    backdrop-blur-md
                    transition
                    hover:scale-[1.05]
                    active:scale-[0.97]
                  "
                >
                  <Icon size={18} className="text-[hsl(var(--foreground)/0.75)]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
