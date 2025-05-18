import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import TodoFilter from "./TodoFilter";
import { Todo, FilterStatus } from "@/types/todo";
import { Card, CardContent } from "@/components/ui/card";
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

  const handleFilterChange = (newFilter: FilterStatus) => {
    setFilter(newFilter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const activeTodos = filteredTodos.filter((todo) => !todo.completed);
  const completedTodos = filteredTodos.filter((todo) => todo.completed);

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700 shadow-xl">
      <CardContent className="p-4">
        <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
        
        <div className="mt-6">
          <TodoForm onAddTodo={addTodo} />
          <div className="space-y-3 mt-4">
            {filter !== "completed" && activeTodos.length === 0 ? (
              <p className="text-center text-gray-400 py-4">
                Nenhuma tarefa pendente.
              </p>
            ) : (
              filter !== "completed" && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-medium text-gray-300">Pendentes</h2>
                    <span className="text-sm text-gray-400">{activeTodos.length}</span>
                  </div>
                  <div className="space-y-3">
                    {activeTodos.map((todo) => (
                      <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          
          {filter !== "active" && completedTodos.length > 0 && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-medium text-gray-300">Concluídas</h2>
                <span className="text-sm text-gray-400">{completedTodos.length}</span>
              </div>
              <div className="space-y-3">
                {completedTodos.map((todo) => (
                  <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onToggle={toggleTodo} 
                    onDelete={deleteTodo} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TodoList;
