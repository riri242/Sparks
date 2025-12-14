import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ParallaxProvider>
      <div className="min-h-screen w-full bg-soft-gradient">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ParallaxProvider>
  );
}
