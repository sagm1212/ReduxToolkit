import { createSlice } from "@reduxjs/toolkit";

export const miSlice = createSlice({
  name:'misTrabajdores',
  initialState:{
    trabajadores:[]
  },
  reducers:{
    agregarUnvalor: (state,action)=>{
      state.trabajadores=[...state.trabajadores,action.payload]
    },
    modificarUnValor: (state,action)=>{
      const {indice,nuevoContinente} =action.payload;
      state.trabajadores[indice].departamento=nuevoContinente;
    },
    eliminarUnValor: (state,action)=>{
      console.log("Arranque")
      const {nombre, apellido, email} =action.payload;
      state.trabajadores=state.trabajadores.filter(valor=>
        valor.firstname!==nombre && 
        valor.lastname!==apellido &&
        valor.email!==email 
      )
    }
  }
})

export const departamentosSlice = createSlice({
  name:'misDepartamentos',
  initialState:{
    departamentos:["Africa (ventas)","America (Organizacion)","America (Comercial)","Asia (supervisión)","Europa (Distribucion)","Europa (Marketing)","Oceania (Distribucion)"]
  },
  reducers:{

  }
})
export const {agregarUnvalor} = miSlice.actions;
export const {modificarUnValor} = miSlice.actions;
export const {eliminarUnValor} = miSlice.actions;
