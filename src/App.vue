<template>
  <router-view></router-view>
  <div class="controls">
    <div v-for="button in buttons">
      <base-button @click="selectPage(button)" :class="button.buttonClass" link :to="button.link" >
      <v-icon>
        {{button.icon}}
      </v-icon>
      </base-button>
    </div>
    <!-- <base-button class="control  control-1 active" link to="/" >
      <v-icon>
        mdi-home
      </v-icon>
    </base-button>
    <base-button class="control  control-1 active" link to="/about" >
      <v-icon>
        mdi-account
      </v-icon>
    </base-button>
    <base-button class="control  control-1 active" link to="/projects" >
      <v-icon>
        mdi-briefcase
      </v-icon>
    </base-button>
    <base-button class="control  control-1 active" link to="/contact" >
      <v-icon>
        mdi-email-open
      </v-icon>
    </base-button> -->
  </div>
  <div class="theme-btn">
    <theme-button @click="updateTheme"></theme-button>  
  </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import BaseButton from './components/ui/BaseButton.vue';
import ThemeButton from './components/ui/ThemeButton.vue';
import { RouterView, useRouter } from 'vue-router'
import ProjectPage from './pages/ProjectPage.vue'

import { mdiHome, mdiAccount, mdiBriefcase,mdiEmailOpen } from "@mdi/js";

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
    buttons: [
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
    ]
  }),
  created: function() {

    useRouter().push({ path: '/' })

      this.buttons.forEach(button => {
        if(button.link === this.$route.path ) {
          button.selected = true
          button.buttonClass += ' active-btn'
        }
      })
      

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
    },
    selectPage(button) {
      this.buttons.forEach(button => {
        button.selected = false
        button.buttonClass = 'control  control-1 active'
      })
      button.selected = true
      button.buttonClass += ' active-btn'
    }
  }
}
</script>
