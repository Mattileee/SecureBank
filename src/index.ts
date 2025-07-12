// src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import signupRouter from './api/signup';
import loginRouter from './api/login';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

// ✅ Add this to support GET /
app.get('/', (req: Request, res: Response) => {
  res.send('✅ SecureBanks backend is working');
});

const PORT = process.env.PORT || 54321;
app.listen(PORT, () => {
  console.log(`✅ Backend running on port ${PORT}`);
});
