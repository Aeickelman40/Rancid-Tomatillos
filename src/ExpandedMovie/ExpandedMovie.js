import React from 'react';
import { getIndividualMovieData } from '../FetchedData/FetchedData'

function ExpandedMovie(props) {
    const movieId = props.params.id
    const movie = async () => await getIndividualMovieData(movieId);
    console.log(movie())

    const { id, title, release_date, poster_path, overview, genres, budget, revenue, runtime, average_rating, tag_line } = 
        movie.movie;

    console.log(id)    
    
    return <h1>Movie Page</h1>
}

export default ExpandedMovie