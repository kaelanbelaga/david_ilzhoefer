import * as React from "react";
import * as Scrivito from "scrivito";
import Lightbox from 'react-images';
import isImage from "../../utils/isImage";
import fullScreenWidthPixels from "../../utils/fullScreenWidthPixels";
import TagList from "../../Components/TagList";
import { stringify } from "querystring";





const divStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "end",
  margin: "10vh 0",
  transition: "all .3s",
}

const imgStyle = {
  maxHeight: "80vh",
  maxWidth: "80vw",
  margin: "0",
}
const textStyle = {
  margin: "0",
  marginLeft: "5vw",
}


const tags = []

for (let i= 0; i < 10; i++) {
  let x = 2000 + i
  tags.push(x.toString())
}
 
class GalleryImageComponent extends React.Component { 
  constructor(props) {
    super(props);
 
    this.state = {
      photoIndex: 0,
      isOpen: false,
      lightboxIsOpen: false,
    };

    this.openLightbox = this.openLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
  

  }

  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  gotoImage(index) {
    this.setState({
      currentImage: index,
    });
  }

 
  render() {
    const { photoIndex, isOpen } = this.state;
    const { widget } = this.props;
    const imgs = widget.get("extraImages");
    const lightboxImages = imgs.map(image => lightboxOptions(image));
    
    const classNames = [
      
    ]
    const tags = widget.get("tags")


    if (this.props.tags && !tags.includes(this.props.tags)) {
      classNames.push("squeezed");
      
    }
  
    return (
      
      <div id="gallery_image_widget" className={classNames}>
        <Scrivito.ImageTag id="gallery_image_widget__img" className={classNames} content={this.props.widget} attribute="mainImage" tag="img" onClick={() => this.setState({ lightboxIsOpen: true })}/>
        <span id="gallery_image_widget__text_span">
          <Scrivito.ContentTag content={this.props.widget} attribute="title" tag="h4"/>
          <p> &nbsp; -  &nbsp;</p>
          <Scrivito.ContentTag content={this.props.widget} attribute="subtitle" tag="p"/>
        </span>

        <Lightbox
        images={lightboxImages}
        // isOpen={this.state.lightboxIsOpen}
        // onClickPrev={this.gotoPrevious}
        // onClickNext={this.gotoNext}
        // onClose={this.closeLightbox}

        currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            // onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
            showThumbnails
            backdropClosesModal
          />
 
        {/* {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )} */}
      </div>
    );
  }
}

Scrivito.provideComponent("GalleryImageWidget", GalleryImageComponent);

function lightboxOptions(galleryImageWidget) {

  const binary = galleryImageWidget.get("blob");
  const srcUrl = binary.optimizeFor({ width: fullScreenWidthPixels() }).url();
  const alt = galleryImageWidget.get("alternativeText");

  return {
    src: srcUrl,
    thumbnail: srcUrl,
    alt,
  };
}

function allTags(images) {
  const tagsArray = images.map(image => image.get("tags"));

  // flatten tags
  const tags = tagsArray.reduce((a, b) => a.concat(b), []);

  // unique tags
  const uniqueTags = [...new Set(tags)];

  // sort tags
  return uniqueTags.sort();
}
