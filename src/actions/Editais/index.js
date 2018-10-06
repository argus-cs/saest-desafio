import { Types as EditaisTypes } from '../../reducers/Editais'

export const newEdital = (data, history) => {
  return dispatch => {
    dispatch({
      type: EditaisTypes.EDITAL_ADD,
      payload: data
    })
    history.push('/editais')
  }
}

export const editEdital = (id, data) => {
  return dispatch => {
    dispatch({
      type: EditaisTypes.EDITAL_EDIT,
      id,
      payload: data
    })
  }
}

export const deleteEdital = (id) => {
  return dispatch => {
    dispatch({
      type: EditaisTypes.EDITAL_REMOVE,
      id,
    })
  }
}