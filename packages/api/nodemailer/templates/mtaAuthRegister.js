const sendMail = require('../../utils/sendMail')

function mtaAuthRegister(user) {
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: 'mail@badazz.dev',
    subject: 'Neuer Benutzer!',
    html: `
      <p>Hi Admin,</p>
      <p>es gibt einen neuen Benutzer.</p>
      <p><a href="${process.env.CODEHUSTLA_API_URL}/${user.username}">${process.env.CODEHUSTLA_API_URL}/${user.username}</a></p>
    `
  }

  sendMail(mailOptions)
}

module.exports = mtaAuthRegister
