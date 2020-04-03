const express = require('express')
const nodemailer = require('nodemailer')
const { user, pass, to } = require('../config/user.json')
const app = express()


// Rotas
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/send', (req, res) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: user,
            pass: pass
        }
    })

    const mailOptions = {
        from: user,
        to: to,
        subject: 'Enviando Email usando Node.js',
        html: '<h1>Bem vindo</h1><p>Paragrafo do email!</p>'
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send('Email enviado: ' + info.response)
        }
    })
})


const port = 3002
app.listen(port, () => console.log(`Rodando na porta: ${port}`))
