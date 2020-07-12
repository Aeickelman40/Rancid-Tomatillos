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
            movieIsRated: false
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
                this.findUserRating();
            }
            movieInfo();
        }
        
        removeRating = (e) => {
            e.preventDefault();
            const usersRating = this.state.userRating
            console.log(usersRating)
            const userId = this.props.appState.userInfo.userId
            
            const matchingMovieId = this.state.userRating.find(rating => rating.movie_id === this.state.movieData.movie.id)
            console.log(matchingMovieId)
            deleteMovieRating(userId, matchingMovieId);
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

        findUserRating = () => {
            const { isLoggedIn } = this.props.appState 
            console.log(isLoggedIn)
            const userRatings = this.props.appState.userInfo.userRatings
            const { id } = this.state.movieData.movie
            
            if (isLoggedIn === true) {
                userRatings.find(userRating => {
                console.log('user rating id', userRating.movie_id)
                console.log('id', id)
                if (userRating.movie_id === id) {
                    this.setState({
                        movieIsRated: true,
                        userRating: userRating
                     })
                     
                     return userRating
                } else {
                    this.setState({
                        userRating: {
                            rating: 'You have not rated this movie'
                        }
                    })
                    return userRating
                 }
             })
            }
        }
        
        render() {
            const { isLoggedIn } = this.props.appState 
            const { movieIsRated } = this.state   
            if (this.state.movieData.movie) {
            const { id, title, poster_path, release_date, overview, genres, budget, revenue, runtime, tagline, average_rating} =
                this.state.movieData.movie 
                

                

        const movieRating = this.state.userRating.rating        
            
        
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
                   { isLoggedIn && <h5>Your Rating: { movieRating } </h5>}
                   { movieIsRated && <button className="delete-rating" type="delete" onClick={this.removeRating}>Delete</button>}
                   { !movieIsRated && isLoggedIn && 
                    <section>
                        <label for="rate-movie">Rate This Movie: </label>
                            <select className="rating-options" value={this.state.userRating} onChange={this.updateRating} required>
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
                        <button className="submit-rating" type="submit" onClick={this.submitNewRating} >SUBMIT</button>
                    </section>
                    } 
                </section>
           )
         
        } else if (this.props.errorMessage) {
            return <h1>Error Page</h1>
        } else    
        return <h1>Loading</h1>    
            }
       }


export default ExpandedMovie