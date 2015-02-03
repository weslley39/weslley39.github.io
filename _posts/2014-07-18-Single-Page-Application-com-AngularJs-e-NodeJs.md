---
layout: post
title: "Single Page Application com NodeJs e AngularJs"
description: ""
language: "pt-br"
---



Bom como prometido, estou aqui para fazer o meu primeiro post verdadeiro, pois o outro, era somente um hello world

Neste post, irei abordar sobre a hiper, mega, blaster, plus advanced linguagem chamada [NodeJs](http://nodejs.org/) em conjunto com [AngularJs](https://angularjs.org/) para construirmos uma Single Page Application (SPA)

<!-- more -->


#Vamos do Principio

##Mas, o que NodeJs ??

Node.js é uma plataforma construída sobre o motor JavaScript do Google Chrome para facilmente construir aplicações de rede rápidas e escaláveis. Node.js usa um modelo de I/O direcionada a evento não bloqueante que o torna leve e eficiente, ideal para aplicaões em tempo real com troca intensa de dados através de dispositivos distribuídos.

##E esse tal de AngularJs ??

O Angular é um framework JavaScript mantido pelo Google e que vem ganhando cada vez mais adeptos para o desenvolvimento de aplicações WEB. Ele se enquadra nos modelos MVC(Model-view-controller), MVP(Model-view-presenter) e MVVM(Model View ViewModel), sendo considerado pelos seus desenvolvedores como um framework MVW (Model-View-Whatever), já que o foco do framework não é conceitos de separaão. AngularJS foi contruído para o desenvolvimento de aplicações espetaculares, como você verá adiante nesse artigo.

Agora que você já sabe do que se trata, mãos a obra:

##Instalando o NodeJs
Como estou usando ambiente de desenvolvimento Unix, sendo um Linux, descreverei os passos seguintes para a instalação do node no mesmo, até porque o node não roda em seus 100% quando em ambiente RUWINDOWS.

começaremos abrindo o terminal (CTRL + ALT + T), e logando como administrador
```bash
$ sudo su
```
depois de digitado o comando e apertado a tecla Enter, o linux irá pedir seu usuario e senha, coloque e aperte enter novamente. Pronto, você esta logado como administrador.

O Ubuntu oferece um sistema de gerenciamento de pacotes, e com ele podemos instalar pacotes pelo terminal, porem a sua lista de referência, ou seja, onde ele vai buscar esses pacotes, pode estar desatualizada, para atualizar devemos digitar no terminal: 
```bash
$ apt-get update
```

Depois de atualizadas as referências, com o comando apt-get seguido de install e o nome do pacote, então, digite:

```bash
$ apt-get install nodejs
```

O node necessita de um gerenciador de pacotes, chamado NPM, para instala-lo, digite:
```bash
$ apt-get install npm
```

Para ter certeza que o Node esta instalado:


```bash
$ nodejs -v
```

Caso ele retorne com o numero da versao, então o Node foi instaldo com Sucesso!!



Vamos a estrutura de nosso projeto:

```
Anguarl-SPA/
├── public/
│   ├── app/
│   ├── controllers/
│   └── js/
├── views/
│   └── *
│
```

Depois de criar todas as pastas, parte chata, vamos para a parte legal da coisa, vamos criar nosso arquivo de package, para quando precisarmos rodar o projeto em outro lugar, ou mesmo em outra máquina o node já instale todas as referências necessárias.

```bash
  nome do arquivo: package.json
  
  {
  "name": "angular-SPA", //Nome do Projeto
  "version": "0.0.1", // Versão do Projeto
  "description": "A Single Page Applicatioion build with AngularJs", // Descrição do Projeto
  "author": "Weslley Neri", //Nome do autor do Projeto
  "engines": { //Motores para a execução do projeto
    "node": "0.10.24",
    "npm": "1.2.30"
  },
  "dependencies": { //Depencias que o projeto tem para funcionar corretamente, como bibliotecas e etc
    "body-parser": "^1.4.3",
    "express": "^4.6.1"
  }
}
```

depois de criado o arquivo, o node irá saber o que deve instalar e ter para rodar o projeto sem erros, então, estando dentro da pasta do package.json, digite:

```bash
$ npm install
```

Este processo poderá demorar um pouco, dependendo da sua conexão com a internet. Depois de tudo instalado podemos começar a montar nosso código para rodar o servidor do node. vamos por partes.
Se você já vem de alguma outra linguagem, na maioria delas, antes de começar a realmente fazer o seu código devemos, importar todas as bibliotecas/frameworks que iremos usar, no Node não é diferente, fazemos isto chamando a função require e passando como parâmetro o nome da biblioteca/framework, vamos a prática:

```javascript
  var express = require('express');
  var bodyParser = require('body-parser');
```

No código acima, falamos para o nome que iremos utilizar um framework chamado [ExpressJS](http://expressjs.com/), que nada mais é do que um mínimo e flexivel framework para aplicação web, provendo um robusto conjunto de caracteristicas para a criação de uma única ou múlltiplas páginas, também estamos usando o [Body Parser](https://github.com/expressjs/body-parser) que é um middleware para renderizar HTML.


