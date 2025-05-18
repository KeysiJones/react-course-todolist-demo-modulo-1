import React from "react";
import TodoList from "@/components/TodoList";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-white">Lista de Tarefas</h1>
        <TodoList />
      </div>
    </div>
  );
};

export default Index;
