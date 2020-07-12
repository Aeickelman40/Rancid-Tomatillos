import React from 'react';
import { render, getByTestId, fireEvent, getByText} from '@testing-library/react';
import '@testing-library/jest-dom'
import Movie from './Movie';
import { MemoryRouter } from 'react-router-dom' 

describe('Movie', () => {
    let movie = null
    let movieElement = null
    let onClick = null
    let appState = null

    beforeEach(() => {
        onClick = jest.fn().mockImplementation(() => {})
        
        appState = {
            loginClicked: false,
            isLoggedIn: false,
            isMovieExpanded: false,
            movieIsLoaded: false,
            userInfo: {
                userRatings: null,
                userEmail: '',
                userId: '',
                userName: 'Guest',
            },
        }

        movie = {
                id: 1,
                poster_path: 'examplePosterPath',
                backdrop_path: 'exampleBackdropPath',
                title: 'exampleTitle',
                average_rating: 4,
                release_date: '2001-01-01'
        }

        movieElement=(
            <MemoryRouter>
                <Movie 
                    key={ movie.id } 
                    movie={ movie } 
                    onClick={ onClick } 
                    appState={ appState } 
                    userRatings={ appState.userInfo.userRatings } 
                />
            </MemoryRouter>
        )
    })
    
    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render movie to the page', () => {
        const { getByTestId } = render(movieElement)
        const title = getByTestId('movie-title')
        const averageRating = getByTestId('movie-rating')  
        const releaseDate = getByTestId('movie-release-date')
        const movieCard = getByTestId('movie-card')
        expect(title).toBeInTheDocument()
        expect(averageRating).toBeInTheDocument()
        expect(releaseDate).toBeInTheDocument()
        expect(movieCard).toBeInTheDocument()
    })

    it('should have a background image', () => {
        const { getByTestId } = render(movieElement)
        const backgroundImage = getByTestId('background')
        expect(backgroundImage).toHaveStyle('background-image: url(exampleBackdropPath)')
    })

    it('should run the onClick method when the movie is clicked', () => {
        const { getByTestId } = render(movieElement)
        const movieCard = getByTestId('movie-card')
        fireEvent.click(movieCard)
        expect(onClick).toBeCalledTimes(1)
    })
})
