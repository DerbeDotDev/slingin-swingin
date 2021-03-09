const Place = require('../../models/Place')

async function getAllPlaces(req, res) {
  try {
    const foundPlaces = await Place.find()
    res.json(foundPlaces)
  } catch (error) {
    if (error) throw error
  }
}

module.exports = getAllPlaces