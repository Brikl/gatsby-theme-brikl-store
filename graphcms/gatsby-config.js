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
  ],
}
