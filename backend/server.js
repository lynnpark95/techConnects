//tylerh
require('dotenv').config()

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

  //tylerh
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

app.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'techconnectlamagroup@gmail.com', // your Gmail email address
        pass: 'techConnectPassword1212', // your Gmail password
      },
    });

    // Set up email options
    const mailOptions = {
      from: 'techconnectlamagroup@gmail.com', // sender address
      to: 'techconnectlamagroup@gmail.com', // list of receivers
      subject: 'New Message from Contact Form', // Subject line
      html: `
        <p>Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});