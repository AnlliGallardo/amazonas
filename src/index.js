import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/style.css'
import { Amazonas } from './Amazonas';
import { Provider } from 'react-redux';
import { store } from './store/store';





ReactDOM.render(
  <Provider store={store}>
    <Amazonas />
    </Provider>,
  
  document.getElementById('root')
);