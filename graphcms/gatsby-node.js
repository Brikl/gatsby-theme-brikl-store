exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      brikl {
        shop(id: "gatsby-theme-contest") {
          id
          languages
          languageWithoutUrlPrefix
          currencies
          defaultCurrency
          defaultLanguage
          name
          salesChannels {
            edges {
              node {
                id
                logo
                introductionText {
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
                slugs {
                  content
                  langCode
                }
                products {
                  edges {
                    node {
                      product {
                        id
                        inventory
                        no
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
                        status
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
                  }
                }
              }
            }
          }
          collections {
            edges {
              node {
                id
                mainBanner
                no
                description {
                  id
                  text {
                    content
                    langCode
                  }
                }
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
                products {
                  collectionId
                  featured
                  productId
                  sortOrder
                  product {
                    id
                    inventory
                    media {
                      id
                      image
                      isThumbnail
                      isBanner
                      productId
                    }
                    no
                    price {
                      value
                      currency
                      includesTax
                      taxPercent
                    }
                    status
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
                    description {
                      id
                      text {
                        content
                        langCode
                      }
                    }
                  }
                }
              }
            }
          }
          products(shopId: "gatsby-theme-contest") {
            edges {
              node {
                id
                inventory
                no
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
                status
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
          }
        }
      }
      graphcms {
        home(where: { id: "ck0nkekk0beu3083030ww2zvh" }) {
          status
          updatedAt
          createdAt
          id
          bannerImage {
            url
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
            url
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
        brikl: data.brikl,
      },
    })
  } catch (error) {
    console.log("gatsby-node.error", error)
  }
}
