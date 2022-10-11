import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from 'components';
import icons from 'images/icons.svg';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, child, className = s.modal }) => {
    useEffect(() => {
        window.addEventListener('keydown', closeModal);
        return () => window.removeEventListener('keydown', closeModal);
    });

    const closeModal = event => {
        if (event.code === 'Escape') {
            onClose();
        }
    };

    const onClick = event => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={s.overlay} onClick={onClick}>
            <Icon className={s.icon} href={`${icons}#close`} width="25" height="25" onClick={onClose} />
            <div className={className}>{child}</div>
        </div>,
        modalRoot
    );
};

export default Modal;
