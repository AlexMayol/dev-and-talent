import { Client } from '../../domain/client'
import { UUID } from '../../domain/shared'

type getClients = () => Promise<Client[]>
type createClient = (client: Client) => Promise<UUID>
type findClient = (clientId: string) => Promise<Client>
type updateClient = (id: string, client: Client) => Promise<Client>
type deleteClient = (clientId: string) => Promise<Client | Client[]>

export interface ClientRepo {
    getClients: getClients;
    createClient: createClient;
    findClient: findClient;
    updateClient: updateClient;
    deleteClient: deleteClient;
}
