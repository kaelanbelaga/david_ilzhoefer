import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("GalleryImageWidget", {
  title: "Gallery Image",
  attributes: {
    title: {
      title: "Title"
    },
    subtitle: {
      title: "Subtitle"
    },
    mainImage: {
      title: "Main image"
    },
    extraImages: {
      title: "Extra images"
    },
    tags: {
      title: "Tags",
    },
  },
  properties: ["title", "subtitle", "mainImage", "extraImages", "tags",],
});
