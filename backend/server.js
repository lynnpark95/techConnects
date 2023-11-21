//Ray
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const Pusher = require('pusher');
const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')
const { setupPusher } = require('./services/pusherService')

// express app
const app = express()

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)
app.use('/api/message', messageRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    setupPusher(mongoose.connection);
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

// Pusher
const pusher = new Pusher({
  appId: "1685414",
  key: "cb78a53cfed82eb19581",
  secret: "c52e331e45f7964616d4",
  cluster: "us3",
  useTLS: true
});

const db = mongoose.connection
  db.once('open', () => {
    console.log('DB Connected to Pusher')
    const msgCollection = db.collection('messages')
    const changeStream = msgCollection.watch()
    changeStream.on('change', (change) => {
      if (change.operationType === 'insert') {
        const messageDetails = change.fullDocument;
        pusher.trigger('messages', 'inserted', {
          name: messageDetails.name,
          message: messageDetails.message,
          timestamp: messageDetails.timestamp,
          received: messageDetails.received,
        });
      } else {
        console.log('Error triggering Pusher')
      }
    })
  })

  //tylerh
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const PORT = 3001;

app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
