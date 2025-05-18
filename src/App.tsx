import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

// Página inicial básica temporária
const HomePage = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Aplicativo Todo</h1>
      <p className="text-gray-400">
        Estrutura básica do projeto.
        <br />
        Adicione seus componentes aqui.
      </p>
    </div>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    <Toaster />
  </BrowserRouter>
);

export default App;

export default App;
