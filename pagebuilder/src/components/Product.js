import React from "react"
import { getTextFromLanguage } from "./utils"
import { Link } from "gatsby"
import { Typography, Grid, Card, CardActionArea } from "@material-ui/core"

const Product = ({ product, langCode, urlPrefix }) => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product.id}>
        <Link
          to={
            `${urlPrefix}/products/` +
            getTextFromLanguage(product.slugs, langCode)
          }
          style={{ textDecoration: "none" }}
        >
          <Card
            style={{
              height: "100%",
            }}
          >
            <CardActionArea
              style={{
                height: "100%",
              }}
            >
              <Grid
                container
                alignItems="space-around"
                style={{ height: "100%", paddingBottom: 16 }}
              >
                <Grid item xs={12}>
                  <img
                    src={product.media[0].image}
                    style={{
                      height: 200,
                      width: "100%",
                      objectFit: "contain",
                    }}
                    alt="Thumbnail"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{ padding: "8px 16px" }}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {getTextFromLanguage(product.title.text, langCode)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    style={{ padding: "8px 16px" }}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {getTextFromLanguage(product.description.text, langCode)}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="flex-end"
                    style={{ height: "100%" }}
                  >
                    <Typography
                      style={{ padding: "8px 16px" }}
                      variant="h5"
                      component="h2"
                    >
                      ${product.price.value} {product.price.currency}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </>
  )
}

export default Product
