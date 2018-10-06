import { createStore, applyMiddleware, compose } from 'redux'
import { sessionService } from 'redux-react-session';

// import redux middleware
import thunk from 'redux-thunk'
import promise from 'redux-promise'

// import reducers
import reducers from '../reducers'

// devtools
const devtools =
  process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : '';

// Centralized application state
const store = createStore(reducers, devtools, compose(applyMiddleware(thunk, promise)))

sessionService.initSessionService(store)

export default store;