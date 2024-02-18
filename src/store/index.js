// store/index.js
import { defineStore } from 'pinia'; 

export const useStore = defineStore({
  id: 'main', 
  state: () => ({
    projects: []
  }),
  actions: {
    async fetchProjects() {
      try {
        const response = await fetch('http://localhost:5027/api/Project/GetAll');
        const data = await response.json();
        this.projects = data.data;
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
  }
});
