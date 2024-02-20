<template>
    <section class="section sec3 active" id="portfolio">
        <div class="main-title">
            <h2>My <span>Projects</span></h2>
        </div>
        <p class="port-text">
            Here are some of the projects that I've done in various programming languages.
        </p>
        <div class="portfolios">
            <div class="portfolio-item" v-for="project in projects" :key="project.title">
                <Project :image="project.imageName" :title="project.title" :description="project.description" :link="project.link" :icon="project.icon" :languages="JSON.parse(project.languages)" />
            </div>
        </div>
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import Project from './Project.vue';
import { useStore } from '../store'; 

export default defineComponent({
    components: {
        Project
    },
    setup() {
        const store = useStore(); 
        const projects = store.projects; 
        console.log(projects)
        return {
            projects
        };
    }
});
</script>

<style scoped>
.portfolio-item:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}
</style>
