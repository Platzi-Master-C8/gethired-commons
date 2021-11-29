import React from 'react';
import PropTypes from 'prop-types';

import { createTheme , ThemeProvider as ThemeProviderMUI } from '@mui/material';

import { DEFAULT_THEME } from '../theme';

const ThemeProvider = ({ children }) => {
  const THEME = createTheme(DEFAULT_THEME);
  return <ThemeProviderMUI theme={THEME}>
    {children}
  </ThemeProviderMUI>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
