import { EntitySchema } from 'typeorm'
import { Client } from '../../../../domain/client'

export const ClientEntity = new EntitySchema<Client>({
  name: 'client',
  columns: {
    id: {
      type: 'uuid',
      primary: true,
      generated: 'uuid'
    },
    name: {
      type: String
    },
    country: {
      type: String
    },
    availability: {
      type: String
    },
    email: {
      type: String
    }
  }
})
