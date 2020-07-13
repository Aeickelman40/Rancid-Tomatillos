import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import Movie from './Movie';

describe('Movie', () => {
    let movie = null

    // beforeEach(() => {
    //     movie = {
    //             id: 1,
    //             poster_path: 'examplePosterPath',
    //             backdrop_path: 'exampleBackdropPath',
    //             title: 'exampleTitle',
    //             average_rating: 4,
    //             release_date: '2001-01-01'
    //     },
    //     userInfo = { appState.userInfo }
    // })
    
    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render movie to the page', () => {
        const { getByText } = render(<BrowserRouter><Movie movie={ movie }/></BrowserRouter>)
        const title = getByText('exampleTitle')
        const averageRating = getByText('Average Rating:4')  
        const releaseDate = getByText('Release Date:2001-01-01')
        expect(title).toBeInTheDocument()
        expect(averageRating).toBeInTheDocument()
        expect(releaseDate).toBeInTheDocument()
    })

    it('should have a background image', () => {
        const { getByTestId } = render(<BrowserRouter><Movie movie={ movie } /></BrowserRouter>)
        const backgroundImage = getByTestId('background')
        expect(backgroundImage).toHaveStyle('background-image: url(exampleBackdropPath)')
    })
})
