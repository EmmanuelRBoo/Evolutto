import { SET_USER } from './types'

const INITIAL_STATE = {
  user: {
    id: 0,
    name: 'Default',
    email: 'Default@gmail.com',
    image: 'https://cdn.pixabay.com/photo/2017/06/13/12/53/profile-2398782_1280.png'
  }
}

export function loginReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case SET_USER:
      return {
        user: payload 
      }
    default:
      return state;
  }
}