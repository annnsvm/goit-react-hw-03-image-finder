import React from 'react';
import css from './ImageGalerryItem.module.css';

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

export default ImageGalleryItem;
