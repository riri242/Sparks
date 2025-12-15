// src/auth/ProtectedRoute.tsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "./AuthProvider";

export default function ProtectedRoute({
  children,
  redirectTo = "/auth",
}: {
  children: React.ReactNode;
  redirectTo?: string;
}) {
  const { user, loading } = useAuthState();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[60vh] grid place-items-center">
        <div className="rounded-2xl border border-sky-950/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl px-6 py-4">
          <p className="text-sm text-[hsl(var(--foreground)/0.75)]">Loading…</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={redirectTo} replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
