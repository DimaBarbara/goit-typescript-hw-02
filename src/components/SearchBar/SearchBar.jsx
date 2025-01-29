import React from 'react'
import { toast } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const topic = form.elements.topic.value;
        if (form.elements.topic.value.trim() === "") {
            toast.error("This didn't work.")
			return;
		}
        onSubmit(topic);
        form.reset();

    }
  return (
    <header>
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
                  placeholder="Search images and photos"
                  name="topic"
    />
    <button type="submit">Search</button>
  </form>
</header>

  )
}

export default SearchBar