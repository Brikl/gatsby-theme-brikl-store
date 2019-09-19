import React from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"

const Banner = ({ image, title, url }) => (
  <Grid style={{ height: "500px" }} container>
    <img
      style={{ height: "100%", width: "100%", objectFit: "cover" }}
      src={image}
    />
    <Grid
      container
      spacing={4}
      direction="column"
      justify="center"
      alignItems="center"
      style={{
        position: "absolute",
        zIndex: 1,
        width: "100%",
        height: "500px",
        color: "white",
      }}
    >
      <Grid item>
        <Typography style={{ color: "white" }} variant="h2">
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" component={Link} to={url}>
          SHOP NOW
        </Button>
      </Grid>
    </Grid>
  </Grid>
)

export default Banner
