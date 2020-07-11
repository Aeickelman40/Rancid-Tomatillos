import React, { Component } from 'react';
import Movie from '../Movie/Movie';
// import { getUserRatings } from '../FetchedData/FetchedData'
import './Movies.css'

 class Movies extends Component {
     constructor(props) {
         super(props)
         this.state = {
             userRatings: this.props.appState.userInfo.userRatings || null
         }
     }

     render() {   
        const { userRatings } = this.state        
         if (this.props) {        
        const { movies} = this.props
        const moviesInfo = movies.map(movie => {            
            return <Movie 
            key={ movie.id }
            movie={ movie }
            onClick={ this.props.onClick }
            appState={ this.props.appState }
            userRatings={ userRatings }
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
}
           
    
    
    
    
    
    
    

export default Movies;