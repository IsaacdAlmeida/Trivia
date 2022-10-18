# Trivia Game

## Introdução

O projeto consiste em desenvolver uma aplicação em react que simule um jogo de Trivia, nela a pessoa usuária pode colocar seu email e nome, responder as perguntas dentro do tempo e verificar o rank de pontuação. O email é necessário para colocar a imagem da pessoa usuária na aplicação por meio do gravatar.

## Sumário

- [Introdução](#introdução)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Redux](#redux)
- [Testes](#testes)
- [Metodologias Ágeis](#metodologias-ágeis)
- [Aprendizados](#aprendizados)
- [Instruções para utilizar a aplicação](#instruções-para-utilizar-a-aplicação)
- [Preview da Aplicação](#preview-da-aplicação)
- [Histórico de Commits](#histórico-de-commits)

## Tecnologias utilizadas

**Front-End:** JavaScript, React, Redux.

## Redux

O Redux é uma biblioteca que pode ser utilizada em qualquer aplicação Front end que utilize JavaScript (ou JavaScript puro). No caso do projeto utilizamos o Redux com React para gerenciar os dados e fluxo de informações da aplicação, dessa forma a manutenção fica mais fácil devido a estrutura utilizada pelo Redux. Ele é composto de algumas peças: A primeira peça do Redux é o store, esse é o local que armazenamos todo o estado de nossa aplicação, podemos alterar o estado armazenado ou simplesmente ler suas informações por meio de qualquer componente em nossa aplicação. As actions são a segunda peça do Redux, quando temos a intenção de alterar o estado da aplicação (armazenado na store) despachamos uma ação, descrevendo que mudanças serão feitas em nossa store. A terceira peça são os Reducers, o que eles fazem é basicamente pegar a ação despachada e realizar um filtro de acordo com o tipo da ação disparada, realizando uma alteraçao no estado armazenado na store e retornando um novo estado atualizado.

## Testes

Fizemos diversos testes utilizando a react-testing-library, não conseguimos cobrir 100% de nossa aplicação, mas conseguimos cobrir boa parte do código com cobertura de testes.

## Metodologias Ágeis

Os métodos ágeis são uma alternativa à gestão tradicional de projetos. A utilização de metodologias ágeis nesse projeto foi crucial, foi um projeto com diversos requisitos e 5 pessoas trabalhando em grupo, utilizamos o quadro kanban para observar o andamento das tasks que foram distribuídas, definimos as metas e os combinados na primeira reunião e nas daily meetings acompanhamos o andamento do projeto de cada pessoa. Também fizemos pair programming em alguns requisitos.

## Aprendizados

Nosso grupo foi capaz de desenvolver uma aplicação em React que consome uma API de trivia e utilizamos dois endpoints. O primeiro faz um GET request e gerá um token que será utilizado nas próximas requisições e é necessário para guardar a pontuação da pessoa usuária. O segundo endpoint pega as perguntas do banco de dados, também é utilizado uma requisição GET junto com o token gerado na primeira requisição. É importante salientar que cada pergunta tem um tempo para ser respondido, dessa forma, a pontuação do usuário é feita com base na dificuldade da pergunta e com base no tempo restante.

Realizar essa aplicação sem uma ferramenta que gerenciasse o estado de forma mais eficiente demandaria um trabalho muito grande, por isso utilizamos o Redux, dessa forma conseguimos armazenar todo o estado da aplicação de maneira global e ainda conseguimos acessar esse estado em qualquer lugar do código e de forma independente, sem fazer prop drilling.

Também aprendemos a trabalhar em equipe, eu diria que a maior dificuldade desse projeto não foi técnica, mas sim saber como organizar o trabalho em equipe. Diria que trabalhar em equipe foi a parte mais divertida desse projeto, trabalhar com pessoas com pensamentos e soluções diferentes das quais imaginei foi muito proveitoso, pude aprender bastante com meus colegas de equipe.

## Instruções para utilizar a aplicação

Para utilizar a aplicação você precisará ter o [node](https://nodejs.org/en/download/) e [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) instalados.

Após instalar o node e npm, você precisará usar o comando `npm install` para instalar as dependências do repositório.

Você poderá utilizar o comando `npm start` para exibir a página da aplicação.

## Preview da Aplicação

<p align="center">
<img src="./samples/login.png" alt="login"/>
</p>
<p align="center">
Tela de Login
</p>
<hr />

<p align="center">
<img src="./samples/telafoods.png" alt="foods"/>
</p>
<p align="center">
Tela Principal
</p>
<hr />

<p align="center">
<img src="./samples/teladrinks.png" alt="drinks"/>
</p>
<p align="center">
Tela de Drinks
</p>
<hr />

<p align="center">
<img src="./samples/exploreingredients.png" alt="explore"/>
</p>
<p align="center">
Tela de explorar ingredientes
</p>
<hr />

<p align="center">
<img src="./samples/profile.png" alt="profile"/>
</p>
<p align="center">
Tela de Perfil
</p>
<hr />

## Histórico de commits

Você pode verificar todo o histório de commits para saber como a aplicação foi desenvolvida passo a passo, todos eles foram feitos com base no guia de [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), mantendo uma organização e descrição objetiva do que foi feito a cada mudança!
***
  <a href="https://www.linkedin.com/in/isaacalmeidafilho/">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
