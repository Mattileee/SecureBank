import express, { Request, Response } from 'express';
import { supabase } from '../lib/supabase';

const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) return res.status(401).json({ error: error.message });
  return res.json(data);
});

export default router;