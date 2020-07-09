import React, { Component } from 'react';
import Movie from '../Movie/Movie';
import { getUserRatings } from '../FetchedData/FetchedData'
import './Movies.css'

 class Movies extends Component {
     constructor(props) {
         super(props)
         this.state = {
             userRatings: []
         }
     }

    componentDidMount() {
        let userRatings = []
        const { userName, userId } = this.props.appState.userInfo
        async function getRatings(state) {
            const resolvedPromise = await getUserRatings()
            userRatings = resolvedPromise
            console.log('20', userRatings);
        } 
        getRatings(this.state)
        setTimeout(() => this.setState({ userRatings: userRatings })        
, 1000)

     }

     render() {   
         console.log(this.state)      
        if (this.props) {        
        const { movies } = this.props
        const moviesInfo = movies.map(movie => {
            return <Movie 
            key={ movie.id }
            movie={ movie }
            onClick={ this.props.onClick }
            appState={ this.props.appState }
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
           
    
    
    
    
    
    // props.updateAppState({userName: userName, userId: userId, userRatings })    
    
    

export default Movies;