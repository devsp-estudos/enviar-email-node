const nodemailer = require('nodemailer')


function enviarLoginSenha(auth, email) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: auth.user,
            pass: auth.pass
        }
    })

    const mailOptions = {
        from: auth.user,
        to: email.para,
        subject: email.assunto,
        html: email.html
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.send(error)
        } else {
            res.send('Email enviado: ' + info.response)
        }
    })
}

module.exports = enviarLoginSenha
