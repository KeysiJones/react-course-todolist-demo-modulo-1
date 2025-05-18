# Aplicativo de Lista de Tarefas - Aula 1

Este repositório contém o código da Aula 1 do curso de desenvolvimento React, focado na criação de um aplicativo de Lista de Tarefas (Todo App).

## Sobre esta Branch

A branch `aula-1` contém o código desenvolvido durante a primeira aula do curso. Nesta aula, implementamos:

1. A estrutura básica visual do aplicativo
2. Os componentes estáticos da interface
3. O layout responsivo com Tailwind CSS
4. A integração dos componentes ShadCN UI

## Estrutura do Projeto

```
src/
├── components/
│   ├── TodoList.tsx       # Componente principal com lista estática
│   ├── TodoItem.tsx       # Componente para renderizar cada tarefa
│   └── ui/                # Componentes ShadCN UI pré-configurados
│       ├── button.tsx     # Botões para ações (adicionar, remover)
│       ├── card.tsx       # Container do aplicativo
│       ├── checkbox.tsx   # Para marcar tarefas como concluídas
│       ├── input.tsx      # Para entrada de novas tarefas
│       ├── tabs.tsx       # Para filtrar tarefas
│       ├── toast.tsx      # Sistema de notificações
│       ├── toaster.tsx    # Gerenciador de notificações
│       └── tooltip.tsx    # Dicas para os usuários
├── lib/
│   └── utils.ts           # Funções utilitárias
├── types/
│   └── todo.ts            # Definição de tipos para tarefas
├── App.tsx                # Componente raiz da aplicação
└── main.tsx               # Ponto de entrada da aplicação
```

## O que foi implementado nesta aula

Na Aula 1, focamos nos seguintes aspectos:

1. **Estrutura Visual**: Criamos o layout básico do aplicativo usando componentes Card do ShadCN UI
2. **Componente TodoList**: Implementamos uma versão estática com exemplos de tarefas
3. **Componente TodoItem**: Criamos um componente para exibir itens de tarefa de forma visual
4. **Estilização com Tailwind**: Utilizamos classes do Tailwind CSS para estilizar a interface
5. **Visualização estática de dados**: Apresentamos dados de exemplo usando TypeScript

## O que vem nas próximas aulas

Nas próximas aulas, vamos:

1. **Aula 2**: Implementar formulário para adicionar tarefas e gerenciar estado local
2. **Aula 3**: Adicionar funcionalidades de marcar tarefas, filtrar e excluir
3. **Aula 4**: Implementar persistência com localStorage e melhorar a UI/UX

## Tecnologias utilizadas

- React 18
- TypeScript
- Vite
- ShadCN UI (componentes essenciais)
- Tailwind CSS

## Como executar o projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório e acesse a branch aula-1
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
git checkout aula-1
```

2. Instale as dependências
```bash
npm install
# ou
yarn
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o aplicativo em `http://localhost:5173`

## Exercícios sugeridos

Para praticar o conteúdo desta aula, sugerimos:

1. Modificar o estilo do TodoList usando outras cores do Tailwind
2. Adicionar mais exemplos estáticos de tarefas
3. Experimentar diferentes layouts para os itens da lista
4. Adicionar ícones aos itens utilizando a biblioteca Lucide React

## Dúvidas e suporte

Se tiver dúvidas sobre o código ou implementação, consulte a documentação das tecnologias:

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [ShadCN UI](https://ui.shadcn.com/)
