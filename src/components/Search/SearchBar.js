import React, { Component } from 'react'
import './style.scss'

const SearchBar = () => {
    return (
        <div>
            <div className="search_bar">
                <input type="text" placeholder="Search for a movie"></input>
            </div>
        </div>
    )
}

export default SearchBar