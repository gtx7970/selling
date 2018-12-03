import axios from 'axios'

const ERROR_OK = 0

export const get = url => params => {
  return axios.get(url, { params })
    .then(res => {
      console.log(res)
      const { errno, data } = res.data
      if (errno === ERROR_OK) {
        return data
      }
    })
    .catch(() => {})
}
