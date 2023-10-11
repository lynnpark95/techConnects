const express = require('express')

// controller functions
const { loginUser, signupUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

router.post("/register", async (req, res) => {
    if (req.body == null || Object.keys(req.body).length === 0) {
        res.status(400).send();
        return;
    }
  
    const {
        firstName, lastName, email, password
    } = req.body;
  
    //Check if exists
    const existingUser = await User.findOne({email});
    if (existingUser != null) {
        res.status(400).json({"success": false, message: "Player already exists"});
        return;
    }
  
    //Save player
    const user = new User({
        firstName, lastName, email, password: await hashPassword(password),
    });
    const userSaved = await user.save();
    res.status(201).json({"success": true, "id": userSaved._id, "message": "Player added successfully"});
  });

// signup route
router.post('/signup', signupUser)

module.exports = router