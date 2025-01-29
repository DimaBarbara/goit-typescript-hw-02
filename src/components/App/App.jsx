import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from '../SearchBar/SearchBar'
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'


const App = () => {
    const API_KEY = "WUvd5iJzn-_X-3--F86uyAbVF5Uy9sgLGMBrfWeTI0M";
    const API_URL = "https://api.unsplash.com/search/photos";
    

    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(0);

    const handleSearch = async (topic) => {
        try {

            setLoading(true)
            const response = await axios.get(API_URL, {
                params: {
                    query: topic,
                    client_id: API_KEY,
                    page: page,
                }
            });   
            if (response.data.results.length === 0) {
                toast.error("Sorry, no results found")
                return;
            }
            setImages(response.data.results)
        } catch (error) {
            console.log(error);
            setError(true)

        } finally {
            setLoading(false)

        }   
    };
    const loadMore = async () => {
        try {
            setLoading(true);
            const nextPage = page + 1;
            setPage(nextPage);
            const response = await axios.get(API_URL, {
                params: {
                    query: query,
                    client_id: API_KEY,
                    page: nextPage,
                } 
            });

            setImages((prevImages) => [...prevImages, ...response.data.results]);
        } catch (error) {
            console.log(error);
            setError(true);
        } finally {
            setLoading(false);
        }
        

    }

  return (
      <div>
          <SearchBar onSubmit ={handleSearch} />
          {!error ? <ImageGallery items={images} /> : <ErrorMessage />}
          {images.length > 0 && <LoadMoreBtn loadMore={loadMore } />}
          {loading && <Loader />}
          <Toaster />
    </div>
  )
}

export default App