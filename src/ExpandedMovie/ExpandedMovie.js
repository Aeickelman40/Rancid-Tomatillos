import React, { Component } from 'react';
import { getIndividualMovieData, addMovieRating, deleteMovieRating } from '../FetchedData/FetchedData'
import { render } from '@testing-library/react';

class ExpandedMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieData: {}, 
            userRating: {
                rating: null
            },
        }
    }
    
    componentDidMount(props) {
        console.log(this.state)
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
        
        removeRating = (e) => {
            e.preventDefault();
            const usersRating = this.state.userRating
            const userId = this.props.appState.userInfo.userId

            const matchingMovie = this.props.appState.userInfo.userRatings.find(rating => rating.movie_id === this.state.movieData.movie.id);
            deleteMovieRating(userId, matchingMovie.id);
        }
        
        updateRating = (rating) => {
            this.setState( { userRating: rating.target.value }  )
        }
        
        submitNewRating = (e) => {
            e.preventDefault();
            const usersRating = this.state.userRating
            const userId = this.props.appState.userInfo.userId
            const movieId = this.state.movieData.movie.id
            this.setState( {
                movieIsRated: true
            })
            addMovieRating(usersRating, userId, movieId)
        }

        checkIfLoggedIn = () => {
            if(this.props.appState.isLoggedIn) {
            return (
                <form className="submit-rating-form">
                {this.toggleRatingButtons()}
                </form>
                )
            }
        }

    toggleRatingButtons = () => {
        const matchingMovie = this.props.appState.userInfo.userRatings.find(rating => rating.movie_id === this.state.movieData.movie.id);
        console.log(matchingMovie)
            if(matchingMovie) {
                return (
                    <section>
                        <h5>Your Rating: { matchingMovie.rating } </h5>
                        <label htmlFor="delete-rating">Change of Opinion?: </label>
                        <button className="delete-rating" type="submit" onClick={this.removeRating} >Delete Rating</button>
                    </section>)
            } else if (!matchingMovie) {
                return (
                    <section>
                        <label for="rate-movie">Rate Movie: </label>
                        <select value={this.state.userRating} onChange={this.updateRating} required>
                            <option value="0">--Select a Rating--</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                        <button className="submit-rating" type="submit" onClick={this.submitNewRating} disabled={this.state.userRating === 0}>SUBMIT</button>
                    </section>)
            }
        }
        
        render() {
            const { isLoggedIn } = this.props.appState  
            if (this.state.movieData.movie) {
            const { id, title, poster_path, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating} =
                this.state.movieData.movie 
            const movieRating = this.state.userRating.rating 
            console.log(movieRating)       
                  
           return  (
               <section id={id }>
                   <section
                    style={{
                        backgroundImage: 'url(' + poster_path + ')',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '200px',
                        width: '100%'
                        }}
                    > </section>
                   <h1>{title}</h1>
                   <h5>Tag Line:{tagline}</h5>
                   <p>{overview}</p>
                   <h5>Release Date:{release_date}</h5>
                   <h5>Genres:{genres}</h5>
                   <h5>Budget:{budget}</h5>
                   <h5>Revenue:{revenue}</h5>
                   <h5>Runtime:{runtime}</h5>
                   <h5>Average Rating:{Math.round(average_rating)}</h5>
                   {this.checkIfLoggedIn()}
                </section>
           )   
        } else if (this.props.errorMessage) {
            return <h1>Error Page</h1>
        } else    
        return <h1>Loading</h1>    
            }
       }


export default ExpandedMovie