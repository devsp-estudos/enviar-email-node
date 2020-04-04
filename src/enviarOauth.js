const nodemailer = require("nodemailer")
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2


function enviarOauth(auth, email, callback) {

    const { user, ClientID, ClientSecret, RefreshToken, RedirectURL } = auth

    const oauth2Client = new OAuth2(ClientID, ClientSecret, RedirectURL)

    oauth2Client.setCredentials({ refresh_token: RefreshToken })
    const accessToken = oauth2Client.getAccessToken()

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: user,
            clientId: ClientID,
            clientSecret: ClientSecret,
            refreshToken: RefreshToken,
            accessToken: accessToken
        }
    })

    const mailOptions = {
        from: user,
        to: email.para,
        subject: email.assunto,
        html: email.html
    }

    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? callback(error) : callback(response)
        smtpTransport.close()
    })
}

module.exports = enviarOauth
