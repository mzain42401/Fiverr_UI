// routes/userRoutes.js
const express = require('express');
const { addUser, findUser, updateUser } = require('../controllers/userController');
const router = express.Router();

router.post('/users', addUser);
router.put('/users/:email', updateUser);
router.get('/users/:email', findUser);


module.exports = router;
