import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import TodoList from "@/components/TodoList";

// Página inicial com o componente TodoList
const HomePage = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
    <div className="w-full max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Aplicativo Todo</h1>
      <TodoList />
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