import React from 'react'
import { toast } from 'react-hot-toast';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import styles from "./SearchBar.module.css"
const SearchBar = ({ onSubmit }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const topic = form.elements.topic.value;
        if (form.elements.topic.value.trim() === "") {
            toast.error("Try to enter something")
			return;
		}
        onSubmit(topic);
        form.reset();

    }
  return (
    <header className={styles.header}>
      <BackgroundVideo/>
  <form onSubmit={handleSubmit}>
    <input
      className={styles.input}
      type="text"
      autoComplete="off"
      autoFocus
                  placeholder="Search images and photos"
                  name="topic"
    />
    <button className={styles.button} type="submit">Search</button>
  </form>
</header>

  )
}

export default SearchBar