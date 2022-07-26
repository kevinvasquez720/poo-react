const Cita =({cita, eliminarCita})=>(
    <div>
        <div className="cita">
            <p>Mascota <span>{cita.mascota}</span></p>
            <p>Propietaro:<span>{cita.propietario}</span></p>
            <p>Fecha:<span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>

            <button className="button eliminar u-full-width" 
            onClick={()=> eliminarCita(cita.id)}
            >Eliminar</button>
        </div>
        
    </div>
    )
    
    export default Cita