
import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import { Todo, FilterStatus } from "@/types/todo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Carregando do localStorage se disponível
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState<FilterStatus>("all");
  const { toast } = useToast();

  // Salvando no localStorage sempre que todos mudar
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([...todos, newTodo]);
    toast({
      title: "Tarefa adicionada",
      description: `"${text}" foi adicionada à sua lista.`,
    });
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          const updated = { ...todo, completed: !todo.completed };
          toast({
            title: updated.completed ? "Tarefa concluída" : "Tarefa reativada",
            description: `"${todo.text}" foi ${
              updated.completed ? "marcada como concluída" : "marcada como não concluída"
            }.`,
          });
          return updated;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id: string) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    setTodos(todos.filter((todo) => todo.id !== id));
    if (todoToDelete) {
      toast({
        title: "Tarefa removida",
        description: `"${todoToDelete.text}" foi removida da sua lista.`,
      });
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">Lista de Tarefas</CardTitle>
      </CardHeader>
      <CardContent>
        <TodoForm onAddTodo={addTodo} />
        
        <TodoFilter currentFilter={filter} onFilterChange={setFilter} />
        
        <div className="space-y-2 mt-4">
          {filteredTodos.length === 0 ? (
            <p className="text-center text-muted-foreground py-4">
              {filter === "all"
                ? "Nenhuma tarefa adicionada ainda."
                : filter === "active"
                ? "Nenhuma tarefa ativa."
                : "Nenhuma tarefa concluída."}
            </p>
          ) : (
            filteredTodos.map((todo) => (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                onToggle={toggleTodo} 
                onDelete={deleteTodo} 
              />
            ))
          )}
        </div>
        
        {todos.length > 0 && (
          <div className="mt-4 text-sm text-muted-foreground text-center">
            {todos.length} {todos.length === 1 ? "tarefa" : "tarefas"} total,{" "}
            {todos.filter((t) => !t.completed).length} restantes
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoList;
