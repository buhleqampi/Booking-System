import { Client } from "./client";
import { Service } from "./services";

export interface Booking {
    user: String,
    business: String,
    service: String,
    staff: String,
    date: String,
    time: String
}
