import React from 'react';
import {render} from '@testing-library/react';
import Movie from './Movie';
import Movies from './Movies';

test('renders learn react link', () => {
    const {
        getByText
    } = render( < Movie /> );
    const linkElement = getByText(/Onward/i);
    expect(linkElement).toBeInTheDocument();
});