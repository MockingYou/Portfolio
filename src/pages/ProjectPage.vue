<template>
    <section class="section sec3 active" id="portfolio">
        <div class="main-title">
            <h2>My <span>Projects</span></h2>
        </div>
        <p class="port-text">
            Here are some of my projects that I've done in various programming languages.
        </p>
        <div class="portfolios">
            <div class="portfolio-item"  v-for="project in projects">
                <Project :image="project.image" :title="project.title" :description="project.description" :link="project.link" :icon="project.icon" />
            </div>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue'
// import ProjectButton from './ProjectButton.vue'

export default {
    components: {
        Project
    },
     data() {
        return {
            projects: [
                {
                    image: 'topdownshooter.png',
                    title: 'Top down Shooter',
                    description: 'A top down survival game with endless waves of enemies, health pick-ups, enemy death tracker, made using Unreal Engine 4.',
                    link: 'https://drive.google.com/file/d/1lAzIIH8XKS9D7oA935C9dmz23MLHUnQC/view?usp=share_link',
                    icon: 'mdi-google-drive',
                },
                {
                    image: 'quiz.png',
                    title: 'Simple Quiz',
                    description: 'A quiz with 5 general knowledge questions, that are provided by an API that is available on opentdb.com.',
                    link: 'https://drive.google.com/drive/folders/1K4R17y3RalNpESwAOOeHG9F_gO-5KYao?usp=sharing',
                    icon: 'mdi-github',
                },
                {
                    image: 'chromeextension.png',
                    title: 'Chrome Extension',
                    description: 'An extension for Chrome that helps you save links and tabs to the local storage.',
                    link: 'https://drive.google.com/drive/folders/1K4R17y3RalNpESwAOOeHG9F_gO-5KYao?usp=sharing',
                    icon: 'mdi-github',
                },
                {
                    image: 'pomodoro.png',
                    title: 'Pomodoro Clock',
                    description: 'A timer that breaks work into intervals separated by short breaks that can be changed by the user.',
                    link: 'https://drive.google.com/drive/folders/1K4R17y3RalNpESwAOOeHG9F_gO-5KYao?usp=sharing',
                    icon: 'mdi-codepen',
                },
                {
                    image: 'tenzies.png',
                    title: 'Tenzies game',
                    description: '',
                    link: 'https://github.com/MockingYou/tenzies',
                    icon: 'mdi-github',
                },
                {
                    image: 'pinball.png',
                    title: 'Pinball',
                    description: 'A pinball game made using Unreal Engine 4. Implemented a menu with a high score entry, the HUD and simple interactions between objects.',
                    link: 'https://drive.google.com/drive/folders/1cv1TMDq81uLkgTdT8NXjZlSVTPcRyEwm?usp=sharing',
                    icon: 'mdi-google-drive',
                },
                {
                    image: 'calculator.png',
                    title: 'JavaScript Calculator',
                    description: 'A simple calculator made using React Hooks.',
                    link: 'https://codepen.io/vladm13/pen/MWoPpjw',
                    icon: 'mdi-codepen',
                },
                {
                    icon: mdi-firebase
                }
            ]
        };
    },
}
</script>