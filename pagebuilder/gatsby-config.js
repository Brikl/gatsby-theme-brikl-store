const fs = require("fs")
const { buildSchema } = require("graphql")
const env = require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Brikl",
        fieldName: "brikl",
        url: "http://localhost:1212/graphql",
        headers: {
          Authorization: process.env.AUTH,
          "x-brikl-shop-id": process.env.GATSBY_BRIKL_SHOP_ID,
          "x-brikl-client-id": process.env.GATSBY_BRIKL_CLIENT_ID,
        },
        createSchema: async () => {
          const sdl = fs
            .readFileSync(`${__dirname}/brikl-schema.gql`)
            .toString()
          return buildSchema(sdl)
        },
      },
    },
  ],
}
