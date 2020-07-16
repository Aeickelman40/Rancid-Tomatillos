import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Movies from './Movies';
import { BrowserRouter } from 'react-router-dom';

describe ('Movies', () => {
    let movies = null
    let onClick = null
    let appState = null
    let moviesElement = null
    
    beforeEach(() => {
        onClick = jest.fn().mockImplementation(() => {})
        movies = [
            {
                id: 1,
                poster_path: 'examplePosterPath1',
                backdrop_path: 'exampleBackdropPath1',
                title: 'exampleTitle1',
                average_rating: 1,
                release_date: '2001-01-01'
            }, {
                id: 2,
                poster_path: 'examplePosterPath2',
                backdrop_path: 'exampleBackdropPath2',
                title: 'exampleTitle2',
                average_rating: 2,
                release_date: '2002-02-02'
            }
            ]

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
        moviesElement = (
            <BrowserRouter>
                <Movies movies={ movies } onClick={ onClick } appState={ appState } />
            </BrowserRouter>
        )
    })

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should have movies data', () => {        
        const { getByTestId } = render(moviesElement)
        const movie = getByTestId('all-movies');
        expect(movie).toBeInTheDocument()
    })
    
    it('should have userRatings', () => {
        const { userRatings } = moviesElement.props.children.props.appState.userInfo
        const { getByTestId } = render(moviesElement)
        const movie = getByTestId('all-movies');
        expect(movie).toBeInTheDocument()        
        expect(userRatings).toEqual(null)        
    })
})
