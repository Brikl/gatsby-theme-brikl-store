export default {
  title: "Banner",
  name: "banner",
  type: "object",
  fields: [
    {
      name: "bannerTitle",
      title: "Banner Title",
      type: "string"
    },
    {
      name: "bannerSubtitle",
      title: "Banner Subtitle",
      type: "string"
    },
    {
      name: "bannerUrl",
      title: "Banner Url",
      type: "string"
    },
    {
      title: "Banner Image",
      name: "bannerImage",
      type: "image"
    }
  ],
  preview: {
    select: {
      title: "bannerTitle",
      media: "bannerImage"
    }
  }
};
