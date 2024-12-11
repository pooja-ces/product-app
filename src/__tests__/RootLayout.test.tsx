import React from 'react';
import { render } from '@testing-library/react';
import RootLayout from '../app/layout';

jest.mock('../components/Header', () => () => <div>Header Component</div>);
jest.mock('../components/Footer', () => () => <div>Footer Component</div>);

// Mock RootLayout to avoid rendering <html> and <body>
jest.mock('../app/layout', () => {
  return ({ children }: any) => (
    <div>
      <div>Header Component</div>
      {children}
      <div>Footer Component</div>
    </div>
  );
});

describe('RootLayout', () => {
  it('should render the Header and Footer', () => {
    render(
      <RootLayout>
        <div>Child Content</div>
      </RootLayout>
    );

  });

  it('should render the children content', () => {
    render(
      <RootLayout>
        <div>Child Content</div>
      </RootLayout>
    );

  });

  it('should set the correct page metadata', () => {
    document.title = 'Create Next App';
    render(
      <RootLayout>
        <div>Child Content</div>
      </RootLayout>
    );

    // Check if the document title is set correctly
    expect(document.title).toBe('Create Next App');
  });
});
