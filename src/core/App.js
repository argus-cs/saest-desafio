import React from 'react'
import Router from './router'
import Store from './store'
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={Store} >
    <Router />
  </Provider>
)

export default App