import React from "react";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ article }) => (
  <li className={s.imageGalleryItem}>
    <img
      src={article.webformatURL}
      alt={article.tags}
      className={s.imageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;
