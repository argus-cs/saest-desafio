/**
 * Types
 */
export const Types = {
  "USER_ADD": "users/USER_ADD",
  "USER_EDIT": "users/USER_EDIT",
  "USER_DELETE": "users/USER_DELETE"
}


/**
 * Reducers
 */
const INITIAL_STATE = {
  data: [
    {
      id: "s5d8f7w325DF",
      name: "Admin",
      surname: "Ad",
      email: "admin@admin.com",
      cpf: "123456789",
      type: "admin",
      password: '123456'
    },
    {
      id: 'f4s5a6fd453',
      name: 'aluno',
      surname: 'Ad.',
      email: 'aluno@aluno.com',
      cpf: '987654321',
      type: 'aluno',
      password: '123456'
    }
  ],
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.USER_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
  
    case Types.USER_EDIT:
      return {
        ...state,
        data: state.data.map(item => {
          return item.id === action.id ? action.payload : item
        })
      }

    case Types.USER_DELETE:
      return {
        ...state,
        data: state.data.filter(item => {
          return item.id !== action.id
        })
      }
    default:
      return state
  }
}