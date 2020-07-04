import React from 'react';
import {render, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom'
import ErrorHandlePage from './ErrorHandlePage';

describe('ErrorHandlePage', () => {
    

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should render Header to the page', () => {
        const { getByTestId } = render(<ErrorHandlePage />)
        const  errorPage = getByTestId('error-page')
        expect(errorPage).toBeInTheDocument()  
    })
})

