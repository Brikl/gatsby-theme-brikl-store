exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      brikl {
        shop(id: "vermarc") {
          id
          languages
          languageWithoutUrlPrefix
          currencies
          defaultCurrency
          defaultLanguage
          name
          contentModels(shopId: "vermarc") {
            edges {
              node {
                id
                name
                fields {
                  id
                  name
                  sortOrder
                  description
                  contentView {
                    id
                    type
                    ... on Brikl_ContentViewString {
                      id
                      fieldId
                      sortOrder
                      type
                      contentString
                    }
                    ... on Brikl_ContentViewUpload {
                      id
                      fieldId
                      sortOrder
                      type
                      contentUpload
                    }
                    ... on Brikl_ContentViewCollection {
                      id
                      fieldId
                      type
                      sortOrder
                      collections {
                        id
                        thumbnail
                        slugs {
                          content
                          langCode
                        }
                        title {
                          id
                          text {
                            content
                            langCode
                          }
                        }
                      }
                    }
                    ... on Brikl_ContentViewProduct {
                      id
                      fieldId
                      type
                      sortOrder
                      products {
                        id
                        media {
                          id
                          image
                          sortOrder
                        }
                        price {
                          currency
                          value
                          taxPercent
                          includesTax
                        }
                        slugs {
                          content
                          langCode
                        }
                        description {
                          id
                          text {
                            content
                            langCode
                          }
                        }
                        title {
                          id
                          text {
                            content
                            langCode
                          }
                        }
                      }
                    }
                    ... on Brikl_ContentViewSelect {
                      id
                      fieldId
                      type
                      sortOrder
                      contentSelect
                    }
                  }
                }
              }
            }
          }
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
        brikl: data.brikl,
      },
    })
  } catch (error) {
    console.log("gatsby-node.error", error)
  }
}
