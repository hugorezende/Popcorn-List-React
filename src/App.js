import React from 'react';
import './App.css';
import SearchBar from './components/Search/SearchBar';
import MovieList from './components/MovieList/MovieList';
function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center"}}>Popcorn List APP</h1>
      <MovieList />
    </div>
  );
}

export default App;
