import React from 'react';
import {render, getByTestId, mock, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';

// import App from '../App/App';

describe('Header', () => {

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render the header to the page', () => {
        const onClick = jest.fn().mockImplementation(() => {});
        const { getByTestId } = render(
        <BrowserRouter>
        <Header onClick={ onClick } appState={{
            isLoggedIn: false, 
            userInfo: {
                userName: 'sampleUser'
            }}} />
        </BrowserRouter>)
        const header= getByTestId('main-header');
        expect(header).toBeInTheDocument();
    })

    it('should have a buttons for user to log in and return to the home page', () => {
        const onClick = jest.fn().mockImplementation(() => {});
        const { getByRole } = render( 
        <BrowserRouter>
            <Header onClick={ onClick } appState={{
                isLoggedIn: false, 
                userInfo: {
                    userName: 'sampleUser'
                }}} />
        </BrowserRouter> );
        const logInButton = getByRole('button', { name: 'Login'})
        const homeButton = getByRole('button', { name: 'Home'})
        expect(logInButton).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
    })

    it('should run onClick when the login button is clicked', () => {
        const onClick = jest.fn().mockImplementation(() => {});
            const { getByTestId } = render(
             <BrowserRouter>
             <Header onClick={ onClick } appState={{
                 isLoggedIn: false, 
                 userInfo: {
                        userName: 'sampleUser'
                    }}} />
                </BrowserRouter>)
                const logInButton = getByTestId('login-button');
                fireEvent.click(logInButton)
                expect(onClick).toBeCalledTimes(1)    
    })

    it('should run onClick when the home button is clicked', () => {
        const onClick = jest.fn().mockImplementation(() => {});
            const { getByTestId } = render(
             <BrowserRouter>
             <Header onClick={ onClick } appState={{
                 isLoggedIn: false, 
                 userInfo: {
                        userName: 'sampleUser'
                    }}} />
                </BrowserRouter>)
                const homeButton = getByTestId('home-button');
                fireEvent.click(homeButton)
                expect(onClick).toBeCalledTimes(1)    
    })

})
