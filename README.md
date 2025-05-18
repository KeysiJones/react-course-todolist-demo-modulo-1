# Estrutura Básica - App Todo List

Este repositório contém a estrutura básica para o desenvolvimento de um aplicativo de Lista de Tarefas (Todo App) com React, TypeScript e ShadCN UI.

## Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes ShadCN UI pré-configurados
├── lib/
│   └── utils.ts     # Funções utilitárias
├── App.tsx          # Componente raiz da aplicação
└── main.tsx         # Ponto de entrada da aplicação
```

## Tecnologias

- React 18
- TypeScript
- Vite
- ShadCN UI
- Tailwind CSS
- React Router

## Primeiros Passos

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone <URL_DO_REPOSITORIO>
cd <NOME_DA_PASTA>
```

2. Instale as dependências
```bash
npm install
# ou
yarn
```

3. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

4. Acesse o aplicativo em `http://localhost:5173`

## Próximos Passos

Com esta estrutura básica, você pode começar a desenvolver os componentes da sua aplicação Todo list, como:

1. Componente TodoList para exibir a lista de tarefas
2. Componente TodoItem para mostrar cada tarefa individual
3. Formulário para adicionar novas tarefas
4. Filtros para as tarefas (todas, ativas, concluídas)

## Sobre os Componentes do ShadCN UI

Os componentes na pasta `src/components/ui` são gerados pela biblioteca ShadCN UI. Você pode utilizá-los conforme necessário ou adicionar novos componentes com o comando:

```bash
npx shadcn-ui@latest add <nome-do-componente>
```
