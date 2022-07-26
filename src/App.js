import React, { Fragment, useEffect, useState } from 'react';
import "./index.css";
import Formulario from './components/Formulario';
import Cita from './components/Cita';

  //Arreglo de citas
function App(){
  let citasIniciales = JSON.parse(localStorage.getItem("citas"))
  if (!citasIniciales){
    citasIniciales = []
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem("citas", JSON.stringify(citas))
    }
    else{
      localStorage.setItem("citas", JSON.stringify([]))
    }
  }, [citas])

  const crearCita = cita=>{
    guardarCitas([
      ...citas,cita
    ]);
  }

  const eliminarCita =id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    guardarCitas(nuevasCitas)
  }    

  const titulo = citas.length === 0 ? "No hay citas": "Administra tus citas"

  return (
    <div className="App">
      <Fragment>
      <div className='container'>
        <div className='row'>
          <h2>administrador de pacientes</h2>
        </div>
        <div className='row'>
          <div className='one-half column'>
            <Formulario
              crearCita = {crearCita}
            />
          </div>
          <div className='one-half column'>
            <h2>{titulo}</h2>
            {citas.map(cita=>(
            <Cita
              key = {cita.id}
              cita = {cita}
              eliminarCita = {eliminarCita}
            />
            ))}
            
          </div>
        </div>
      </div>
      </Fragment>
    </div>
  );
}
export default App;