<h1 align="center">
  <img src="https://ik.imagekit.io/ld5kf0ysb/devmagic_Hl4-DJo4q.png">
</h1>

<h1 align="center">Challenge - Developer Backend</h1>

O desafio consiste em construir uma Api Rest que seja capaz de cadastrar, buscar, atualizar e apagar jogadores. Ela deverá ser capaz de consumir a [ Api da riot Game](https://developer.riotgames.com/)  para trazer dados dos jogadores que serão cadastrados em uma base de dados.

<h2>🚀 Tecnologias</h2>
Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Nodejs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Postgres](https://www.postgresql.org/)
- [Typeorm](https://typeorm.io/#/)
- [Axios](https://github.com/axios/axios)
- [Tsyringe](https://www.npmjs.com/package/tsyringe)
- [Docker](https://www.docker.com/)

<h2 id="utilizar"> 👷 Como Utilizar </h2>

🚧 Requerido! Instalar [git](https://git-scm.com/), [docker](https://www.docker.com/), [node](https://nodejs.org/en/) e [yarn](https://yarnpkg.com/) (ou npm).

```bash
# Clone Repositorio
$ git clone https://github.com/dmoura97/devmagic-backendchallenge

# Ir para a pasta do projeto
$ cd devmagic-backendchallenge

# Instalar dependecias
$ yarn

# Inicar aplicação
$ docker-compose up -d
$ yarn typeorm migration:run

# Conectando no banco
Ferramentas beekeeper ou DBeaver
Login: docker
Senha: docker
  - Caso esteja usando o beekeeper criar por default a database com nome de devmagic

# Problemas com a porta 3333
Caso a porta estiver em uso, encerrar a aplicação na qual está em uso, ou se preferir trocar a porta no arquivo docker-compose.yml

# Para visualizar se está rodando
$ docker logs riot -f   
No seu terminal mostrará a seguinte mensagem: "🚀 Server is Running!"
```
<h2 id="rotas">📍 Rotas da aplicação</h2>

Utilizar ferramentas para requisições de API.</br>
- [Insomnia](https://insomnia.rest/download)
- [Postman](https://www.postman.com/)

Antes de realizar as Request, verifique o token na pasta config.
Caso esteja expirado as requisições ocorrerá erro.
Para refresh do seu token acesse: [Api da riot Games](https://developer.riotgames.com/)<br>
Copie e cole onde está o token antigo!

```bash
#Rota para criação de jogador

Possui uma rota POST para cadastrar um JOGADOR.  

Base_url: http://localhost:3333/players

Body:

{
  summonerName: "OldWolfKing"
}

#Rota para Listar todos os jogadores

Possui uma rota GET para listar as informações de todos os jogadores da tabela 

Base_url: http://localhost:3333/players

Response: 

[
  {
    "id": "755200a6-856f-431c-ba00-0dd4336c0d65",
    "nickname": "Praymer",
    "accountId": "GBT7j9o61ksbGwl4_eXRB7CJLcWmnw37TzqU847nmSgjmGk",
    "summonerLevel": "441",
    "profileIconId": "1507",
    "summonerId": "sVzRgxirG3JRqi95ZvuaR36AC1bQRwPKmefZtQGEnWcFng"
  },
  {
    "id": "3312c391-1790-4c55-b0ed-3a229ba39eb6",
    "nickname": "Old Wolf King",
    "accountId": "c9El3eS4s-HAWBSwzmGFamHFqZ0O3me9Fsn9faj9AYk8rm0",
    "summonerLevel": "550",
    "profileIconId": "3534",
    "summonerId": "kKd0c-X5WR22F5QR5wloueIelMdBG63dQsVjlL90Kzc39nc"
  }
]


#Rota para Atualizar dados de um jogador

Possui uma rota PUT para atualizar somente o summonerName e summonerLevel através do jogador através do ID:

Base_url: http://localhost:3333/players/update/:id

Body: 
{
  "summonerName":"OldWolfKingMaster",
  "summonerLevel": 600
}

Response: 
{
    "id": "3312c391-1790-4c55-b0ed-3a229ba39eb6",
    "nickname": "OldWolfKing",
    "accountId": "c9El3eS4s-HAWBSwzmGFamHFqZ0O3me9Fsn9faj9AYk8rm0",
    "summonerLevel": "600",
    "profileIconId": "3534",
    "summonerId": "kKd0c-X5WR22F5QR5wloueIelMdBG63dQsVjlL90Kzc39nc"
}

#Rota para listar dados detalhadamente: Vitórias e derrotas

Possui uma rota GET que além de trazer as informações da tabela, irá trazer as quantidades de vitórias e derrotas de cada jogador

Base_url: http://localhost:3333/players/details/:id

Response: 
{
  "id": "3312c391-1790-4c55-b0ed-3a229ba39eb6",
  "nickname": "Old Wolf King",
  "accountId": "c9El3eS4s-HAWBSwzmGFamHFqZ0O3me9Fsn9faj9AYk8rm0",
  "summonerLevel": "550",
  "profileIconId": "3534",
  "summonerId": "kKd0c-X5WR22F5QR5wloueIelMdBG63dQsVjlL90Kzc39nc",
  "wins": 37,
  "losses": 27
}

#Rota para Deletar jogador.

Possui uma rota DELETE para apagar o jogador através do ID:

Base_url: http://localhost:3333/players/delete/:id

Response: 
{
  "message": "sucessfully deleted"
}
```
<p align="center">Desenvolvido com ❤️ por Danilo Moura.</p>


