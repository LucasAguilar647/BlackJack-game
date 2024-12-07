import React from 'react';

export const TarjetaImg = ({ carta }) => {
  return (
    <span className='carta'>
      <img src={`assets/cartas/${carta}.png`} alt="carta" />
    </span>
    
  );
};
