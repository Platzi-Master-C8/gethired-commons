import { COLORS } from '../colors';

export const THEME = {
  typography: {
    fontFamily: ['Montserrat', 'Mulish'].join(','),
    h1: {
      fontFamily: 'Mulish',
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: '50.2px',
    },
    h2: {
      fontFamily: 'Mulish',
      fontSize: '1.3125rem',
      fontWeight: 600,
      lineHeight: '26.36px',
    },
    h3: {
      fontFamily: 'Mulish',
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: '20px',
    },
    subtitle1: {
      fontFamily: 'Mulish',
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: '20px',
    },
    body1: {
      fontFamily: 'Mulish',
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: '20px',
    },
    body2: {
      fontFamily: 'Mulish',
      fontSize: '0.875rem',
      fontWeight: 300,
      lineHeight: '18px',
    },
    button: {
      fontFamily: 'Mulish',
      fontSize: '1rem',
      fontWeight: 'bold',
      lineHeight: '20px',
    },
    button2: {
      fontFamily: 'Mulish',
      fontSize: '0.75rem',
      fontWeight: 'bold',
      lineHeight: '15px',
    },
    caption: {
      fontFamily: 'Mulish',
      fontSize: '0.75rem',
      fontWeight: 300,
      lineHeight: '15px',
    },
  },
  palette: {
    primary: {
      main: COLORS.contrast1,
    },
    secondary: {
      main: COLORS.secondary,
    },
    text: {
      primary: COLORS.textMain,
    },
    warning: {
      main: COLORS.warning,
    },
    error: {
      main: COLORS.error,
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: 'none',
          stroke: 'currentColor',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: '6px',
          boxShadow: 'none',
          textTransform: 'initial'
        },
        sizeSmall: {
          fontSize: '12px',
          padding: '3px 10px',
        },
        sizeMedium: {
          fontSize: '14px',
          padding: '7px 16px',
        },
        sizeLarge: {
          fontSize: '16px',
          padding: '11px 22px',
        },
        containedPrimary: {
          background:
            'linear-gradient(90deg, rgba(95, 100, 255, 0.7) 0%, rgba(174, 78, 255, 0.85) 100%)',
        },
        outlinedPrimary: {
          color: COLORS.contrast1,
          borderColor: COLORS.contrast1
        }
      },
    },
  },
};
