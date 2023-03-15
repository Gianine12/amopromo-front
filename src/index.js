import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Router } from './router';

import { GlobalStyle } from './style/global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);
