import axios from 'axios'
import store from '.'

const SIGNUP_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup'
const LOGIN_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login'
const LOGOUT_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout'
const EDITUSER_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user'
const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'TeamTwo',
  masterKey: true,
}

export default {
  namespaced: true,

  state: () => {
    return {
      showDetail: {},
      poster: '',
    }
  },
  mutations: {
    putInfo(state, payload) {
      state.showDetail = payload
    },
    putPoster(state, payload) {
      state.poster = payload
    },
    setState(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    },
  },
  actions: {
    async searchShows() {
      const res = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products`,
        method: 'GET',
        headers,
      })
      console.log(res)
    },
    async searchShow({ commit, dispatch }) {
      const { data } = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/EmoE4S9TlLnB3XHdQh7X`,
        method: 'GET',
        headers,
      })
      console.log(data)
      const title = data.title.split(/\/|@/)
      const description = data.description.split('@')
      const showDetail = [...title, ...description]
      commit('setState', { showDetail })
      const poster = data.photo
      commit('setState', { poster })
    },
  },
}
