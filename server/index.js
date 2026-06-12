import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json({ limit: '10kb' }));

async function connectDB() {
  if (!MONGO_URI) {
    console.warn('⚠️  MONGO_URI not set. Contact form submissions will not be stored.');
    return;
  }
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection failed:', err.message);
    process.exit(1);
  }
}

app.get('/', (req, res) => {
  res.json({ message: 'Portfolio Backend is running!', db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date(),
    db: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected',
  });
});

app.use('/api/contact', contactRoutes);

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found.' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
