import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);
