import { GET_ADMINS } from '../reducers/types'

export default function getAdmins(admins) {
  return {
    type: GET_ADMINS,
    payload: admins
  }
}