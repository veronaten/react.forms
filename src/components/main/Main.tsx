import React from 'react';
import Card from '../card/Card';
import Search from '../search/Search';

import seul from '../../assets/img/girl-city.jpg';
import paris from '../../assets/img/paris.jpg';
import prague from '../../assets/img/prague.jpg';
import oslo from '../../assets/img/norway.jpg';
import york from '../../assets/img/new-york.jpg';
import copenhagen from '../../assets/img/copenhagen.jpg';
import rome from '../../assets/img/rome.jpg';
import san from '../../assets/img/golden-gate.jpg';
import barcelona from '../../assets/img/barcelona.jpg';

import './Main.scss';

const cardArray = [
  {
    id: 1,
    title: 'Seul',
    description: 'This city is the capital of South Korea',
    link: 'https://en.wikipedia.org/wiki/Seoul',
    picture: seul,
  },
  {
    id: 2,
    title: 'Paris',
    description: 'This city is the capital of France',
    link: 'https://en.wikipedia.org/wiki/Paris',
    picture: paris,
  },
  {
    id: 3,
    title: 'Prague',
    description: 'This city is the capital of Czech',
    link: 'https://en.wikipedia.org/wiki/Prague',
    picture: prague,
  },
  {
    id: 4,
    title: 'Oslo',
    description: 'This city is the capital of Norway',
    link: 'https://en.wikipedia.org/wiki/Oslo',
    picture: oslo,
  },
  {
    id: 5,
    title: 'New York',
    description: 'This city is the capital of USA',
    link: 'https://en.wikipedia.org/wiki/NewYork',
    picture: york,
  },
  {
    id: 6,
    title: 'Barcelona',
    description: 'This city is the capital of Spain',
    link: 'https://en.wikipedia.org/wiki/Barcelona',
    picture: barcelona,
  },
  {
    id: 7,
    title: 'Copenhagen',
    description: 'This city is the capital of Denmark',
    link: 'https://en.wikipedia.org/wiki/Copenhagen',
    picture: copenhagen,
  },
  {
    id: 8,
    title: 'Rome',
    description: 'This city is the capital of Italy',
    link: 'https://en.wikipedia.org/wiki/Rome',
    picture: rome,
  },
  {
    id: 9,
    title: 'San Francisco',
    description: 'This city is a very nice city of USA',
    link: 'https://www.britannica.com/place/San-Francisco-California',
    picture: san,
  },
];

const Main = () => (
  <div className="container">
    <Search />
    <div className="wrapper__cards">
      {cardArray.map((item) => (
        <Card
          key={item.id}
          name={item.title}
          description={item.description}
          link={item.link}
          picture={item.picture}
        />
      ))}
    </div>
  </div>
);

export default Main;
