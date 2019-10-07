import React from "react"
import { Grid, Typography } from "@material-ui/core"

const Title = ({ string, variant }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ width: "100%", padding: "50px 0px 40px 0px" }}
  >
    <Typography variant={`${variant}`}>{string}</Typography>
  </Grid>
)

export default Title
