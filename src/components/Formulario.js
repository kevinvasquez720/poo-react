import React, { Fragment, useState } from 'react';

const Formulario = () =>{
    //state cita
    const [cita, actualizarCita] = useState({
        mascota:"",
        propietario:"",
        fecha:"",
        hora:"",
        sintomas:""
    })
    
    const [error, actualizarError]= useState(false)
    const actualizarState = (e) =>{
            actualizarCita({
                ...cita,[e.target.name]:e.target.value
            });
        }
    const{mascota,propietario,fecha,hora,sintomas}=cita
    //funcion para boton
    const submitCita = (e) => {
        e.preventDefault();
        //validar campos vacios
        if(mascota.trim()===""||propietario.trim() ==="" || fecha.trim()==="" || hora.trim()===""||sintomas.trim()==="")
        {
            actualizarError(true);
            return;
        }
        console.log(cita);  
        //validar datos
        //asignar ID
        //crear cita
        //vaciar formulario
    }
    return(
        <Fragment>
            <h2>Crea tu cita</h2>
            {error ? 
                <p className='alerta-error'>uno o mas campos vacios</p>
                :
                null
            }
            <form onSubmit={submitCita}>
                <label>Nombre de la Mascota</label>
                <input type="text" name="mascota" className='u-full-width' placeholder='Nombre Mascota' onChange={actualizarState} value={mascota}></input>
                <label>Nombre del dueño</label>
                <input type="text" name='propietario' className='u-full-width' placeholder='Nombre del dueño' onChange={actualizarState} value={propietario}></input>
                <label>Fecha</label>
                <input type="Date" name="fecha" className='u-full-width' onChange={actualizarState} value={fecha}></input>
                <label>Hora</label>
                <input type="time" name="hora" className='u-full-width' onChange={actualizarState} value={hora}></input>
                <label>Sintomas</label>
                <textarea name='sintomas' className='u-full-width' id='sintomas' onChange={actualizarState} value={sintomas}></textarea>
                <button type='submit' className='button-primary u-full-width'>
                    Agendar cita
                </button>
            </form>
        </Fragment>
    )
}

export default Formulario;