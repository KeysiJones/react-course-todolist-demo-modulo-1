
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
    <div className={cn(
      "flex items-center justify-between p-3 rounded-lg bg-gray-700 shadow-sm gap-2",
      todo.completed && "bg-gray-700/50"
    )}>
      <div className="flex items-center gap-3 flex-1">
        <Checkbox
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onCheckedChange={() => onToggle(todo.id)}
          className="border-gray-500 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          aria-label={todo.completed ? "Marcar tarefa como não concluída" : "Marcar tarefa como concluída"}
        />
        <label
          htmlFor={`todo-${todo.id}`}
          className={cn(
            "flex-1 text-sm sm:text-base transition-colors duration-200 text-white",
            todo.completed && "line-through text-gray-400"
          )}
        >
          {todo.text}
        </label>
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onDelete(todo.id)}
        className="text-gray-400 hover:text-white hover:bg-gray-600"
        aria-label={`Excluir tarefa: ${todo.text}`}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
