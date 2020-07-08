import React, { Component } from 'react';
import { getIndividualMovieData } from '../FetchedData/FetchedData'

class ExpandedMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: {}
        }
    }
    
    componentDidMount(props){
    console.log(this.props)
    const {movieDoneLoading} = this.props       
    const movieId = this.props.params.id
    const movieInfo = async () =>  { 
        let movieData = await getIndividualMovieData(movieId);
        this.setState({
            movieData: movieData
        })  
    await movieDoneLoading();    
    }
    movieInfo();
}

   render() {
       console.log(this.state.movieData)  
       
       const { id, title, poster_path, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating} =
           this.state.movieData
        return this.state.movieData == {} ?     
        <h1>Movie Page{ id }</h1>
     : 
        <h1>Loading</h1>
    }
}

export default ExpandedMovie