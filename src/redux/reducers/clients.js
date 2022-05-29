import { GET_CLIENTS } from './types'

const INITIAL_STATE = {
  clients: [],
  loading: true
}

export function clientReducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case GET_CLIENTS:
      return { 
        ...state, 
        clients: payload,
        loading: false
      }
    default:
      return state
  }
}