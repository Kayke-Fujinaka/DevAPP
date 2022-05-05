import React from 'react';
import ReactDOM from 'react-dom/client';

import Routes from './Routes/routes';

import GlobalStyles from './Styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Routes />
    <GlobalStyles />
  </>
);

