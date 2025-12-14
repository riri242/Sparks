import React from "react";
import Navbar from "../components/layout/Navbar";
import heroImg from "../assets/Hero.svg";
import micImg from "../assets/Mic.svg";
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
    <div className="min-h-screen bg-soft-gradient overflow-hidden">
      {/* Floating navbar */}
      <Navbar />

      {/* ================= HERO TEXT ================= */}
      <section
        className="
          relative
          pt-80 md:pt-80
          pb-0
          px-4
        "
      >
        <div className="mx-auto max-w-6xl text-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-glow">
            Sparks
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-lg md:text-xl text-[hsl(var(--foreground)/0.75)]">
            Practice public speaking in a calm, focused space.
          </p>

          {/* Description */}
          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.6)]">
            Choose a speaking prompt, set a timer, and talk freely. Reflect,
            improve, and build confidence — one session at a time.
          </p>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-sparks px-6 py-3 text-sm md:text-base">
              Get Started
            </button>

            <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ================= HERO IMAGE (SOFT ROUNDED BOTTOM, NO LIGHT) ================= */}
      <section className="relative w-full -mt-44 md:-mt-60">
        <div
          className="
            relative w-full overflow-hidden
            h-[300px]
            sm:h-[420px]
            md:h-[520px]
            lg:h-[640px]
            xl:h-[720px]
            2xl:h-[780px]
            rounded-b-2xl md:rounded-b-3xl
          "
        >
          <img
            src={heroImg}
            alt="Speaking illustration"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24" />
        </div>
      </section>

      <section
        aria-hidden
        className="
          w-full
          bg-[hsl(var(--primary))]
          h-28 md:h-40 lg:h-52
        "
      />

      {/* ================= FEATURE HIGHLIGHT SECTION ================= */}
      <section className="relative w-full mt-0 pb-60">
        <div
          className="
            relative
            w-full
            bg-[hsl(var(--primary))]
            text-[hsl(var(--primary-foreground))]
          "
        >
          {/* Extra-soft stretched curved bottom (SOLID, no gradient glow) */}
          <div
            className="
              pointer-events-none
              absolute
              inset-x-[-15%]
              -bottom-32
              h-[280px]
              bg-[hsl(var(--background))]
              dark:bg-[hsl(var(--primary))]
            "
          />

          <div className="relative mx-auto max-w-6xl px-6 py-24 grid gap-14 md:grid-cols-2 items-center">
            {/* LEFT — MIC IMAGE */}
            <div className="flex justify-center md:justify-start">
              <img
                src={micImg}
                alt="Microphone illustration"
                className="
                  w-[260px]
                  sm:w-[300px]
                  md:w-[340px]
                  lg:w-[380px]
                  xl:w-[420px]
                  drop-shadow-[0_24px_48px_rgba(0,0,0,0.28)]
                "
              />
            </div>

            {/* RIGHT — TEXT CONTENT */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-[hsl(var(--primary-foreground)/0.7)]">
                Meet Sparks
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
                Your personal speaking practice space
              </h2>

              <p className="mt-5 text-sm md:text-base text-[hsl(var(--primary-foreground)/0.8)]">
                Practice speaking without pressure. Sparks gives you a calm,
                distraction-free environment where you can talk freely, reflect
                on your delivery, and build confidence at your own pace.
              </p>

              <p className="mt-4 text-sm md:text-base text-[hsl(var(--primary-foreground)/0.75)]">
                No audience. No judgment. Just you, your voice, and steady
                progress.
              </p>

              <div className="mt-8">
                <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
                  Learn more about Sparks
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ================= FEATURES + ADVENTURE (CONNECTED BACKGROUND) ================= */}
<section className="relative w-full bg-soft-gradient">
  {/* ================= FEATURES GRID (UNDER LEARN MORE) ================= */}
  <section
    id="features"
    className="
      relative
      -mt-44 md:-mt-56
      pt-44 md:pt-56
      py-16 md:py-24
    "
  >
    <div className="mx-auto max-w-6xl px-6">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
          You’ve never practiced speaking like this
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)]">
          Sparks helps you practice in a calm, structured way—so you improve
          faster, feel more confident, and actually enjoy the process.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Item 1 */}
        <div className="flex gap-4 rounded-3xl bg-white/55 backdrop-blur-md border border-sky-950/10 p-7">
          <div className="h-12 w-12 rounded-2xl bg-white/60 border border-sky-950/10 flex items-center justify-center shrink-0">
            <MessageCircle className="h-6 w-6 text-[hsl(var(--primary))]" />
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[hsl(var(--foreground)/0.55)]">
              Speaking prompts
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[hsl(var(--foreground))]">
              Virtual speaking sessions
            </h3>
            <p className="mt-2 text-sm text-[hsl(var(--foreground)/0.65)]">
              Pick a prompt, start the timer, and speak freely—no pressure,
              no audience, just steady progress.
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex gap-4 rounded-3xl bg-white/55 backdrop-blur-md border border-sky-950/10 p-7">
          <div className="h-12 w-12 rounded-2xl bg-white/60 border border-sky-950/10 flex items-center justify-center shrink-0">
            <MousePointerClick className="h-6 w-6 text-[hsl(var(--primary))]" />
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[hsl(var(--foreground)/0.55)]">
              Guided flow
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[hsl(var(--foreground))]">
              Course-style practice
            </h3>
            <p className="mt-2 text-sm text-[hsl(var(--foreground)/0.65)]">
              Follow simple steps that keep you focused: warm-up, speak,
              reflect, and repeat. It feels structured but not rigid.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex gap-4 rounded-3xl bg-white/55 backdrop-blur-md border border-sky-950/10 p-7">
          <div className="h-12 w-12 rounded-2xl bg-white/60 border border-sky-950/10 flex items-center justify-center shrink-0">
            <Pencil className="h-6 w-6 text-[hsl(var(--primary))]" />
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[hsl(var(--foreground)/0.55)]">
              Reflection
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[hsl(var(--foreground))]">
              Notes that improve your next try
            </h3>
            <p className="mt-2 text-sm text-[hsl(var(--foreground)/0.65)]">
              Write quick feedback after each session—what worked, what
              didn’t, and what you’ll do differently next time.
            </p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex gap-4 rounded-3xl bg-white/55 backdrop-blur-md border border-sky-950/10 p-7">
          <div className="h-12 w-12 rounded-2xl bg-white/60 border border-sky-950/10 flex items-center justify-center shrink-0">
            <Mic2 className="h-6 w-6 text-[hsl(var(--primary))]" />
          </div>

          <div>
            <p className="text-xs tracking-[0.18em] uppercase text-[hsl(var(--foreground)/0.55)]">
              Confidence
            </p>
            <h3 className="mt-2 text-lg font-semibold text-[hsl(var(--foreground))]">
              Speak with clarity, not stress
            </h3>
            <p className="mt-2 text-sm text-[hsl(var(--foreground)/0.65)]">
              Short daily practice builds real confidence. You’ll sound more
              natural, organized, and calm over time.
            </p>
          </div>
        </div>
      </div>

      {/* CTA row (optional) */}
      <div className="mt-10 flex items-center justify-center gap-4">
        <button className="btn-sparks px-6 py-3 text-sm md:text-base">
          Start practicing
        </button>
        <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
          See how it works
        </button>
      </div>
    </div>
  </section>


















{/* ================= CHOOSE YOUR ADVENTURE (UNDER FEATURES) ================= */}
<section id="adventure" className="relative w-full py-20 md:py-28">
  <div className="mx-auto max-w-[90rem] px-6">
    {/* OUTER CARD */}
    <div
      className="
        adventure-outer
        relative
        rounded-[3rem]
        px-8 sm:px-12 md:px-16
        py-16 md:py-24
      "
    >
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
          Choose your adventure
        </h2>
        <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)]">
          Pick a practice style that matches your mood—switch anytime and keep improving.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {/* Card 1 */}
        <div className="adventure-card text-center">
          <div className="relative z-10">
            <div
              className="
                mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                bg-white/80 dark:bg-white/10
                border border-sky-950/10 dark:border-white/15
                backdrop-blur-md
              "
            >
              <Sparkles className="h-6 w-6 text-[hsl(var(--primary))]" />
            </div>

            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
              Warm-up Journey
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground)/0.65)]">
              Gentle prompts to loosen your voice, settle nerves, and get into a confident flow
              before you start.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex text-sm font-medium text-[hsl(var(--primary))] hover:underline underline-offset-4"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="adventure-card text-center">
          <div className="relative z-10">
            <div
              className="
                mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                bg-white/80 dark:bg-white/10
                border border-sky-950/10 dark:border-white/15
                backdrop-blur-md
              "
            >
              <Timer className="h-6 w-6 text-[hsl(var(--primary))]" />
            </div>

            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
              Timed Mastery
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground)/0.65)]">
              Choose a duration and practice with structure—great for building clarity,
              pacing, and consistency.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex text-sm font-medium text-[hsl(var(--primary))] hover:underline underline-offset-4"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="adventure-card text-center">
          <div className="relative z-10">
            <div
              className="
                mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl
                bg-white/80 dark:bg-white/10
                border border-sky-950/10 dark:border-white/15
                backdrop-blur-md
              "
            >
              <NotebookPen className="h-6 w-6 text-[hsl(var(--primary))]" />
            </div>

            <h3 className="text-xl font-semibold text-[hsl(var(--foreground))]">
              Reflection Notes
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-[hsl(var(--foreground)/0.65)]">
              Capture what worked and what to improve. Small notes after each session
              compound into real progress.
            </p>

            <a
              href="#"
              className="mt-7 inline-flex text-sm font-medium text-[hsl(var(--primary))] hover:underline underline-offset-4"
            >
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</section>


    </div>
  );
}
