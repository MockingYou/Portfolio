module.exports = {
    devServer: {
      proxy: {
        '/send-email': {
          target: 'http://localhost:5000',
          changeOrigin: true
        }
      }
    }
  };
  