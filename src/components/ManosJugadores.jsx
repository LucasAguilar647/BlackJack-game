import React, { useEffect } from 'react';
import { TarjetaImg } from './TarjetaImg';
import { calcularPuntos } from '../functions/calcularPuntos';

export const ManosJugadores = ({
  jugador,
  deck,
  mazoMezclado,
  cartasJugador2,
  setCartasJugador2,
  setDeck,
  setMazoMezclado,
  puntosJugador1,
  puntosJugador2,
  setPuntosJugador1,
  setPuntosJugador2
}) => {

  useEffect(() => {
    calcularPuntos(deck, jugador, setPuntosJugador1, setPuntosJugador2);
  }, [deck, jugador]);

  const handleQuedarse = () => {
    if (puntosJugador2 < 17) {
      const carta = mazoMezclado.slice(0, 1);
      console.log(cartasJugador2);
      
      setCartasJugador2([...cartasJugador2, ...carta]);
      setDeck([...deck, ...carta]);
      setMazoMezclado(mazoMezclado.slice(1));
    }
  };

  return (
    <section>
      <h2>Jugador {jugador}</h2>
      <h3>Puntos: {jugador === 1 ? puntosJugador1 : puntosJugador2}</h3>
      {jugador === 1 ? <button onClick={handleQuedarse}>Quedarse</button> : null}
      <div className="mano-jugador-section">
        {deck.map((carta, index) => (
          <div key={index}>
            <TarjetaImg carta={carta} />
          </div>
        ))}
      </div>
    </section>
  );
};
