import React from 'react';
import { render, getByTestId, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'; // this is a dependency of React Router
import '@testing-library/jest-dom'
import ExpandedMovie from './ExpandedMovie';
import { getIndividualMovieData } from '../FetchedData/FetchedData'
jest.mock('../FetchedData/FetchedData')



describe('ExpandedMovie', () => {

    let ExpandedMovieElement;

    beforeEach(() => {
        ExpandedMovieElement = (
            <MemoryRouter>
                <ExpandedMovie />
            </MemoryRouter>
        )
    })

    it.skip('should be true', () => {
        expect(true).toEqual(true);
    })

      describe('Unit Tests', () => {
    it.skip('Should render the expanded movie page', () => {
      const { getByText } = render(ExpandedMovieElement)
      const tagLine = getByText('Tag Line')
    
      expect(tagLine).toBeInTheDocument();
    });
    })

    it('should render the users ratings to the page', async () => {
        getIndividualMovieData.mockResolvedValueOnce({
                id: 1,
                title: "Movie Title",
                poster_path: "someURL",
                backdrop_path: "someURL",
                release_date: "2019-12-04",
                overview: "Some overview",
                average_rating: 6,
                genres: [{
                    id: 18,
                    name: "Drama"
                }],
                budget: 63000000,
                revenue: 100853753,
                runtime: 139,
                tagline: "Movie Tagline"
        })

        const { getByText } = render(ExpandedMovieElement)
    })
})