<template>
  <router-view></router-view>
  <div class="controls">
    <div v-for="button in buttonsLeft">
      <base-button @click="selectPage(button)" :class="button.buttonClass" link :to="button.link" >
      <v-icon>
        {{button.icon}}
      </v-icon>
      </base-button>
    </div>
   </div>
   <div class="theme-btn">
     <theme-button @click="updateTheme"></theme-button>  
   </div>
  <div class="right-controls">
    <div v-for="button in buttonsRight" :class="button.buttonClass">
      <div class="contact-icon">
        <a :href="button.link" target="_blank">
           <v-icon>{{button.icon}}</v-icon>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import BaseButton from './components/ui/BaseButton.vue';
import ThemeButton from './components/ui/ThemeButton.vue';
import { RouterView, useRouter } from 'vue-router'
import ProjectPage from './pages/ProjectPage.vue'

import { mdiHome, mdiAccount, mdiBriefcase, mdiEmailOpen } from "@mdi/js";

export default {
  data: () => ({
    icons: {
      mdiHome,
      mdiAccount,
      mdiBriefcase ,
      mdiEmailOpen
    },
    isActive: false,
    currentTheme : '',
    buttonsLeft: [
      { 
        link: '/',
        icon: 'mdi-home',
        buttonClass: 'control  control-1 active',
        selected: false
      },
      {
        link: '/about',
        icon: 'mdi-account',
        buttonClass: 'control  control-1 active',
        selected: false
      },
      {
        link: '/projects',
        icon: 'mdi-briefcase',
        buttonClass: 'control  control-1 active',
        selected: false
      },
      {
        link: '/contact',
        icon: 'mdi-email-open',
        buttonClass: 'control  control-1 active',
        selected: false
      },
    ],
    buttonsRight: [
      { 
        link: 'https://www.linkedin.com/in/vlad-george-m-b83a5616b/',
        icon: 'mdi-linkedin',
        buttonClass: 'control  control-1 active',
        selected: false
      },
      {
        link: 'https://codepen.io/vladm13',
        icon: 'mdi-codepen',
        buttonClass: 'control  control-1 active',
        selected: false
      },
      {
        link: 'https://github.com/MockingYou',
        icon: 'mdi-github',
        buttonClass: 'control  control-1 active',
        selected: false
      },
      {
        link: 'https://www.youtube.com/channel/UCv8svFTVTem9lKKaL4nWOmA',
        icon: 'mdi-youtube',
        buttonClass: 'control  control-1 active',
        selected: false
      },
    ]
  }),
  created: function() {
    useRouter().push({ path: '/' })
      this.buttonsLeft.forEach(button => {
        if(button.link === this.$route.path ) {
          button.selected = true
          button.buttonClass += ' active-btn'
        }
      })
      

  },
  mounted() {
      if(localStorage.getItem('theme')) {
        let element = document.body;
        element.classList.toggle('light-mode')
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    }
  },
  components: {
    HomePage,
    BaseButton,
    ProjectPage,
    ThemeButton
  },
  methods: {
    updateTheme() {
        let element = document.body;
        element.classList.toggle('light-mode')
        if(localStorage.getItem('theme')) {
          localStorage.removeItem('theme')
        } else {
          localStorage.setItem('theme', 'light-mode')
        }
    },
    selectPage(button) {
      this.buttonsLeft.forEach(button => {
        button.selected = false
        button.buttonClass = 'control  control-1 active'
      })
      button.selected = true
      button.buttonClass += ' active-btn'
    },
  }
}
</script>
