<template>
    <section class="section sec3 active" id="portfolio">
        <div class="gradient-box-top"></div>
        <div class="gradient-box-bottom"></div>
        <div>
            <div class="main-title">
                <h2>My <span>Projects</span></h2>
            </div>
            <p class="port-text">
                Here are some of the projects that I've done in various programming languages.
            </p>
            <Spinner v-if="loading"/>
            <div class="portfolios">
                <div class="portfolio-item" v-for="project in projects" :key="project.title" @click="goToProject(project.id)">
                    <Project :image="JSON.parse(project.imageNames).img1" :title="project.title" :description="project.description" :link="project.link" :icon="project.icon" :languages="JSON.parse(project.languages)" />
                </div>
            </div>
        </div>
        <Toast :type="toast.type" :message="toast.message" :duration="toast.duration" :icon="toast.icon" v-if="toast.visible" />
    </section>
</template>

<script>
import { defineComponent } from 'vue';
import Project from './Projects/Project.vue';
import Spinner from '../components/ui/Spinner.vue';
import Toast from '../components/ui/Toast.vue'
import { useStore } from '../store'; 
import { useRouter } from 'vue-router';

export default defineComponent({
    components: {
        Project,
        Spinner,
        Toast
    },
    setup() {
        const store = useStore(); 
        const projects = store.projects; 
        const loading = store.loading;
        const toast = store.toast;
        const router = useRouter();
        const goToProject = (projectId) => {
            router.push({ name: 'projectDetail', params: { id: projectId } });
        };
        return {
            projects,
            loading,
            toast,
            goToProject
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
