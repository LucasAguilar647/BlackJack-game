import { useEffect, useState } from 'react'
import { fetchMazo } from './functions/fetchMazo'
import { ManosJugadores } from './components/ManosJugadores'

function App() {
  const [mazoMezclado, setMazoMezclado] = useState([])
  const [deck, setDeck] = useState([])
  

  const nuevoJuego = () => {
    fetchMazo(setMazoMezclado)
  }

  useEffect(() => {
    fetchMazo(setMazoMezclado)
  }, [])

  const repartirCartas = () => {
    const cartas = mazoMezclado.slice(0, 4)
    setDeck(cartas)
    setMazoMezclado(mazoMezclado.slice(4))
  }


  return (
    <div className='game-section'>
      <h1>Blackjack</h1>
      <div className='cartas-section'>
        <ManosJugadores jugador={1} deck={deck.slice(0, 2)} />
        <ManosJugadores jugador={2} deck={deck.slice(2, 4)} />
      </div>
      <button onClick={nuevoJuego}>Nuevo Juego</button>
      <button onClick={repartirCartas}>Repartir</button>

    </div>
  )
}

export default App;
