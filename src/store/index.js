import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    projects: [],
    loading: false
  }),
  actions: {
    async fetchProjects() {
      try {
        this.loading = true; // Corrected: Referencing 'loading' with 'this'
        const response = await axios.get('https://portfolio-service-1j6y.onrender.com/api/Project/GetAll');
        const projects = response.data.data;
        this.setProjects(projects);
        this.loading = false; // Corrected: Referencing 'loading' with 'this'
        return projects; 
      } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
      }
    },
    setProjects(projects) {
      this.projects = projects;
    }
  }
});
