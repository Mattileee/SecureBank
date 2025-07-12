// middleware/auth.ts
import { Request, Response, NextFunction } from 'express';
import { supabase } from '../lib/supabase';

export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Missing access token' });
  }

  const { data, error } = await supabase.auth.getUser(token);

  if (error || !data.user) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  req.user = data.user;
  next();
};
