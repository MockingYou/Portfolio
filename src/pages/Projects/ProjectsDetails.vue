<template>
    <div class="body">
        <div class="history">
            <button class="back-button" @click="goBack()">Projects</button>
            <v-icon class="chevron">mdi-chevron-right</v-icon>
            <p class="history-title">{{ projectData.title }}</p>
        </div>
        <h2>Project Details</h2>
        <Spinner v-if="loading"/>
        <div v-else>
            <div class="image">
                <img :src="projectData.imageName" alt=""/>
            </div>
            <h3>{{ projectData.title }}</h3>
            <p>{{ projectData.description }}</p>
        </div>
    </div>
</template>

<script>
import Spinner from '../../components/ui/Spinner.vue';
import router from '../../router/router'
import axios from 'axios';

export default {
    props: {
        id: String
    },
    data() {
        return {
            loading: true,
            projectData: {}
        };
    },
    components: {
        Spinner
    },
    methods: {
        async fetchProjectDetails() {
            try {
                const response = await axios.get(`https://portfolio-service-1j6y.onrender.com/api/Project/${this.id}`);
                this.projectData = response.data.data;
            } catch (error) {
                console.error('Error fetching project:', error);
            } finally {
                this.loading = false;
            }
        },
        goBack() {
            router.push({path: '/projects'})
        }
    },
    mounted() {
        this.fetchProjectDetails();
    }
};
</script>

<style scoped>
.body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.image img {
    width: 100%;
    height: 300px;
    border-radius: 15px;
}

.back-button {
    color: white;
    cursor: pointer;
    margin-right: 10px;
}

.history {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
}

.history p {
    color: #039BE5;
    padding: 10px;
    font-weight: bold;
}

.chevron {
    color: white;
}
</style>
