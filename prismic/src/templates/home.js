import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Title from "../components/Title"
import Product from "../components/Product"
import { Grid } from "@material-ui/core"
import Collection from "../components/Collection"
import Discover from "../components/Discover"
import Subscribe from "../components/Subscribe"

const HomeTemplate = ({ pageContext }) => {
  let homeData
  const products = pageContext.brikl.shop.products.edges
  const collections = pageContext.brikl.shop.collections.edges
  let langCode = pageContext.languages || "en_UK"
  let urlPrefix = pageContext.urlPrefix
  try {
    if (pageContext.data) {
      pageContext.data.edges.map(dataNode => {
        return (homeData = dataNode.node)
      })
    }
  } catch (error) {}

  console.log(homeData)

  return (
    <Layout pageContext={pageContext}>
      {homeData
        ? homeData.data.body.map((slice, index) => {
            if (slice.slice_type === "banner") {
              let data = slice.primary
              console.log(slice)
              return (
                <Banner
                  title={data.bannertitle1.text}
                  url={"test"}
                  image={data.bannerimage1.url}
                />
              )
            } else if (slice.slice_type === "collections") {
              let data = slice.primary
              return (
                <>
                  <Title string={data.collectionstitle.text} variant="h4" />
                  <Grid
                    justify="center"
                    container
                    spacing={3}
                    style={{ padding: "12pxp 24px" }}
                  >
                    {data.collections === "true"
                      ? collections.map(collectionNode => {
                          let collection = collectionNode.node
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
            } else if (slice.slice_type === "products") {
              let data = slice.primary
              return (
                <>
                  <Title string={data.productstitle.text} variant="h4" />
                  <Grid
                    justify="center"
                    container
                    spacing={3}
                    style={{ padding: "12pxp 24px" }}
                  >
                    {data.products === "true"
                      ? products.slice(0, 3).map(productsNode => {
                          let product = productsNode.node
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
            } else if (slice.slice_type === "discover_card") {
              let data = slice.primary
              return (
                <Grid container style={{ paddingTop: 20 }}>
                  <Discover
                    title={data.discovertitle.text}
                    subTitle={data.discoversubtitle.text}
                    button={data.discoverbutton.text}
                  />
                </Grid>
              )
            } else if (slice.slice_type === "subscribe_card") {
              let data = slice.primary
              return (
                <Grid
                  container
                  justify="center"
                  alignContent="center"
                  alignItems="center"
                  style={{ paddingTop: 20 }}
                >
                  <Subscribe
                    title={data.subscribetitle.text}
                    subTitle={data.subscribesubtitle.text}
                    interests={["Cycling", "Athletics", "Football"]}
                  />
                </Grid>
              )
            }
          })
        : null}
    </Layout>
  )
}

export default HomeTemplate
