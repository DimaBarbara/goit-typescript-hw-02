import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa';
import styles from "./ErrorMessage.module.css"

const ErrorMessage = () => (
    
  <div className={styles.div} >
    <FaExclamationCircle className={styles.circle} />
    <p>Виникла помилка, будь-ласка, спробуйте ще.</p>
  </div>
);
export default ErrorMessage