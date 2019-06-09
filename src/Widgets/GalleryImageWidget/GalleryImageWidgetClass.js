import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const GalleryImageWidget = Scrivito.provideWidgetClass("GalleryImageWidget", {
  attributes: {
    title: "string",
    subtitle: "string",
    tags: "stringlist",
    mainImage: ["reference", { only: ["Image"] }],
    extraImages: ["referencelist", { only: ["Image"] }],
    
  },
});

export default GalleryImageWidget;
