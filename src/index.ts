import express, { json } from 'express';
import cors from 'cors';
import eventsRouter from './routes/EventsRoutes';

const app = express();
app.use(json());
app.use(cors());
app.use(eventsRouter);

const PORT = process.env.PORT;
app.listen(PORT);