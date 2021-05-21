import Vue from 'vue'
import axios from 'axios'
import store from '../store'

const baseURL = 'http://localhost:3000'

const instance = axios.create({
  baseURL,
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
})

instance.interceptors.request.use(response => {
    const token = localStorage.getItem('token');

    if (token) {
      response.headers.common['Authorization'] = `Bearer ${ token }`
      store.commit('auth', token)
    }

    return response
  }
);

instance.interceptors.response.use({}, (err) => {
  if (err.response.status === 401) {
    store.commit('logout')
  }

  console.log(err.response.statusText);
})

Vue.prototype.$http = instance
