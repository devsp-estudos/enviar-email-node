const express = require('express')
const app = express()
const enviarOauth = require('./enviarOauth')
const enviarLoginSenha = require('./enviarLoginSenha')
const { user, ClientID, ClientSecret, RefreshToken, RedirectURL, to } = require('../config/Oauth.json')


// Rotas
app.use(express.static(`${__dirname}/frontend`))

app.use('/', (req, res) => res.sendFile(__dirname + '/frontend/index.html'))

app.post('/enviar', (req, res) => {

    const auth = { user, ClientID, ClientSecret, RefreshToken, RedirectURL }

    const assunto = 'Enviando Email com o Node e Oauth'
    const html = '<h1>Hello World.</h1>'

    const email = { para: to, assunto, html }

    const callback = (msg) => res.send(msg)

    enviarOauth(auth, email, callback)
})


// servindo
const port = 3002
app.listen(port, () => console.log(`Rodando na porta: ${port}`))
