import { Business } from "./business";
import { Availablehours } from "./availablehours";


export interface Staff {

    name: string;
    business: Business[]; 
    availableHours: Availablehours[];
    createdAt?: Date;
    updatedAt?: Date; 
}
