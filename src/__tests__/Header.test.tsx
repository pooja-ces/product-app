import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Add this import
import Header from '../components/Header';

describe('Header Component', () => {
    test('renders the header with the correct title', () => {
        render(<Header />);

        // Check if the header title "Products" is in the document
        const headerTitle = screen.getByText('Products');
        expect(headerTitle).toBeInTheDocument();
    });

    test('renders the correct class names for the header container', () => {
        render(<Header />);

        // Get the header container (div element)
        const headerDiv = screen.getByText('Products').closest('div');

        // Check if the div has the expected classes
        expect(headerDiv).toHaveClass('px-20');
        expect(headerDiv).toHaveClass('py-4');
        expect(headerDiv).toHaveClass('border-b');
    });

    test('header title has correct styling', () => {
        render(<Header />);

        // Check if the header title has the correct font size and font weight
        const headerTitle = screen.getByText('Products');
        expect(headerTitle).toHaveClass('text-3xl');
        expect(headerTitle).toHaveClass('font-bold');
    });
});
