/**
 * Types
 */
export const Types = {
  EDITAL_ADD: 'editais/EDITAL_ADD',
  EDITAL_EDIT: 'editais/EDITAL_EDIT',
  EDITAL_REMOVE: 'editais/EDITAL_REMOVE'
};

/**
 * Reducers
 */
const INITIAL_STATE = {
  isFetching: null,
  data: [
    {
      "id": "ali3sdf3l",
      "name": "Lorem Ipsum",
      "description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      "status": "ativo",
      "type": "Edital",
      "subscribe": false,
      "modality": {
        "graduacao": true,
        "tecnico": true,
        "pos": false,
        "mestrado": false,
        "doutorado": false
      }
    },
    {
      "id": "a1sdf21",
      "name": "Dolor sit amet",
      "description": "Lorem ipsum dolor sit amet,consectetur adipiscing elit.",
      "status": "ativo",
      "type": "Edital",
      "subscribe": false,
      "modality": {
        "graduacao": true,
        "tecnico": true,
        "pos": false,
        "mestrado": false,
        "doutorado": false
      }
    },
  ],
  errorMessage: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.EDITAL_ADD:
      return {
        ...state,
        data: state.data.concat(action.payload)
      }
    case Types.EDITAL_EDIT:
      return {
        ...state,
        data: state.data.map(item => {
          return item.id === action.id ? action.payload : item
        })
      }
    case Types.EDITAL_REMOVE:
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