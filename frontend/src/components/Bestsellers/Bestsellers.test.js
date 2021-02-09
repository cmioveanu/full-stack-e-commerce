import React from 'react';
import { render, screen } from '@testing-library/react';
import { Bestsellers } from './Bestsellers';

test('renders Bestsellers component', () => {
    render(<Bestsellers />);

    const bestsellersContainer = document.querySelector('.bestsellers');
    expect(bestsellersContainer).toBeInTheDocument();
});
