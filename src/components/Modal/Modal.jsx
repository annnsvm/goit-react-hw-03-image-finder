import React, { Component } from 'react';
import css from './modal.module.css';

class Modal extends Component {
  onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onModalClose();
    }
  };

  onKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onModalClose();
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { largeImgURL } = this.props;
    // console.log('Modal largeImgURL:', showModal);
    return (
      <div className={css.overlay} onClick={this.onOverlayClick}>
        <div className={css.modal}>
          <img src={largeImgURL} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
