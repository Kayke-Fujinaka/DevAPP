import React from 'react';
import ReactDOM from 'react-dom/client';

import Register from './Pages/Register';
import Users from './Pages/Users'

import GlobalStyles from './styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Users />
    <GlobalStyles />
  </>
);

