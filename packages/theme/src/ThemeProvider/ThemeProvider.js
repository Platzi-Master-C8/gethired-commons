import React from 'react';
import PropTypes from 'prop-types';

import { createTheme, ThemeProvider as ThemeProviderMUI } from '@mui/material';

import { THEME } from '../theme';

const ThemeProvider = ({ children }) => {
  const DEFAULT_THEME = createTheme(THEME);
  return <ThemeProviderMUI theme={DEFAULT_THEME}>{children}</ThemeProviderMUI>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
