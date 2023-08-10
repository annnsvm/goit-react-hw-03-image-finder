import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.length > 0 &&
        images.map((image, index) => (
          <ImageGalleryItem
            key={`${image.id}-${index}`} // Combine 'id' and 'index'
            item={image}
            onModalOpen={onModalOpen}
          ></ImageGalleryItem>
        ))}
    </ul>
  );
};

export default ImageGallery;
