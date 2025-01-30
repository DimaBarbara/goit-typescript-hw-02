import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css"

const ImageGallery = ({ items, openModal }) => {
    return (
        <ul className={styles.ul} >
            {items.map((image) => (
                <li className={styles.li} key={image.id} onClick={() => openModal(image)}>
                    <ImageCard image={ image} />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
