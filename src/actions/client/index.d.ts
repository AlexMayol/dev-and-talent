import { Client } from '../../domain/client'

export type createClient = (client: Client) => Promise<Client>
export type findClient = (clientId: string) => Promise<Client>
export type updateClient = (client: Client) => Promise<Client>
export type deleteClient = (client: Client) => Promise<Client> 
