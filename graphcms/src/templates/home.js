import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"

const HomeTemplate = ({ pageContext }) => {
  console.log(pageContext.brikl)
  let homeData
  try {
    if (pageContext.data && pageContext.data.home) {
      homeData = pageContext.data.home
    }
  } catch (error) {}
  return (
    <Layout pageContext={pageContext}>
      <Banner
        title={homeData.bannerTitle}
        url={homeData.bannerUrl}
        image={homeData.bannerImage.url}
      />
      {/* <h4>{JSON.stringify(homeData)}</h4> */}
    </Layout>
  )
}

export default HomeTemplate
