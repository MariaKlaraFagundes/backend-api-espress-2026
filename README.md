# Tópicos importantes

revisão da aula passada
- Qual a linguagem de programação utilizada para o nosso Backend?
- O que é Node.js?
- "     " NPM?
- "     " Express.js?

24.02
- Como mudar o formato de anotação de require(padrão commonjs) para module?
se muda no type do packend.json

- O que é um API?
- O que é HTTP?
- Quais os métodos de requisição HTTP e para que serve cada umas delas?
- GET, POST, PUT, PATCH, DELETE
- Create, Read, Update, Delete (CRUD)
- Extenções usadas : bruno, draw.io

03.03
- para que serve --watch ao rodar o servidor?
- Para que serve o Router do Express?
- o que é o padrão de projeto?
- "                         " MVC?
- Qual é a responsabilidade de cada camada?
- Padrão de projeto (MVC - Model, View, Controller)
- conceitos principais do Modal: regras de negocios e acesso aos dados 3D 
- "                     " Controller: papel de controlar do fluxo de entrada, processamento e de saida
- router - distribui as resposabilidades das funções

10.03
- O que é um ORM? (Mapeamento Objeto-Relacional)
- Qual as vantagens do ORG?
- Qual a vantagem do CLI/PRISMA?
- E possivel criar as tabelas/banco de dados apartir de um modelo?(sim)
- consigo criar um modelo apartir de uma tabela/banco de dados existente?(sim)

- COMANDOS FEITOS NA AULA:
- Abaixar (prisma.oi/docs)
- npm i prisma -D (abrir o mysql workbeanch)
- npm i dotent -D
- npx prisma db push ()
- npx prisma studio ()
- npx prisma generate
- 

- EXTENSÕES
- Prisma - install

modal user {
    id      Int      @id.default(autoincrement())
    avatar  String   @id.VarChar(500)
    name    String   @id.VarChar(255)
    email   String   @unique
    pass    String   @id.VarChar(300)
}

- obs: não precisa decorar isso,pois existe IA que que faz por vc, mas so e necessario caso eu queira me aprofundar.

17.03 (MATERIA NOVA)

- JSON é uma String que representa um objeto do JavaScript
- tenho que mudar sempre para json para objeto e objeto para json
- 