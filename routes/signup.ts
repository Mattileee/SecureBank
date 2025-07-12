import express from 'express';
import { supabase } from '../supabaseClient';

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return res.status(400).json({ error: error.message });
  res.status(200).json(data);
});

export default router;
