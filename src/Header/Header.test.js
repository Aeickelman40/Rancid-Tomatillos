import React from 'react';
import {render, getByTestId, mock, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

// import App from '../App/App';

describe('Header', () => {
    let onClick = null
    let renderHeader = null
    beforeEach(() => {
        onClick = jest.fn().mockImplementation(() => {});
        renderHeader = (<BrowserRouter>
        <Header onClick={ onClick } appState={{
            isLoggedIn: false, 
            userInfo: {
                userName: 'sampleUser'
            }}} />
        </BrowserRouter>)
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

})
