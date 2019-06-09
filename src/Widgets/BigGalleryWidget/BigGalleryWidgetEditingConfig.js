import * as Scrivito from "scrivito";

Scrivito.provideEditingConfig("BigGalleryWidget", {
  title: "Big Gallery",
  attributes: {
    images: {
      title: "Images",
    },
    showTags: {
      title: "Show list of tags?",
      description: "Default: No",
      values: [{ value: "yes", title: "Yes" }, { value: "no", title: "No" }],
    },
  },
  properties: ["images", "showTags"],
});
