// Import required modules
require('dotenv').config(); // Loads environment variables from a .env file
const connectDB = require('./db'); // Connect to the MongoDB database
const express = require('express'); // Import the Express.js framework
const userRoutes = require('./routes/user'); // Import user-related routes
const User = require("./models/User"); // Import the user model
const axios = require('axios');
const { hashPassword } = require("./passwordUtils"); // Import password hashing utility
const cors = require('cors');

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const Pusher = require('pusher');
const userRoutes = require('./routes/user')
const messageRoutes = require('./routes/message')
const { setupPusher } = require('./services/pusherService')

// Set the port where the server will listen for incoming requests
const port = 4444;

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

// Define a POST route for user registration
app.post("/reg", async (req, res) => {
  // Check if the request body is empty or has no properties
  if (req.body == null || Object.keys(req.body).length === 0) {
    res.status(400).send();
    return;
  }

  // Extract user data from the request body
  const { firstName, lastName, email, password } = req.body;

  // Check if a user with the same email already exists
  const existingUser = await User.findOne({ email });
  if (existingUser != null) {
    res.status(400).json({ "success": false, message: "User already exists" });
    return;
  }

  // Hash the user's password for security
  const user = new User({
    firstName,
    lastName,
    email,
    password: await hashPassword(password),
  });

  // Save the user data in the database
  const userSaved = await user.save();

  // Respond with a success message and the user's ID
  res.status(201).json({
    "success": true,
    "id": userSaved._id,
    "message": "User added successfully"
  });
});

// Middleware: Log information about incoming requests
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
