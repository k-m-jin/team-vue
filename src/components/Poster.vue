<template>
    <div class="container">
      <div class="img">
        <img :src="poster" alt="상세이미지" class="poster">
      </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css/bundle";

// import required modules
import { Autoplay} from "swiper";

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
    },
  },
  created(){
    this.getPoster()
  },
  setup() {
    return {
      modules: [Autoplay ],
    };
  },
};
</script>

<style lang="scss" scoped>
@-webkit-keyframes slide {
  0% {
    transform:translateY(0);
  }
  100% {
   transform:translateY(-70%);
  }
  /* 100% {
   transform:translateY(0);
  } */
}
@keyframes slide {
  0% {
    transform:translateY(0);
  }
  100% {
    transform:translateY(-70%);
  }
  /* 100% {
   transform:translateY(0);
  } */
}

.container {
  width: 30vw;
  height: 90vh;
  .img{
    border-radius: 4px;
    height: inherit;
    scrollbar-width: none;
    overflow-y: scroll;
    scroll-behavior:smooth;
    -ms-overflow-style: none; /* IE and Edge */
    
    &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
    
    }
    img{
      display: block;
      width: 100%;
      animation: slide 30s infinite linear;
      animation-fill-mode: forwards;
      animation-delay: 2s;

      &:hover {
        animation-play-state: paused;
        -webkit-animation-play-state: paused;
      }
    }
  }
  
}

</style>