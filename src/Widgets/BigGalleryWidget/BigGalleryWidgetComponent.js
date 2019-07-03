import * as React from "react";
import * as Scrivito from "scrivito";
import Lightbox from 'react-images';
import isImage from "../../utils/isImage";
import fullScreenWidthPixels from "../../utils/fullScreenWidthPixels";
import TagList from "../../Components/TagList";
import { stringify } from "querystring";

class BigGalleryComponent extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      currentTag: '',
    };

    this.setTag = this.setTag.bind(this);

  }


  setTag(tag) {
    this.setState({
      currentTag: tag,
    });
  }
 
  render() {
    const { photoIndex, isOpen } = this.state;
    const { widget } = this.props;

    return ( 
      
      <div className="big_gallery_widget__wrapper" id="big_gallery">


      <TagList
          showTags={widget.get("showTags") === "yes"}
          tags={allTags(this.props.widget.get("images"))}
          currentTag={this.state.currentTag}
          setTag={this.setTag}
        />

      <Scrivito.ContentTag
        className="big_gallery_widget__imgs"
        content={widget}
        attribute="images"
        widgetProps= {{
          tags: this.state.currentTag,
        }}
        />
      </div>
      
        
  
    );
  }
}



Scrivito.provideComponent("BigGalleryWidget", BigGalleryComponent);



function allTags(images) {
  const tagsArray = images.map(image => image.get("tags"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags.sort().reverse();
}
