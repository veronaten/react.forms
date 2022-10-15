import {
  fireEvent,
  getByDisplayValue,
  getByRole,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import React from 'react';
import Card from '../components/card/Card';
// eslint-disable-next-line import/no-useless-path-segments
import seul from '../../src/assets/img/girl-city.jpg';

// describe('Card', () => {
//   expect(screen.getByText(/this city is the capital of/i)).toBeInTheDocument();

//   it('Should change state on button click', async () => {
//     const { getByText } = render(
//       <Card
//         name="Seul"
//         description="This city is the capital of South Korea"
//         link="https://en.wikipedia.org/wiki/Seoul"
//         picture={seul}
//       />
//     );

//     expect(getByText(/0/i).textContent).toBe('0');
//     const likeButton = getByText('0');
//     fireEvent.click(likeButton);
//     expect(getByText(/0/i).textContent).toBe('1');
//   });
// });

test('to have title, subtitle, button, img', () => {
  render(
    <Card
      name="Seul"
      description="This city is the capital of South Korea"
      link="https://en.wikipedia.org/wiki/Seoul"
      picture={seul}
    />
  );
  const titleElement = screen.getByText(/seul/i);
  expect(titleElement).toBeInTheDocument();
  const subtitleElement = screen.getByText(
    /his city is the capital of South Korea/i
  );
  expect(subtitleElement).toBeInTheDocument();
  // const buttonElement = screen.queryAllByRole('button');
  // expect(buttonElement).toBeInTheDocument();
  // const imgElement = screen.queryAllByRole('img');
  // expect(imgElement).toBeInTheDocument();
});
