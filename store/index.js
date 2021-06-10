import axios from 'axios'

export const actions = {
    GET: ({commit}, data) => {
        return new Promise((resolve, reject) => {
          axios.get(process.env.tendencys_baseUrl + data.url, { headers: data.headers })
          .then(response => {
              resolve(response);
              commit
          }).catch(err => { reject(err);})
        })
    },
  }