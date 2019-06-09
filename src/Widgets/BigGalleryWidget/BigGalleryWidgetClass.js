import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const BigGalleryWidget = Scrivito.provideWidgetClass("BigGalleryWidget", {
  attributes: {
    images: ["widgetlist", { only: "GalleryImageWidget" }],
    showTags: ["enum", { values: ["yes", "no"] }],
  },
});


export default BigGalleryWidget;


