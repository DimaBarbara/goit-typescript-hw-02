import React from 'react'
import Modal from 'react-modal';
import styles from "./ImageModal.module.css"
import { Image } from '../types';

interface ImageModalProps {
  isOpen: boolean;
  closeModal: () => void;
  image: Image | null;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, closeModal, image }) => {
  return (
    <Modal
      className={styles.modal}
      isOpen={isOpen}
      onRequestClose={closeModal}  
      >
          {image && (
              <img src={image.urls.regular} alt={image.alt_description}/>
            )}
      </Modal>
  )
}

export default ImageModal