import { Booking } from "./booking";

export interface Client {

        name: string;
        email: string;
        password: string;
        role: 'customer' | 'business_owner'; 
        bookings?: Booking[]; 
        createdAt?: Date; 
        updatedAt?: Date; 
}
