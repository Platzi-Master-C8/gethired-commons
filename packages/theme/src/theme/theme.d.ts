export interface THEME {
  typography: {
    fontFamily: string;
    h1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    h2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    h3: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    subtitle1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    body1: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    body2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    button: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    button2: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
    caption: {
      fontFamily: string;
      fontSize: string;
      fontWeight: string;
      lineHeight: string;
    };
  };
  palette: {
    secondary: {
      main: string;
    };
    text: {
      primary: string;
    };
    warning: {
      main: string;
    };
    error: {
      main: string;
    };
  };
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: string
        },
        sizeSmall: {
          fontSize: string,
          padding: string
        },
        sizeMedium: {
          fontSize: string,
          padding: string
        },
        sizeLarge: {
          fontSize: string,
          padding: string
        },
        containedPrimary: {
          background: string
        },
      },
    },
  },
}
