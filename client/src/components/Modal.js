import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="modal__overlay" onClick={handleClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={handleClose}>
          &times;
        </button>
        <div className="modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
