import { ClientRepo } from '../../../../actions/client'

const client1 = {
    id: '1',
    name: 'User 1',
    email: 'mengano@test.io',
}
const client2 = {
    id: '2',
    name: 'User 2',
    email: 'pagano@test.io',
}
const client3 = {
    id: '3',
    name: 'user 3',
    email: 'propano@test.io',
}

let clients = [client1, client2, client3]

export const ClientInMemoryRepo: ClientRepo = {
    createClient: async (client) => {
        client.id = '🤡💩'
        clients.push(client)
        return client
    },
    findClient: async (clientId) => {
        return clients.find(cli => cli.id === clientId)
    },
    getClients: async () => {
        return await clients
    },
    updateClient: async (client) => {
        const currentClient = clients.find(cli => cli.id === client.id)
        for (const [key, value] of Object.entries(client)) {
            currentClient[key] = value
        }
        return currentClient
    },
    deleteClient: async (clientId) => {
        clients = clients.filter(cli => cli.id != clientId)
        return 'ok deleted'
    },
}
