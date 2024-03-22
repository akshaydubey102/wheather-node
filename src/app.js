import express from 'express';
import router from './routes/index.js';
import cors from 'cors';

const app = express();
app.use(cors());

app.use('/api/wheather', router);
export default app;
