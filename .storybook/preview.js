import { ThemeProvider } from 'emotion-theming';
import { createTheme } from '@mui/material/styles';

import { THEME } from '@master-c8/theme';
import { BrowserRouter } from 'react-router-dom';

const getHiredTheme = createTheme(THEME);

const getStyles = ({ __sb } = {}) => ({
  display: 'flex',
  flexDirection: __sb?.fd || 'column',
  maxHeight: __sb?.mh || 'auto',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  flexWrap: 'wrap',
  height: '100%',
  gap: '10px 30px',
  alignItems: 'center',
});

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  ),
  (Story) => (
    <ThemeProvider theme={getHiredTheme}>
      <Story />
    </ThemeProvider>
  ),
  (Story, { parameters }) => (
    <div style={getStyles(parameters)}>
      <Story />
    </div>
  ),
];
