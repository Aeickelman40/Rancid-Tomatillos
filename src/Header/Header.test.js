import React from 'react';
import {render, getByText, mock, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';
import { postLogIn } from'../FetchedData/FetchedData'
jest.mock('../FetchedData/FetchedData')
// import App from '../App/App';

describe('Header', () => {
    let onClick = null
    let renderHeader = null
    beforeEach(() => {
        onClick = jest.fn().mockImplementation(() => {});
        renderHeader = (
        <MemoryRouter>
            <Header onClick={ onClick } appState={{
                isLoggedIn: false, 
                userInfo: {
                    userName: 'sample user'
            }}} />
        </MemoryRouter>)
    })

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render the header to the page', () => {
        const { getByTestId } = render(renderHeader)
        const header= getByTestId('main-header');
        expect(header).toBeInTheDocument();
    })

    it('should have a buttons for user to log in and return to the home page', () => {
        const { getByRole } = render(renderHeader);
        const logInButton = getByRole('button', { name: 'Login'})
        const homeButton = getByRole('button', { name: 'Home'})
        expect(logInButton).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
    })

    it('should run onClick when the login button is clicked', () => {
            const { getByTestId } = render(renderHeader)
                const logInButton = getByTestId('login-button');
                fireEvent.click(logInButton)
                expect(onClick).toBeCalledTimes(1)    
    })

    it('should run onClick when the home button is clicked', () => {
            const { getByTestId } = render(renderHeader)
                const homeButton = getByTestId('home-button');
                fireEvent.click(homeButton)
                expect(onClick).toBeCalledTimes(1)    
    })

    it('should render a users name if they are logged in', () => {
        postLogIn.mockResolvedValueOnce({
                user: {
                    id: 1,
                    name: "Alan",
                    email: "alan@turing.io"
                }
        })
        const { getByText } = render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
        )
        const sampleUser = getByText('sample user')
        expect(sampleUser).toBeInTheDocument()
    })


})
