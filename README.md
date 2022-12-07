
# Cash-API

Essa é uma aplicação onde é possível criar um usuário, fazer login, depositar valores e transferir valores a outros usuários.

## Rodando localmente

Clone o projeto

```bash
  git clone git@github.com:Ivanzmartins/donuts-code-challenge.git
```

Entre no diretório do projeto:

```bash
  cd donuts-code-challenge
```

Suba o MySql container:

```bash
  docker-compose up -d
```

Entre na pasta backEnd:

```bash
  cd backEnd
```

Instale as dependências:

```bash
  npm install
```

Inicie o servidor node:

```bash
  npm run debug
```
Para criar o banco de dados, suas tabelas e populá-las:
```bash
  npx sequelize db:create
  npx sequelize db:migrate
  npx sequelize db:seed:all
```

Vá até a pasta frontEnd e instale as dependências:
```bash
  cd ../frontEnd
  npm install
```
Inicie o servidor frontEnd:
```bash
  npm run dev
```


