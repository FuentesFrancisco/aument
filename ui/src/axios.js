import axios from 'axios'
//creamos una instancia de axios con una misma base url asi cuando se hace el deploy del backend, unicamente hay que cambiar una url
const Axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL + '/v1'
})

export default Axios
