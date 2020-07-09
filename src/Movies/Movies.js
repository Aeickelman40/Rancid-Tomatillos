import React from 'react';
import Movie from '../Movie/Movie';
import { getUserRatings } from '../FetchedData/FetchedData'
import './Movies.css'

function Movies(props) {
    const userRatings = getUserRatings()
    const { userName, userId} = props.appState.userInfo
    // props.updateAppState({userName: userName, userId: userId, userRatings })    
    
    if (props) {
        const {movies} = props;
        const moviesInfo = movies.map(movie => {
            return <Movie 
            key={ movie.id }
            movie={ movie }
            onClick={ props.onClick }
            appState={ props.appState }
            />
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