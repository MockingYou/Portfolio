import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'

import App from './App.vue'
import router from './router'
import BaseButton from './components/ui/BaseButton.vue';

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('base-button', BaseButton);

loadFonts()

app
  .use(vuetify)
  .mount('#app')
