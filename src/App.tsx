import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "./auth/AuthProvider";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <ParallaxProvider>
      <AuthProvider> 
      <div className="min-h-screen w-full bg-soft-gradient flex flex-col">
        <BrowserRouter>
          {/* GLOBAL NAVBAR */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>

          {/* GLOBAL FOOTER */}
          <Footer />
        </BrowserRouter>
      </div>
      </AuthProvider>
      
    </ParallaxProvider>
  );
}
