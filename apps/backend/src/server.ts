import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import { PORT } from './constants';

config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'server is up and running',
  });
});

app.listen(PORT, () => {
  console.log(`server running on port http://localhost:${PORT}`);
});

export default app;
