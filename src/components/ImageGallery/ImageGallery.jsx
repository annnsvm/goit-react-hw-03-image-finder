import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            imageUrl={image.webformatURL}
            altText={image.tags}
            onClick={() => onModalOpen(image.largeImageURL)}
          ></ImageGalleryItem>
        ))}
    </ul>
  );
};

ImageGallery.propTypes = {
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
