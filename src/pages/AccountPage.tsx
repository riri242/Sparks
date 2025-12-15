import React, { useMemo, useState } from "react";
import { Mail, Lock, ArrowRight, Sparkles, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Adjust the import path to your actual hook
import { useAuth } from "../hooks/useAuth";

type Mode = "signin" | "signup";

export default function AuthPage() {
  const navigate = useNavigate();
  const { signIn, signUp, signInWithGoogle, resetPassword, loading, error } =
    useAuth() as any;

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const title = useMemo(
    () => (mode === "signin" ? "Welcome back" : "Create your account"),
    [mode]
  );

  const subtitle = useMemo(
    () =>
      mode === "signin"
        ? "Pick up where you left off—calm practice, clear progress."
        : "Start your practice space in seconds. No pressure, just progress.",
    [mode]
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim();
    if (!cleanEmail) return;

    try {
      if (mode === "signin") {
        await signIn(cleanEmail, password);
      } else {
        await signUp(cleanEmail, password);
      }
      navigate("/"); // change to your post-auth route if needed
    } catch {
      // your hook likely sets `error` already
    }
  };

  const onForgot = async () => {
    const cleanEmail = email.trim();
    if (!cleanEmail) return;
    try {
      await resetPassword(cleanEmail);
      // optionally show a toast in your app
    } catch {
      // handled by hook
    }
  };

  return (
    <div className="relative min-h-screen bg-soft-gradient overflow-x-hidden">
      <main className="auth-shell">
        <div aria-hidden className="auth-glow" />

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            {/* Left: Brand / Value */}
            <section className="pt-6 lg:pt-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-sky-950/10 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-xl px-4 py-2">
                <Sparkles className="h-4 w-4 text-[hsl(var(--primary))]" />
                <span className="text-xs font-semibold tracking-widest text-[hsl(var(--foreground)/0.75)]">
                  SPARKS ACCESS
                </span>
              </div>

              <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-[hsl(var(--foreground))]">
                {title}
              </h1>

              <p className="mt-3 max-w-xl text-sm md:text-base text-[hsl(var(--foreground)/0.65)] leading-relaxed">
                {subtitle}
              </p>

              <div className="mt-8 grid gap-4 max-w-xl">
                {[
                  {
                    t: "Private by design",
                    d: "Your sessions are for you—practice without an audience and stay in control.",
                  },
                  {
                    t: "Small steps that compound",
                    d: "Short practice + reflection turns into clarity, calm delivery, and confidence.",
                  },
                  {
                    t: "A clean flow",
                    d: "Prompts → timer → notes. Simple structure, never rigid.",
                  },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-3xl border border-sky-950/10 dark:border-white/10 bg-white/55 dark:bg-white/5 backdrop-blur-xl px-5 py-4"
                  >
                    <div className="text-sm font-semibold text-[hsl(var(--foreground))]">
                      {x.t}
                    </div>
                    <div className="mt-1 text-sm text-[hsl(var(--foreground)/0.65)]">
                      {x.d}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Right: Auth card */}
            <section className="lg:pt-12">
              <div className="auth-card">
                {/* Tabs */}
                <div className="p-4 sm:p-6">
                  <div className="grid grid-cols-2 gap-2 rounded-2xl p-2 auth-tab">
                    <button
                      type="button"
                      onClick={() => setMode("signin")}
                      className={[
                        "rounded-xl py-2.5 text-sm font-semibold transition",
                        mode === "signin"
                          ? "bg-white/75 dark:bg-white/10 border border-sky-950/10 dark:border-white/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                          : "text-[hsl(var(--foreground)/0.65)] hover:text-[hsl(var(--foreground))]",
                      ].join(" ")}
                    >
                      Sign in
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode("signup")}
                      className={[
                        "rounded-xl py-2.5 text-sm font-semibold transition",
                        mode === "signup"
                          ? "bg-white/75 dark:bg-white/10 border border-sky-950/10 dark:border-white/10 shadow-[0_10px_30px_rgba(15,23,42,0.08)]"
                          : "text-[hsl(var(--foreground)/0.65)] hover:text-[hsl(var(--foreground))]",
                      ].join(" ")}
                    >
                      Create account
                    </button>
                  </div>

                  {/* Form */}
                  <form onSubmit={onSubmit} className="mt-6 space-y-4">
                    {/* Error */}
                    {!!error && (
                      <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3">
                        <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                        <p className="text-sm text-[hsl(var(--foreground))]">
                          {String(error)}
                        </p>
                      </div>
                    )}

                    {/* Email */}
                    <label className="block">
                      <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--foreground)/0.55)]">
                        Email
                      </span>
                      <div className="mt-2 relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--foreground)/0.45)]" />
                        <input
                          className="input-sparks pl-12"
                          type="email"
                          autoComplete="email"
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                    </label>

                    {/* Password */}
                    <label className="block">
                      <span className="text-xs font-semibold tracking-widest uppercase text-[hsl(var(--foreground)/0.55)]">
                        Password
                      </span>
                      <div className="mt-2 relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[hsl(var(--foreground)/0.45)]" />
                        <input
                          className="input-sparks pl-12"
                          type="password"
                          autoComplete={
                            mode === "signin" ? "current-password" : "new-password"
                          }
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                    </label>

                    {/* Actions row */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        type="button"
                        onClick={onForgot}
                        className="text-sm font-medium text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))] transition"
                      >
                        Forgot password?
                      </button>

                      <div className="text-xs text-[hsl(var(--foreground)/0.55)]">
                        {mode === "signup" ? "Takes ~10 seconds" : "Welcome back"}
                      </div>
                    </div>

                    {/* Primary CTA */}
                    <button
                      type="submit"
                      disabled={!!loading}
                      className="btn-sparks w-full py-3 text-sm md:text-base"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {mode === "signin" ? "Sign in" : "Create account"}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>

                    {/* Divider */}
                    <div className="flex items-center gap-3 py-2">
                      <div className="h-px flex-1 bg-sky-950/10 dark:bg-white/10" />
                      <span className="text-xs uppercase tracking-widest text-[hsl(var(--foreground)/0.55)]">
                        or
                      </span>
                      <div className="h-px flex-1 bg-sky-950/10 dark:bg-white/10" />
                    </div>

                    {/* Google */}
                    <button
                      type="button"
                      onClick={() => signInWithGoogle?.()}
                      disabled={!!loading}
                      className="btn-sparks-ghost w-full py-3 text-sm md:text-base"
                    >
                      Continue with Google
                    </button>

                    {/* Small note */}
                    <p className="pt-2 text-xs text-center text-[hsl(var(--foreground)/0.55)]">
                      By continuing, you agree to Sparks’ basic terms and privacy.
                    </p>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
