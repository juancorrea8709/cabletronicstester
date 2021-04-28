import React from 'react';
import {firebase} from './firebase';
import './index.css';
import Equipos from './components/Equipos';
import Referencia from './components/Referencia';
import Detalle from './components/Detalle';
import Actividades from './components/Actividades';
import Tensiones from './components/Tensiones';
import Utilizados from './components/Utilizados';
import Inventario from './components/Inventario';
import Usuario from './components/Usuario';
import Firma from './components/Firma';
import logoEsu from './imagenes/logoEsu.png';
import cableLogo from './imagenes/cableLogo.png';


function App() {

  const [servicios, setServicios] = React.useState([])
  const [servicio, setServicio] = React.useState('')
  const [inicio, setInicio] = React.useState('')
  const [final, setFinal] = React.useState('')

  React.useEffect(() => {

    const obtenerDatos = async () => {

      try {

        const db = firebase.firestore()
        const data = await db.collection('servicios').get()
        //console.log(data.docs)
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        console.log(arrayData)
        setServicios(arrayData)

      } catch(error) {
        console.log(error)
      }

    }

    obtenerDatos()

  }, [])

  return (
        
    <div className="container">
      <img src={logoEsu} className="mr-10" id="img1"/>
      <img src={cableLogo} className="mr-10" id="img2"/>
      <nav className="navbar navbar-dark bg-primary justify-content-center">
      <span className="navbar-brand mb-0 h1">ORDEN DE SERVICIO</span>
      </nav>
      
      <form className="mt-3">
        <div className="row">
          <div className="form-group col-sm">
            <label>FECHA</label>
            <input type="text" 
            className="form-control" 
            placeholder="dd-mm-aaaa" 
            onChange={e => setServicio(e.target.value)} 
            value={servicio}></input>
          </div>
          <div className="form-group col-sm">
            <label>HORA INICIO</label>
            <input type="text"
            className="form-control" 
            placeholder="hh:mm" 
            onChange={e => setInicio(e.target.value)} 
            value={inicio}></input>
          </div>
          <div className="form-group col-sm">
            <label>HORA FIN</label>
            <input type="text" 
            className="form-control" 
            placeholder="hh:mm" 
            onChange={e => setFinal(e.target.value)} 
            value={final}></input>
          </div>
          
          <div className="form-group col-md-2">
          <fieldset disabled>
            <label>N° DE ORDEN</label>
            <input type="text" className="form-control" placeholder="CT-520-21"></input>
          </fieldset>
          </div>
                    
          <div className="form-group col-md-2">
          <fieldset disabled>
            <label>CONTRATO</label>
            <input type="text" className="form-control" placeholder="202000168"></input>
          </fieldset>
          </div>
                    
          <div className="form-group col-md-2">
          <fieldset disabled>
            <label>CIUDAD</label>
            <input type="text" className="form-control" placeholder="MEDELLÍN"></input>
          </fieldset>
          </div>
                    
          <div className="form-group col-6">
          <fieldset disabled>
            <label>PROYECTO</label>
            <input type="text" className="form-control" placeholder="Mantenimiento Alarmas Comunitarias Medellín"></input>
          </fieldset>
          </div>
           
          <div className="form-group col-6">
          <fieldset disabled>
            <label>CLIENTE</label>
            <input type="text" className="form-control" placeholder="SIES-M (Secretaría de Seguridad de la Alcaldía de Medellín)"></input>
          </fieldset> 
          </div>

          <div className="form-group col-lg">
          <fieldset disabled>
            <label>CONTACTO</label>
            <input type="text" className="form-control" placeholder="ANDRES FELIPE MEJIA HERNANDEZ - ESU -Celular: 300 443 2275  Fijo 444-34-48 Ext. 123 en Medellín"></input>
          </fieldset> 
          </div>
        </div>
      </form>
      <Equipos/>
      <Referencia/>
      <Detalle/>
      <Actividades/>
      <Tensiones/>
      <Utilizados/>
      <Inventario/>
      <Usuario/>
      <Firma/>
    </div>

    
  
  );
  
}

export default App;
