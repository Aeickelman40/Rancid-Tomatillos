import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom'
import Movies from './Movies';

describe ('Movies', () => {
    let movies = null
    
    beforeEach(() => {
        movies = {
            movies: [
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
        }
    })

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it.skip('should have movies data', () => {
        const { getByTestId } = render(<Movies moviesData={ movies } />)
        const movie = getByTestId('all-movies');
        expect(movie).toBeInTheDocument()
    })

    it('should render loading when page is loading', () => {
        
    })
})
