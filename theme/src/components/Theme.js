import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#ffffff",
      contrastText: "#452475",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#0066ff",
      main: "#a6026a",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
    },

    // error: will use the default color
  },
})