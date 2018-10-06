import { combineReducers } from 'redux'
import { sessionReducer } from 'redux-react-session'
import { reducer as formReducer } from 'redux-form'

// import reducers
import Editais from './Editais'
import Users from './Users'


export default combineReducers({
  form: formReducer,
  session: sessionReducer,
  editais: Editais,
  users: Users
})