import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider domain="anvayb.us.auth0.com" clientId="fcqe9T53iKML0Dkl2y2Oa3Ea6P3lmbiJ" redirectUri="http://localhost:3000"> 
    <App />
  </Auth0Provider>,
  document.getElementById('app')
);