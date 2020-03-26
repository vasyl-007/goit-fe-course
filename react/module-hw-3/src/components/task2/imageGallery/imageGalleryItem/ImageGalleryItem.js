import React from "react";

const ImageGalleryItem = ({article}) => (
  <li className="ImageGalleryItem">
    <img src={article.webformatURL} alt="" className="ImageGalleryItem-image" />
  </li>
);

export default ImageGalleryItem;
