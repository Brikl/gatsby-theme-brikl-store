export default {
  name: "home",
  title: "Home",
  type: "document",
  fields: [
    {
      title: "Banner as Object",
      name: "banner",
      type: "banner"
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96
      }
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "richTextExample",
      title: "Rich Text Example",
      type: "localeBlockContent"
    }
  ],

  preview: {
    select: {
      title: "title",
      manufactor: "manufactor.title",
      media: "defaultProductVariant.images[0]"
    }
  }
};
