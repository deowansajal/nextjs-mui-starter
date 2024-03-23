'use client'
import { red, blue, grey, indigo, green, orange } from '@mui/material/colors'

import { createTheme } from '@mui/material'

// Color palette
export const palette = {
  primary: {
    main: indigo[500],
    dark: indigo[700],
    light: indigo[300],
  },
  secondary: {
    main: grey[700],
    dark: grey[900],
    light: grey[500],
  },
  error: {
    main: red[500],
    dark: red[700],
    light: red[300],
  },

  info: {
    main: blue[500],
    dark: blue[700],
    light: blue[300],
  },
  success: {
    main: green[500],
    dark: green[700],
    light: green[300],
  },
  warning: {
    main: orange[500],
    dark: orange[700],
    light: orange[300],
  },
}

export const theme = createTheme({
  palette: {
    primary: palette.primary,
    secondary: palette.secondary,
    error: palette.error,
    info: palette.info,
    success: palette.success,
    warning: palette.warning,
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },

    MuiInputBase: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          fontSize: '.875rem',
          marginTop: '.5rem',
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },

    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          left: -12,
          top: -8,
          fontSize: '1.2rem',
          fontWeight: 700,
        },
      },
    },
  },
})
