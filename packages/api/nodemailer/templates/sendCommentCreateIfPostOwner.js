async function sendCommentCreateIfPostOwner(transporter, post, user) {
  try {
    const response = await transporter.sendMail({
      from: 'NOIZE <noreply@noize.dev>',
      to: user.email,
      subject: '[noize.dev] News in the forum!',
      html: `
        <p>Hi ${user.username},</p>
        <p>There are new activities on your post. Have a look again.</p>
        <p><a href="${process.env.CLIENT_URL}/post/${post.shortId}/${post.urlSlug}">${process.env.CLIENT_URL}/post/${post.shortId}/${post.urlSlug}<a/></p>
        <p>Thanks,<br>your noize Team.</p>
        <p><a href="${process.env.CLIENT_URL}/dashboard/settings">You don't want to receive any more emails or change your email settings?</a></p>
      `
    })

    console.log({ ...response, email: user.email }) // eslint-disable-line no-console
  } catch (error) {
    if (error) console.log(error) // eslint-disable-line no-console
  }
}

module.exports = sendCommentCreateIfPostOwner