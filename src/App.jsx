import { useEffect, useState } from 'react'
import { fetchMazo } from './functions/fetchMazo'
import { ManosJugadores } from './components/ManosJugadores'

function App() {
  const [mazoMezclado, setMazoMezclado] = useState([])
  const [deck, setDeck] = useState([])
  const [cartasJugador1, setCartasJugador1] = useState([])
  const [cartasJugador2, setCartasJugador2] = useState([])  

  const nuevoJuego = () => {
    fetchMazo(setMazoMezclado)
    repartirCartas()
  }

  useEffect(() => {
    fetchMazo(setMazoMezclado)
  }, [])

  const repartirCartas = () => {
    const cartas = mazoMezclado.slice(0, 4)
    setCartasJugador1(cartas.slice(0, 2))
    setCartasJugador2(cartas.slice(2, 4))
    setDeck(cartas)
    setMazoMezclado(mazoMezclado.slice(4))
  }

  const pedirCarta = () => {
    const carta = mazoMezclado.slice(0, 1) 
    setCartasJugador1([...cartasJugador1, ...carta])
    setDeck([...deck, ...carta]) 
    setMazoMezclado(mazoMezclado.slice(1))
  }


  return (
    <div className='game-section'>
      <h1>Blackjack</h1>
      <div className='cartas-section'>
        <ManosJugadores jugador={1} deck={cartasJugador1} />
        <ManosJugadores jugador={2} deck={cartasJugador2} />
      </div>
      <section className='game-buttons'>
        <button onClick={nuevoJuego}>Nuevo Juego</button>
        <button onClick={repartirCartas}>Repartir</button>
        <button onClick={pedirCarta} >Pedir</button>
      </section>

    </div>
  )
}

export default App;
