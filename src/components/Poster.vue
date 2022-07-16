<template>
 <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    
    :modules="modules"
    class="swiper-container"
  >
    <swiper-slide>
      <div class="img">
        <img :src="poster" alt="상세이미지" >
      </div>
    </swiper-slide>
  </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default {
  data(){
    return {
      poster: ''
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    async getPoster(){
      await this.$store.dispatch('show/searchShow')
      this.poster = this.$store.state.show.poster
      console.log('불러와짐',this.poster)
    }
  },
  created(){
    this.getPoster()
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, ],
    };
  },
};
</script>

<style lang="scss">
$width: 550px;
.swiper-container {
  width: 20vw;
  height: 90vh;
  .img {
    img{
      width: 300px;
      /* object-fit: cover;s */
      /* background-size: cover; */
      
    }
  }
}

</style>