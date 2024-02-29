<template>
	<swiper 
		effect="cube" 
		class="mySwiper" 
		:modules="modules" 
		:loop="true" 
		:grabCursor="true"
		:pagination="true"
		:autoplay="{
			delay: 5000
		}"
		:cubeEffect="{
			shadow: true,
			slideShadow: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		}"
	>
	  	<swiper-slide>
			<img :src="image" alt=""/>
		</swiper-slide>
	  	<swiper-slide>Slide 3</swiper-slide>
	  	<swiper-slide>Slide 5</swiper-slide>
	  	<swiper-slide>Slide 7</swiper-slide>

	</swiper>
</template>
<script>
	import { Swiper, SwiperSlide } from 'swiper/vue';
	import { EffectCube, Pagination, Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import 'swiper/css/effect-cube'
	import 'swiper/css/pagination'
	import 'swiper/css/autoplay'
  
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
		  		modules: [EffectCube, Pagination, Autoplay],
			};
	  	},
	};
</script>
  
<style scoped>
.swiper {
  width: 100%;
  height: 100%;
  overflow: visible;
}
/* .swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
} */
.swiper-slide img {
  /* display: block; */
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>