const createJwtToken = require('../../utils/createJwtToken')
const User = require('../../models/User')
const bcrypt = require('bcryptjs')
const validatePasswordChange = require('../../validation/validatePasswordChange')
const isEmpty = require('../../utils/isEmpty')

async function passwordChange(req, res) {
  try {
    const { errors } = validatePasswordChange(req.body)

    if (!isEmpty(errors)) {
      return res.status(400).json(errors)
    }

    const oldPassword = req.body.oldPassword
    const newPassword = req.body.newPassword

    const foundUser = await User.findById(req.body._id)

    if (!foundUser) {
      res.json('User not found')
    } else {
      const isMatch = await bcrypt.compare(oldPassword, foundUser.password)

      if (isMatch) {
        // eslint-disable-next-line
        foundUser.password = newPassword

        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(foundUser.password, salt, async (error, hash) => {
            try {
              if (error) throw error
              foundUser.password = hash
              const savedUser = await foundUser.save()

              const payload = {
                _id: savedUser._id,
                email: savedUser.email,
                username: savedUser.username,
                avatar: savedUser.avatar,
                isVerified: savedUser.isVerified,
                notifications: savedUser.notifications,
                roles: savedUser.roles,
                isOnline: savedUser.isOnline
              }

              const token = await createJwtToken(payload)
              res.json({ message: 'Password changed successfully.', variant: 'success', token })
            } catch (error) {
              if (error) throw error
            }
          })
        })
      } else {
        errors.oldPassword = 'Wrong password'
        return res.status(400).json(errors)
      }
    }
  } catch (error) {
    if (error) throw error
  }
}

module.exports = passwordChange
