import axios from 'axios'

const rootUrl = `${process.env.ROOT_URL}/search`

export function searchFunc(searchString) {
  return axios.get(`${rootUrl}/${searchString}`)
}
