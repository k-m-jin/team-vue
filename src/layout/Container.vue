<template>
<div class="body">
  <Detail/>
  <Poster/>
  <Ticketing/>
  <!-- <button class="btn">예매하기</button> -->

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
}
</style>