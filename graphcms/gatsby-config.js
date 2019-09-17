const fs = require("fs")
const { buildSchema } = require("graphql")

module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GraphCMS",
        fieldName: "graphcms",
        url:
          "https://api-apeast.graphcms.com/v1/ck0ni5i411me301cbf179do1t/master",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Brikl",
        fieldName: "brikl",
        url: "https://api.mybrikl.com/graphql",
        headers: {
          Authorization: "gatsby-theme-contest-GUESTORG-5AvgvQ7nm",
          "x-brikl-shop-id": "gatsby-theme-contest",
          "x-brikl-client-id": "gatsby-theme-contest",
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
