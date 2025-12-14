import React from "react";
import Navbar from "../components/layout/Navbar";
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
      {/* Floating navbar */}
      <Navbar />

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
            Practice public speaking in a calm, focused space.
          </p>

          <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.6)]">
            Choose a speaking prompt, set a timer, and talk freely. Reflect,
            improve, and build confidence — one session at a time.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-sparks px-6 py-3 text-sm md:text-base">
              Get Started
            </button>

            <button className="btn-sparks-ghost px-6 py-3 text-sm md:text-base">
              Learn More
            </button>
          </div>
        </div>
      </section>

{/* ================= HERO IMAGE (PARALLAX SAFE BACKGROUND) ================= */}
<section className="relative w-full -mt-44 md:-mt-60 z-10">
  {/* Bottom background fill — starts LOWER */}
  <div
    aria-hidden
    className="
      absolute
      inset-x-0
      bottom-0
      h-[35%]
      bg-[hsl(var(--primary))]
      z-0
    "
  />

  <Parallax speed={-6}>
    <div
      className="
        relative
        w-full
        overflow-hidden
        h-[300px]
        sm:h-[420px]
        md:h-[520px]
        lg:h-[640px]
        xl:h-[720px]
        2xl:h-[780px]
        rounded-b-2xl md:rounded-b-3xl
        z-10
      "
    >
      <img
        src={heroImg}
        alt="Speaking illustration"
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
            {/* MIC IMAGE */}
            <Parallax speed={8} easing="easeOutQuad" shouldAlwaysCompleteAnimation>
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
            </Parallax>

            {/* TEXT */}
            <div className="max-w-xl text-center md:text-left">
              <p className="text-sm uppercase tracking-widest text-[hsl(var(--primary-foreground)/0.7)]">
                Meet Sparks
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-semibold">
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

      {/* ================= FEATURES + ADVENTURE ================= */}
      <section className="relative w-full bg-soft-gradient">
        {/* ================= FEATURES GRID ================= */}
        <section
          id="features"
          className="relative -mt-44 md:-mt-56 pt-44 md:pt-56 py-16 md:py-24"
        >
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                You’ve never practiced speaking like this
              </h2>
              <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)]">
                Sparks helps you practice in a calm, structured way—so you improve
                faster and feel more confident.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  icon: MessageCircle,
                  label: "Speaking prompts",
                  title: "Virtual speaking sessions",
                  desc: "Pick a prompt, start the timer, and speak freely—no pressure, no audience.",
                },
                {
                  icon: MousePointerClick,
                  label: "Guided flow",
                  title: "Course-style practice",
                  desc: "Warm-up, speak, reflect, repeat. Structured but never rigid.",
                },
                {
                  icon: Pencil,
                  label: "Reflection",
                  title: "Notes that improve your next try",
                  desc: "Capture what worked and what didn’t to grow faster.",
                },
                {
                  icon: Mic2,
                  label: "Confidence",
                  title: "Speak with clarity, not stress",
                  desc: "Short daily practice builds calm, confident delivery.",
                },
              ].map(({ icon: Icon, label, title, desc }) => (
                <div
                  key={title}
                  className="flex gap-4 rounded-3xl bg-white/55 backdrop-blur-md border border-sky-950/10 p-7"
                >
                  <div className="h-12 w-12 rounded-2xl bg-white/60 border border-sky-950/10 flex items-center justify-center shrink-0">
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
                See how it works
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
                  Choose your adventure
                </h2>
                <p className="mt-4 mx-auto max-w-2xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)]">
                  Pick a practice style that matches your mood.
                </p>
              </div>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
                {[
                  { icon: Sparkles, title: "Warm-up Journey" },
                  { icon: Timer, title: "Timed Mastery" },
                  { icon: NotebookPen, title: "Reflection Notes" },
                ].map(({ icon: Icon, title }) => (
                  <div key={title} className="adventure-card text-center">
                    <div className="relative z-10">
                      <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 dark:bg-white/10 border border-sky-950/10">
                        <Icon className="h-6 w-6 text-[hsl(var(--primary))]" />
                      </div>
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="mt-4 text-sm text-[hsl(var(--foreground)/0.65)]">
                        Improve your speaking with focused, repeatable practice.
                      </p>
                      <a
                        href="#"
                        className="mt-7 inline-flex text-sm font-medium text-[hsl(var(--primary))] hover:underline"
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
