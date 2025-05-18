
import React from "react";
import { FilterStatus } from "@/types/todo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface TodoFilterProps {
  currentFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <Tabs value={currentFilter} onValueChange={(value) => onFilterChange(value as FilterStatus)} className="w-full">
      <TabsList className="grid grid-cols-3 w-full bg-gray-700 rounded-md">
        <TabsTrigger 
          value="all" 
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
        >
          Todas
        </TabsTrigger>
        <TabsTrigger 
          value="active" 
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
        >
          Ativas
        </TabsTrigger>
        <TabsTrigger 
          value="completed" 
          className="data-[state=active]:bg-violet-600 data-[state=active]:text-white"
        >
          Concluídas
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TodoFilter;
