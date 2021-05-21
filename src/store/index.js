import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    user: localStorage.getItem('user') || null,
    notify: {
      text: 'Error',
      type: 'danger'
    },
    toast: null
  },
  mutations: {
    auth (state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    logout (state) {
      state.token = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    setUser (state, user) {
      state.user = user
      localStorage.setItem('user', user)
    },
    setToast (state, toast) {
      state.toast = toast
    },
    notify (state, payload) {
      state.notify = payload
      state.toast.show()
    }
  },
  getters: {
    isAuthenticated: state => !!state.token,
    currentUser: state => JSON.parse(state.user)
  }
})

export default store