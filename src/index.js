import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './Pages/Register/App';

import GlobalStyles from './Pages/styles/globalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <GlobalStyles />
  </>
);

