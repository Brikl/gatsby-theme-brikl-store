import React from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { Link } from "gatsby"
import { sortBy } from "lodash"

const Banner = ({ data }) => {
  let banner = []
  if (data) {
    banner = sortBy(data, "sortOrder")
  }
  return (
    <Grid style={{ height: "500px" }} container>
      <img
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
        src="https://cdn-media-brikl.imgix.net/vermarc/media/DQS_outfit_Wolfpack_DSC09491-2_1900_700_80_s_c1-z26REQCVJ.jpg?w=2000&auto=format&fit=crop&txt=Photo%3A%20Sigfrid%20Eggers&txtlead=2&txtpad=15&txtfont=BiomeStd-Light&txtclr=%23000000&txtalign=bottom%2Cright&ixlib=react-8.6.4"
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
            {banner[1].contentString}
          </Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            component={Link}
            to={banner[2].contentString}
          >
            SHOP NOW
          </Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Banner
