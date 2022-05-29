import { GET_CLIENTS } from '../reducers/types'

export default function getClients(clients) {
  return {
    type: GET_CLIENTS,
    payload: clients
  }
}