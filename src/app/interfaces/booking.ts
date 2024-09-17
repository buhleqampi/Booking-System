import { Client } from "./client";
import { Services } from "./services";

export interface Booking {
    name: string;
    address: string;
    contact?: string;
    owner?: Client[]; 
    description?: string;
    logo?: string;
    services?: Services[]; 

}
