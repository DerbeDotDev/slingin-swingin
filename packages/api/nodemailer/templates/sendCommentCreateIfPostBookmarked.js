async function sendCommentCreateIfPostBookmarked(transporter, post, user) {
  try {
    const response = await transporter.sendMail({
      from: 'Sevier Dirt Slingin and Swingin',
      to: user.email,
      subject: 'News in the forum',
      html: `
        <p>Hello ${user.name},</p>
        <p>There are new activities on a post that you have marked as a bookmark. Have a look again.</p>
        <p><a href="${process.env.CLIENT_URL}/post/${post._id}">${process.env.CLIENT_URL}/post/${post._id}<a/></p>
        <p>Thanks!<br>Your Sevier Dirt Slingin and Swingin-Team</p>
        <p><a href="${process.env.CLIENT_URL}/account-settings">You don't want to receive any more emails or change your email settings?</a></p>
      `
    })

    console.log({ ...response, email: user.email }) // eslint-disable-line no-console
  } catch (error) {
    if (error) console.log(error) // eslint-disable-line no-console
  }
}

module.exports = sendCommentCreateIfPostBookmarked
