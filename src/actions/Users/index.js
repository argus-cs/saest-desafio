import { sessionService } from 'redux-react-session'
import { Types as UsersTypes } from '../../reducers/Users'

export const addUser = data => {
  return dispatch => {
    dispatch({
      type: UsersTypes.USER_ADD,
      payload: data
    })
  }
}

export const editUser = (id, data, history) => {
  sessionService.saveUser(data)
  return dispatch => {
    dispatch({
      type: UsersTypes.USER_EDIT,
      id,
      payload: data
    })
    history.push('/')
  }
}

export const deleteUser = id => {
  return dispatch => {
    dispatch({
      type: UsersTypes.USER_DELETE,
      id,
    })
  }
}