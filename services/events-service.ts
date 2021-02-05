import axios from 'axios';
import Event from '../interfaces/Event';

export default class EventService{
     API_URL = "https://localhost:5001/api";
    public async getAllEvents(): Promise<Event[]> {
        const result = await axios.get(`${this.API_URL}/event/`)
        return result.data;
    }
    public async addNewEvent(): Promise<Event[]> {
        const result = await axios.get(`${this.API_URL}/event/`)
        return result.data;
    }
}
