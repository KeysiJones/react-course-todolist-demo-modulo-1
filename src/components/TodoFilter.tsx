
import React from "react";
import { Button } from "@/components/ui/button";
import { FilterStatus } from "@/types/todo";

interface TodoFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-4 mb-2">
      <Button
        variant={currentFilter === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("all")}
        className="focus-visible:ring-2 focus-visible:ring-primary"
      >
        Todas
      </Button>
      <Button
        variant={currentFilter === "active" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("active")}
        className="focus-visible:ring-2 focus-visible:ring-primary"
      >
        Ativas
      </Button>
      <Button
        variant={currentFilter === "completed" ? "default" : "outline"}
        size="sm"
        onClick={() => onFilterChange("completed")}
        className="focus-visible:ring-2 focus-visible:ring-primary"
      >
        Concluídas
      </Button>
    </div>
  );
};

export default TodoFilter;
