import React from 'react';
import './Movie.css';
import { NavLink, BrowserRouter } from 'react-router-dom'
function Movie(props) {
    // console.log(props)

    const {id, backdrop_path, release_date, average_rating, title} = props.movie
    const { onClick } = props
    // console.log(onClick);
    
    return (
            <NavLink to={`${/movie/}${id}`}>
              <button name='movieId' value={ id } className = 'movie-card' onClick={ (event) => onClick(event) }>
                  <section
                 className='image-container'
                 name={ id }
                 data-testid='background'
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
                  
                  </button>
            </NavLink>
    )    
}

export default Movie;