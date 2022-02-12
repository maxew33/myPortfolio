import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'

import App from './App';

import ContextProvider from './context/languageContext'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// const Store = createStore()

ReactDOM.render(
  // <Provider store={Store}>

  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById('root')

);

