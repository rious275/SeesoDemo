import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import { RecoilRoot } from 'recoil';

import GlobalStyle from './styles/GlobalStyle';

ReactDOM.render(
  <RecoilRoot>
    <Routes />
    <GlobalStyle />
  </RecoilRoot>,
  document.getElementById('root')
);
