import * as React from "react";
import { Link as ScrollLink } from "react-scroll";

function ScrollToNextSectionLink({ heightClassName }) {
  if (heightClassName !== "full-height") {
    return null;
  }

  return (
    <ScrollLink
      to="nextSection"
      smooth
      duration={500}
      className="btn-round  hidden-xs"
    >
      <h4 id="scrollV" className="color-dark">V</h4>
    </ScrollLink>
  );
}

export default ScrollToNextSectionLink;
