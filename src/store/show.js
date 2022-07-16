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
    }
  },
  mutations: {
    putInfo(state, payload) {
      state.showDetail = payload
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
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/W8efPC45IvQwtpgSSrHL`,
        method: 'GET',
        headers,
      })
      // console.log(data)
      // commit('putInfo')
      const detail = data.title.split(/\/|@/)
      // console.log(detail)
      const detail2 = data.description.split('@')
      // console.log(detail2)
      const detail3 = [...detail, ...detail2]
      // console.log(detail3)
      commit('putInfo', detail3)
      // console.log('show type', typeof show)
    },
    splitDetail(data) {
      // for (let i = 0; i< detail.length; i += 1) {
      //   this.show[i] = detail[i]
      // }
    },
  },
}
