const express = require('express')
const app = express()


// funcoes de envio 
const enviarOauth = require('./enviarOauth')
const enviarLoginSenha = require('./enviarLoginSenha')

const funEnvio = {
    Oauth: enviarOauth,
    normal: enviarLoginSenha
}


// Rotas
app.use(express.json())
app.use(express.static(`${__dirname}/frontend`))

app.get('/', (req, res) => res.sendFile(__dirname + '/frontend/index.html'))

app.post('/enviar', (req, res) => {

    const { nomeLogin, objAuth, objEmail } = req.body
    
    const callback = (msg) => res.send(msg)

    funEnvio[nomeLogin](objAuth, objEmail, callback)
})


// servindo
const port = 3002
app.listen(port, () => console.log(`> Rodando na porta: ${port}`))
