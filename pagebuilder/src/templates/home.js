import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Title from "../components/Title"
import Product from "../components/Product"
import { Grid } from "@material-ui/core"
import Collection from "../components/Collection"
import Discover from "../components/Discover"
import Subscribe from "../components/Subscribe"
import { sortBy } from "lodash"

const Home = ({ pageContext }) => {
  let model = pageContext.brikl.shop.contentModels.edges[1]
  let langCode = pageContext.languages || "en_UK"
  let urlPrefix = pageContext.urlPrefix
  let sorted = []
  if (model) {
    sorted = sortBy(model.node.fields, "sortOrder")
    console.log(sorted)
  }

  return (
    <Layout pageContext={pageContext}>
      {sorted.map((field, i) => {
        if (field.name === "Banner") {
          return <Banner data={field.contentView} />
        } else if (field.name === "Featured") {
          let collectionData = []
          let collections = []
          if (field.contentView) {
            collectionData = sortBy(field.contentView, "sortOrder")
          }
          if (collectionData) {
            collections = collectionData[1].collections
          }

          return (
            <>
              <Title string={collectionData[0].contentString} variant="h4" />
              <Grid
                justify="center"
                container
                spacing={3}
                style={{ padding: "12pxp 24px" }}
              >
                {collections
                  ? collections.map(collection => {
                      return (
                        <Collection
                          collection={collection}
                          urlPrefix={urlPrefix}
                          langCode={langCode}
                        />
                      )
                    })
                  : null}
              </Grid>
            </>
          )
        } else if (field.name === "Favourites") {
          let productData = []
          let products = []
          if (field.contentView) {
            productData = sortBy(field.contentView, "sortOrder")
          }
          if (productData) {
            products = productData[1].products
          }

          return (
            <>
              <Title string={productData[0].contentString} variant="h4" />
              <Grid
                justify="center"
                container
                spacing={3}
                style={{ padding: "12pxp 24px" }}
              >
                {products
                  ? products.slice(0, 3).map(product => {
                      return (
                        <Product
                          product={product}
                          urlPrefix={urlPrefix}
                          langCode={langCode}
                        />
                      )
                    })
                  : null}
              </Grid>
            </>
          )
        } else if (field.name === "Discover") {
          let discover = []
          if (field.contentView) {
            discover = sortBy(field.contentView, "sortOrder")
          }
          return (
            <Grid container style={{ paddingTop: 20 }}>
              <Discover
                title={discover[0].contentString}
                subTitle={discover[1].contentString}
                button={discover[2].contentString}
              />
            </Grid>
          )
        } else if (field.name === "Subscribe") {
          let subscribe = []
          if (field.contentView) {
            subscribe = sortBy(field.contentView, "sortOrder")
          }

          return (
            <Grid
              container
              justify="center"
              alignContent="center"
              alignItems="center"
              style={{ paddingTop: 20 }}
            >
              <Subscribe
                title={subscribe[0].contentString}
                subTitle={subscribe[1].contentString}
                interests={subscribe[2].contentSelect}
              />
            </Grid>
          )
        }
      })}
    </Layout>
  )
}

export default Home
