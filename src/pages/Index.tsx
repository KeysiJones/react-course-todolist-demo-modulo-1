
import TodoList from "@/components/TodoList";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-background to-accent/10">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-primary">Lista de Tarefas React</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;
