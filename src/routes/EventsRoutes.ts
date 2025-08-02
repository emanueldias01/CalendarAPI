import { Response, Router } from "express";
import EventController from "../controllers/EventController";

const eventsRouter = Router();

eventsRouter.get('/events', EventController.getEvents);
eventsRouter.post('/events', EventController.createEvent);
eventsRouter.put('/events/:id', EventController.updateEvent);
eventsRouter.delete('/events/:id', EventController.deleteEvent);

export default eventsRouter;