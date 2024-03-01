<template>
	<swiper 
		effect="cube" 
		class="mySwiper" 
		:modules="modules" 
		:loop="true" 
		:grabCursor="true"
		:pagination="{
			clickable: true
		}"
		:autoplay="{
			delay: 3500
		}"
		:cubeEffect="{
			shadow: true,
			slideShadow: true,
			shadowOffset: 20,
			shadowScale: 0.94,
		}"
	>
	  	<swiper-slide v-for="image in images">
			<img :src="image" alt=""/>
		</swiper-slide>
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
        	images: Object
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
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.swiper-slide.aspect-ratio {
  position: relative;
  overflow: hidden;
}
</style>