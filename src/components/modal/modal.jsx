import React, { PropTypes } from 'react';
import './modal.scss';

const Modal = ({ children }) => (
    <div className="modal">
        <div className="modal-background" />
        <div className="modal-content">
            {children}
        </div>
    </div>
);

Modal.propTypes = {
    children: PropTypes.element,
};

export default Modal;
