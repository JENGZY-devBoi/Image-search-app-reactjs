import './SearchBar.css';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  
  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>  
        <input
          text="text"
          onChange={handleChange}
          value={term}
          placeholder="search something..."
        />
      </form>
    </div>
  );
};

export default SearchBar;