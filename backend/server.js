require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const User = require("./models/User");

const router = express.Router()
const {hashPassword, encrypt, decrypt} = require("./passwordUtils");





// express app
const app = express()
const port = 4444;
app.use(express.json());
// middleware
app.post("/register", async (req, res) => {
  console.log("blob")
  if (req.body == null || Object.keys(req.body).length === 0) {
      console.log(req.body)
      res.status(400).send();
      return;
  }

  const {
      firstName, lastName, email, password
  } = req.body;
  console.log("blobus")
console.log(req.body)
  //Check if exists
  //const existingUser = await User.findOne({email});
  // if (existingUser != null) {
  //     res.status(400).json({"success": false, message: "Player already exists"});
  //     return;
  // }

  //Save player
  const user = new User({
      firstName, lastName, email, password: await hashPassword(password),
  });
  const userSaved = await user.save();
  res.status(201).json({"success": true, "id": userSaved._id, "message": "Player added successfully"});
});
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/user', userRoutes)

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});
//connect to db
console.log(process.env.MONGO_URI)
console.log(process.env.MONGO_URI)


mongoose.connect(process.env.MONGO_URI)

  .then(() => {
    // listen for requests
    console.log(process.env.PORT)
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});