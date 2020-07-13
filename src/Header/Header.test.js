import React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from './Header';
// import App from '../App/App';

describe('Header', () => {

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it.skip('should render the header to the page', () => {
        const { getByText } = render( <Header /> );
        const welcomeMessage = getByText(/Hello Guest/i);
        expect(welcomeMessage).toBeInTheDocument();
    })

    it.skip('should have a buttons for user to log in and return to the home page', () => {
        const { getByRole } = render( <Header /> );
        const logInButton = getByRole('button', { name: 'Login'})
        const homeButton = getByRole('button', { name: 'Home'})
        expect(logInButton).toBeInTheDocument();
        expect(homeButton).toBeInTheDocument();
    })

    it('should display a users name if they are logged in', () => {

    })

})
