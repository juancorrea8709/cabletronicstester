import React from 'react'

const Inventario = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1 text-center">INVENTARIO DE PULSADORES <br></br>(En poder de los usuarios <br></br>del frente de seguridad)</span>
            </nav>

            <form className="mt-3">
                <div className="row">

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="1"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="2"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="3"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="4"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="5"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="6"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-sm">
                <label>NOMBRE DE QUIEN LO OPERA</label>
                <input type="text" className="form-control" placeholder="7"></input>
                <input type="text" className="form-control mt-2" placeholder="CÉDULA"></input>
                <input type="text" className="form-control mt-2" placeholder="UBICACIÓN"></input>
                <input type="text" className="form-control mt-2" placeholder="SERIAL"></input>
                </div>

                <div className="form-group col-md-2">
                <fieldset disabled>
                    <input type="text" className="form-control" placeholder="NOMBRE DEL TÉCNICO"></input>
                </fieldset>
                    <select className="custom-select mt-2" required>
                    <option value="elegir">Elegir...</option>
                    <option value="DSC">Roberth Cedeño</option>
                    <option value="DSC">Danilo Pineda</option>
                    <option value="DSC">Edwin Cardona</option>
                    </select>
                </div>

                <div className="form-group col-md-2">
                <fieldset disabled>
                    <input type="text" className="form-control" placeholder="COORDINADOR DE CUADRILLA"></input>
                </fieldset>
                    <select className="custom-select mt-2" required>
                    <option value="elegir">Elegir...</option>
                    <option value="DSC">Antonio Blanco Carmenateh</option>
                    </select>
                </div>

                </div>
            </form>
        </div>
    )
}

export default Inventario
