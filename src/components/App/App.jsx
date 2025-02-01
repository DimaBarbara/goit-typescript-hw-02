import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { Toaster, toast } from 'react-hot-toast';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import Modal from 'react-modal';

const API_KEY = "WUvd5iJzn-_X-3--F86uyAbVF5Uy9sgLGMBrfWeTI0M";
const API_URL = "https://api.unsplash.com/search/photos";
Modal.setAppElement('#root');

const App = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [choosenImage, setChoosenImage] = useState(null);

    const openModal = (image) => {
        setIsOpen(true);
        setChoosenImage(image);
    };

    const closeModal = () => {
        setIsOpen(false);
        setChoosenImage(null);
    };

    
    useEffect(() => {
        if (!query) return; 

        const fetchImages = async () => {
            try {
                setLoading(true);
                setError(false);

                const response = await axios.get(API_URL, {
                    params: {
                        query,
                        client_id: API_KEY,
                        page,
                        per_page: 12,
                    }
                });

                if (response.data.results.length === 0) {
                    toast.error("Sorry, no results found");
                    return;
                }

                setImages((prevImages) => 
                    page === 1 ? response.data.results : [...prevImages, ...response.data.results]
                );

            } catch (error) {
                console.error(error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [query, page]);

    
    const handleSearch = (topic) => {
        setQuery(topic);
        setPage(1);
        setImages([]); 
    };

    
    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearch} />
            {!error ? <ImageGallery items={images} openModal={openModal} /> : <ErrorMessage />}
            {images.length > 0 && !error && <LoadMoreBtn loadMore={loadMore} />}
            {loading && <Loader />}
            <Toaster />
            <ImageModal isOpen={modalIsOpen} closeModal={closeModal} image={choosenImage} />
        </div>
    );
};

export default App;
