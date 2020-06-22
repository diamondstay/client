import axios from 'axios'
import * as config from '../config/index'

export default function callApi(endpoint, method = 'get', body) {
  return axios({
    method: method,
    url: `${config.BASE_URL}/${endpoint}`,
    data: body
  }).catch(err => {
    console.log(err)
  })
}
