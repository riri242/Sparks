// src/pages/AuthPage.tsx
import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthState } from "../auth/AuthProvider";

type Mode = "signin" | "signup" | "reset";

function friendlyAuthError(code?: string) {
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
      return "Email or password is incorrect.";
    case "auth/user-not-found":
      return "No account found with this email.";
    case "auth/email-already-in-use":
      return "This email is already in use.";
    case "auth/weak-password":
      return "Password is too weak. Use at least 6 characters.";
    case "auth/invalid-email":
      return "Please enter a valid email address.";
    case "auth/popup-closed-by-user":
      return "The sign-in popup was closed.";
    default:
      return "Something went wrong. Please try again.";
  }
}

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuthState();
  const { signIn, signUp, resetPassword, signInWithGoogle } = useAuth();

  const from = (location.state as any)?.from || "/";

  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [persist, setPersist] = useState<"local" | "session">("local");

  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    if (mode === "reset") return email.trim().length > 3;
    if (mode === "signup") return email.trim() && password.trim().length >= 6;
    return email.trim() && password.trim();
  }, [mode, email, password]);

  // If already signed in, go home
  if (user) {
    navigate(from, { replace: true });
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    try {
      setBusy(true);

      if (mode === "reset") {
        await resetPassword(email.trim());
        setMessage("Password reset email sent. Check your inbox.");
        return;
      }

      if (mode === "signup") {
        await signUp(email.trim(), password, {
          displayName: displayName.trim() || undefined,
          persist,
          sendVerification: false,
        });
        setMessage("Account created. You’re in.");
        navigate(from, { replace: true });
        return;
      }

      await signIn(email.trim(), password, persist);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(friendlyAuthError(err?.code));
    } finally {
      setBusy(false);
    }
  };

  const onGoogle = async () => {
    setError(null);
    setMessage(null);
    try {
      setBusy(true);
      await signInWithGoogle(persist);
      navigate(from, { replace: true });
    } catch (err: any) {
      setError(friendlyAuthError(err?.code));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-gradient overflow-x-hidden">
      <section className="pt-28 md:pt-32 px-4">
        <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2 items-center">
          {/* Right: auth card */}
          <div className="relative">
            <div
              aria-hidden
              className="
                absolute -inset-6
                rounded-[2.25rem]
                bg-[radial-gradient(1000px_420px_at_50%_0%,rgba(99,179,237,0.22),transparent_60%)]
                dark:bg-[radial-gradient(1000px_420px_at_50%_0%,rgba(120,190,255,0.14),transparent_60%)]
                blur-2xl
                opacity-80
              "
            />
            <div className="relative rounded-[2.25rem] border border-sky-950/10 dark:border-white/10 bg-white/60 dark:bg-[hsl(213_40%_12%)] backdrop-blur-xl shadow-[0_22px_70px_rgba(15,23,42,0.14)] dark:shadow-[0_28px_90px_rgba(0,0,0,0.45)] p-7 md:p-9">
              {/* Tabs */}
              <div className="flex items-center gap-2 rounded-2xl border border-sky-950/10 dark:border-white/10 bg-white/50 dark:bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setMode("signin")}
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
                    mode === "signin"
                      ? "bg-white/70 dark:bg-white/10 shadow-sm"
                      : "text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
                    mode === "signup"
                      ? "bg-white/70 dark:bg-white/10 shadow-sm"
                      : "text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  Create account
                </button>
                <button
                  type="button"
                  onClick={() => setMode("reset")}
                  className={`flex-1 rounded-xl px-4 py-2 text-sm font-medium transition ${
                    mode === "reset"
                      ? "bg-white/70 dark:bg-white/10 shadow-sm"
                      : "text-[hsl(var(--foreground)/0.7)] hover:text-[hsl(var(--foreground))]"
                  }`}
                >
                  Reset
                </button>
              </div>

              <form onSubmit={onSubmit} className="mt-6 space-y-4">
                {mode === "signup" && (
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground)/0.55)]">
                      Display name (optional)
                    </label>
                    <input
                      value={displayName}
                      onChange={(e) => setDisplayName(e.target.value)}
                      className="mt-2 input-sparks"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground)/0.55)]">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 input-sparks"
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                  />
                </div>

                {mode !== "reset" && (
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-[hsl(var(--foreground)/0.55)]">
                      Password
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-2 input-sparks"
                      placeholder="••••••••"
                      autoComplete={
                        mode === "signup" ? "new-password" : "current-password"
                      }
                      type="password"
                    />
                    {mode === "signup" && (
                      <p className="mt-2 text-xs text-[hsl(var(--foreground)/0.55)]">
                        Use at least 6 characters.
                      </p>
                    )}
                  </div>
                )}

                {/* Persistence */}
                <div className="flex items-center justify-between gap-3 pt-1">
                  <div className="flex items-center gap-2">
                    <input
                      id="persist"
                      type="checkbox"
                      checked={persist === "local"}
                      onChange={(e) =>
                        setPersist(e.target.checked ? "local" : "session")
                      }
                      className="h-4 w-4"
                    />
                    <label
                      htmlFor="persist"
                      className="text-sm text-[hsl(var(--foreground)/0.75)]"
                    >
                      Keep me signed in
                    </label>
                  </div>

                  {mode !== "reset" && (
                    <button
                      type="button"
                      onClick={() => setMode("reset")}
                      className="text-sm font-medium text-[hsl(var(--primary))] hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>

                {/* Alerts */}
                {error && (
                  <div className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-[hsl(var(--foreground))]">
                    {error}
                  </div>
                )}
                {message && (
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-[hsl(var(--foreground))]">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!canSubmit || busy}
                  className="btn-sparks w-full px-6 py-3 text-sm md:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {busy
                    ? "Please wait…"
                    : mode === "signin"
                      ? "Sign in"
                      : mode === "signup"
                        ? "Create account"
                        : "Send reset email"}
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-x-0 top-1/2 h-px bg-sky-950/10 dark:bg-white/10" />
                  <p className="relative mx-auto w-fit bg-white/60 dark:bg-[hsl(213_40%_12%)] px-3 text-xs text-[hsl(var(--foreground)/0.6)]">
                    or
                  </p>
                </div>

                <button
                  type="button"
                  onClick={onGoogle}
                  disabled={busy}
                  className="btn-sparks-ghost w-full px-6 py-3 text-sm md:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Continue with Google
                </button>

                <p className="pt-2 text-center text-xs text-[hsl(var(--foreground)/0.55)]">
                  By continuing, you agree to a calm practice experience.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="h-20" />
      </section>
    </div>
  );
}
