import React from 'react'
import { useEffect, useState } from 'react';
import { ManosJugadores } from '../components/ManosJugadores';
import {fetchMazo} from '../functions/fetchMazo'


export const Game = () => {
    const [mazoMezclado, setMazoMezclado] = useState([]);
    const [deck, setDeck] = useState([]);
    const [cartasJugador1, setCartasJugador1] = useState([]);
    const [cartasJugador2, setCartasJugador2] = useState([]);
    const [puntosJugador1, setPuntosJugador1] = useState(0);
    const [puntosJugador2, setPuntosJugador2] = useState(0);
  
    const handleNuevoJuego = () => {
      fetchMazo(setMazoMezclado);
      repartirCartas();
    };
  
    useEffect(() => {
      fetchMazo(setMazoMezclado);
    }, []);
  
    const repartirCartas = () => {
      const cartas = mazoMezclado.slice(0, 4);
      setCartasJugador1(cartas.slice(0, 2));
      setCartasJugador2(cartas.slice(2, 4));
      setDeck(cartas);
      setMazoMezclado(mazoMezclado.slice(4));
    };
  
    const pedirCartaJugador = () => {
      const carta = mazoMezclado.slice(0, 1);
      setCartasJugador1([...cartasJugador1, ...carta]);
      setDeck([...deck, ...carta]);
      setMazoMezclado(mazoMezclado.slice(1));
    };
  
    return (
      <div className="game-section">
        
        <div className="cartas-section">
          <ManosJugadores
            jugador={1}
            deck={cartasJugador1}
            mazoMezclado={mazoMezclado}
            cartasJugador2={cartasJugador2}
            setCartasJugador2={setCartasJugador2}
            setDeck={setDeck}
            setMazoMezclado={setMazoMezclado}
            puntosJugador1={puntosJugador1}
            puntosJugador2={puntosJugador2}
            setPuntosJugador1={setPuntosJugador1}
            setPuntosJugador2={setPuntosJugador2}
          />
          <ManosJugadores
            jugador={2}
            deck={cartasJugador2}
            mazoMezclado={mazoMezclado}
            cartasJugador2={cartasJugador2}
            setCartasJugador2={setCartasJugador2}
            setDeck={setDeck}
            setMazoMezclado={setMazoMezclado}
            puntosJugador1={puntosJugador1}
            puntosJugador2={puntosJugador2}
            setPuntosJugador1={setPuntosJugador1}
            setPuntosJugador2={setPuntosJugador2}
          />
        </div>
        <section className="game-buttons">
          <button onClick={handleNuevoJuego}>Nuevo juego</button>
          <button onClick={pedirCartaJugador}>Pedir</button>
        </section>
      </div>
    );
  }

  export default Game;