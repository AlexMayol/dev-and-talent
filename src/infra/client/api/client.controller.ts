import { Request, Response } from 'express'
import { ClientRepo } from '../../../actions/client'

type RouteParams = {
    req: Request,
    repository: ClientRepo
}
export const clientController = {
    handleGetClients: async ({ req, repository }: RouteParams) => {
        const clients = await repository.getClients()
        return clients
    },
    handleGetClient: async ({ req, repository }: RouteParams) => {
        const id = req.params.id
        return await repository.findClient(id)
    },
    handleCreateClient: async ({ req, repository }: RouteParams) => {
        const client = req.body
        return await repository.createClient(client)
    },
    handleUpdateClient: async ({ req, repository }: RouteParams) => {
        const client = req.body
        return await repository.updateClient(client)
    },
    handleRemoveClient: async ({ req, repository }: RouteParams) => {
        const clientId = req.params.id
        return await repository.deleteClient(clientId)
    }
}
