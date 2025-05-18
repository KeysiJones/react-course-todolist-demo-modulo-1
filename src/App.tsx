import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import { Toaster } from "@/components/ui/toaster";

const App = () => (
  <Router>
    <div className="min-h-screen bg-gray-900 text-white">
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Toaster />
    </div>
  </Router>
);

export default App;
