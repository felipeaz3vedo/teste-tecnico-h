# Challenge by [Hubbi](https://app.hubbi.app/)

<img src="https://github.com/felipeaz3vedo/teste-tecnico-hubbi/assets/107761789/a03b02c9-b7d2-497e-a4d4-0a53655e7ac4" width="100%">

&nbsp;

Aplicação full stack que tem como objetivo principal (1) receber um arquivo txt contendo transações financeiras, (2) validar se conteúdo desse arquivo está no padrão do modelo posteriormente fornecido e exibir as transações em tela. Além disso, o usuário é capaz de filtrar as transações pelo vendedor e ver o saldo total do respectivo vendedor.

&nbsp;

## Requisitos funcionais

- [x] Ter uma tela (via formulário) para fazer o upload do arquivo
- [x] Fazer o parsing do arquivo recebido, normalizar os dados e armazená-los em um banco de dados relacional, seguindo as definições de interpretação do arquivo
- [x] Exibir a lista das transações de produtos importadas por produtor/afiliado,com um totalizador do valor das transações realizadas
- [x] Fazer tratamento de erros no backend, e reportar mensagens de erro amigáveisno frontend.

&nbsp;

> **Tratei o produtor/afiliado apenas como vendedor pois não há esse tipo de detalhe no modelo de arquivo fornecido**

&nbsp;

## Requisitos não-funcionais

- [x] A aplicação deve ser simples de configurar e rodar, compatível com ambiente Unix. Você deve utilizar apenas bibliotecas gratuitas ou livres.
- [x] Utilize docker para os diferentes serviços que compõe a aplicação para que funcione facilmente fora do seu ambiente pessoal.
- [x] Use qualquer banco de dados relacional.
- [x] Use commits pequenos no Git e escreva uma boa descrição para cada um.
- [x] Faça o código mais legível e limpo possível.
- [x] Escreva o código (nomes e comentários) em inglês. A documentação pode ser em
      português se preferir.

&nbsp;

## Bonus

- [x] Utilizar docker-compose para orquestar os serviços num todo.
- [x] Lidar com autenticação e/ou autorização.

&nbsp;

## 🛠️ Linguagens e tecnologias utilizadas

### Back-end

- [Typescript](https://www.typescriptlang.org/)
- [NestJS](https://nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Postgres](https://www.postgresql.org/)
- [Zod](https://zod.dev/)
- [JWT](https://jwt.io/)

### Front-end

- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Query](https://vitejs.dev/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Zod](https://zod.dev/)
- [Styled Components](https://styled-components.com/)
- [Sonner](https://sonner.emilkowal.ski/)
- [Axios](https://axios-http.com)
- [Lucide](https://lucide.dev/)

&nbsp;

## 🚀 Rodar a aplicação

### Pré-requisitos

- Docker e Docker Compose

&nbsp;

### Etapas

- Clone o repositório

```bash
git clone https://github.com/felipeaz3vedo/teste-tecnico-hubbi.git
```

&nbsp;

- Entre no diretório do projeto

```bash
cd teste-tecnico-hubbi
```

&nbsp;

- Crie um .env tendo como base o arquivo .env.example (para facilitar o processo, deixei todas as variáveis de ambiente preenchidas).

```bash
cp .env.example .env
```

&nbsp;

- Suba os serviços

```bash
docker compose up -d
```

&nbsp;

- Nesse momento a aplicação já está rodando, acesse http://localhost:5173 (porta definida para o front-end).

&nbsp;

- Inicialmente, como você não possui nenhuma conta na aplicação, será necessário fazer um cadastro para acessar a tela de transações. Para isso, clique no **Cadastre-se** (abaixo do botão de login) e cadastre-se normalmente.
