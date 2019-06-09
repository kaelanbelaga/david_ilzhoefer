import * as Scrivito from "scrivito";
import { registerTextExtract } from "../../utils/textExtractRegistry";

const TypeformWidget = Scrivito.provideWidgetClass("TypeformWidget", {
  attributes: {
    headline: "string",
  },
});

registerTextExtract("TypeformWidget", [
  { attribute: "headline", type: "string" },
]);

export default TypeformWidget;
