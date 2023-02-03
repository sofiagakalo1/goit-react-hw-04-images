import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';

import css from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };
  render() {
    const { bigImg } = this.props;
    const { closeModal } = this;

    return createPortal(
      <div className={css.overlay} onClick={closeModal}>
        <div className={css.modal} onClick={closeModal}>
          <img src={bigImg} alt="modal" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  bigImg: PropTypes.string.isRequired,
};
