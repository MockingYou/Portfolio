<template>
    <!-- <div v-for="project in projects" class="portfolio-item"> -->
    <div class="portfolio-item">    
        <div class="image">
            <img v-bind:src="'../img/' + image" alt="" />
        </div>
        <div class="hover-items">
            <div
                v-text="title"
            />
            <div class="project-desc"
                v-text="description"
            />
            <ProjectButton :link="link" :icon="icon" /> 
        </div>
    </div>
</template>

<script>
import ProjectButton from './ProjectButton.vue'

export default {
    name: 'Project',
    components: {
        ProjectButton
    },
    props: {
        image:  String,
        title: String,
        description: String,
        link:  String,
        icon: String
    },
}
</script>