// server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import signupRouter from './src/api/signup';
import loginRouter from './src/api/login';

const app = express(); // ✅ must call express()

// Middleware
app.use(cors({
  origin: 'https://securebanks.co',
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);

// Health check
app.get('/', (req: Request, res: Response) => {
  res.send('✅ SecureBanks backend is working');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
