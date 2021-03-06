import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/app'
import './style/index.css'
import reducers from './reducers'


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
  , document.getElementById('root'))
