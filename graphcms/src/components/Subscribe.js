import React from "react"
import { withStyles } from "@material-ui/core/styles"
import {
  Button,
  Checkbox,
  Input,
  InputLabel,
  Typography,
  Grid,
} from "@material-ui/core"
import FormControlLabel from "@material-ui/core/FormControlLabel"
const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 24,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
  appbar: {
    background: "#000",
    color: "#fff",
  },
  maxWidth: {
    maxWidth: "1140px",
    width: "100%",
    margin: "auto",
  },
  left: {
    marginRight: "12px",
    width: "calc(100% - 12px)",
  },
  right: {
    marginLeft: "12px",
    width: "calc(100% - 12px)",
  },
  shopcard: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100% !important",
      width: "100% !important",
    },
  },
})

const Subscribe = props => {
  const { title, subTitle, classes, interests } = props
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.shopcard}
      style={{
        maxWidth: "1000px",
        border: "1px solid #E5E5E5",
        height: "auto",
        padding: "2em 0",
        background: "#fff",
        borderRadius: 0,
      }}
    >
      <Grid
        container
        direction="column"
        style={{ maxWidth: "50%", width: "50%", padding: "0px 16px" }}
        spacing={3}
        className={classes.shopcard}
      >
        {title === "" ? null : (
          <Grid item xs={12}>
            <Typography data-cy="subscribe-card-title" variant="h4">
              {title}
            </Typography>
          </Grid>
        )}

        {subTitle === "" ? null : (
          <Grid item xs={12}>
            <Typography data-cy="subscribe-card-content" variant="body1">
              {subTitle}
            </Typography>
          </Grid>
        )}

        <Grid item xs={12}>
          <Grid container alignItems="flex-end" spacing={2}>
            <>
              <Grid item xs={12}>
                <InputLabel>Email</InputLabel>
                <Input
                  autoComplete="none"
                  label={"Email"}
                  placeholder={""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>First Name</InputLabel>
                <Input
                  autoComplete="none"
                  label={"First Name"}
                  placeholder={""}
                  fullWidth
                />
              </Grid>

              <Grid item xs={6}>
                <InputLabel>Last Name</InputLabel>
                <Input
                  autoComplete="none"
                  label={"Last Name"}
                  placeholder={""}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">Interest</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  marginLeft: "8px",
                }}
              >
                {interests.map((interest, index) => (
                  <>
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{
                            color: "#3f3f3f",
                            padding: "0px",
                            marginRight: 8,
                          }}
                        />
                      }
                      label={interest}
                    />
                    <br />
                  </>
                ))}
              </Grid>
            </>

            <hr />
            <Grid item xs={12}>
              <Grid container alignItems="center">
                <Checkbox
                  style={{
                    color: "#3f3f3f",
                    padding: "0px",
                    marginRight: 8,
                  }}
                />
                <Typography variant="body1" style={{ fontSize: "14px" }}>
                  <a target="_blank" style={{ color: "blue" }}>
                    I HAVE READ AND HAVE APPROVED THE PRIVACY POLICY
                  </a>
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Button target="_blank" variant="outlined">
                Subscribe
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Subscribe)
