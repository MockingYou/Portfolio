import { defineStore } from 'pinia';
import axios from 'axios';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    projects: []
  }),
  actions: {
    async fetchProjects() {
      try {
        const response = await axios.get('https://portfolio-service-1j6y.onrender.com/api/Project/GetAll');
        const projects = response.data.data;
        console.log(projects)
        this.setProjects(projects);
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
