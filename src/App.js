import './App.css';
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import ImageList from './components/ImageList';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
    console.log(result);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <div className="container">
        <ImageList images={images} />
      </div>
    </>
  );
}

export default App;