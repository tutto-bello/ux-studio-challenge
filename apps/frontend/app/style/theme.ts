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
    body2: {
      fontFamily: 'Lexend Deca',
      fontSize: 12,
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
          borderRadius: 8,
          color: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '8px 16px 8px 12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 10,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: 14,
          padding: '12px 10px 12px 10px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
          paddingBottom: 4,
          color: '#989898',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: 40,
          padding: '0px',
        },
        formControl: {
          height: 40,
          padding: '0px',
        },
        root: {
          height: 40,
          padding: '0px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 40,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '0px',
          fontSize: 14,
        },
        root: {
          height: 40,
          padding: '8px 12px 8px 12px',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: 40,
          padding: '0px',
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
    background: { paper: '#141414', default: '#141414' },
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
    body2: {
      fontFamily: 'Lexend Deca',
      fontSize: 12,
      color: '#989898',
    },
    button: {
      fontFamily: 'Lexend Deca',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: [{ '@font-face': glyseFont }, { '@font-face': lexendDecaFont }],
        body: {
          backgroundColor: '#141414',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          color: '#FFFFFF',
          textTransform: 'capitalize',
          padding: '8px 16px 8px 12px',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: 10,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1E1E',
          fontSize: 14,
          padding: '12px 10px 12px 10px',
          '&:hover': {
            backgroundColor: '#232323',
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: 12,
          paddingBottom: 4,
          color: '#989898',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: 40,
          padding: '0px',
          backgroundColor: 'transparent',
        },
        formControl: {
          height: 40,
          padding: '0px',
          backgroundColor: '#282828',
          '&.Mui-hover': {
            borderColor: 'transparent',
          },
        },
        root: {
          height: 40,
          padding: '0px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 40,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '0px',
          fontSize: 14,
          '&.Mui-focused': {
            backgroundColor: '#282828',
          },
        },
        root: {
          height: 40,
          padding: '8px 12px 8px 12px',
          backgroundColor: '#1E1E1E',
          '&.Mui-focused': {
            backgroundColor: '#282828',
          },
          '&.Mui-hover': {
            borderColor: 'transparent',
          },
        },
        notchedOutline: {
          borderColor: '#282828',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          height: 40,
          padding: '0px',
        },
      },
    },
  },
});

export { lightTheme, darkTheme };
