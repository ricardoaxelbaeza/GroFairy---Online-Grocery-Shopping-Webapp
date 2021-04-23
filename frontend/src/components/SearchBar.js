import React from 'react'

const SearchBar = (props) =>{
    return(
        <input type = 'search'
        className='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
        style={{position: 'fixed', marginTop: 'auto', width: '100vw', height: '4vh'}}
        />
    )
}

export default SearchBar