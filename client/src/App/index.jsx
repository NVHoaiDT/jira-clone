import React, { Fragment } from 'react';

import NormalizeStyles from './NormalizeStyles';
import BaseStyles from './BaseStyles';
import Toast from './Toast';
import Routes from './Routes';

import CSSTestComponent from './CSSTestComponent';
// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import './fontStyles.css';

const App = () => (
  <Fragment>
    <NormalizeStyles />
    <BaseStyles />
    <Toast />
    <Routes />
  </Fragment>
  // <CSSTestComponent />
);

export default App;
