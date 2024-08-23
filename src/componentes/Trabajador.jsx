import React from 'react'
import { useSelector } from 'react-redux'


const Trabajador = ({valor, index,onActualizar,onEliminar}) => {
  const departamentos=useSelector(state => state.misDepartamentos.departamentos)
  return (
    <>
    <div className="columnas">
      <div className="fotoUsuario">
        <img src={valor.image} alt="" />
      </div>
      <div className="nombreUsuarios">
        <strong>
          {valor.lastname} {valor.firstname }
        </strong>
      </div>
      <div>{valor.macAddress}</div>
      <div>
      <select onChange={(event) => onActualizar(event.target.value, index)}>
            <option>Seleciona:</option>
            {
              departamentos.map((esteValor, i) =>
                valor.departamento === esteValor
                  ? <option selected key={i}>{esteValor}</option>
                  : <option key={i}>{esteValor}</option>
              )
            }
          </select>
    </div>
    <div> <button className="rojo" onClick={()=>onEliminar(valor)}> Eliminar </button> </div>
    </div>

    </>
  )
}

export default Trabajador