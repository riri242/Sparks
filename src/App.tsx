import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage.tsx";
import NotFound from "./pages/NotFound.tsx";

export default function App() {
  return (
    <div className=" min-h-screen w-full bg-soft-gradient">
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


