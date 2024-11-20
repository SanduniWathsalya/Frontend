const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect('mongodb+srv://admin:admin123@cluster0.d6i34.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.model('User', userSchema);

// Signup Endpoint
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.json({ success: true, message: 'Registration successful!' });
  } catch (error) {
    if (error.code === 11000) {
      res.json({ success: false, message: 'Email already exists!' });
    } else {
      res.json({ success: false, message: 'Registration failed!' });
    }
  }
});

// Login Endpoint
app.post('/api/LoginFormAdmin', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: 'User not registered. Please sign up.' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: 'Invalid Email or Password' });
    }

    res.json({ success: true, message: 'Login successful!' });
  } catch (error) {
    console.error('Error during login:', error);
    res.json({ success: false, message: 'Login failed. Please try again.' });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
