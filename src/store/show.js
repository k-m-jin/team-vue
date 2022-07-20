import axios from 'axios'
import store from '.'

const SIGNUP_POINT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup'
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
      detailData: {},
      showDetail: {},
      poster: '',
      price: 0,
    }
  },
  mutations: {
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
    async searchShow({ commit }) {
      const { data } = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/xaWa2EMBXDLRqueWgh9c`,
        method: 'GET',
        headers,
      })
      // console.log(data)
      const data1 = data.title.split(/\/|@/)
      const description = data.description.split(/\/|@/)
      const showDetail = [...data1, ...description]

      commit('setState', { showDetail })

      const detailData = {
        공연명: showDetail[0],
        '공연 시작일': showDetail[1],
        '공연 종료일': showDetail[2],
        런타임: showDetail[3],
        제작사: showDetail[4],
        제작진: showDetail[5],
        공연진: showDetail[6],
        줄거리: showDetail[7],
        공연장: showDetail[8],
        '공연 시간': showDetail[9],
      }

      commit('setState', { detailData })

      const poster = data.photo
      commit('setState', { poster })
      const price = data.price
      commit('setState', { price })
    },
  },
}
