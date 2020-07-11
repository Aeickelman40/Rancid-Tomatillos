import React from 'react';
import './Movie.css';
import { NavLink } from 'react-router-dom'
function Movie(props) {   
    const {id, backdrop_path, release_date, average_rating, title} = props.movie
    const { onClick } = props
    const { userRatings } = props.appState.userInfo
    const { isLoggedIn } = (props.appState)
    let movieRating= {rating: null}
    
    if (props.appState.isLoggedIn) {
        movieRating = {rating: null}
        if (userRatings) {
            movieRating = userRatings.find(rating => rating.movie_id === id) || {rating: 'You have not rated this movie'}            
        }   
    }       
    let  rating = movieRating.rating
    
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
                 </section>
                 <section className='movie-description'>
                            <p className='title'>{title}</p>
                            <p>Release Date:{ release_date }</p>
                            <p>Average Rating:{ Math.round(average_rating) }</p>
                            { isLoggedIn && <p>Your Rating:{ rating }</p>}
                            {/* <p>Your Rating:{ rating }</p> */}
                 </section>
                </button>
            </NavLink>
    )    
}

export default Movie;