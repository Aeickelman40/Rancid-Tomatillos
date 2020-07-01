import React from 'react';
import './Movie.css';

function Movie(props) {
    const {backdrop_path, release_date, average_rating, title} = props.movie
    return (
        <section
        className='movie-card'
        style={ {
            backgroundImage: 'url(' + backdrop_path + ')',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat'
        }}>
            <section className='movie-description'>
                <h5>{title}</h5>
                <h5>Release Date:{release_date}</h5>
                <h5>Average Rating:{average_rating}</h5>
            </section>
        </section>
    )    
}

export default Movie;