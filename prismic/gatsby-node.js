exports.createPages = async ({ actions, graphql }) => {
  const result = await graphql(`
    query {
      allPrismicProduct {
        edges {
          node {
            type
            id
            data {
              body {
                ... on PrismicProductBodyBanner {
                  id
                  slice_type
                  primary {
                    bannerimage1 {
                      url
                    }
                    bannertitle1 {
                      text
                    }
                  }
                }
                ... on PrismicProductBodyCollections {
                  id
                  slice_type
                  primary {
                    collections
                    collectionstitle {
                      text
                    }
                  }
                }
                ... on PrismicProductBodyDiscoverCard {
                  id
                  slice_type
                  primary {
                    discoverbutton {
                      text
                    }
                    discoversubtitle {
                      text
                    }
                    discovertitle {
                      text
                    }
                  }
                }
                ... on PrismicProductBodyProducts {
                  id
                  slice_type
                  primary {
                    products
                    productstitle {
                      text
                    }
                  }
                }
                ... on PrismicProductBodySubscribeCard {
                  id
                  slice_type
                  primary {
                    subscribesubtitle {
                      text
                    }
                    subscribetitle {
                      text
                    }
                  }
                }
              }
            }
          }
        }
      }
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
    }
  `)

  try {
    const data = result.data

    const basePath = "/"
    actions.createPage({
      path: basePath,
      component: require.resolve("./src/templates/home.js"),
      context: {
        data: data.allPrismicProduct,
        brikl: data.brikl,
      },
    })
  } catch (error) {
    console.log("gatsby-node.error", error)
  }
}
