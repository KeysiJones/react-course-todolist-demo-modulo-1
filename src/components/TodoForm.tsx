
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button/button";
import { Plus } from "lucide-react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Adicionar nova tarefa..."
        className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
        aria-label="Nome da tarefa"
      />
      <Button 
        type="submit" 
        disabled={!text.trim()}
        size="icon"
        className="bg-primary hover:bg-primary/90"
        aria-label="Adicionar tarefa"
      >
        <Plus className="h-5 w-5" />
      </Button>
    </form>
  );
};

export default TodoForm;
