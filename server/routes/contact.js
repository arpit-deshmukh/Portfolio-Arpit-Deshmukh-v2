import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

function rateLimit(req, res, next) {
  const ip = req.ip || req.connection.remoteAddress;
  const now = Date.now();

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return next();
  }

  const record = rateLimitMap.get(ip);

  if (now - record.firstRequest > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, firstRequest: now });
    return next();
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return res.status(429).json({
      success: false,
      message: 'Too many requests. Please wait 15 minutes before trying again.',
    });
  }

  record.count++;
  next();
}

router.post('/', rateLimit, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required.',
      });
    }

    if (name.length > 100 || subject.length > 200 || message.length > 2000) {
      return res.status(400).json({
        success: false,
        message: 'One or more fields exceed the maximum allowed length.',
      });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
    }

    const ip = req.ip || req.connection.remoteAddress;

    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      ip,
    });

    res.status(201).json({
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
      id: contact._id,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.',
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    console.error('Fetch contacts error:', error);
    res.status(500).json({ success: false, message: 'Server error.' });
  }
});

export default router;
