import { SET_USER } from '../reducers/types'

export default function setLogin(user) {
  return {
    type: SET_USER,
    payload: user
  }
}