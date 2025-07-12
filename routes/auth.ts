// routes/auth.ts
import express from 'express';
import { supabase } from '../src/lib/supabase';

const router = express.Router();

// Sign up
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ message: 'Signup successful. Check your email to confirm.', data });
});

// Sign in
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return res.status(401).json({ error: error.message });
  }

  res.status(200).json({ message: 'Login successful', data });
});

export default router;
