<template>
  <button @click="searchShows">목록조회</button>
  <button @click="searchShow">상세조회</button>
    <swiper
    :direction="'vertical'"
    :pagination="{
      clickable: true,
    }"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="swiper-container"
  >
    <!-- <swiper-slide class="swiper-slide">Slide 1</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 2</swiper-slide>
    <swiper-slide class="swiper-slide">Slide 3</swiper-slide> -->
    <swiper-slide class="swiper-slide" v-for="(item, i) in detail" :key="i" >
    {{item}}
    </swiper-slide>
   
  
  </swiper>
    <!-- <div v-for="i in show" :key="i">
    {{i[i]}} -->
      <!-- <swiper-slide class="swiper-slide">{{i}}</swiper-slide> -->
    <!-- </div> -->
  
  <!-- <div>{{show}}</div> -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css/bundle";

import "swiper/css/navigation";


// import required modules
import { Autoplay,Navigation,Pagination } from "swiper";

export default {
  data(){
    return {
      detail : {}
    }
  },
  methods: {
    async searchShows() {
      await this.$store.dispatch('show/searchShows')
    },
    async searchShow() {
      await this.$store.dispatch('show/searchShow')
      this.detail = this.$store.state.show.showDetail
      console.log(this.detail)
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay,Navigation,Pagination],
    };
  },
};

</script>

<style lang="scss">

.swiper-container {
  width: 20vw;
  height: 90vh;
  /* background-color: olivedrab; */
  .swiper-slide {
    width: 100%;
    display: flex;
    /* background-color: orange; */
    justify-content: center;
    align-items: center;
  }
}

</style>