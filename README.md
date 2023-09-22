# Ant Design 5 + React | AdonisJS + NodeJS
[Link Postman Collection](https://elements.getpostman.com/redirect?entityId=21956516-4516d74a-ee6b-4966-9750-58cc88aba0a3&entityType=collection "Link Postman Collection")

## Sobre o projeto
- App realiza pesquisa pelo nome ou parte do nome do personagem.
- Marca um personagem como favorito.
- Desmarca um personagem como favorito.
- Lista todos os personagens marcados como favorito.

## Tecnologias utilizadas no Front-end

- Ant Design 5
- React
- Yarn
- Vite
- TypeScript
- HTML
- CSS

## Tecnologias utilizadas no Back-end

- AdonisJS
- NodeJS
- MySQL

## Ferramentas utilizadas

- Visual Studio Code
- MySQL Workbench
- Postman
- Git

## Instruções

```bash
# Criar Base de Dados MySQL/MariaDB
CREATE DATABASE swapinodejs;
```

## Como executar o projeto Back-end

```bash
# clonar repositório
git clone https://github.com/renatohvo/adonisjs-antd-nodereact.git

# entrar na pasta do projeto backend
cd backend

# alterar o arquivo .env de acordo com sua conexão MySQL/MariaDB
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_USER=user
MYSQL_PASSWORD=user
MYSQL_DB_NAME=swapinodejs

# baixar os pacotes do projeto
npm install

# executar migrations da base de dados
node ace migration:run

# executar o projeto
node ace serve --watch

# URL/Porta do projeto backend em execução
http://localhost:3333/api

# recurso para baixar base de dados dos nomes dos personagens da API SWAPI
http://localhost:3333/api/personas/seeding
```

## Como executar o projeto Front-end

```bash
# clonar repositório
git clone https://github.com/renatohvo/adonisjs-antd-nodereact.git

# entrar na pasta do projeto frontend
cd frontend

# baixar os pacotes do projeto
npm install

# executar o projeto
yarn dev

# URL/Porta do projeto frontend em execução
http://localhost:3000/
```

## Recursos

```bash
# baixar base de dados dos nomes dos personagens
/api/personas/seeding

# buscar todos os personagens
/api/personas

# buscar todos os personagens por nome ou parte do nome
/api/personas/:name

# buscar todos os personagens marcados como favorito
/api/personas/favorite/:favorite

# marcar personagem como favorito
/api/personas/:id/favorite/:favorite

```

## Autor

Renato Henrique Vasconcelos

https://www.linkedin.com/in/renatohvo/

## 

<div display: inline-block>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" width="100" heigth="100" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" width="80" heigth="80" />
    <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="80" height="80"/>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git" width="80" heigth="80" />
</div>
<div display: inline-block>
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="80" heigth="80" />
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="80" heigth="80" />
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="80" heigth="80" />
</div>
