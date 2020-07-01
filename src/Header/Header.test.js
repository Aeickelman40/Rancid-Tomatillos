import React from 'react';
import {render} from '@testing-library/react';
import Header from './Header';

test('renders learn react link', () => {
    const {
        getByText
    } = render( < Header / > );
    const linkElement = getByText(/Hello Guest/i);
    expect(linkElement).toBeInTheDocument();
});