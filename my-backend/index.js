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
  origin: 'https://ahappylearning-lms-cp.netlify.app/', // Replace with your actual Netlify frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// MongoDB connection with better error handling
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit the app if unable to connect
  });

// Default route to display a welcome message
app.get('/', (req, res) => {
  res.status(200).send('Welcome to my server HappyLearning');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/enroll', enrollmentRoutes);
app.use('/api/contact', contactRoutes);

// Example function to handle errors globally (Middleware)
app.use((err, req, res, next) => {
  console.error(err.stack);  // Log the error stack
  res.status(500).json({ message: 'An internal server error occurred' });
});

// Custom 404 route for undefined routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
