import { GET_ADMINS } from './types'

const INITIAL_STATE = {
  admins: [],
  loading: true
}

export function adminReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_ADMINS:
      return { 
        ...state, 
        admins: payload,
        loading: false
      }
    default:
      return state
  }
}