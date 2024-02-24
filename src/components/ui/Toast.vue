<template>
	<div v-if="visible" :class="[type === 'success' ? 'success' : 'error']">
	  <p><v-icon>{{ icon }}</v-icon>        {{ message }}</p>
	  <button @click="hideToast">Close</button>
	</div>
  </template>
  
  <script>
  export default {
	name: 'Toast',
	props: {
	  type: {
		type: String,
		default: 'success'
	  },
	  message: {
		type: String,
		default: ''
	  },
	  duration: {
		type: Number,
		default: 3000
	  },
	  icon: {
		type: String,
		default: ''
	  }
	},
	data() {
	  return {
		visible: true,
		timeoutId: null 
	  };
	},
	methods: {
	  hideToast() {
		this.visible = false;
	  }
	},
	mounted() {
	  this.timeoutId = setTimeout(() => {
		this.hideToast();
	  }, this.duration);
	},
	beforeUnmount() {
	  clearTimeout(this.timeoutId);
	}
  };
  </script>
  
  <style scoped>
  .success {
	background-color: #4caf50;
	color: white;
  }
  
  .error {
	background-color: #f44336;
	color: white;
  }
  
  div {
	position: fixed;
	bottom: 20px;
	right: 20px;
	padding: 15px;
	border-radius: 10px;
  }
  </style>
  