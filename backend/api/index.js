const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const Joi = require('joi');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 5000; // Change this to your desired port
const MONGO_URI = 'mongodb+srv://Kp:admin%40123@cluster1.2xten.mongodb.net/contactForm?retryWrites=true&w=majority';

// Exit if MONGO_URI is missing
if (!MONGO_URI) {
  console.error('MongoDB URI is not defined. Exiting...');
  process.exit(1);
}

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://portfolio1-git-main-kalparatnas-projects.vercel.app', 
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'], 
}));

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Mongoose Schema and Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  submittedAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', ContactSchema);

// Validation Schema
const contactValidationSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).required(),
});

// Email Transporter Setup (Using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or other email service
  auth: {
    user: 'kalparatna.numetry@gmail.com', // your email
    pass: 'xewd nsjd fnhk luxx', // your email password
  },
});

// Send email function
const sendConfirmationEmail = (userEmail) => {
  const mailOptions = {
    from: 'kalparatna.numetry@gmail.com', // your email
    to: userEmail,
    subject: 'Thank You for Reaching Out!',
    text: 'Thank you for reaching out to us. We will get back to you soon.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Confirmation email sent: ' + info.response);
    }
  });
};

// Routes
app.post('/api/contact', async (req, res) => {
  const { error } = contactValidationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send confirmation email to the user
    sendConfirmationEmail(email);

    res.status(200).json({ message: 'Contact form submitted successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while saving the data.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
