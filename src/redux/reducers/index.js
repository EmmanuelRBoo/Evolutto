import { combineReducers } from 'redux'
import { clientReducer } from './clients'
import { adminReducer } from './admins'
import { loginReducer } from './login'
import { doubtsReducer } from './doubts'

export default combineReducers({
  clients: clientReducer,
  admins: adminReducer,
  login: loginReducer,
  doubts: doubtsReducer
})
