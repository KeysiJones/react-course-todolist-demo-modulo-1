# Estrutura Básica - App Todo List

Este repositório contém a estrutura básica para o desenvolvimento de um aplicativo de Lista de Tarefas (Todo App) com React, TypeScript e ShadCN UI.

## Estrutura do Projeto

```
src/
├── components/
│   ├── TodoList.tsx   # Componente de lista de tarefas
│   └── ui/            # Componentes ShadCN UI essenciais
│       ├── button.tsx     # Botões para ações (adicionar, remover)
│       ├── card.tsx       # Container do aplicativo
│       ├── checkbox.tsx   # Para marcar tarefas como concluídas
│       ├── input.tsx      # Para entrada de novas tarefas
│       ├── separator.tsx  # Separação visual de elementos
│       ├── toast.tsx      # Sistema de notificações
│       └── toaster.tsx    # Gerenciador de notificações
├── lib/
│   └── utils.ts       # Funções utilitárias
├── types/
│   └── todo.ts        # Definição de tipos para tarefas
├── App.tsx            # Componente raiz da aplicação
└── main.tsx           # Ponto de entrada da aplicação
```

## Componentes Mantidos

O projeto foi simplificado para manter apenas os componentes essenciais para um aplicativo básico de lista de tarefas:

1. **button.tsx** - Componente de botão para ações como adicionar ou remover tarefas
2. **card.tsx** - Container visual para o aplicativo
3. **checkbox.tsx** - Para marcar tarefas como concluídas
4. **input.tsx** - Para adicionar novas tarefas
5. **separator.tsx** - Para separação visual dos elementos
6. **toast.tsx/toaster.tsx** - Sistema de notificações para feedback ao usuário

## Tecnologias

- React 18
- TypeScript
- Vite
- ShadCN UI (versão simplificada, apenas componentes essenciais)
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

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

## Estrutura do Curso - Módulo 1

Este aplicativo será desenvolvido ao longo de 4 aulas:

1. **Aula 1**: Estrutura básica e componentes
   - Introdução ao React e TypeScript
   - Configuração do ambiente
   - Entendimento da estrutura do projeto

2. **Aula 2**: Formulários e gerenciamento local de estado
   - Implementação de formulário para adição de tarefas
   - Uso de useState e props
   - Renderização condicional

3. **Aula 3**: Interatividade e eventos
   - Marcar tarefas como concluídas
   - Filtrar tarefas
   - Exclusão de tarefas

4. **Aula 4**: Refinamento e otimização
   - Uso de localStorage para persistência
   - Melhorias na interface do usuário
   - Finalização do projeto básico
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
