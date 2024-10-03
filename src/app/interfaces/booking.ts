import { Client } from "./client";
import { BookingService } from "../services/booking/booking.service";

export interface Booking {
    name: string;
    address: string;
    contact?: string;
    owner?: Client[]; 
    description?: string;
    logo?: string;
    services?: BookingService []; 

}
