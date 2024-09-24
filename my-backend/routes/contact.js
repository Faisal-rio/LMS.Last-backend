import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST route to save contact data
router.post('/', async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  try {
    const newContact = new Contact({ firstName, lastName, email, phone, message });
    await newContact.save();
    res.status(201).json({ message: 'Contact data saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving contact data' });
  }
});

export default router;
