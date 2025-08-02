import { Request, Response } from "express";
import EventService from "../services/EventService";
import { calendar_v3 } from "googleapis";

class EventController{
    static async getEvents(req : Request, res : Response){
        const data = await EventService.listEvents();
        res.status(200).json(data);
    }

    static async createEvent(req : Request, res : Response){
        const dataEvent : calendar_v3.Schema$Event = req.body;
        const responseCreate = await EventService.createEvent(dataEvent);
        res.status(201).json(responseCreate);
    }

    static async updateEvent(req : Request, res : Response){
        const eventId : string = req.params.id;
        const dataEvent : calendar_v3.Schema$Event = req.body;
        const responseUpdate = await EventService.updateEvent(eventId, dataEvent);
        res.status(200).json(responseUpdate);
    }

    static async deleteEvent(req : Request, res : Response){
        const eventId = req.params.id;
        await EventService.deleteEvent(eventId);
        res.status(204).send();
    }
}