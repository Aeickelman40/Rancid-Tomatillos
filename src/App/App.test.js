import { getMovies } from '../FetchedData/FetchedData' 
import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import App from './App';
import Movies from '../Movies/Movies';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
jest.mock('../FetchedData/FetchedData')


describe('App', () => {
  let appElement = null
  let getMovies = null
  
  beforeEach(() => {

    getMovies = jest.fn().mockImplementation(() => {
      return {
        "id": 475430,
        "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        "title": "Artemis Fowl",
        "average_rating": 5.6,
        "release_date": "2020-06-12"
      }
    });

    appElement = (
      <BrowserRouter>
        <App />
      </BrowserRouter>

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
    const { getByRole, getByText } = render(appElement)
    // const fetchedMovies = await getMovies()

    // console.log(fetchedMovies)
    const { firstMovie } = await getByText('Artemis Fowl')    
    expect(firstMovie).toBeInTheDocument();
  })
  
})
