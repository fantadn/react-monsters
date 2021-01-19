import React from 'react';

import './search-box.styles.css';

// creat a functional component
// unlike class componenet(such as app.js componenet), functional componenet do not have access to the state becaues they do not have access constructor. They do not have access to life cycle methods/internal methods.
// so, functional component gets some props and return some html.
export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className ='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)