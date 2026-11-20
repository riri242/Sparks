import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoLight from "../../assets/logo.svg";
import logoDark from "../../assets/logoDark.svg";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "Practice", href: "#practice" },
  { label: "History", href: "#history" },
  { label: "About", href: "#about" },
];

type ThemeToggleProps = {
  isDark: boolean;
  onToggle: () => void;
};

function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="btn-sparks-ghost px-4 py-2 text-sm"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  /* Initialize theme */
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const shouldBeDark = saved ? saved === "dark" : prefersDark;

    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed top-4 left-0 w-full z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-frosty rounded-3xl border border-sky-950/20 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
          <div className="h-16 flex items-center px-6">
            {/* Logo */}
            <button
              onClick={() => navigate("/")}
              className="flex items-center"
            >
              <img
                src={isDark ? logoDark : logoLight}
                alt="Sparks logo"
                className="h-9 w-9 object-contain transition-opacity duration-300"
              />
            </button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10 ml-10">
              {links.map((l) => (
                <a key={l.label} href={l.href} className="text-base nav-text">
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Right-side actions */}
            <div className="ml-auto hidden md:flex items-center gap-3">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

              {/* ✅ GET STARTED → AUTH PAGE */}
              <button
                className="btn-sparks px-5 py-2 text-sm"
                onClick={() => navigate("/auth")}
              >
                Get Started
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="ml-auto md:hidden h-10 w-10 flex items-center justify-center rounded-full
                         border border-sky-950/20 bg-white/40 backdrop-blur-md"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-4 pt-3">
          <div className="card-sparks rounded-3xl">
            <nav className="flex flex-col gap-6">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-base nav-text"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex items-center gap-3">
              <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            </div>

            {/* ✅ MOBILE GET STARTED → AUTH PAGE */}
            <button
              className="btn-sparks px-5 py-2 text-sm w-full mt-3"
              onClick={() => {
                setOpen(false);
                navigate("/auth");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
