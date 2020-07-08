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
       if (this.state.movieData.movie) {
        const { id, title, poster_path, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating} =
            this.state.movieData.movie 
           return  (
               <section id={id }>
                   <section
                    style={{
                        backgroundImage: 'url(' + poster_path + ')',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        height: '200px',
                        width: '200px'
                        }}
                   > </section>
                   <h1>{title}</h1>
                   <p>{overview}</p>
                   <h5>Tag Line:{tagline}</h5>
                   <h5>Release Date:{release_date}</h5>
                   <h5>Genres:{genres}</h5>
                   <h5>Budget:{budget}</h5>
                   <h5>Revenue:{revenue}</h5>
                   <h5>Runtime:{runtime}</h5>
                   <h5>Average rating:{average_rating}</h5>
               </section>
           )
        } else if (this.props.errorMessage) {
            return <h1>Error Page</h1>
        } else    
        return <h1>Loading</h1>    
    }
    
}

export default ExpandedMovie