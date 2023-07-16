import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

// ? INFO (serif): ABOUT TEST WRITING STEPS
// ! 1. Arrange : render the component under test
// ! 2. Act : get the element to test
// ! 3. Assert : check the element is in the document

// ? CHECK (serif) : THE COMMON MISTAKE -> https://kentcdodds.com/blog/common-mistakes-with-react-testing-library

describe('App', () => {
  it('should render the title', () => {
    // Arrange : render the component under test
    render(<App />);

    // Act : get the element to test

    // Assert
    expect(screen.getByText('Hello, world!')).toBeInTheDocument();
    expect(screen.getByTestId('app-wrapper')).toBeInTheDocument();
  });
});
