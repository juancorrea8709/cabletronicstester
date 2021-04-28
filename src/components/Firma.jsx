import React from 'react'

const Firma = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1">FIRMA DEL USUARIO</span>
            </nav>

            <form className="mt-3">
                <div className="row">

                <div className="form-group col-sm">
                <input type="text" className="form-control" placeholder="Firma del usuario"></input>
                </div>

                </div>
            </form>            
        </div>
    )
}

export default Firma
