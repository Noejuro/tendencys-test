import axios from 'axios'

export const actions = {
    GET: ({commit}, data) => {
        return new Promise((resolve, reject) => {
          axios.get('https://eshop-deve.herokuapp.com/api/v2/' + data.url, { headers: data.headers })
          .then(response => {
              resolve(response);
              commit
          }).catch(err => { reject(err);})
        })
    },
  }