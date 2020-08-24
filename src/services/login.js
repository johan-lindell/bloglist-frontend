import axios from 'axios'
const baseUrl = '/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

const getUsers = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export default { login, getUsers }