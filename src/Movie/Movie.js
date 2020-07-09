import React from 'react';
import './Movie.css';
import { NavLink } from 'react-router-dom'
function Movie(props) {    
    
    const {id, backdrop_path, release_date, average_rating, title} = props.movie
    const { onClick, userRatings } = props
    let movieRating = "You haven't rated this movie yet."
    
    // const movieRating = userRatings.find(rating => rating.movie_id === id)
    
    if (props.appState.isLoggedIn) {
        if (userRatings) {
            userRatings.find(rating => {
               rating.movie_id === id ? movieRating =rating.rating : movieRating = "You haven't rated this movie yet."
            })   
        }
    }    
    console.log(movieRating);
    
    return (
            <NavLink to={`${/movie/}${id}`}>
              <button name='movieId' value={ id } className = 'movie-card' onClick={ (event) => onClick(event) }>
                  <section
                 className='image-container'
                 name={ id }
                 backdrop-image= { backdrop_path }
                 release-date= { release_date }
                 average-rating= { average_rating }
                 user-rating= { movieRating }
                 title={ title }
                 data-testid='background'
                    style={ {
                        backgroundImage: 'url(' + backdrop_path + ')',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                 }}>
                 </section>
                 <section className='movie-description'>
                            <p className='title'>{title}</p>
                            <p>Release Date:{ release_date }</p>
                            <p>Average Rating:{ Math.round(average_rating) }</p>
                            <p>Your Rating:{ movieRating }</p>
                 </section>
                </button>
            </NavLink>
    )    
}

export default Movie;