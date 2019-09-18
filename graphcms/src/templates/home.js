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
  console.log(pageContext.brikl)
  let homeData
  const products = pageContext.brikl.shop.products.edges
  const collections = pageContext.brikl.shop.collections.edges
  let langCode = pageContext.languages || "en_UK"
  let urlPrefix = pageContext.urlPrefix
  try {
    if (pageContext.data && pageContext.data.home) {
      homeData = pageContext.data.home
    }
  } catch (error) {}
  console.log(homeData)

  return (
    <Layout pageContext={pageContext}>
      <Banner
        title={homeData.bannerTitle}
        url={homeData.bannerUrl}
        image={homeData.bannerImage.url}
      />
      <Title string={homeData.collectionsTitle} variant="h4" />
      <Grid
        justify="center"
        container
        spacing={3}
        style={{ padding: "12pxp 24px" }}
      >
        {homeData.collections
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
      <Title string={homeData.productsTitle} variant="h4" />
      <Grid
        justify="center"
        container
        spacing={3}
        style={{ padding: "12pxp 24px" }}
      >
        {homeData.products
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

      <Grid container style={{ paddingTop: 20 }}>
        <Discover
          title={homeData.discoverTitle}
          subTitle={homeData.discoverSubtitle}
          button={homeData.discoverButton}
        />
      </Grid>

      <Grid
        container
        justify="center"
        alignContent="center"
        alignItems="center"
        style={{ paddingTop: 20 }}
      >
        <Subscribe
          title={homeData.subscribeTitle}
          subTitle={homeData.subscibeSubtitle}
          interests={homeData.interests}
        />
      </Grid>
    </Layout>
  )
}

export default HomeTemplate
