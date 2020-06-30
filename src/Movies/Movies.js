import React from 'react';
import Movie from '../Movie/Movie';
import './Movies.css'

function Movies(props) {
    if (props.moviesData) {
        const {movies} = props.moviesData;
        const moviesInfo = movies.map(movie => {
            return <Movie 
            key={movie.id}
            movie={movie}/>
        })
        console.log(moviesInfo)
        return (
            <section className='main-page'>{moviesInfo}</section>
        )
        
    } else {
        return (
        <h1>Loading</h1>
        )
    }
}

export default Movies;