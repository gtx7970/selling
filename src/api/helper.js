import axios from 'axios'

export const get = url => params => {
  return axios.get(url, { params })
    .then(res => {
      const { errno, data } = res.data
      if (errno === 0) {
        return data
      }
    })
    .catch(() => {})
}
