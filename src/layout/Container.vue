<template>
<div class="body">
  <Detail/>
  <Poster/>
  <Ticketing/>
  <!-- <button class="btn">예매하기</button> -->
  <!-- <button @click="searchShows">목록조회</button>
  <button @click="searchShow">상세조회</button> -->
  <!-- <div v-for="i in show" :key="i">{{i}}</div> -->

</div>
</template>
<script>
import axios from 'axios';

import Poster from '../components/Poster.vue'
import Detail from '../components/Detail.vue'
import Ticketing from '../components/Ticketing.vue'

import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import 'swiper/css';

export default {
  data(){
    return {
      show: [],      
    }
  },
  components: {
    Poster,
    Detail,
    Ticketing,
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
  methods: {
    async searchShows() {
      const headers = {
        "content-type": "application/json",
        "apikey": "FcKdtJs202204",
        "username": "TeamTwo",
        "masterKey": true,
      }
      const res = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products`,
        method: 'GET',
        headers
      });  
      console.log(res)
    },
    async searchShow() {
      const headers = {
        "content-type": "application/json",
        "apikey": "FcKdtJs202204",
        "username": "TeamTwo",
        "masterKey": true,
      }
      const {data} = await axios({
        url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/W8efPC45IvQwtpgSSrHL`,
        method: 'GET',
        headers
      });  
      console.log(data)
      this.show = data

      this.splitDetail(data)
    },
    splitDetail(data) {
      const detail = data.title.split(/\/|@/)
      console.log(detail)
      const detail2 = data.description.split('@')
      console.log(detail2)
      const detail3 = [...detail, ...detail2]
      console.log(detail3)
      this.show = detail3
      // for (let i = 0; i< detail.length; i += 1) {
      //   this.show[i] = detail[i]
      // }
      
    }
  },
}
</script>

<style lang="scss" scoped>
.body {
  width: 100vw;
  height: 100vh;
  background-color: #444;
  color: aliceblue;
  display: flex;
  justify-content: space-around; 
  align-items: center;
  position: relative;
  overflow: auto;
  .btn {
    position: absolute;
    right: 0;
    background-color: #444;
  }
  .show {
    width: 200px;
    height: 200px;
    color: aliceblue;
  }
}
</style>