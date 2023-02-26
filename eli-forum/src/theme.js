import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#FBE2E2',
      main: '#F9C3C3',
      dark: '#B86363',
      contrastText: '#fff',
    },
    secondary: {
      light: '#F1E3E3',
      main: '#f44336',
      dark: '#C27878',
      contrastText: '#000',
    },
  },
});

export default theme