import React from 'react';

const Candidato = ({ image, uuid, firstname, lastname, macAddress, email, onBuscarUno, index, onGuardarUno }) => {
  return (
    <div className="usuario">
      <div className="foto">
        <img src={image} alt="" />
      </div>
      <div className="datos">
        <div className="titulo">Titulo: {uuid}</div>
        <div className="nombres"> {firstname} {lastname} </div>
        <div>Ubicación: {macAddress}</div>
        <div><a href="#">{email}</a></div>
      </div>
      <div className='botones'>
         <button onClick={() => onBuscarUno(index)} className='rojo'>Ocultar</button>
         <button onClick={() => onGuardarUno({ image, uuid, firstname, lastname, macAddress, email }, index)} className='verde'>Guardar</button>
      </div>
    </div>
  );
}

export default Candidato;
