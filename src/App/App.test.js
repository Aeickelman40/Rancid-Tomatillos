import { getMovies } from '../FetchedData/FetchedData' 
import React from 'react';
import { render, waitFor, getByTestId, fireEvent } from '@testing-library/react';
import App from './App';
import Movies from '../Movies/Movies';
import { MemoryRouter } from 'react-router-dom';
jest.mock('../FetchedData/FetchedData')
let movies = {
  "id": 475430,
  "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
  "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
  "title": "Artemis Fowl",
  "average_rating": 5.6,
  "release_date": "2020-06-12"
}


describe('App', () => {
  let appElement = null
  // let getMovies = null
  
  beforeEach(() => {

    // getMovies = jest.fn().mockImplementation(() => {
    //   return {
    //     "id": 475430,
    //     "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
    //     "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
    //     "title": "Artemis Fowl",
    //     "average_rating": 5.6,
    //     "release_date": "2020-06-12"
    //   }
    // });

    appElement = (
      <MemoryRouter>
        <App />
      </MemoryRouter>

    )
  })

  it('should equal true', () => {
    expect(true).toEqual(true)
  })

  it('should render login page when the login button is clicked', () => {

  })

  it('should be able to go back to the home page', () => {

  })

  it('should be able to expand a movies information', () => {

  })

  it('should render the fetched movies to the home page', async () => {
    getMovies.mockResolvedValueOnce(movies)
    const { getByText } = render(
     <MemoryRouter>
        <App />
      </MemoryRouter>)
    const errorPage = getByText('This is the Error Page')
    expect(errorPage).toBeInTheDocument()
    const title = await waitFor(() => getByTestId('movie-title'))
    expect(title).toBeInTheDocument()
    // expect(firstMovie).toBeInTheDocument();
  })
})
