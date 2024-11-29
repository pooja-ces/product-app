import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Select from '../components/Select';

describe('Select Component', () => {
    const mockOnChange = jest.fn();

    const options = [
        { value: '1', name: 'Option 1' },
        { value: '2', name: 'Option 2' },
        { value: '3', name: 'Option 3' }
    ];

    test('renders Select component with options', () => {
        render(<Select options={options} onChange={mockOnChange} placeholder="Select an option" />);

        // Check if the select element is rendered
        const selectElement = screen.getByLabelText('Select an option') as HTMLSelectElement;;
        expect(selectElement).toBeInTheDocument();

        // Check if options are rendered correctly
        options.forEach((option) => {
            expect(screen.getByText(option.name)).toBeInTheDocument();
        });
    });

    test('renders the correct placeholder when no value is selected', () => {
        render(<Select options={options} onChange={mockOnChange} placeholder="Select an option" />);

        // Check if the placeholder is displayed
        const placeholderOption = screen.getByText('Select an option');
        expect(placeholderOption).toBeInTheDocument();

        // Check if the value of select is empty
        const selectElement = screen.getByLabelText('Select an option') as HTMLSelectElement;;
        expect(selectElement.value).toBe('');
    });

    test('calls onChange with the correct value when an option is selected', () => {
        render(<Select options={options} onChange={mockOnChange} placeholder="Select an option" />);

        // Simulate selecting an option
        const selectElement = screen.getByLabelText('Select an option');
        fireEvent.change(selectElement, { target: { value: '2' } });

        // Assert that the onChange callback is called with the correct value
        expect(mockOnChange).toHaveBeenCalledWith('2');
    });

    test('renders the selected value when passed as a prop', () => {
        render(<Select options={options} onChange={mockOnChange} placeholder="Select an option" value="2" />);

        // Check if the selected option has the correct value
        const selectElement = screen.getByLabelText('Select an option') as HTMLSelectElement;;
        expect(selectElement.value).toBe('2');

        // Check if the correct option is selected
        const selectedOption = screen.getByDisplayValue('Option 2');
        expect(selectedOption).toBeInTheDocument();
    });
});
