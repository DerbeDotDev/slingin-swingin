async function sendConfirmation(transporter, signedUpUser, isActiveToken) {
  try {
    const response = await transporter.sendMail({
      from: 'BRAND <noreply@brand.dev>',
      to: signedUpUser.email,
      subject: 'Please confirm your email address',
      html: `
        <p>Hello ${signedUpUser.name},</p>
        <p>welcome to brand! In order to get started, you need to confirm your email address.</p>
        <p><a href="${process.env.CLIENT_URL}/confirm-email?token=${isActiveToken}">${process.env.CLIENT_URL}/confirm-email?token=${isActiveToken}</a></p>
        <p>Thanks!<br>Your Brand-Team</p>
      `
    })

    console.log({ ...response, email: signedUpUser.email }) // eslint-disable-line no-console
  } catch (error) {
    if (error) console.log(error) // eslint-disable-line no-console
  }
}

module.exports = sendConfirmation
