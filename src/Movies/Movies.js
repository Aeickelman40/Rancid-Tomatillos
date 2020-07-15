import React, { Component } from 'react';
import Movie from '../Movie/Movie';
// import favoriteHeart from '../images/favorited.png';
// import notFavoriteHeart from '../images/notFavorited.png';

// import { getUserRatings } from '../FetchedData/FetchedData'
import './Movies.css'



 class Movies extends Component {
     constructor(props) {
         super(props)
         this.state = {
             userRatings: this.props.appState.userInfo.userRatings || null,
             favoriteMovies: this.props.appState.userInfo.userFavorites
         }
     }

    getMovieIsFavorite(favoriteMovies, currentMovie) {
        // console.log(favoriteMovies[0]);
        // console.log(currentMovie);
        
        
        // const movieInfo = favoriteMovies.find(favMovie => favoriteMovies.movie_Id === currentMovie.id )
        // console.log(movieInfo);
        // return movieInfo
    }  

     render() {   
        //  console.log(this.props);
                                    
        const { userRatings } = this.state        
         if (this.props) {        
        const { movies } = this.props
        const moviesInfo = movies.map(movie => {            
            return <Movie 
            key={ movie.id }
            movie={ movie }
            onClick={ this.props.onClick }
            appState={ this.props.appState }
            userRatings={ userRatings }
            favoriteMovies={ this.state.userFavorites }
            clickHandler={ () => this.props.clickHandler() }
            isMovieAFavorite = { this.getMovieIsFavorite }
            />
        })
        return (
            <section 
                className='main-page'
                data-testid='all-movies'>
                { moviesInfo }
                <p>I am a movie</p>
            </section>
        )    
    } else {
        return (
        <h1>Loading</h1>
        )
        }
    }
}
           
    
    
    
    
    
    
    

export default Movies;