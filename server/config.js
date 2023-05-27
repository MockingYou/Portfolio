require('dotenv').config();

const config = {
  emailServiceProvider: process.env.EMAIL_SERVICE_PROVIDER,
  emailUsername: process.env.EMAIL_USERNAME,
  emailPassword: process.env.EMAIL_PASSWORD,
};

module.exports = config;