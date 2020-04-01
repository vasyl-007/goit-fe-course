import React from "react";
import s from "./ImageGallery.module.css";
import ImageGalleryItem from "../imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ articles }) => (
  <>
    <ul className={s.imageGallery}>
      {console.log("articles", articles)}
      {articles.map(article => (
        <ImageGalleryItem article={article} key={article.id} />
      ))}
    </ul>
  </>
);

export default ImageGallery;
