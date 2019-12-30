const dotenv = require('dotenv')
const withImages = require('next-images')

dotenv.config()

module.exports = withImages({
  env: {
    CODEHUSTLA_API_URL: process.env.CODEHUSTLA_API_URL
  }
})