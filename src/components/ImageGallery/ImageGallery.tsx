import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css"
import {Image} from "../types"

interface ItemProps {
    items: Image[] ;
    openModal: (image: Image) => void;
}
const ImageGallery: React.FC<ItemProps> = ({ items, openModal }) => {
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
