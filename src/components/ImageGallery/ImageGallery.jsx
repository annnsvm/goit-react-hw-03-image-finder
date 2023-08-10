import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

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

ImageGallery.prototype = {
  onModalOpen: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};

export default ImageGallery;
