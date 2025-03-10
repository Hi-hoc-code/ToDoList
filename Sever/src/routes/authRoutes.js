const express = require('express');
const router = express.Router();
const { register,
    login,
    logout,
    getUser,
    updateUser,
    deleteUser
} = require('../controllers/authController');
//Create account
router.post('/register', register);

//Login
router.post('/login', login);

//Logout
router.post('/logout', logout);

//Get user info
router.get('/userInfo', getUser);

//Update user info
router.put('/userUpdate', updateUser);

//Delete user
router.delete('/userDelete', deleteUser);

module.exports = router;