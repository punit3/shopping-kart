import React, { useState, useEffect } from 'react';
import '../styles/search.css'; // Import the CSS file

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    debouncedSearch();

    return () => clearTimeout(debouncedSearch);
  }, [searchTerm]);

  const performSearch = () => {
    console.log('Searching for:', debouncedSearchTerm);
    // Replace this with your actual search logic
  };

  useEffect(() => {
    performSearch();
  }, [debouncedSearchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchButtonClick = () => {
    performSearch();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search our catalog..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleSearchButtonClick} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;
