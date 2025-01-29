import React from "react";

const ImageGallery = ({ items }) => {
    return (
        <ul >
            {items.map((image) => (
                <li key={image.id}>
                    <img
                        src={image.urls.small}
                        alt={image.alt_description}
                        
                    />
                </li>
            ))}
        </ul>
    );
};

export default ImageGallery;
