import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../app/page';
import '@testing-library/jest-dom';

type Product = { id: number; name: string; price: number; category: string };

// Mock data
const mockProducts: Product[] = [
    { id: 1, name: 'Product 1', price: 29.99, category: 'Category A' },
    { id: 2, name: 'Product 2', price: 49.99, category: 'Category B' },
    { id: 3, name: 'Product 3', price: 19.99, category: 'Category A' },
];

describe('Home Component', () => {
    beforeEach(() => {
        // Mock fetch API response
        global.fetch = jest.fn().mockResolvedValue({
            json: jest.fn().mockResolvedValue(mockProducts),
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('renders and displays products correctly', async () => {
        render(<Home />);

        // Wait for the fetch to complete and products to render
        await waitFor(() => screen.getByText('Product 1'));

        // Check if the product names are displayed
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 2')).toBeInTheDocument();
        expect(screen.getByText('Product 3')).toBeInTheDocument();

        // Check if the product prices are displayed
        expect(screen.getByText('$29.99')).toBeInTheDocument();
        expect(screen.getByText('$49.99')).toBeInTheDocument();
        expect(screen.getByText('$19.99')).toBeInTheDocument();

        // Check if the product categories are displayed using getAllByText
        const categoryTexts = screen.getAllByText('Category A');
        expect(categoryTexts.length).toBe(2);  // "Category A" should appear twice
        expect(categoryTexts[0]).toBeInTheDocument();
        expect(categoryTexts[1]).toBeInTheDocument();

        const categoryB = screen.getByText('Category B');
        expect(categoryB).toBeInTheDocument();
    });

    it('filters products by search query', async () => {
        render(<Home />);

        // Wait for products to be displayed
        await waitFor(() => screen.getByText('Product 1'));

        // Simulate entering a search query
        fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Product 1' } });

        // Check that only the relevant product is shown
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.queryByText('Product 2')).toBeNull();
        expect(screen.queryByText('Product 3')).toBeNull();
    });

    it('filters products by category', async () => {
        render(<Home />);

        // Wait for products to be displayed
        await waitFor(() => screen.getByText('Product 1'));

        // Simulate selecting a category filter
        fireEvent.change(screen.getByRole('combobox', { name: 'Select Category' }), { target: { value: 'Category A' } });

        // Check that only the products from the selected category are shown
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Product 3')).toBeInTheDocument();
        expect(screen.queryByText('Product 2')).toBeInTheDocument();
    });

    it('sorts products by price (ascending)', async () => {
        render(<Home />);

        // Wait for products to be displayed
        await waitFor(() => screen.getByText('Product 1'));

        // Simulate sorting by price (ascending)
        fireEvent.change(screen.getByRole('combobox', { name: 'Sort By' }), { target: { value: 'price-asc' } });

        // Check the sorted order
        const products = screen.getAllByRole('article');
        expect(products[0]).toHaveTextContent('Product 3');
        expect(products[0]).toHaveTextContent('Product 1');
        expect(products[0]).toHaveTextContent('Product 2');
    });

    it('sorts products by name (ascending)', async () => {
        render(<Home />);

        // Wait for products to be displayed
        await waitFor(() => screen.getByText('Product 1'));

        // Simulate sorting by name (ascending)
        fireEvent.change(screen.getByRole('combobox', { name: 'Sort By' }), { target: { value: 'name-asc' } });

        // Check the sorted order
        const products = screen.getAllByRole('article');
        expect(products[0]).toHaveTextContent('Product 1');
        expect(products[0]).toHaveTextContent('Product 2');
        expect(products[0]).toHaveTextContent('Product 3');
    });
});
