// signup.ts
import express from 'express';

const signup = express.Router();

signup.post('/', (req, res) => {
  // Your signup logic here
  res.send('Signup route');
});

export default signup;
