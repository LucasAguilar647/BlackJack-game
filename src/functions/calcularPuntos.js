import { verificarPuntos } from './verificarPuntos';

export const calcularPuntos = (deck, jugador, setPuntosJugador1, setPuntosJugador2) => {
  let puntos = 0;
  
  deck.forEach((carta) => {
    const valor = carta.length === 2 ? carta[0] : carta.slice(0, 2);
    if (valor === 'K' || valor === 'Q' || valor === 'J') {
      puntos += 10;
    } else if (valor === 'A') {
      puntos += 11;
    } else {
      puntos += parseInt(valor);
    }
  });

  if (jugador === 1) {
    setPuntosJugador1(puntos); 
  } else if (jugador === 2) {
    setPuntosJugador2(puntos);
  }

  verificarPuntos(puntos, jugador);
};

