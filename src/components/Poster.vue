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
        <img :src="poster" alt="상세이미지" class="poster">
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
    },
    //자동 스크롤
    scrollTable() {
      const wrapper = document.querySelector(".img");
      console.log('스크롤')
      setInterval(() => {
        wrapper.scrollTop = wrapper.scrollTop + 1;
             // console.log(wrapper.scrollTop)
          // console.log('scrollHeight',wrapper.scrollHeight)
          // console.log('offsetHeight',wrapper.offsetHeight)
        if (wrapper.offsetHeight + wrapper.scrollTop >= wrapper.scrollHeight) {
          wrapper.scrollTop = 0;
        }
      }, 100);
    }
          // console.log(wrapper.scrollTop)
          // console.log('scrollHeight',wrapper.scrollHeight)
          // console.log('offsetHeight',wrapper.offsetHeight)
  },
  created(){
    this.getPoster()
  },
  mounted(){
    this.scrollTable()
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, ],
    };
  },
};
</script>

<style lang="scss" scoped>
$width: 550px;
.swiper-container {
  width: 30vw;
  height: 90vh;
  .img{
    height: inherit;
    overflow-y: scroll;
    scroll-behavior:smooth;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none;
    .img::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    }
    img{
      display: block;
      width: 100%;
    }
  }
  
}

</style>