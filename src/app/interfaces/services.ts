import { Business } from "./business";

export interface Services {
    name: string;
    duration: number; 
    price: number;
    business: Business[]; 
    createdAt?: Date; 
    updatedAt?: Date; 

}
