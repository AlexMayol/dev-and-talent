import { Router } from 'express';
import { ClientInMemoryRepo } from '../repository/inMemory'
import { clientController } from './client.controller'

const clientRouter = Router()

clientRouter.get('/', async (req, res) => {
    const clients = await clientController.handleGetClients({ req, repository: ClientInMemoryRepo })
    res.send(clients);
})
clientRouter.get('/:id', async (req, res) => {
    const client = await clientController.handleGetClient({ req, repository: ClientInMemoryRepo })
    res.send(client);
})
clientRouter.post('/', async (req, res) => {
    const client = await clientController.handleCreateClient({ req, repository: ClientInMemoryRepo })
    res.send(client);
})
clientRouter.patch('/', async (req, res) => {
    const client = await clientController.handleUpdateClient({ req, repository: ClientInMemoryRepo })
    res.send(client);
})
clientRouter.delete('/:id', async (req, res) => {
    const client = await clientController.handleRemoveClient({ req, repository: ClientInMemoryRepo })
    res.send(client);
})

export { clientRouter }
