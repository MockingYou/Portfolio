<template>
    <div class="portfolio-item">
      <div class="image" @mouseover="colorizeImage" @mouseleave="resetImage">
        <img :src="image" alt="" :style="{ filter: isColorized ? 'grayscale(0%)' : 'grayscale(100%)' }" />
      </div>
      <div class="hover-items" @mouseover="colorizeImage" @mouseleave="resetImage" >
        <div v-text="title" />
        <div class="project-desc" v-text="description" />
        <ProjectButton :link="link" :icon="icon" />
      </div>
    </div>
    <div style="display: flex; align-items: center;">
  <span v-for="(language, key, index) in languages" :key="key">
    <div v-if="language.includes('/img/')" style="display: inline-block; margin-right: 5px;">
      <img :src="language" :alt="key" :style="{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)', marginTop: '10px', marginLeft: '3px' }" />
    </div>
    <div v-else style="display: inline-block; margin-right: 5px;">
      <v-icon>{{ language }}</v-icon>
    </div>
    <template v-if="index !== Object.keys(languages).length - 1">, </template>
  </span>
</div>

  </template>
  

<script>
import ProjectButton from './ProjectButton.vue';

export default {
    name: 'Project',
    components: {
        ProjectButton
    },
    props: {    
        image: String,
        title: String,
        description: String,
        link: String,
        icon: String,
        languages: Object
    },
    data() {
        return {
            isColorized: false
        };
    },
    methods: {
        colorizeImage() {
            this.isColorized = true;
        },
        resetImage() {
            this.isColorized = false;
        }
    }
};
</script>

<style scoped>
.portfolio-item .image {
    position: relative;
    overflow: hidden;
}

.portfolio-item .image img {
    transition: filter 0.5s ease;
}

.portfolio-item .image:hover img {
    filter: grayscale(0%);
}
</style>
