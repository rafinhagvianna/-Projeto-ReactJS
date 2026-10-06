# BuscaCEP

Projeto 1 da disciplina **Programação Web Fullstack**.

## Objetivo

Desenvolver uma aplicação React de página única (SPA) para consultar endereços pelo CEP utilizando a API ViaCEP e organizar os resultados em favoritos. As consultas serão feitas com AJAX, sem recarregar a página.

## Situação atual

Quinta etapa: consulta com indicador de carregamento e tratamento de falhas. Durante a busca, o botão mostra “Consultando...” com um indicador visual, e o campo e o envio ficam desabilitados. Ao iniciar a requisição, o resultado anterior e a mensagem de erro são limpos. CEP inexistente, falha de conexão, erro HTTP e resposta JSON inválida recebem mensagens. O bloco finally encerra o carregamento tanto no sucesso quanto no erro, permitindo uma nova tentativa. A validação de formato continua sendo feita antes de consultar a API.

## Integrantes e responsabilidades

Os nomes dos dois integrantes ainda precisam ser preenchidos pela equipe.

| Integrante | Responsabilidade | Etapas planejadas |
| --- | --- | --- |
| Integrante 1 — nome a preencher | Estrutura, consulta à API, validações, erros e useRef | Commits 1 a 6 |
| Integrante 2 — nome a preencher | Favoritos, filtro, persistência e acabamento visual | Commits 7 a 12 |

## Tecnologias

- React e JavaScript para a interface e a lógica.
- Vite para desenvolvimento e geração da versão de produção.
- React Bootstrap e Bootstrap para componentes visuais e layout responsivo.
- useState para controlar o campo e as mensagens do formulário.
- API ViaCEP e fetch com async/await para consultar endereços.
- Planejadas: useEffect, useRef e localStorage.
- O hook escolhido da lista da disciplina é useRef, para focar o campo de CEP.

## Como executar

Pré-requisito: Node.js 22.12 ou superior. Esta etapa foi validada com Node.js 24.

Na pasta do projeto, instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo terminal. Para encerrar o servidor, pressione Ctrl+C.

## Comandos disponíveis

| Comando | Finalidade |
| --- | --- |
| npm run dev | Iniciar o ambiente de desenvolvimento |
| npm run lint | Verificar o código com Oxlint |
| npm run build | Gerar a versão de produção na pasta dist |
| npm run preview | Visualizar localmente a versão gerada pelo build |

## Estrutura inicial

```text
src/
  components/
    FormularioCEP.jsx  Campo, envio e validação do CEP
    ResultadoEndereco.jsx  Exibição dos dados recebidos por props
  services/
    viacep.js  Requisição à API ViaCEP
  App.jsx       Componente principal da aplicação
  main.jsx      Inicialização do React
  styles.css    Estilos básicos
index.html      Página HTML que recebe a aplicação
vite.config.js  Configuração do Vite
```

O componente de favoritos será criado nas próximas etapas.

## Funcionalidades planejadas

- Consultar CEP com ou sem hífen.
- Validar a entrada e tratar carregamento e erros.
- Exibir CEP, rua, bairro, cidade e estado.
- Iniciar nova consulta e focar o campo com useRef.
- Salvar favoritos sem duplicação.
- Listar, filtrar por cidade ou CEP e remover favoritos.
- Persistir favoritos no navegador com localStorage.
- Adaptar a interface para celular e computador.

Os favoritos ficarão apenas no navegador utilizado. Consultas dependerão de internet e da disponibilidade da API.

## Referência da API

[Documentação do ViaCEP](https://viacep.com.br/)

Exemplo de endpoint: `https://viacep.com.br/ws/01001000/json/`.
