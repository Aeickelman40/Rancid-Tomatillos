import React from 'react';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { getMovies, getIndividualMovieData } from '../FetchedData/FetchedData' 
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

  it('should be able to expand a movies information', async () => {
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

getIndividualMovieData.mockResolvedValueOnce(
      {
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
      }
    )

    const { getByText, getByTestId } = render(appElement)
    const selectedMovie = await waitFor(() => getByTestId('movie-link'))
    expect(selectedMovie).toBeInTheDocument()
    
    fireEvent.click(selectedMovie)
    await waitFor(() => {
      const movieTitle = getByText("Artemis Fowl")
      const overView = getByText("Artemis Fowl is a 12", {exact: false})
      const tagLine = getByText("Tag Line:Remember the name")
      const genres = getByText("Genres:Adventure", {exact: false})
      const revenue = getByText("Revenue:0")
      const releaseDate = getByText("Release Date:2020-06-12")
      const runtime = getByText("Runtime:95") 
      const budget = getByText("Budget:125000000")
      const averageRating = getByText("Average Rating:4")
      expect(movieTitle).toBeInTheDocument()
      expect(releaseDate).toBeInTheDocument()
      expect(overView).toBeInTheDocument()
      expect(tagLine).toBeInTheDocument()
      expect(genres).toBeInTheDocument()
      expect(revenue).toBeInTheDocument()
      expect(runtime).toBeInTheDocument()
      expect(budget).toBeInTheDocument()
      expect(averageRating).toBeInTheDocument()
    })
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