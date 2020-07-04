import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom'
import Movie from './Movie';

describe('Movie', () => {
    let movie = null

    beforeEach(() => {
        movie = {
                id: 1,
                poster_path: 'examplePosterPath',
                backdrop_path: 'exampleBackdropPath',
                title: 'exampleTitle',
                average_rating: 4,
                release_date: '2001-01-01'
        }
    })
    
    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render movie to the page', () => {
        const { getByText } = render(<Movie movie={ movie }/>)
        const title = getByText('exampleTitle')
        const averageRating = getByText('Average Rating:4')  
        const releaseDate = getByText('Release Date:2001-01-01')
        expect(title).toBeInTheDocument()
        expect(averageRating).toBeInTheDocument()
        expect(releaseDate).toBeInTheDocument()
    })

    it('should have a background image', () => {
        const { getByTestId } = render(<Movie movie={ movie } />)
        const backgroundImage = getByTestId('background')
        expect(backgroundImage).toHaveStyle('background-image: url(exampleBackdropPath)')
    })
})
