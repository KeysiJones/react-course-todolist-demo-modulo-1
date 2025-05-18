import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Versão simplificada para Aula 1 - apenas estrutura
const TodoList: React.FC = () => {
  // Na Aula 1, ainda não trabalhamos com estado
  // Apenas apresentamos a estrutura do componente
  
  return (
    <Card className="w-full max-w-md mx-auto bg-gray-800 border-gray-700 shadow-xl">
      <CardContent className="p-4">
        {/* Formulário será adicionado na Aula 2 */}
        <div className="p-3 bg-gray-700 rounded-md mb-4">
          <p className="text-gray-400 text-center">
            Aqui ficará o formulário para adicionar tarefas.
          </p>
        </div>
        
        <div className="h-px w-full bg-gray-600 my-4"></div>
        
        {/* Exemplos estáticos de itens de tarefa */}
        <div className="space-y-3 mt-6">
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-md">
            <div className="flex items-center gap-3">
              <Checkbox id="tarefa1" className="border-gray-500" />
              <span className="text-white">Tarefa de exemplo 1</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-md">
            <div className="flex items-center gap-3">
              <Checkbox id="tarefa2" className="border-gray-500" />
              <span className="text-white">Tarefa de exemplo 2</span>
            </div>
          </div>
        </div>
        
        <p className="text-center text-gray-400 mt-4">
          Na próxima aula, implementaremos a adição de tarefas.
        </p>
      </CardContent>
    </Card>
  );
};

export default TodoList;
