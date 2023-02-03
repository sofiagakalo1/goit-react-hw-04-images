import PropTypes from 'prop-types';
import React from 'react';
import css from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ tags, webformatURL, openModal }) => {
  return (
    <li onClick={openModal} className={css.imageGalleryItem}>
      <img
        className={css.imageGalleryItem_image}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  openModal: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
