import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MovieManiaApp } from './MovieManiaApp';
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <MovieManiaApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

