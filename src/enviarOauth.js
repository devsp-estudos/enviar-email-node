const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2


function enviarOauth(objAuth, objEmail, callback) {

    try {
        const { email, clientID, clientSecret, refreshToken } = objAuth

        const redirectURL = 'https://developers.google.com/oauthplayground'

        const oauth2Client = new OAuth2(clientID, clientSecret, redirectURL)

        oauth2Client.setCredentials({ refresh_token: refreshToken })
        const accessToken = oauth2Client.getAccessToken()

        const smtpTransport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: email,
                clientId: clientID,
                clientSecret: clientSecret,
                refreshToken: refreshToken,
                accessToken: accessToken
            }
        })

        const mailOptions = {
            from: email,
            to: objEmail.para,
            subject: objEmail.assunto,
            html: objEmail.corpoEmail
        }

        smtpTransport.sendMail(mailOptions, (error, response) => {
            if (error) {
                console.log(error)
                callback({ res: false })
            } else {
                console.log(response)
                callback({ res: true })
            }

            smtpTransport.close()
        })
    } catch (error) {
        console.log('Entrou no catch: ')
        console.log(error)
    }
}

module.exports = enviarOauth
