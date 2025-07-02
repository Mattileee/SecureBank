import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/', function (req: Request, res: Response) {
  (async () => {
    // ...signup logic...
  })();
});

export default router;