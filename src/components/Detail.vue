<template>
<div class="box">

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
    <swiper-slide class="swiper-slide" v-for="(detail, key) in details" :key="key">
    <div class="detail-info" >{{key}}</div>
    <div class="detail">{{detail}}</div>
    </swiper-slide>
  </swiper>
      </div>
  
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css/bundle";
// import required modules
import { Autoplay,Pagination } from "swiper";

export default {
  data(){
    return {
      details : {}
    }
  },
  methods: {
    async searchShows() {
      await this.$store.dispatch('show/searchShows')
    },
    async searchShow() {
      await this.$store.dispatch('show/searchShow')
      this.details = this.$store.state.show.detailData
      Object.entries(this.details).map( ([key,value]) => {
        if(!value.trim()) {
          delete this.details[key]
        }
      })
      
      console.log('정보',this.details)
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  created(){
    this.searchShow()
  },
  setup() {
    return {
      modules: [Autoplay,Pagination],
    };
  },
};

</script>

<style lang="scss" scoped>
.swiper-container {
  width: 30vw;
  height:200px;
  .swiper-slide {
    width: 100%;
    display: flex;
    flex-direction: column;
    /* background-color: orange; */
    justify-content: center;
    align-items: center;
    .detail-info{
      font-size: 1rem;
    }
    .detail{
      font-size: 1.3rem;
      font-weight: 500;
      margin: 1rem;
    }
  }
}

</style>