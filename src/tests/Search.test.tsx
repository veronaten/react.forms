import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Search from '../components/search/Search';

describe('Search', () => {
  test('to have input, button', () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText(/enter text/i);
    expect(inputElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it('Should call localStorage getItem on render', () => {
    render(<Search />);
    expect(window.localStorage.getItem).toHaveBeenCalledTimes(1);
  });

  // it('Should call localStorage setItem on text change', () => {
  //   const { queryByPlaceholderText } = render(<Search />);

  //   const input = queryByPlaceholderText(/enter text/i);
  //   fireEvent.change(input as Element | Node | Document | Window, {
  //     target: { value: '' },
  //   });

  //   expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  //   expect(window.localStorage.setItem).toHaveBeenCalledWith('value', '');
  // });

  // it('Should call localStorage setItem on button click', async () => {
  //   const { getByDisplayValue, getByText } = render(<Search />);

  //   const goButton = getByText('Go');
  //   fireEvent.click(goButton);

  //   expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  //   expect(window.localStorage.setItem).toHaveBeenCalledWith(
  //     'value',
  //     ''
  //   );
  // });
});
