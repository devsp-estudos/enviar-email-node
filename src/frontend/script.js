// ------------------------ VARIAVEIS ------------------------ 

const para = document.getElementById('para')
const assunto = document.getElementById('assunto')
const corpoEmail = document.getElementById('corpoEmail')


// ------------------------ FUNCOES ------------------------ 

function limpar() {
    para.value = ''
    assunto.value = ''
    corpoEmail.value = ''
    para.focus()
}

function gerarObjNormal() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    return { email, senha }
}

function gerarObjOauth() {
    const email = document.getElementById('emailOauth').value
    const clientID = document.getElementById('clientId').value
    const clientSecret = document.getElementById('clientSecret').value
    const refreshToken = document.getElementById('refreshToken').value

    return { email, clientID, clientSecret, refreshToken }
}

function gerarObjEmail() {
    return {
        para: para.value,
        assunto: assunto.value,
        corpoEmail: corpoEmail.value
    }
}



async function post(url = '', data = {}) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })

        return await response.json()
    } catch (error) {
        return { erro: 'falhou...' }
    }
}

function enviar() {
    const checkOauth = document.getElementById('logOauth').checked
    const nomeLogin = checkOauth ? 'Oauth' : 'normal'

    const objAuth = checkOauth ? gerarObjOauth() : gerarObjNormal()
    const objEmail = gerarObjEmail()

    const objEnviar = { nomeLogin, objAuth, objEmail }

    post('http://localhost:3002/enviar', objEnviar)
        .then((data) => {
            console.log(data)

            if (data && data.res) alert('E-mail Enviado.')
            else alert('Falha ao enviar o E-mail.')
        })
}
