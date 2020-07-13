import React from 'react';
import { render, getByTestId, fireEvent } from '@testing-library/react' 
import '@testing-library/jest-dom'
import LogInPage from './LogInPage'
import FetchedData from './FetchedDate'
import { MemoryRouter } from 'react-router-dom'

describe('LoginPage', () => {
    let userLoggedIn = null
    let updateAppState = null
    let appState =  null
    let LoginElement = null

    beforeEach(() => {
        userLoggedIn = jest.fn().mockImplementation(() => {})
        updateAppState = jest.fn().mockImplementation(() => {})     
        
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
        LoginElement = (
            <MemoryRouter>
                <LogInPage 
                    userInfo={ appState.userInfo } 
                    updateAppState= { userLoggedIn } 
                    appState={ updateAppState }  
                />
            </MemoryRouter>
        )
    })

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render the login page', () => {
        const { getByTestId } = render(LoginElement)
        const loginPage = getByTestId('main-login')
        const greeting = getByTestId('greeting')
        const emailInput = getByTestId('email-input')
        const passwordInput = getByTestId('password-input')
        const loginButton = getByTestId('login-button')
        expect(loginPage).toBeInTheDocument()
        expect(greeting).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
        expect(loginButton).toBeInTheDocument()
    })

    it('should run clickHandler when the login button is clicked', () => {
        const { getByTestId } = render(LoginElement)
        const loginButton = getByTestId('login-button')
        fireEvent.click(loginButton)
        expect(updateAppState).toBeCalledTimes(1)
        expect(userLoggedIn).toBeCalledTimes(1)
    })
})