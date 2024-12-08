import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Principal = () => {
    const navigate = useNavigate();

    const handleComenzar = () => {
        navigate('/Game');
    }


  return (
    <div className="game-section-comenzar">
        <h1>Blackjack</h1>
        <section className='button-comenzar'>
            <button onClick={handleComenzar}>Comenzar</button>
        </section>


    </div>
  )
}
