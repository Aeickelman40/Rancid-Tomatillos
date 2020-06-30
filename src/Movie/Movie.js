import React from 'react';
import './Movie.css';

function Movie(props) {
    const {backdrop_path} = props.movie
    console.log({backdrop_path})
    return (
        <section 
        className='movie-card'
        style={ {
            backgroundImage: 'url(' + backdrop_path + ')'
        } }>

        </section>
    )    
}

export default Movie;