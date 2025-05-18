
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { Todo } from "@/types/todo";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete }) => {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-card shadow-sm mb-2 gap-4">
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          aria-label={todo.completed ? "Marcar tarefa como não concluída" : "Marcar tarefa como concluída"}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={cn(
            "flex-1 text-sm sm:text-base transition-colors duration-200",
            todo.completed && "line-through text-muted-foreground"
          )}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        aria-label={`Excluir tarefa: ${todo.text}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
