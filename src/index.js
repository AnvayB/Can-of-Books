import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider domain="dev-g0x5ewvn.us.auth0.com" clientId="BjBJIr35plkJgVBU7k6klWFjX41goK94" redirectUri={window.location.origin}> 
    <App />
  </Auth0Provider>,
  document.getElementById('app')
);