# Estrutura Básica - App Todo List

Este repositório contém a estrutura básica para o desenvolvimento de um aplicativo de Lista de Tarefas (Todo App) com React, TypeScript e ShadCN UI.

## Sobre esta Branch

A branch `estrutura-basica` contém apenas o esqueleto mínimo necessário para iniciar o projeto. Ela foi criada para que você possa acompanhar as aulas e implementar os componentes passo a passo.

## Estrutura do Projeto

```
src/
├── components/
│   ├── TodoList.tsx       # Componente vazio que você implementará
│   └── ui/                # Componentes ShadCN UI pré-configurados
│       ├── button.tsx     # Botões para ações (adicionar, remover)
│       ├── card.tsx       # Container do aplicativo
│       ├── checkbox.tsx   # Para marcar tarefas como concluídas
│       ├── input.tsx      # Para entrada de novas tarefas
│       ├── toast.tsx      # Sistema de notificações
│       └── toaster.tsx    # Gerenciador de notificações
├── lib/
│   └── utils.ts           # Funções utilitárias
├── types/
│   └── todo.ts            # Definição de tipos para tarefas
├── App.tsx                # Componente raiz da aplicação
└── main.tsx               # Ponto de entrada da aplicação
```

## Componentes Disponíveis

Os componentes do ShadCN UI já estão configurados e prontos para uso:

- **Button**: Para ações como adicionar/remover tarefas
- **Card**: Para o container da aplicação
- **Checkbox**: Para marcar tarefas como concluídas
- **Input**: Para campos de texto
- **Toast/Toaster**: Sistema de notificações

## O que você vai implementar

Durante as aulas, você implementará:

1. **Aula 1**: Estrutura básica do componente TodoList
2. **Aula 2**: Adição de tarefas com formulário e estado
3. **Aula 3**: Renderização de listas e manipulação de estado
4. **Aula 4**: Persistência com localStorage e feedback com toast

## Tecnologias

- React 18
- TypeScript
- Vite
- ShadCN UI (versão simplificada, apenas componentes essenciais)
- Tailwind CSS

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

4. Acesse o aplicativo em `http://localhost:5173`

## Como acompanhar o curso

Para acompanhar o curso, você pode:

1. Começar nesta branch `estrutura-basica`
2. Implementar o código conforme as aulas
3. Comparar seu código com a branch `aula-1` quando finalizar a primeira aula

Isso permitirá que você tenha a experiência completa de desenvolvimento, construindo cada componente passo a passo.
