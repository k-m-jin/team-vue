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
    <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
    ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
    ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
    ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
    ><swiper-slide>Slide 9</swiper-slide>
  </swiper>

</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css/bundle";
// import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
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
}

</style>