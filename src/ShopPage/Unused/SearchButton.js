import React from 'react';

const SearchButton = ( props ) => (
    <div id = 'search-button'>
        <button onClick = { props.filter }>SEARCH</button>
    </div>
);

export default SearchButton;