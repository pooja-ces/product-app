import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../app/page';

// Define the types for the props
interface FiltersProps {
  onFilter: (value: string) => void;
  onSelectCategory: (value: string) => void;
  onSort: (value: string) => void;
}

// Mocking the Filters component
jest.mock('../components/Filters', () => ({
  __esModule: true,
  default: ({ onFilter, onSelectCategory, onSort }: FiltersProps) => (
    <div>
      <input
        placeholder="Search"
        onChange={(e) => onFilter(e.target.value)}
      />
      <select onChange={(e) => onSelectCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
      <select onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
      </select>
    </div>
  ),
}));

jest.mock('../components/ProductList', () => ({
  __esModule: true,
  default: ({ products }: { products: { id: number, name: string }[] }) => (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  ),
}));

describe('Home Component', () => {
  // Mock fetch
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve([
        { id: 1, name: 'Product 1', price: 10, category: 'electronics' },
        { id: 2, name: 'Product 2', price: 20, category: 'clothing' },
        { id: 3, name: 'Product 3', price: 15, category: 'electronics' },
      ]),
    });
  });

  test('renders and fetches products', async () => {
    render(<Home />);

    // Wait for the products to be fetched and displayed
    await waitFor(() => screen.getByText('Product 1'));

    // Check that the products are displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Product 3')).toBeInTheDocument();
  });

  test('filters products by search query', async () => {
    render(<Home />);

    // Wait for products to load
    await waitFor(() => screen.getByText('Product 1'));

    // Type into the search input to filter products
    fireEvent.change(screen.getByPlaceholderText('Search'), { target: { value: 'Product 1' } });

    // Check that only the filtered product is displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });

  test('filters products by category', async () => {
    render(<Home />);

    // Wait for products to load
    await waitFor(() => screen.getByText('Product 1'));

    // Select a category from the category dropdown (index 0)
    fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: 'electronics' } });

    // Check that only products from the selected category are displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 3')).toBeInTheDocument();
    expect(screen.queryByText('Product 2')).not.toBeInTheDocument();
  });

  test('sorts products by price', async () => {
    render(<Home />);

    // Wait for products to load
    await waitFor(() => screen.getByText('Product 1'));

    // Sort by price low to high
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: 'price-asc' } });

    // Check that products are sorted by price
    const productList = screen.getAllByRole('listitem');
    expect(productList[0].textContent).toBe('Product 1');
    expect(productList[1].textContent).toBe('Product 3');
    expect(productList[2].textContent).toBe('Product 2');
  });

  test('sorts products by name', async () => {
    render(<Home />);

    // Wait for products to load
    await waitFor(() => screen.getByText('Product 1'));

    // Sort by name A-Z
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: 'name-asc' } });

    // Check that products are sorted by name
    const productList = screen.getAllByRole('listitem');
    expect(productList[0].textContent).toBe('Product 1');
    expect(productList[1].textContent).toBe('Product 2');
    expect(productList[2].textContent).toBe('Product 3');
  });
});
