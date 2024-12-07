import React from 'react';
import { TarjetaImg } from './TarjetaImg';

export const ManosJugadores = ({ jugador, deck }) => {
  return (
    <section>
      <h2>Jugador {jugador}</h2>
      <div>
        {deck.map((carta, index) => (
          <p key={index}>
            <TarjetaImg carta={carta} />
          </p>
        ))}
      </div>
    </section>
  );
};
