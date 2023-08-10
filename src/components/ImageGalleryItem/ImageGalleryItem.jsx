import React from 'react';
import css from './ImageGalerryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ item, onModalOpen }) => {
  return (
    <li key={item.id} className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onModalOpen(item.largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.prototype = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onModalOpen: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
