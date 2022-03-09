import { Router } from 'express';
import { clientRepository as repository } from '../../infra/repository/typeorm/client'
import { clientController } from './client.controller'

const clientRouter = Router()

clientRouter.get('/', async (req, res) => {
    const clients = await clientController.handleGetClients({ req, repository })
    res.send(clients);
})
clientRouter.get('/:id', async (req, res) => {
    const client = await clientController.handleGetClient({ req, repository })
    res.send(client);
})
clientRouter.post('/', async (req, res) => {
    const client = await clientController.handleCreateClient({ req, repository })
    res.send(client);
})
clientRouter.patch('/:id', async (req, res) => {
    const client = await clientController.handleUpdateClient({ req, repository })
    res.send(client);
})
clientRouter.delete('/:id', async (req, res) => {
    const client = await clientController.handleRemoveClient({ req, repository })
    res.send(client);
})

export { clientRouter }
