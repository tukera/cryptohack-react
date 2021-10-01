import axios from 'axios'

class CryptosApi {
  constructor() {
    const storedToken = localStorage.getItem('authToken')

    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: { Authorization: `Bearer ${storedToken}` }
    })
  }

  getAllCryptos() {
    return this.api.get('/')
  }
}

export default CryptosApi
