import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { Header } from './Header';



test('renders Header component', () => {
    render(<Header />, { wrapper: MemoryRouter });

    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
});

