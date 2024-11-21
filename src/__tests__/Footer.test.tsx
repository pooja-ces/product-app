import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../components/Footer';

describe('Footer Component', () => {
    it('renders the footer with links', () => {
        render(<Footer />);

        const aboutLink = screen.getByText(/About/i);
        const termsLink = screen.getByText(/Terms/i);
        const privacyPolicyLink = screen.getByText(/Privacy Policy/i);

        expect(aboutLink).toBeInTheDocument();
        expect(termsLink).toBeInTheDocument();
        expect(privacyPolicyLink).toBeInTheDocument();
    });

    it('renders the footer at the bottom of the page', () => {
        render(<Footer />);
        const footerElement = screen.getByRole('contentinfo');
        expect(footerElement).toHaveClass('fixed');
    });
});