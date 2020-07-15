import React from 'react';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getMovies } from '../FetchedData/FetchedData' 
jest.mock('../FetchedData/FetchedData')


describe('App', () => {
  let appElement = null
  
  beforeEach(() => {
    appElement = (
      <MemoryRouter>
        <App />
        
      </MemoryRouter>
    )
  })

  it('should equal true', () => {
    expect(true).toEqual(true)
  })

  it('should render login page when the login button is clicked', async () => {
    let location
    getMovies.mockResolvedValueOnce(
      [{
        "id": 475430,
        "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
        "title": "Artemis Fowl",
        "average_rating": 5.6,
        "release_date": "2020-06-12"
      }]
    )

    const { getByText, getByPlaceholderText } = render(appElement)
    const errorPage = getByText('This is the Error Page')

    expect(errorPage).toBeInTheDocument()

    const title = await waitFor(() => getByText('Artemis Fowl'))
    const loginButton = await waitFor(() => getByText('Login'))
    
    expect(title).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
    
    fireEvent.click(loginButton)
    await waitFor(()=> {
      const email = getByPlaceholderText("email address")
      const password = getByPlaceholderText("password")
      expect(email).toBeInTheDocument()
      expect(password).toBeInTheDocument()
    })
  })

  it('should be able to go back to the home page', () => {

  })

  it('should be able to expand a movies information', () => {

  })

  it('should render the fetched movies to the home page', async () => {
    getMovies.mockResolvedValueOnce(
      [{
      "id": 475430,
      "poster_path": "https://image.tmdb.org/t/p/original//tI8ocADh22GtQFV28vGHaBZVb0U.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//o0F8xAt8YuEm5mEZviX5pEFC12y.jpg",
      "title": "Artemis Fowl",
      "average_rating": 5.6,
      "release_date": "2020-06-12"
    }]
    )
    
    const { getByText } = render(appElement)

    const errorPage = getByText('This is the Error Page')

    expect(errorPage).toBeInTheDocument()

    const title = await waitFor(() => getByText('Artemis Fowl'))
    const releaseDate = await waitFor(() => getByText('2020-06-12', {exact: false}))
    const averageRating = await waitFor(() => getByText('Average Rating:6'))

    expect(title).toBeInTheDocument()
    expect(releaseDate).toBeInTheDocument()
    expect(averageRating).toBeInTheDocument()
  })
})