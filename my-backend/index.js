import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import enrollmentRoutes from './routes/enrollment.js';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: 'https://unlucky-happylearning-simple.netlify.app/login', // Replace with your actual Netlify URL
  methods: 'GET, POST, PUT, DELETE, OPTIONS',
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
}));

app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Default route to display welcome message
app.get('/', (req, res) => {
  res.send('Welcome to my server HappyLearning');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/enroll', enrollmentRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
