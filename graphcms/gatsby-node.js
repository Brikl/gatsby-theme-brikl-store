exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      graphcms {
        home(where: { id: "ck0nkekk0beu3083030ww2zvh" }) {
          status
          updatedAt
          createdAt
          id
          bannerImage {
            status
            updatedAt
            createdAt
            id
            handle
            fileName
            height
            width
            size
            mimeType
          }
          bannerTitle
          bannerUrl
          collectionsTitle
          collections
          designYourOwnTitle
          designYourOwnBannerImage {
            status
            updatedAt
            createdAt
            id
            handle
            fileName
            height
            width
            size
            mimeType
          }
          designYourOwnBannerUrl
          productsTitle
          products
          discoverTitle
          discoverSubtitle
          discoverButton
          subscribeTitle
          subscribeSubtitle
          interests
        }
      }
    }
  `)

  try {
    const data = result.data

    const basePath = "/"
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/templates/home.js"),
      context: {
        data: data.graphcms,
      },
    })
  } catch (error) {
    console.log("gatsby-node.error", error)
  }
}
