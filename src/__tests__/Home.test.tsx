import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../app/page';  
import '@testing-library/jest-dom';

// Mock data
const mockProducts = [
    { id: 1, name: 'Product 1', price: 29.99, category: 'Category A' },
    { id: 2, name: 'Product 2', price: 49.99, category: 'Category B' },
    { id: 3, name: 'Product 3', price: 19.99, category: 'Category A' },
];

// Mock the `getProducts` function
jest.mock('../lib/queries', () => ({
    getProducts: jest.fn(),
}));

describe('Home Component', () => {
    beforeEach(() => {
        // Mock `getProducts` to return mock data
        require('../lib/queries').getProducts.mockResolvedValue(mockProducts);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders and displays products correctly', async () => {
        render(<Home />);

        // Wait for the products to load and be rendered
        await waitFor(() => screen.getByText('Product 1'));

        // Check that the products are displayed
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
        expect(screen.getByText('Product 3')).toBeInTheDocument();

        // Check that prices are displayed
        expect(screen.getByText('$29.99')).toBeInTheDocument();
        expect(screen.getByText('$49.99')).toBeInTheDocument();
        expect(screen.getByText('$19.99')).toBeInTheDocument();
    });

    it('filters products by search query', async () => {
        render(<Home />);

        // Wait for products to load
        await waitFor(() => screen.getByText('Product 1'));

        // Simulate entering a search query
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Product 1' } });

        // Wait for the UI to update based on the search query
        await waitFor(() => {
            expect(screen.getByText('Product 1')).toBeInTheDocument();
            expect(screen.queryByText('Product 2')).toBeInTheDocument();
            expect(screen.queryByText('Product 3')).toBeInTheDocument();
        });
    });

    it('filters products by category', async () => {
        render(<Home />);

        // Wait for products to load
        await waitFor(() => screen.getByText('Product 1'));

        // Simulate selecting a category filter
        fireEvent.change(screen.getByRole('combobox', { name: 'Select Category' }), { target: { value: 'Category A' } });

        // Wait for the UI to update based on the selected category
        await waitFor(() => {
            expect(screen.getByText('Product 1')).toBeInTheDocument();
            expect(screen.getByText('Product 3')).toBeInTheDocument();
            expect(screen.queryByText('Product 2')).toBeInTheDocument();
        });
    });
});
