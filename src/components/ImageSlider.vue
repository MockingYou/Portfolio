<template>
	<swiper :navigation="true" :modules="modules" class="mySwiper">
	  	<swiper-slide>
			<img :src="image" alt=""/>
		</swiper-slide>
	  	<swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
	  	<swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
	  	<swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
	  	<swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
	</swiper>
</template>
<script>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import { Navigation } from 'swiper/modules';
  
	export default {
		props: {
        	image: String
    	},
	  	components: {
			Swiper,
			SwiperSlide,
	  	},
	  	setup() {
			return {
		  		modules: [Navigation],
			};
	  	},
	};
</script>
  
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>