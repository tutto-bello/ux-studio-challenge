// theme.ts
import { createTheme } from '@mui/material/styles';

const lexendDecaFont = {
  fontFamily: 'Lexend Deca',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `
    local('Lexend Deca'), local('Lexend Deca'),
    url('/assets/fonts/LexendDeca-VariableFont_wght.ttf') format('truetype'),
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const glyseFont = {
  fontFamily: 'Glysa',
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'swap',
  src: `
    local('Glysa'),
    url('/assets/fonts/Glysa-trial.otf') format('opentype'),
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2D2D2D',
      light: '#323232',
      dark: '#282828',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Glysa, Lexend Deca',
    h1: {
      fontFamily: 'Glysa',
    },
    h2: {
      fontFamily: 'Glysa',
    },
    h3: {
      fontFamily: 'Glysa',
    },
    h4: {
      fontFamily: 'Glysa',
      fontSize: 32,
    },
    h5: {
      fontFamily: 'Glysa',
    },
    h6: {
      fontFamily: 'Glysa',
    },
    body1: {
      fontFamily: 'Lexend Deca',
    },
    button: {
      fontFamily: 'Lexend Deca',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [{ '@font-face': glyseFont }, { '@font-face': lexendDecaFont }],
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1000,
          color: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '8px 16px 8px 12px',
        },
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2D2D2D',
      light: '#323232',
      dark: '#282828',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: 'Glysa, Lexend Deca',
    h1: {
      fontFamily: 'Glysa',
    },
    h2: {
      fontFamily: 'Glysa',
    },
    h3: {
      fontFamily: 'Glysa',
    },
    h4: {
      fontFamily: 'Glysa',
      fontSize: 32,
    },
    h5: {
      fontFamily: 'Glysa',
    },
    h6: {
      fontFamily: 'Glysa',
    },
    body1: {
      fontFamily: 'Lexend Deca',
    },
    button: {
      fontFamily: 'Lexend Deca',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [{ '@font-face': glyseFont }, { '@font-face': lexendDecaFont }],
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 1000,
          color: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '8px 16px 8px 12px',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
