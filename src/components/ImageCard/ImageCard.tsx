import React from 'react'
import styles from "./ImageCard.module.css"
import {Image} from "../types"

interface ImageCardProps {
  image: Image; 
}
const ImageCard: React.FC<ImageCardProps> = ({image}) => {



  return (
    <div>
      <img
        className={styles.img}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>

  )
}

export default ImageCard