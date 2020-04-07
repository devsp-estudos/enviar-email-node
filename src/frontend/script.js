// ------------------------ VARIAVEIS ------------------------ 

const para = document.getElementById('para')
const assunto = document.getElementById('assunto')
const corpoEmail = document.getElementById('corpoEmail')


// ------------------------ GERAR OBJS ------------------------ 

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

function gerarObjDeEnvio() {
    const checkOauth = document.getElementById('logOauth').checked
    const nomeLogin = checkOauth ? 'Oauth' : 'normal'

    const objAuth = checkOauth ? gerarObjOauth() : gerarObjNormal()
    const objEmail = gerarObjEmail()

    return { nomeLogin, objAuth, objEmail }
}


// ------------------------ FUNCOES ------------------------ 

function validarObj(obj) {
    const { objAuth, objEmail } = obj

    const array = Object.keys(objAuth).map(key => (objAuth[key] === '') ? true : false)
    let authEmBranco = array.includes(true)

    const { para, assunto } = objEmail
    const emailEmBranco = (para === '' || assunto === '') ? true : false

    return (!authEmBranco && !emailEmBranco) ? true : false
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

    const objDeEnvio = gerarObjDeEnvio()

    const validar = validarObj(objDeEnvio)

    if (!validar) {
        alert('Preencha todos os Inputs com *')
        return
    }

    post('http://localhost:3002/enviar', objDeEnvio)
        .then((data) => {
            if (data && data.res) alert('E-mail Enviado.')
            else alert('Falha ao enviar o E-mail.')
        })
}
