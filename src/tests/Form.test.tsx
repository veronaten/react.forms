import { render, screen } from '@testing-library/react';
import React from 'react';
import Forms from '../components/form/Forms';

test('to have input, button in Forms', () => {
  render(<Forms />);
  const inputElementText = screen.getByPlaceholderText(/enter city/i);
  expect(inputElementText).toBeInTheDocument();

  const inputElementDate = screen.getByPlaceholderText(/дд.мм.гггг/i);
  expect(inputElementDate).toBeInTheDocument();

  const checkBoxElement = screen.getByText(/Do you want to make new Card?/i);
  expect(checkBoxElement).toBeInTheDocument();

  const buttonElement = screen.getByRole('button');
  expect(buttonElement).toBeInTheDocument();
});
