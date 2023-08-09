import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onModalOpen }) => {
  return (
    <ul className="gallery">
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem
            key={image.id}
            item={image}
            onModalOpen={onModalOpen}
          ></ImageGalleryItem>
        ))}
    </ul>
  );
};

export default ImageGallery;
