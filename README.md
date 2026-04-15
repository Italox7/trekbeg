# TrekBag

TrekBag é um aplicativo de lista de itens de viagem criado com React e Vite. Ele permite adicionar, organizar e controlar o status de cada item da mala com recursos de marcação, ordenação e reset de estado.

## O que o projeto faz

- Adiciona novos itens à lista de viagem
- Alterna o status de cada item entre "empacotado" e "não empacotado"
- Ordena a lista por estado (padrão, empacotado ou não empacotado)
- Exibe um contador com o total de itens e quantos já foram empacotados
- Permite resetar a lista para o estado inicial, remover todos os itens ou marcar todos como completos/incompletos
- Usa armazenamento persistente local para manter os itens entre atualizações da página

## Tecnologias usadas

- React 19
- Vite
- Zustand para gerenciamento de estado
- React Select para seleção de ordenação
- ESLint para análise de código

## Como instalar e rodar localmente

> Neste projeto, o gerenciador de pacotes padrão é o `pnpm`.

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd trekbag
```

2. Instale as dependências:

```bash
pnpm install
```

3. Inicie o servidor de desenvolvimento:

```bash
pnpm dev
```

4. Abra o navegador e acesse:

```text
http://localhost:5173
```

## Comandos úteis

- `pnpm dev` - inicia o servidor de desenvolvimento
- `pnpm build` - gera a versão de produção
- `pnpm preview` - visualiza a build de produção localmente
- `pnpm lint` - executa o ESLint

## Estrutura principal do projeto

- `src/components` - componentes React da interface
- `src/stores/itemsStore.js` - lógica de estado e persistência dos itens
- `src/lib/constants.js` - constantes iniciais do app

## Como usar

1. Adicione um item no campo de texto e clique em `Add to list`.
2. Marque o checkbox para indicar que o item foi empacotado.
3. Use os botões de ação para marcar todos como completos/incompletos, resetar ou remover tudo.
4. Use o seletor para ordenar os itens por estado.

## Observação

Caso você use `npm` em vez de `pnpm`, execute `npm install` e ajuste os comandos para `npm run dev`, `npm run build`, etc.
