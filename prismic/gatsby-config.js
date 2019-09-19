const fs = require("fs")
const { buildSchema } = require("graphql")

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `brikl-test`,
        accessToken: `MC5YWUx6UFJFQUFDWUFiWXpf.77-9Jko_VDM177-977-9DD4O77-977-9VydE77-977-9Ae-_ve-_vSXvv70-77-977-9XO-_vWpzBg`,
        linkResolver: ({ node, key, value }) => product => `/${product.uid}`,
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
