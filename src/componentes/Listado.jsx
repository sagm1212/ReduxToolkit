import React, { useEffect, useState } from 'react'
import Candidato from './Candidato'
import { useDispatch, useSelector } from 'react-redux'
import { agregarUnvalor } from '../store/miSlice'
import { Link } from 'react-router-dom'



const Listado = () => {
  const [candidatos, setCandidatos] = useState([])
  const listaTrabajadores=useSelector(state=> state.misTrabajadores.trabajadores)
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/users?_locale=en_US&results=6")
    .then((response) => response.json())
    .then((datos) => setCandidatos(datos.data.slice(0,6)))
  }, [])

  const buscarUno=(indice)=>{
    fetch("https://fakerapi.it/api/v1/users?_locale=en_US&results=1")
    .then((response) => response.json())
    .then((datos) => {
      const provisional=[...candidatos]
      provisional[indice]={...datos.data[0]}
      setCandidatos(provisional)
    })
  }
  const guardarUno=(valor, index)=> {
    const nuevoValor={...valor, departamento:""}
    dispatch(agregarUnvalor(nuevoValor))
    buscarUno(index)
  }

  return (
    <>
    <h1>Candidatos:</h1>
    <><Link to="/gestion"> <button>Trabajadores</button> </Link></>
    <div className='presentacion'>
     {candidatos.map((valor,index) => 
      <Candidato key={index} {...valor} index={index} onBuscarUno={buscarUno} onGuardarUno={guardarUno}/>
    )}
    </div>
    <hr />
    <div className="candidatos">
      {listaTrabajadores.map((valor,i) =>
      <Link key={i} to="/gestion"><button>{valor.firstname}</button> </Link>)}
    </div>
    </>
  )
}

export default Listado