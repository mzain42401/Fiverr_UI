// controllers/userController.js
const User = require('../models/User');

const addUser = async (req, res) => {
  const { name, email,imageUrl } = req.body;
  try {
    const newUser = new User({ name, email ,imageUrl});
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add user' });
  }
};

const findUser = async (req, res) => {
  const { email } = req.params; 
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to find user' });
  }
};



const updateUser = async (req, res) => {
  const { email } = req.params; 
  try {
    const user = await User.findOneAndUpdate({
      email },
      req.body,
      {
        new:true

      }
    );
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to find user' });
  }
};

module.exports = { addUser, findUser,updateUser };
