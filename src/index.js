import React from 'react';
import ReactDOM from 'react-dom/client';

import Register from './Pages/Register';

import GlobalStyles from './Pages/styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Register />
    <GlobalStyles />
  </>
);

