const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
require("dotenv").config();

const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors({
  origin: "http://localhost:5173", // Replace with your frontend's URL
  credentials: true, // Allow cookies and session sharing
}));

mongoose
  .connect("mongodb://localhost:27017/User") // Use only the connection string
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));



const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.json());
app.use(
  session({
    secret: "your-secret-key", // Replace with a secure key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }, // 1 minute for testing, adjust as needed
  })
);

// Routes
// Signup Route
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  console.log("Received signup request:", req.body); // Log incoming data

  // Validate input
  if (!name || !email || !password) {
    console.log("Validation failed: Missing required fields");
    return res.status(400).json({ message: 'Please provide all required fields' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists:", existingUser);
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // Save the new user to the database
    await newUser.save();
    console.log("User created successfully:", newUser);

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error("Error during signup:", error); // Log errors
    res.status(500).json({ message: 'Server error' });
  }
});



// Login Route
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    req.session.user = { id: user._id, email: user.email }; // Storing user info in session
    res.status(200).json({ message: "Logged in successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error logging in" });
  }
});

// Logout Route
app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Error logging out" });
    }
    res.clearCookie("connect.sid"); // Clear session cookie
    res.status(200).json({ message: "Logged out successfully" });
  });
});

// Protected Route
app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.status(200).json({ message: "Welcome to the dashboard!", user: req.session.user });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
