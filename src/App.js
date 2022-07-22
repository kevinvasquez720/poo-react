import React, { Fragment } from 'react';
import "./index.css";
import Formulario from './components/Formulario';
import Cita from './components/Cita';
function App()
{
  return (
    <div className="App">
      <Fragment>
      <div className='container'>
        <div className='row'>
          <h2>administrador de pacientes</h2>
        </div>
        <div className='row'>
          <div className='one-half column'>
            <Formulario>

            </Formulario>
          </div>
          <div className='one-half column'>
            <Cita>

            </Cita>
          </div>
        </div>
      </div>
      </Fragment>
    </div>
  );
}
export default App;