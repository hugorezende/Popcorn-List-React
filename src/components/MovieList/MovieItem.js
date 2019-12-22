import React, { Component } from 'react'
import './style.scss';
import { getMoviePoster } from '../../utils/movieUtils';

class MovieItem extends Component {
    state = {
        poster_url: ''
    }
    componentDidMount() {
        getMoviePoster(this.props.movie.id).then(
            (data) => {
                this.setState({ poster_url: data })
            });
    }
    render() {
        return (
            <div className="movie_item">
                <div className="poster"><img src={"https://image.tmdb.org/t/p/w200" + this.state.poster_url} /></div>
                <div className="info">
                    <div className="title">{this.props.movie.title}</div>
                    <div className="year">{this.props.movie.release_date}</div>
                    <div className="description">{this.props.movie.overview}</div>
                </div>
            </div>
        )
    }
}

export default MovieItem