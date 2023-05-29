const express = require('express');
const app = express();
const port = 5000;
const nodemailer = require('nodemailer');
const config = require('./config');
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());
app.use(express.json());


app.get('/send-email', async (req, res) => {
  const name = req.query.name;
  const email = req.query.email;
  const subject = req.query.subject;
  const message = req.query.message;
  console.log(email)
  try {
    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port:587,
      service: config.emailServiceProvider,
      auth: {
        user: config.emailUsername,
        pass: config.emailPassword
      }
    });

    // Send mail with defined transport object
    await transporter.sendMail({
      from: `${name} ${email}`,
      to: config.emailUsername,
      subject: subject,
      text: message + '\n' + email,
    });

    console.log('Email sent successfully');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });

