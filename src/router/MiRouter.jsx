import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Listado from '../componentes/Listado'
import Gestion from '../componentes/Gestion'

const MiRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Listado/>}/>
      <Route path="/cantidadatos" element={<Listado/>}/>
      <Route path="/gestion" element={<Gestion/>}/>
      <Route path="*" element={<Listado/>}/>
  </Routes>
  )
}

export default MiRouter