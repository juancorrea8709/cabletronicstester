import React from 'react'

const Actividades = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1 text-center justify-content-center">ACTIVIDADES EJECUTADAS EN<br></br>EL MANTENIMIENTO</span>
            </nav>

            <form className="mt-3">
                <div className="form-group">
                    <label htmlFor="cuadroTexto">DESCRIPCIÓN DE ACTIVIDADES</label>
                    <textarea className="form-control" id="cuadroTexto" rows="3"></textarea>
                </div>
            </form>            
        </div>
    )
}

export default Actividades
