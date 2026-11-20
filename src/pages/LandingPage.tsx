
import heroImg from "../assets/Hero.svg";
import micImg from "../assets/Mic.svg";
import { Parallax } from "react-scroll-parallax";

import {
  MessageCircle,
  MousePointerClick,
  Pencil,
  Mic2,
  Sparkles,
  Timer,
  NotebookPen,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-soft-gradient overflow-x-hidden">
      {/* ================= HERO TEXT ================= */}
      <section
        className="
          relative
          pt-72 md:pt-80
          pb-24 md:pb-0
          px-4
          z-20
        "
      >
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-glow">
            Sparks
          </h1>

          <p className="mt-3 text-lg md:text-xl text-[hsl(var(--foreground)/0.75)]">
            A calm space to practice speaking—without pressure.
          </p>

          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.6)]">
            Choose a prompt, set a timer, and speak. Then reflect, refine, and
            build real confidence—one session at a time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-sparks px-6 py-3 text-sm md:text-base">
              Start a session
            </button>

            <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
              Explore Sparks
            </button>
          </div>
        </div>
      </section>

      {/* ================= HERO IMAGE ================= */}
      <section className="relative w-full -mt-44 md:-mt-60 z-10">
        <div
          aria-hidden
          className="
            absolute inset-x-0 bottom-0 h-[35%]
            bg-[hsl(var(--primary))]
            z-0
          "
        />

        <Parallax speed={-6}>
          <div
            className="
              relative w-full overflow-hidden
              h-[300px] sm:h-[420px] md:h-[520px]
              lg:h-[640px] xl:h-[720px] 2xl:h-[780px]
              rounded-b-2xl md:rounded-b-3xl
              z-10
            "
          >
            <img
              src={heroImg}
              alt="Illustration of someone practicing public speaking"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </Parallax>
      </section>

      {/* SOLID COLOR STRIP */}
      <section
        aria-hidden
        className="relative w-full bg-[hsl(var(--primary))] h-24 sm:h-32 md:h-40"
      />

      {/* ================= FEATURE HIGHLIGHT ================= */}
      <section className="relative w-full pb-56">
        <div className="relative w-full bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))]">
          <div
            className="
              pointer-events-none absolute inset-x-[-15%] -bottom-32
              h-[280px]
              bg-[hsl(var(--background))]
              dark:bg-[hsl(var(--primary))]
            "
          />

          <div className="relative mx-auto max-w-6xl px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
            <Parallax speed={8} easing="easeOutQuad">
              <div className="flex justify-center md:justify-start">
                <img
                  src={micImg}
                  alt="Microphone illustration"
                  className="
                    w-[260px] sm:w-[300px] md:w-[340px]
                    lg:w-[380px] xl:w-[420px]
                    drop-shadow-[0_24px_48px_rgba(0,0,0,0.28)]
                  "
                />
              </div>
            </Parallax>

            <div className="max-w-xl text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-[hsl(var(--primary-foreground)/0.7)]">
                Meet Sparks
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
                Your private speaking studio
              </h2>

              <p className="mt-5 text-sm md:text-base text-[hsl(var(--primary-foreground)/0.8)]">
                Practice in a distraction-free space that feels calm and
                supportive. Speak out loud, stay focused, and improve at your
                own pace.
              </p>

              <p className="mt-4 text-sm md:text-base text-[hsl(var(--primary-foreground)/0.75)]">
                No judgment. No interruptions. Just progress.
              </p>

              <div className="mt-8">
                <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
                  See what makes it different
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


{/* ================= FEATURES ================= */}
<section className="relative w-full bg-soft-gradient">
  <section
    id="features"
    className="relative -mt-44 md:-mt-56 pt-44 md:pt-56 py-16 md:py-24"
  >
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Practice that actually feels good
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)]">
          A simple, repeatable flow that helps you speak clearly, stay calm,
          and improve faster—without overthinking it.
        </p>
      </div>

      {/* FEATURE CARDS */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {[
          {
            icon: MessageCircle,
            label: "Prompts",
            title: "Speak with direction",
            desc: "Choose a prompt that fits your mood—so you never start from a blank page.",
          },
          {
            icon: MousePointerClick,
            label: "Flow",
            title: "A guided rhythm",
            desc: "Warm up, speak, reflect, repeat. Enough structure to progress—never rigid.",
          },
          {
            icon: Pencil,
            label: "Notes",
            title: "Keep what works",
            desc: "Capture small takeaways after each session and turn them into real improvement.",
          },
          {
            icon: Mic2,
            label: "Confidence",
            title: "Sound more like you",
            desc: "Build clarity and calm through short practice that compounds over time.",
          },
        ].map(({ icon: Icon, label, title, desc }) => (
          <div key={title} className="feature-card">
            <div className="feature-icon">
              <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-[hsl(var(--foreground)/0.55)]">
                {label}
              </p>
              <h3 className="mt-2 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-[hsl(var(--foreground)/0.65)]">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <button className="btn-sparks px-6 py-3 text-sm md:text-base">
          Start practicing
        </button>
        <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
          View the flow
        </button>
      </div>
    </div>
  </section>

  {/* ================= ADVENTURE ================= */}
  <section id="adventure" className="relative w-full py-20 md:py-28">
    <div className="mx-auto max-w-[90rem] px-6">
      <div className="adventure-outer rounded-[3rem] px-8 sm:px-12 md:px-16 py-16 md:py-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Choose your practice style
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)]">
            Switch modes anytime—each one supports a different kind of progress.
          </p>
        </div>

        {/* ADVENTURE CARDS — SAME STYLE */}
<div className="mt-16 grid gap-8 md:grid-cols-3">
  {[
    {
      icon: Sparkles,
      label: "Warm-up",
      title: "Warm-up Journey",
      desc: "Ease into speaking with gentle prompts that calm nerves and build flow.",
    },
    {
      icon: Timer,
      label: "Focus",
      title: "Timed Mastery",
      desc: "Practice with a clear duration to sharpen clarity, pacing, and structure.",
    },
    {
      icon: NotebookPen,
      label: "Reflect",
      title: "Reflection Notes",
      desc: "Capture insights after each session to reinforce progress over time.",
    },
  ].map(({ icon: Icon, label, title, desc }) => (
    <div key={title} className="feature-card">
      {/* Content wrapper: keeps alignment perfect on small screens */}
      <div className="mx-auto grid w-full max-w-[22rem] justify-items-center text-center">
        <div className="feature-icon mb-6">
          <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
        </div>

        <p className="text-xs uppercase tracking-widest text-[hsl(var(--foreground)/0.55)]">
          {label}
        </p>

        <h3 className="mt-2 text-xl font-semibold">{title}</h3>

        <p className="mt-3 text-sm text-[hsl(var(--foreground)/0.65)]">
          {desc}
        </p>

        <a
          href="#"
          className="mt-6 inline-flex text-sm font-medium text-[hsl(var(--primary))] hover:underline underline-offset-4"
        >
          Learn more →
        </a>
      </div>
    </div>
  ))}
</div>


      </div>
    </div>
  </section>
</section>









    </div>
  );
}
