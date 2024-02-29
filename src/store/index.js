import { defineStore } from 'pinia';
import axios from 'axios';
import { showToast } from '../utils/toast'; 

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    projects: [],
    loading: false,
    toast: {
        type: '',
        message: '',
        duration: 3000,
        visible: false,
        icon: '',
    },
  }),
  actions: {
    async fetchProjects() {
      try {
        this.loading = true; 
        const response = await axios.get('https://portfolio-service-1j6y.onrender.com/api/Project/GetAll');
        const projects = response.data.data;
        this.setProjects(projects);
        this.loading = false;
        return projects; 
      } catch (error) {
        // console.error('Error fetching projects:', error.response.data.errors.id[0]);
        this.showToast( 'error', 'Error fetching projects. Please try again later.',  'mdi-alert-outline');
        throw error.response.data.errors.id[0];
      }
    },
    setProjects(projects) {
      this.projects = projects;
    },
    showToast(type, message, icon) {
      this.toast = showToast(type, message, 50000, icon);
    },
  }
});
