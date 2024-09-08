<template>
	<section class="section sec5 active" id="details">
		<div class="gradient-box-top"></div>
		<div class="gradient-box-bottom"></div>
		<div class="history">
			<button class="back-button" @click="goBack()">Projects</button>
			<v-icon class="chevron">mdi-chevron-right</v-icon>
			<p class="history-title">{{ projectData.title }}</p>
		</div>
		<Spinner v-if="loading" />
		<div class="project-data" v-else>
			<div class="slider">
				<ImageSlider :images="images" />
			</div>
			<h2>{{ projectData.title }}</h2>
			<p>{{ projectData.detailedDescription }}</p>
			<div class="details-panel">
				<div class="details">
					<h3>
						<v-icon class="title-icon">mdi mdi-devices</v-icon
						>Platform
					</h3>
					<p>
						This application was made for
						<span class="platform">{{ projectData.platform }}</span
						>.
					</p>
				</div>
				<div class="details">
					<h3>
						<v-icon class="title-icon">mdi mdi-file-code</v-icon
						>Built with
					</h3>
					<span>
						<p>{{ parsedLanguages }}</p>
					</span>
				</div>
				<div class="details">
					<h3>
						<v-icon class="title-icon">mdi-git</v-icon>Source code
					</h3>
					<p v-if="projectData.sourceCode === null">N/A</p>
					<a
						:href="projectData.sourceCode"
						target="_blank"
						class="project-link"
						v-else
					>
						<p>{{ projectData.sourceCode }}</p>
					</a>
				</div>
				<div class="details">
					<h3>
						<v-icon class="title-icon">mdi-open-in-new</v-icon
						>Deployed on
					</h3>
					<p v-if="projectData.link === ''">N/A</p>
					<a
						:href="projectData.link"
						target="_blank"
						class="project-link"
						v-else
					>
						<p>{{ projectData.link }}</p>
					</a>
				</div>
			</div>
		</div>
		<Toast
			:type="toast.type"
			:message="toast.message"
			:duration="toast.duration"
			:icon="toast.icon"
			v-if="toast.visible"
		/>
	</section>
</template>

<script>
import Spinner from "../../components/ui/Spinner.vue";
import ImageSlider from "../../components/ImageSlider.vue";
import Toast from "../../components/ui/Toast.vue";
import router from "../../router/router";
import axios from "axios";
import { showToast } from "../../utils/toast";

export default {
	props: {
		id: String,
	},
	data() {
		return {
			loading: true,
			projectData: {},
			parsedLanguages: "",
			images: {},
			toast: {
				type: "",
				message: "",
				duration: 3000,
				visible: false,
				icon: "",
			},
		};
	},
	components: {
		Spinner,
		ImageSlider,
		Toast,
	},
	methods: {
		async fetchProjectDetails() {
			try {
				const response = await axios.get(
					`https://portfolio-service-1j6y.onrender.com/api/Project/${this.id}`,
				);
				this.projectData = response.data.data;
				let parsedImages = JSON.parse(this.projectData.imageNames);
				const imagesLength = Object.keys(parsedImages).length;
				if (imagesLength < 4) {
					for (let i = imagesLength + 1; i <= 4; i++) {
						let index = `img${i}`;
						parsedImages[index] = parsedImages.img1;
					}
				}
				this.images = parsedImages;
				this.parseLanguages();
			} catch (error) {
				console.error("Error fetching project:", error);
				this.showToast("error", error.message, "mdi-alert-outline");
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
				this.parsedLanguages = Object.keys(prasedJson).join(", ");
			} catch (error) {
				console.error("Error parsing languages:", error);
			}
		},
		showToast(type, message, icon) {
			this.toast = showToast(type, message, 3000, icon);
		},
	},
	mounted() {
		this.fetchProjectDetails();
	},
};
</script>

<style scoped>
.slider {
	align-items: center;
	justify-items: center;
	width: 750px;
	height: 550px;
	margin-bottom: 50px;
}
@media (max-width: 768px) {
	.slider {
		width: 300px;
		height: 200px;
	}
}
.history {
	display: flex;
	align-items: center;
	justify-content: left;
	margin-bottom: 20px;
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
@media (max-width: 768px) {
	.details-panel {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 50px;
	}
}
.project-link,
.project-link:hover,
.project-link:focus {
	background-color: transparent;
	text-decoration: none;
}

.details {
	justify-content: center;
	text-align: center;
	justify-items: center;
	align-items: center;
}
</style>
