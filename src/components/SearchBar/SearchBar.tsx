import React, { FormEvent } from 'react'
import { toast } from 'react-hot-toast';
import BackgroundVideo from '../BackgroundVideo/BackgroundVideo';
import styles from "./SearchBar.module.css"

interface SearchBarProps {
  onSubmit: (topic: string)  => void ;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const topic = (form.elements.namedItem('topic') as HTMLInputElement).value;
        if (topic.trim() === "") {
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