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
    
    it('should be true', () => {
            expect(true).toEqual(true);
        })

    it.skip('Should render the expanded movie page', async () => {
        getIndividualMovieData.mockResolvedValueOnce({
            "movie": {
                "id": 475430,
                "title": "Artemis Fowl",
                "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
                "release_date": "2020-06-12",
                "overview": "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
                "genres": [
                    "Adventure",
                    "Fantasy",
                    "Science Fiction",
                    "Family"
                ],
                "budget": 125000000,
                "revenue": 0,
                "runtime": 95,
                "tagline": "Remember the name",
                "average_rating": 3.6666666666666665
            }
        })

      const { getByText } = render(ExpandedMovieElement)
      const tagLine = await waitFor(() => getByText("Remember the name"))
    
      expect(tagLine).toBeInTheDocument();
    });

    it.skip('should render the users ratings to the page', async () => {
        getIndividualMovieData.mockResolvedValueOnce({
            "movie": {
                "id": 475430,
                "title": "Artemis Fowl",
                "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
                "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
                "release_date": "2020-06-12",
                "overview": "Artemis Fowl is a 12-year-old genius and descendant of a long line of criminal masterminds. He soon finds himself in an epic battle against a race of powerful underground fairies who may be behind his father's disappearance.",
                "genres": [
                    "Adventure",
                    "Fantasy",
                    "Science Fiction",
                    "Family"
                ],
                "budget": 125000000,
                "revenue": 0,
                "runtime": 95,
                "tagline": "Remember the name",
                "average_rating": 3.6666666666666665
            }
        })

        const { getByText } = render(ExpandedMovieElement)
        const selectedMovie = await getByText("Artemis Fowl")
        expect(selectedMovie).toBeInTheDocument()

    })
})