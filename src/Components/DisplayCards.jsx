// DisplayCards.jsx
import React from 'react';
import Carousel from './Carousel.jsx';

const DisplayCards = () => {
  const slides = [
    'src/assets/displayCard1.png',
    'src/assets/displayCard2.png',
    'src/assets/displayCard3.png',
    'src/assets/displayCard4.png'
  ];

  return (
    <div className='displayCards mt-5'>
      <Carousel slides={slides} />
    </div>
  );
};

export default DisplayCards;
