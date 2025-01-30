import React from 'react'
import Modal from 'react-modal';
import styles from "./ImageModal.module.css"

const ImageModal = ({ isOpen, closeModal, image }) => {
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