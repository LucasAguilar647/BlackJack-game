import React, { useEffect, useState } from 'react';
import { TarjetaImg } from './TarjetaImg';
import { calcularPuntos } from '../functions/calcularPuntos';

export const ManosJugadores = ({ jugador, deck }) => {
  const [puntosJugador1, setPuntosJugador1] = useState(0);
  const [puntosJugador2, setPuntosJugador2] = useState(0);

  useEffect(() => {
    calcularPuntos(deck, jugador, setPuntosJugador1, setPuntosJugador2);
    
  }, [deck, jugador]); 

  

  return (
    <section >
      <h2>Jugador {jugador}</h2>
      <h3>Puntos: {jugador === 1 ? puntosJugador1 : puntosJugador2}</h3>
      <div className='mano-jugador-section'>
        {deck.map((carta, index) => (
          <div key={index}>
            <TarjetaImg carta={carta} />
          </div>
        ))}
      </div>
    </section>
  );
};
