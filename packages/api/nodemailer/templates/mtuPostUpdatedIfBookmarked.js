const transporter = require('../transporter')
const keys = require('../../config/keys')

module.exports = mtuPostUpdatedIfBookmarked = (post, bookmark) => {
  const mailOptions = {
    from: keys.nodemailerUser,
    to: bookmark.user.email,
    subject: '[codehustla.io] Neuigkeiten im Forum!',
    html: `
        <p>Hi ${bookmark.user.username},</p>
        <p>Soeben wurde ein Beitrag editiert, welchen du als Lesezeichen gespeichert hast. Falls du keine Benachrichtigungen mehr erhalten möchtest, entferne dein Lesezeichen.</p>
        <a href="${process.env.ENV_API}/post/${post.shortId}/${post.urlSlug}"><button>Beitrag anschauen</button><a/>
        <p><a href="${process.env.ENV_API}/post/${post.shortId}/${post.urlSlug}">${process.env.ENV_API}/post/${post.shortId}/${post.urlSlug}<a/></p>
        <p>Vielen Dank,<br> dein codehustla.io Team.</p>
        `
  }
  transporter.sendMail(mailOptions, err => {
    console.log('Message sent!')
  })
}