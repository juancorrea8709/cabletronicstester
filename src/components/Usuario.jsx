import React from 'react'

const Usuario = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1">DATOS DEL USUARIO</span>
            </nav>
            
            <form className="mt-3">
                <div className="row">

                <div className="form-group col-sm">
                <label>NOMBRE COMPLETO</label>
                <input type="text" className="form-control"></input>
                </div>

                <div className="form-group col-sm">
                <label>NUMERO DE CEDULA</label>
                <input type="number" className="form-control"></input>
                </div>

                

                </div>
            </form>
        </div>
    )
}

export default Usuario
