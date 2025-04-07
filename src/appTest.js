
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the name "Amy Cooper" on the page', () => {
    render(<App />);
    const nameElement = screen.getByText(/Amy Cooper/i);
    expect(nameElement).toBeInTheDocument();
});