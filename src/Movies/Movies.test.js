import React from 'react';
import {render} from '@testing-library/react';
import Movies from './Movies';

test('renders learn react link', () => {
    const {
        getByText
    } = render( < Movies / > );
    const linkElement = getByText(/Hello Guest/i);
    expect(linkElement).toBeInTheDocument();
});