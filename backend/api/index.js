const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

const MONGO_URI = 'mongodb+srv://Kp:admin%40123@cluster1.2xten.mongodb.net/contactForm?retryWrites=true&w=majority';

// Middleware
app.use(cors());
app.use(bodyParser.json());
const corsOptions = {
  origin: 'https://portfolio1-theta-gules.vercel.app/',  
  methods: 'GET,POST',
};
app.use(cors(corsOptions));

// Connect to MongoDB (without deprecated options)
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define Mongoose Schema and Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);

// Routes
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while saving the data.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
