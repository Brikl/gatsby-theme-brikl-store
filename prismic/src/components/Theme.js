import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
      contrastText: "#452475",
    },
    secondary: {
      light: "#0066ff",
      main: "#a6026a",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})
