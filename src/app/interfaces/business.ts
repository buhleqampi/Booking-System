import { Client } from "./client";
import { Services } from "./services";
import { Staff } from "./staff";

export interface Business {
    name: string;
    owner: Client[]; 
    services?: Services[]; 
    staff?: Staff[]; 
    location: string;
    contact: string;
    createdAt?: Date;
    updatedAt?: Date; 
}
