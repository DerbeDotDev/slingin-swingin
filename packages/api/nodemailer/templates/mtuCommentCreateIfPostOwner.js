const sendMail = require('../../utils/sendMail')

function mtuCommentCreateIfPostOwner(post, user) {
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to: user.email,
    subject: '[codehustla] Neuigkeiten im Forum!',
    html: `
      <p>Hi ${user.username},</p>
      <p>Es gibt neue Aktivitäten auf deinem Beitrag. Schau doch mal wieder vorbei.</p>
      <p><a href="${process.env.ROOT_URL}/post/${post.shortId}/${post.urlSlug}">${process.env.ROOT_URL}/post/${post.shortId}/${post.urlSlug}<a/></p>
      <p>Vielen Dank,<br> dein codehustla Team.</p>
      <p>Du möchtest <a href="${process.env.ROOT_URL}/edit-settings">keine weiteren E-Mails</a> mehr erhalten oder deine <a href="${process.env.ROOT_URL}/edit-settings">E-Mail Einstellungen ändern</a>?</p>
    `
  }

  sendMail(mailOptions)
}

module.exports = mtuCommentCreateIfPostOwner
