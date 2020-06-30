import React from 'react';
import './Movie.css';

function Movie(props) {
    const {backdroundPath} = props.movie
    return (
        <section 
        className='movie-card'
        style={ {
            backgroundImage: 'url(' + 'backgroundPath' + ')'
        } }>

        </section>
    )    
}

export default Movie;