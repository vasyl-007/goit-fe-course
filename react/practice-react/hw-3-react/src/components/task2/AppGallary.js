import React, { Component } from "react";
// import ImageGallery from "./imageGallery/ImageGallery";
// import ImageGalleryItem from "./imageGallery/imageGalleryItem";
// import Loader from "./imageGallery/Loader";
// import Modal from "./imageGallery/Modal";
import Searchbar from "./imageGallery/Searchbar";
import css from "./AppGallary.module.css";

class AppGallary extends Component {
  state = {};
  render() {
    return (
      <div className={css.App}>
        <Searchbar />
        <p className={css.para}>IT WORKS</p>

      </div>
    );
  }
}

export default AppGallary;
