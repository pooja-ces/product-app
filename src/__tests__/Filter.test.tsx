import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Filters from '../components/Filters';
import { categoryOptions } from '../constants';

describe('Filters Component', () => {
  const mockOnFilter = jest.fn();
  const mockOnSelectCategory = jest.fn();

  beforeEach(() => {
    render(
      <Filters
        onFilter={mockOnFilter}
        onSelectCategory={mockOnSelectCategory}
      />
    );
  });

  it("renders the search input field", () => {
    const input = screen.getByPlaceholderText("Search Products..");
    expect(input).toBeInTheDocument();
  });

  it("renders the category select dropdown", () => {
    const categorySelect = screen.getByLabelText('Select Category');
    expect(categorySelect).toBeInTheDocument();
  });

  it("calls onFilter when typing in the search field", () => {
    const input = screen.getByPlaceholderText("Search Products..");
    fireEvent.change(input, { target: { value: "laptop" } });
    expect(mockOnFilter).toHaveBeenCalledWith("laptop");
  });

  it("calls onSelectCategory when selecting a category", () => {
    const categorySelect = screen.getByLabelText('Select Category');
    fireEvent.change(categorySelect, { target: { value: categoryOptions[0].value } });
    expect(mockOnSelectCategory).toHaveBeenCalledWith(categoryOptions[0].value);
  });

  it("handles changes in all input fields", () => {
    const input = screen.getByPlaceholderText("Search Products..");
    const categorySelect = screen.getByLabelText('Select Category');

    // Simulate changes in the input fields
    fireEvent.change(input, { target: { value: "laptop" } });
    fireEvent.change(categorySelect, { target: { value: categoryOptions[1].value } }); // Assuming categoryOptions[1] exists

    // Ensure all callbacks are called with the correct values
    expect(mockOnFilter).toHaveBeenCalledWith("laptop");
    expect(mockOnSelectCategory).toHaveBeenCalledWith(categoryOptions[1].value);
  });
});
