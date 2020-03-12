import React from "react";
import shortId from "shortid";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";

const ImageGallery = ({ articles}) => (
    <>
  <ul className="ImageGallery">
      {console.log('articles', articles)}
    {articles.map(article => (
      <ImageGalleryItem article={article} key={article.id} />
    ))}
  </ul>

  </>
);

export default ImageGallery;
//     <div style={{ display: 'flex', flexWrap: 'wrap' }}>
//     {data.map(article => {
//       const transformArticle = { ...article, id: shortId() };
//       return (
//         <MediaCard key={transformArticle.id} {...(transformArticle || {})} />
//       );
//     })}
//   </div>
