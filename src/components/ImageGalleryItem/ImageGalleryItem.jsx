import React from 'react';
// import { toToastItem } from 'react-toastify/dist/utils';

const ImageGalleryItem = ({ item, onModalOpen }) => {
  return (
    <li key={item.id}>
      <img
        src={item.webformatURL}
        alt={item.tags}
        onClick={() => onModalOpen(item.largeImgURL)}
      />
    </li>
  );
};

export default ImageGalleryItem;
