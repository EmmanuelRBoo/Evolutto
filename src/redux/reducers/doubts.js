import { GET_DOUBTS } from './types'

const INITIAL_STATE = {
  doubts: []
}

export function doubtsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case GET_DOUBTS:
      return {
        ...state,
        doubts: payload
      }
    default:
      return state
  }
}
