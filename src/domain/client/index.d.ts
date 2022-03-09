import { UUID } from '../shared'

export interface Client {
    id: UUID;
    name: string;
    email: string;
    availability: string;
    country: string;
}
