import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "@material-ui/styles"
import { theme } from "./Theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>BrikL GraphCMS</title>
      </Helmet>

      <div style={{ overflow: "hidden", margin: "-8px" }}>
        <Header />
        <div style={{ minHeight: "90vh", overflow: "hidden" }}>{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
