import React from 'react';
import { render, getByTestId, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'; // this is a dependency of React Router
import '@testing-library/jest-dom'
import ExpandedMovie from './ExpandedMovie';

// jest.mock('../FetchedData/FetchedData');

describe('ExpandedMovie', () => {

    let ExpandedMovieElement;

    beforeEach(() => {
        ExpandedMovieElement = (
            <MemoryRouter>
                <ExpandedMovie 
                    appState= { this.appState }
                />
            </MemoryRouter>
        )
    })

    it.skip('should be true', () => {
        expect(true).toEqual(true);
    })

      describe('Unit Tests', () => {
    it.skip('Should render the expanded movie page', () => {
      const { getByText } = render(ExpandedMovieElement)
      const tagLine = getByText('Tag Line')
    
      expect(tagLine).toBeInTheDocument();
    });
    })
})