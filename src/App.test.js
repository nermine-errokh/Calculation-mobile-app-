import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the initial result value', () => {
    render(<App />);
    const resultElement = screen.getByText('0');
    expect(resultElement).toBeInTheDocument();
  });

  it('adds two numbers correctly', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText('Type a number');
    const addButton = screen.getByText('add');

    fireEvent.change(inputElement, { target: { value: '5' } });
    fireEvent.click(addButton);

    const resultElement = screen.getByText('5');
    expect(resultElement).toBeInTheDocument();
  });

});
