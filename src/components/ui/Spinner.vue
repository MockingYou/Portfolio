<template>
    <div class="fixed inset-0 flex items-center justify-center bg-gray-100/50 p-4">
      <div class="spinner"></div>
      <p class="loading-text">Loading...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Spinner'
  }
  </script>
  
  <style scoped>
  .fixed {
    display: flex;
    justify-content: space-between;
  }
  
  .spinner {
    border: 2px solid #ccc;
    border-top: 2px solid transparent;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite;
  }
  
  .loading-text {
    margin-left: 20px; 
    margin-top: 20px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  