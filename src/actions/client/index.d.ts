import { Client } from '../../domain/client'

type getClients = () => Promise<Client[]>
type createClient = (client: Client) => Promise<Client>
type findClient = (clientId: string) => Promise<Client>
type updateClient = (client: Client) => Promise<Client>
type deleteClient = (clientId: string) => Promise<string>

export interface ClientRepo {
    getClients: getClients;
    createClient: createClient;
    findClient: findClient;
    updateClient: updateClient;
    deleteClient: deleteClient;
}
