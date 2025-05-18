
import React from "react";
import { Todo } from "@/types/todo";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div className={cn(
      "flex items-center p-3 rounded-lg bg-gray-700 shadow-sm",
      todo.completed && "bg-gray-700/50"
    )}>
      <div className="flex items-center gap-3 flex-1">
        <Checkbox 
          id={`todo-${todo.id}`}
          checked={todo.completed}
          // Não adicionamos a função de toggle na Aula 1
          className="border-gray-500 data-[state=checked]:bg-violet-600 data-[state=checked]:border-violet-600"
        />
        <span
          className={cn(
            "flex-1 text-sm sm:text-base text-white",
            todo.completed && "line-through text-gray-400"
          )}
        >
          {todo.text}
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
