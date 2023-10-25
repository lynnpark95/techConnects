// Import required modules
require('dotenv').config(); // Loads environment variables from a .env file
const connectDB = require('./db'); // Connect to the MongoDB database
const express = require('express'); // Import the Express.js framework
const userRoutes = require('./routes/user'); // Import user-related routes
const User = require("./models/User"); // Import the user model
const axios = require('axios');
const { hashPassword } = require("./passwordUtils"); // Import password hashing utility
const cors = require('cors');

// Create an instance of the Express application
const app = express();

// Set the port where the server will listen for incoming requests
const port = 4444;

// Configure the Express app to parse JSON data in requests
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

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
  console.log(`Received ${req.method} request to path ${req.path}`);
  next(); // Pass control to the next middleware or route handler
});

// Define routes related to user management (e.g., registration, login)
app.use('/api/user', userRoutes);


// Connect to the MongoDB database
connectDB().then();

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  const user = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const response = await axios.post('/reg', user); // Assuming the Express.js server is running on the same host
    console.log(response.data); // You can handle the response from the server here
  } catch (error) {
    console.error('Registration failed:', error);
  }
};
