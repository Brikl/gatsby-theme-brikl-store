import React from "react"
import {
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
} from "@material-ui/core"
import { getTextFromLanguage } from "./utils"
import { Link } from "gatsby"

const Collection = ({ collection, urlPrefix, langCode }) => (
  <>
    <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={collection.id}>
      <Link
        to={
          `/${urlPrefix}/collections/` +
          getTextFromLanguage(collection.slugs, langCode)
        }
        style={{ textDecoration: "none" }}
      >
        <Card elevation={0} style={{ border: "0px solid transparent" }}>
          <CardActionArea>
            <img
              src={collection.thumbnail}
              style={{
                height: 250,
                width: "100%",
                objectFit: "cover",
                borderBottomLeftRadius: 7,
                borderBottomRightRadius: 7,
              }}
              alt="Thumbnail"
            />

            <CardContent>
              <Typography
                align="center"
                gutterBottom
                variant="h5"
                component="h2"
              >
                {getTextFromLanguage(collection.title.text, langCode)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  </>
)

export default Collection
