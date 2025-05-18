import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import TodoList from "@/components/TodoList";

const App = () => (
  <TooltipProvider>
    <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-4">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Lista de Tarefas</h1>
        <TodoList />
      </div>
    </div>
    <Toaster />
  </TooltipProvider>
);

export default App;
