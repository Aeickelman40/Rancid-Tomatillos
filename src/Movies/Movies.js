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
        return (
            <section 
                className='main-page'
                data-testid='all-movies'>
                { moviesInfo }
            </section>
        )
        
    } else {
        return (
        <h1>Loading</h1>
        )
    }
}

export default Movies;