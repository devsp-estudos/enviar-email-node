# :pushpin: Sumario

1. [Objetivo do Projeto](#dart-objetivo-do-projeto)
2. [Sobre](#page_with_curl-sobre)
3. [Tecnologias Utilizadas](#rocket-tecnologias-utilizadas)
4. [Requisitos](#gear-requisitos)
5. [Rodar o Projeto](#arrow_forward-rodar-o-projeto)
6. [Resultado](#keyboard-resultado)
7. [Redes Sociais](#man_technologist-redes-sociais)

---

## :dart: Objetivo do Projeto

Enviar e-mails através do Gmail usando o Node.js, o projeto fornece duas maneiras de enviar o e-mail.

* Primeira, tornando o Gmail [acessivel a apps menos seguros](https://myaccount.google.com/lesssecureapps), como esse que não é verificado.
* Segundo, gerando um acesso atravez do token Oauth2 para acessar a API do Gmail.
* Mais informações em [Sobre](#page_with_curl-sobre)

## :page_with_curl: Sobre

O projeto foi criado como um requisito de um outro projeto privado, precisava fazer o envio de um e-mail pelo Gmail usando o Node.js, já tinha usado o Nodemailer para o envio de e-mail mas nunca com o Gmail, então fui pesquisar. 

Primeiro achei a maneira mais simples de se fazer, mas precisava ativar um recurso de permitir que apps menos seguros acessem o Gmail, era só ativar([Link para ativar](https://myaccount.google.com/lesssecureapps)) e usar o email e a senha para fazer o envio, mas não achei muito seguro colocar isso em produção, fora alguns relatos que em produção esse método não estava funcionando, testei e parti para o próximo método.

Pesquisando achei um [artigo no medium](https://medium.com/@nickroach_50526/sending-emails-with-node-js-using-smtp-gmail-and-oauth2-316fe9c790a1) que ensinava a enviar o e-mail usando um token Oauth2, dessa maneira seria seguro, e funcionaria bem em produção, então segui o artigo, gerei a chave, e fiz o teste do envio.

Com essas duas maneiras de enviar e-mail criadas, resolvi criar um projeto aparte para fazer isso, e depois só acoplei o código necessário dentro do meu projeto principal.

## :rocket: Tecnologias Utilizadas

* [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
* [JS](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)

**Dependências**

* [express](https://expressjs.com/)
* [googleapis](https://www.npmjs.com/package/googleapis)
* [nodemailer](https://nodemailer.com/about/)

## :gear: Requisitos

* [Git](https://git-scm.com/) (Opcional)
* [Node.js](https://nodejs.org/en/)
* [Npm](https://www.npmjs.com/) (É instalado junto com o Node)

## :arrow_forward: Rodar o Projeto

* Primeiro passo, clone o projeto em sua maquina
* Abra a pasta do projeto no terminal
* Instale as dependências com o comando `npm i` 
* Inicie o servidro com o comando `npm start` 
* Abre uma aba no navegar e navegue para http://localhost:3002/

## :keyboard: Resultado

<img src="https://raw.githubusercontent.com/devsp011/enviar-email-node/master/print.png" alt="print" width="700"/>

## :man_technologist: Redes Sociais

* [instagram](https://www.instagram.com/devsp011/)
* [Linkedin](https://www.linkedin.com/in/vitor-sampaio-4532451a7/)
