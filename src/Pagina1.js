import React, { useContext } from 'react'
import { Contexto } from './contexto/Contexto'

function Pagina1 () {
    const {color} = useContext(Contexto)
  return (
    <div className='hijo' style={{background:color}}>
        Priorities
    </div>
  )
}

export default Pagina1
