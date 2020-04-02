import React, { Component, Fragment } from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";
import Modal from "../modal/Modal";

class ImageGallery extends Component {
  state = {
    isOpen: false,
    imageLargeUrl: "",
    altToImage: ""
  };
  componentDidUpdate() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  }
  handleModal = e => {
    if (e.target.nodeName !== "IMG") return;
    this.setState({
      isOpen: true,
      imageLargeUrl: e.target.dataset.url,
      altToImage: e.target.tags
    });
  };
  handleCloseModal = e => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    const { isOpen, imageLargeUrl, altToImage } = this.state;
    return (
      <Fragment>
        <ul className={s.imageGallery} onClick={this.handleModal}>
          {this.props.articles.map(article => (
            <ImageGalleryItem article={article} key={article.id} />
          ))}
        </ul>
        {isOpen && (
          <Modal
            largeImg={imageLargeUrl}
            handleCloseModal={this.handleCloseModal}
            alt={altToImage}
          />
        )}
      </Fragment>
    );
  }
}

export default ImageGallery;
