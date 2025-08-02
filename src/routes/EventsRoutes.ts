import { Router } from "express";

const eventsRouter = Router();

eventsRouter.get('/events');
eventsRouter.post('/events');
eventsRouter.put('/events');
eventsRouter.delete('/events');

export default eventsRouter;