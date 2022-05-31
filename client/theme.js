import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily:'inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"'
    },
    palette: {
      primary: {
      light: '#5c67a3',
      main: '#ae423f',
      dark: '#373737',
      contrastText: '#040404',
    },
    secondary: {
      light: '#ffad42',
      main: '#5bc0de',
      dark: '#292b2c',
      contrastText: '#040404',
    },
      openTitle: '#040404',
      protectedTitle: 'rgb(55, 53, 47)',
      type: 'light'
    },
       shadows: ["none"]

  })

  export default theme