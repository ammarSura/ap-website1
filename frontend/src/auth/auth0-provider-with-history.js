// src/auth/auth0-provider-with-history.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

  const history = useNavigate();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
    //   domain={domain}
    //   clientId={clientId}
    //   redirectUri={window.location.origin}
        domain="dev-4hzu5c-y.us.auth0.com"
        clientId="kKJqCr1w8KniEBjIWNdRuOcn2mnvLkwl" 
        redirectUri={window.location.origin}
        onRedirectCallback={window.location.origin}> 
        
    
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;