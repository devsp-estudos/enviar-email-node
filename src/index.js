const express = require('express')
const app = express()
const enviarOauth = require('./enviarOauth')
const enviarLoginSenha = require('./enviarLoginSenha')
const { user, ClientID, ClientSecret, RefreshToken, RedirectURL, to } = require('../config/Oauth.json')


// Rotas
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/enviar', (req, res) => {

    const auth = { user, ClientID, ClientSecret, RefreshToken, RedirectURL }

    const assunto = 'Enviando Email com o Node e Oauth'
    const html = '<h1>Hello World.</h1>'

    const email = { para: to, assunto, html }

    const callback = (msg) => res.send(msg)
    
    enviarOauth(auth, email, callback)
})


const port = 3002
app.listen(port, () => console.log(`Rodando na porta: ${port}`))
