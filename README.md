# Cashforce | Teste técnico

Projeto como objetivo de estruturar uma aplicação web fullstack, dockerizada, cujo objetivo seja possibilitar que usuários verifiquem os dados das notas fiscais e dos respectivos cedentes.

O diretório raiz é composto por dois sub-diretórios, sendo eles backend e frontend.
Para rodar cada aplicação (backend e frontend) é necessário estar dentro do diretório específico de cada uma delas e seguir os passos:

### Criação do banco de dados e iniciando a aplicação Backend
<summary><strong>Instruções para rodar a aplicação localmente</strong></summary>

1. Primeiramente será necessário criar um arquivo `.env` que tenha as variáveis de ambiente necessárias para que a aplicação acesse seu banco de dados MYSQL.

O arquivo '.env' deve conter o seguinte conteúdo:

```bash
MYSQL_USER=root
MYSQL_PASSWORD=password
MYSQL_DB_NAME=cashforce_v3
MYSQL_HOST=localhost
MYSQL_PORT=3306
API_PORT=3001
```

Onde:
- MYSQL_USER: Nome de usuário do MYSQL. Aqui estamos utilizando o usuário **root** mas, em um ambiente de produção, deve-se utilizar um outro usuário por questões de segurança;
- MYSQL_PASSWORD: A senha do nome de usuário especificado em DB_USERNAME;
- MYSQL_DB_NAME: O nome que irá dar ao banco de dados. Aqui estamos utilizando o **cashforce_v3**, que seu arquivo SQL está na raiz do diretório backend ;
- MYSQL_HOST: O nome do _host_ (computador hospedeiro) no qual o servidor MYSQL está sendo executado. Caso você esteja executando o servidor MYSQL no seu computador local o valor deve ser `127.0.0.1` ou `localhost`;
- MYSQL_PORT: A porta usada pelo servidor MYSQL.
- API_PORT: A porta usada pelo servidor Node da API;

2. Instale as dependências

```bash
npm install
```

3. Execute o arquivo SQL que está na raiz do diratório backend para criar a base de dados no seu servidor MYSQL e popular as tabelas com alguns dados

4. Inicie o servidor da API

```bash
npm run dev
```


### Inicialização do Frontend

1. Instale as dependências

```bash
npm install
```

2. Inicie a aplicação

```bash
npm run serve
```

## INTRUÇÕES PARA RODAR O PROJETO COM DOCKER

1. Primeiramente serão criados os container para o banco de dados, aplicação backend e fontend.
```
❗ATENÇÃO ❗ EM SEU ARQUIVO `.env` O VALOR DA CONSTANTE `MYSQL_HOST` DEVE SER `database` (o container é o hospedeiro) (NOME DO SERVIÇO DADO PARA O DB NO DOCKER-COMPOSE) </br>
```
Rode o comando abaixo na pasta raiz do projeto.

```bash
docker-compose up --build
```
Feito isso as aplicaçãoes já devem estar disponíveis:
- Servidor backend rindando na porta 3001;
- Fontend tondando na porta 8080;
- E o banco de dados na porta 3306.

2. Em seu aplicativo de preferência, como MYSQL Workbench, para visualizar a conexão com o banco de dados insira a senha disponível no docker-compose (que deve ser a mesma do seu arquivo .env) e poderá ver o banco já criado e populado.

[Aplicação Frontend](https://github.com/thalesmsm/cashforce-frontend)
[Aplicação Backend](https://github.com/thalesmsm/cashforce-backend)