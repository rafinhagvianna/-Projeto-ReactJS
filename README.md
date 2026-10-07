# BuscaCEP

Projeto 1 da disciplina **Programação Web Fullstack**.

## Objetivo

Desenvolver uma aplicação React de página única (SPA) para consultar endereços pelo CEP utilizando a API ViaCEP e organizar os resultados em favoritos. As consultas serão feitas com AJAX, sem recarregar a página.

## Situação atual

Sexta etapa: consulta ao ViaCEP com validação, carregamento, tratamento de erros e botão “Nova consulta”. O botão limpa o campo, o endereço e as mensagens e devolve o foco ao campo de CEP. Entradas com formato inválido também devolvem o foco ao campo. Durante a requisição, o campo e os dois botões ficam desabilitados. Favoritos serão implementados nas próximas etapas.

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
- useRef para acessar e focar o campo de CEP.
- Planejadas: useEffect e localStorage.
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

## Funcionalidades do projeto

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

## Fluxo da consulta

1. FormularioCEP guarda o texto digitado em useState.
2. O envio chama preventDefault para não recarregar a página e valida o formato.
3. Um CEP válido é normalizado, removendo o hífen, e enviado à função onConsultar recebida por props.
4. O App ativa o carregamento, limpa o resultado anterior e chama consultarCEP.
5. O serviço viacep.js usa fetch e async/await para obter o JSON.
6. O App guarda o endereço e o passa por props para ResultadoEndereco, ou exibe uma mensagem de erro.
7. O bloco finally encerra o carregamento em ambos os casos.

## Uso de useRef

O formulário cria a referência campoCep com useRef(null) e a associa ao campo por meio da propriedade ref. Depois que o campo aparece na tela, campoCep.current aponta para o elemento de entrada. A chamada campoCep.current.focus() coloca o cursor nesse elemento.

Isso ocorre quando o formato é inválido ou quando o usuário clica em “Nova consulta”. O texto digitado continua em useState; useRef é usado apenas para acessar o campo. Alterar uma referência não provoca uma nova renderização.

O botão “Nova consulta” limpa os estados locais do formulário e chama onNovaConsulta, recebida do App, para limpar o resultado e o erro da API. Seu tipo é button para não enviar o formulário. Ele fica desabilitado durante uma requisição.

## Roteiro de verificação manual

- Enviar um campo vazio ou um CEP incompleto: exibir erro e focar o campo.
- Consultar 01001000 e 01001-000: mostrar o endereço da Praça da Sé, em São Paulo/SP.
- Durante a consulta: mostrar carregamento e desabilitar o campo e os dois botões.
- Consultar 00000000: mostrar CEP não encontrado e liberar os controles.
- Simular falta de conexão: mostrar mensagem de falha e liberar os controles.
- Após um resultado ou erro, clicar em “Nova consulta”: limpar campo, resultado e mensagens, mantendo o foco no campo.
- Digitar outro CEP e pressionar Enter: consultar sem recarregar a página.
