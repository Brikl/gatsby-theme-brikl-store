import React from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import Particles from "./Particles"
import { Link } from "gatsby"

const useStyles = makeStyles(theme =>
  createStyles({
    banner: {
      [theme.breakpoints.down("sm")]: {
        backgroundPosition: "0px 0px",
      },
    },
  })
)

const Banner = ({
  urlPrefix,
  title,
  subTitle,
  button,
  particles,
  backgroundColor,
}) => {
  const classes = useStyles()
  return (
    <Grid
      container
      className={classes.banner}
      style={{
        height: "70vh",
        position: "relative",
        backgroundColor: particles ? "transparent" : backgroundColor,
      }}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          left: 0,
          height: "70vh",
        }}
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: 260, maxWidth: 1000 }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h3"
              component="h1"
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              component="h2"
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              {subTitle}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="center">
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`${urlPrefix}/products`}
              >
                {button}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {particles ? <Particles /> : null}
    </Grid>
  )
}

export default Banner
