<template>
    <div class="portfolio-item">    
        <div class="image" @mouseover="colorizeImage" @mouseleave="resetImage">
            <img :src="image" alt="" :style="{ filter: isColorized ? 'grayscale(0%)' : 'grayscale(100%)' }" />
        </div>
        <div class="hover-items">
            <div v-text="title" />
            <div class="project-desc" v-text="description" />
            <ProjectButton :link="link" :icon="icon" /> 
        </div>
    </div>
    <span v-for="(language, key, index) in languages" :key="key">
        <img :src="language" :alt="key" v-if="language.includes('/img/')" :style="{ paddingTop: '5px', width: '30px', height: '30px', color: 'white' }" />
        <v-icon v-else>{{ language}}</v-icon>
        <template v-if="index !== Object.keys(languages).length - 1">, </template>
    </span>
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
