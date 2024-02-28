<template>
    <div class="body">
        <div class="history">
            <button class="back-button" @click="goBack()">Projects</button>
            <v-icon class="chevron">mdi-chevron-right</v-icon>
            <p class="history-title">{{ projectData.title }}</p>
        </div>
        <Spinner v-if="loading" />
        <div class="project-data" v-else>
            <div class="slider">
                <ImageSlider :image="projectData.imageName" />
            </div>
            <h2>{{ projectData.title }}</h2>
            <p>{{ projectData.description }}</p>
            <div class="details-panel">
                <div class="details">
                    <h3> <v-icon class="title-icon">mdi mdi-devices</v-icon> Made for</h3>    
                </div>
                <div class="details">
                    <h3> <v-icon class="title-icon">mdi mdi-file-code</v-icon> Built with </h3>
                    <span>
                        <p>{{ parsedLanguages }}</p>
                    </span>
                </div>
                <div class="details">
                    <h3> <v-icon class="title-icon">mdi-git</v-icon> Source code</h3>
                </div>
                <div class="details">
                    <h3> <v-icon class="title-icon">mdi-open-in-new</v-icon> Deployed on</h3>
                    <a :href="projectData.link" target="_blank" class="project-link">
                        <p>{{ projectData.link }}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Spinner from "../../components/ui/Spinner.vue";
import ImageSlider from "../../components/ImageSlider.vue";
import router from "../../router/router";
import axios from "axios";

export default {
    props: {
        id: String,
    },
    data() {
        return {
            loading: true,
            projectData: {},
            parsedLanguages: "",
        };
    },
    components: {
        Spinner,
        ImageSlider,
    },
    methods: {
        async fetchProjectDetails() {
            try {
                const response = await axios.get(
                    `https://portfolio-service-1j6y.onrender.com/api/Project/${this.id}`
                );
                this.projectData = response.data.data;
                this.parseLanguages();
            } catch (error) {
                console.error("Error fetching project:", error);
            } finally {
                this.loading = false;
            }
        },
        goBack() {
            router.push({ path: "/projects" });
        },
        parseLanguages() {
            try {
                let prasedJson = JSON.parse(this.projectData.languages);
                this.parsedLanguages = Object.keys(prasedJson).join(", ")
            } catch (error) {
                console.error("Error parsing languages:", error);
            }
        },
    },
    mounted() {
        this.fetchProjectDetails();
    },
};
</script>

<style scoped>
.body {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
    margin-top: 100px;
}

.slider {
    align-items: center;
    justify-items: center;
    width: 600px;
    height: 600px;
    margin-bottom: 50px;
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
    justify-content: left;
    margin-bottom: 20px;
}

.history p {
    color: #039be5;
    padding: 10px;
    font-weight: bold;
}

.chevron {
    color: white;
}

.project-data {
    display: flex;
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    text-align: center;
}

.project-data p {
    margin-bottom: 50px;
}
.details-panel {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: center;
}
.project-link {
    text-decoration: none;
}
.project-link:hover,
.project-link:focus ,
.project-link:active {
    background-color: unset !important;
    text-decoration: none !important;
    outline: none !important;
    color:#039be5;
}
.title-icon {
    color:#039be5;
    font-size: 30px;
    margin-right: 10px;
}
.details {
    justify-content: center;
    text-align: center;
    justify-items: center;
    align-items: center; 

}
</style>
