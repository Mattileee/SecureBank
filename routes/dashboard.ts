// routes/dashboard.ts
import express from 'express';
import { authenticateUser } from '../src/middleware/auth';

const router = express.Router();

router.get('/', authenticateUser, (req, res) => {
  res.status(200).json({
    message: 'Welcome to your dashboard!',
    user: req.user,
  });
});

export default router;
