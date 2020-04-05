const nodemailer = require('nodemailer')


function enviarLoginSenha(auth, email, callback) {

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: auth.email,
            pass: auth.senha
        }
    })

    const mailOptions = {
        from: auth.email,
        to: email.para,
        subject: email.assunto,
        html: email.corpoEmail
    }

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
            callback({ res: false })
        } else {
            console.log(info)
            callback({ res: true })
        }
    })
}

module.exports = enviarLoginSenha
