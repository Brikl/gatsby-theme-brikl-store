import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { Link } from "gatsby"

const Discover = ({ title, subTitle, button }) => (
  <Grid
    style={{
      background: "#2f2f2f",
      height: 395,
      flex: 1,
      borderRadius: 0,
    }}
    item
    xs={12}
  >
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      style={{
        width: "100%",
        height: "100%",
        margin: "auto",
        textAlign: "left",
      }}
      spacing={3}
    >
      <Grid item style={{ maxWidth: "400px", width: "100%", padding: 16 }}>
        <Typography
          variant="h4"
          component="h2"
          style={{
            color: "#fff",
            width: "100%",
            textAlign: "left",
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
      </Grid>
      <Grid item style={{ maxWidth: "400px", width: "100%", padding: 16 }}>
        <Typography
          variant="body1"
          component="p"
          style={{ color: "#fff", width: "100%", textAlign: "left" }}
        >
          {subTitle}
        </Typography>
      </Grid>
      <Grid item style={{ maxWidth: "400px", width: "100%", padding: 16 }}>
        <Button
          component={Link}
          to="/"
          style={{ color: "white", border: "1px solid #fff" }}
        >
          {button}
        </Button>
      </Grid>
    </Grid>
  </Grid>
)

export default Discover
