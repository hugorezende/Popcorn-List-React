import React, { Component } from 'react'
import MovieItem from './MovieItem'
import debounce from 'lodash.debounce';
import {getMoviePoster, getMovies} from '../../utils/movieUtils' 

export default class MovieList extends Component {
    state = {
        query: "",
        movies: [],
    };

    searchMovie = debounce((query) => {
        this.setState({ query });
        if (query !== "") {
            getMovies(query)
                .then(data => this.setState({ movies: data.results }));
        }else{
            this.setState({ movies: [] })
        }
    },200)

    componentDidMount() {
        if (this.state.query !== "") {
            fetch("https://api.themoviedb.org/3/search/movie?api_key=b18ad59f8eb07b4d3fe4ed65e6007d77&query=" + this.state.query)
                .then(response => response.json())
                .then(data => this.setState({ movies: data.results }));
        }
    }
    render() {
        return (
            <div>
                <div className="search_bar">
                    <input type="text" placeholder="Search for a movie" onChange={(event) => this.searchMovie(event.target.value)}></input>
                </div>
                {this.state.movies.map((movie) =>
                    <MovieItem key={movie.id} movie={movie} />
                )}

            </div>
        );
    }
}
