import React from "react"
import { sortBy } from "lodash"
import { Grid, Typography, Checkbox, FormControlLabel } from "@material-ui/core"
import Collection from "./Collection"
import Product from "./Product"

const Block = props => {
  const { data } = props
  let sorted = []
  if (data) {
    sorted = sortBy(data, "sortOrder")
  }

  return (
    <Grid style={{ padding: 40, border: "1px solid black" }}>
      {sorted.map((element, i) => {
        if (element.type === "TEXT") {
          return <Typography>{element.contentString}</Typography>
        } else if (element.type === "COLLECTION") {
          return (
            <Grid
              justify="center"
              container
              spacing={3}
              style={{ padding: "12pxp 24px" }}
            >
              {element.collections.map(collection => {
                return (
                  <Collection
                    collection={collection}
                    urlPrefix={"/"}
                    langCode={"en_UK"}
                  />
                )
              })}
            </Grid>
          )
        } else if (element.type === "PRODUCT") {
          return (
            <Grid
              justify="center"
              container
              spacing={3}
              style={{ padding: "12pxp 24px" }}
            >
              {element.products.slice(0, 3).map(product => {
                return (
                  <Product
                    product={product}
                    urlPrefix={"/"}
                    langCode={"en_UK"}
                  />
                )
              })}
            </Grid>
          )
        } else if (element.type === "SELECT") {
          return (
            <>
              {element.contentSelect.map((e, i) => {
                return (
                  <FormControlLabel
                    control={<Checkbox value={e} />}
                    label={e}
                  />
                )
              })}
            </>
          )
        }
      })}
    </Grid>
  )
}

export default Block
