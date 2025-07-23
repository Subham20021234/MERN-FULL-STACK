import express from 'express';
import { allUsers } from '../data/users.js';  

const router = express.Router();

// Register API
router.route("/register").post((req, res) => {
    res.send("User Created!!");
});

// Login API
router.route("/login").post((req, res) => {
    res.send("User Logged In.");
});

// Update Profile API
router.route("/profile/update").post((req, res) => {
    res.send("User Profile Updated.");
});

// Logout API
router.route("/logout").post((req, res) => {
    res.send("User Logged Out!!");
});

// Get user data by (user API KEY)
router.route("/getuser/:id").get((req, res) => {
    const id = Number(req.params.id);
    const user = allUsers.find(user => user.id === id);

    if (!user) {
        return res.send("User not found!!");
    }

    const User = {
        id: user.id,
        name: `${user.firstName} ${user.lastName}`,
        age: user.age,
        gender: user.gender,
        
    };

    res.send(User)
});







export default router;
