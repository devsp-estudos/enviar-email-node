const express = require('express')
const app = express()


// Rotas
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/enviar', (req, res) => {
    res.send('rota de envio!')
})


const port = 3002
app.listen(port, () => console.log(`Rodando na porta: ${port}`))
