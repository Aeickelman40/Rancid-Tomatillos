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
            <BrowserRouter>
                <ExpandedMovie 
                    appState= { this.appState }
                />
            </BrowserRouter>
        )
    })

    it('should be true', () => {
        expect(true).toEqual(true);
    })

      describe('Unit Tests', () => {
    it('Should render the expanded movie page', async () => {
      const { getByText } = render(ExpandedMovieElement)
      const tagLine = getByText('Tag Line')
    
      expect(tagLine).toBeInTheDocument();
    });
    })
})