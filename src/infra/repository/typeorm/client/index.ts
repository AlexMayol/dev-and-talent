import { getRepository } from "typeorm";
import { ClientEntity } from '../entity/Client.entity'
import { ClientRepo } from '../../../../actions/client'


export const clientRepository: ClientRepo = {
    findClient: async (clientId) => {
        const repo = getRepository(ClientEntity);
        return await repo.findOne(clientId)
    },
    createClient: async (client) => {
        const repo = getRepository(ClientEntity);
        const { identifiers } = await repo.insert(client)
        return identifiers[0].id
    },
    deleteClient: async (clientId) => {
        const repo = getRepository(ClientEntity);
        const clientToRemove = await repo.findOne(clientId)
        return await repo.remove(clientToRemove)
    },
    getClients: async () => {
        const repo = getRepository(ClientEntity);
        const res = await repo.find()
        console.log(res)
        return res
    },
    updateClient: async (clientId, client) => {
        const repo = getRepository(ClientEntity);
        let clientToUpdate = await repo.findOne(clientId);
        for (const [key, value] of Object.entries(client)) {
            clientToUpdate[key] = value
        }
        return await repo.save(clientToUpdate);
    }
}
