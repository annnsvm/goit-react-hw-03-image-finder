import React from 'react';
import css from './ImageGalerryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ imageUrl, altText, onClick }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={imageUrl}
        alt={altText}
        onClick={onClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
