const transporter = require('../transporter')
const keys = require('../../config/keys')

module.exports = mtuPostNew = (post, user) => {
  const mailOptions = {
    from: keys.nodemailerUser,
    to: user.email,
    subject: '[codehustla.io] Neuigkeiten im Forum!',
    html: `
    <p>Hi ${user.username},</p>
    <p>Es gibt neue Aktivitäten auf einen Beitrag, bei dem du einen Kommentar hinterlassen hast. Schau doch mal wieder vorbei.</p>
    <p><a href="${process.env.ENV_API}/post/${post.shortId}/${post.urlSlug}">${
      process.env.ENV_API
    }/post/${post.shortId}/${post.urlSlug}<a/></p>
    <p>Vielen Dank,<br> dein codehustla.io Team.</p>

    <p>Du möchtest <a href="${
      process.env.ENV_API
    }/edit-settings">keine weiteren E-Mails</a> mehr erhalten oder deine <a href="${
      process.env.ENV_API
    }/edit-settings">E-Mail Einstellungen ändern</a>?</p>
    `
  }

  transporter.sendMail(mailOptions, err => {
    console.log('Message sent!')
  })
}
