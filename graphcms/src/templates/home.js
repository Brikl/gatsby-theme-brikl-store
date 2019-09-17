import React from "react"
import Layout from "../components/Layout"

const HomeTemplate = ({ pageContext }) => {
  let homeData
  try {
    if (pageContext.data && pageContext.data.home) {
      homeData = pageContext.data.home
    }
  } catch (error) {}
  return (
    <Layout pageContext={pageContext}>
      <h4>{JSON.stringify(homeData)}</h4>
    </Layout>
  )
}

export default HomeTemplate
