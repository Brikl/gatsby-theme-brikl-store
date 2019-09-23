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
                description
                status
                slugs {
                  langCode
                  content
                }
                fields {
                  id
                  name
                  modelId
                  sortOrder
                  description
                  type
                  contentView {
                    type
                    ... on Brikl_ContentViewString {
                      type
                      contentString
                    }
                    ... on Brikl_ContentViewSelect {
                      type
                      contentSelect
                    }
                    ... on Brikl_ContentViewCollection {
                      type
                      collectionIds
                      collections {
                        id
                      }
                    }
                    ... on Brikl_ContentViewProduct {
                      type
                      productIds
                      products {
                        id
                      }
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
