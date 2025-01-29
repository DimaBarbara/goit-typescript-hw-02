import React from 'react'
import { FaExclamationCircle } from 'react-icons/fa';

const ErrorMessage = () => (
    
  <div style={{ color: 'red', display: 'flex', alignItems: 'center' }}>
    <FaExclamationCircle style={{ marginRight: '10px' }} />
    <p>Виникла помилка, будь-ласка, спробуйте ще.</p>
  </div>
);
export default ErrorMessage