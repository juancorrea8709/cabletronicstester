import React from 'react'

const Tensiones = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1 text-center justify-content-center">TENSIONES Y ESTADO FINAL</span>
            </nav>

            <form className="mt-3">
            <div className="row">

            <div className="form-group col-sm">
                <label>TENSIÓN BATERIA [=] VDC</label>
                <input type="number" className="form-control" placeholder="O,OO"></input>
            </div>

            <div className="form-group col-sm">
                <label>TENSIÓN ADAPTADOR [=] VDC</label>
                <input type="number" className="form-control" placeholder="O,OO"></input>
            </div>

            <div className="form-group col-sm">
                <label>TENSIÓN LINEA TELEFÓNICA [=] VDC</label>
                <input type="number" className="form-control" placeholder="O,OO"></input>
            </div>

            <div className="form-group col-sm">
                <label>TENSIÓN SIRENA [=] VDC</label>
                <input type="number" className="form-control" placeholder="O,OO"></input>
            </div>

            <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck7"/>
                    <label className="custom-control-label" htmlFor="customCheck7">
                    Buena
                    </label>
            </div>
            <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck8"/>
                    <label className="custom-control-label ml-3" htmlFor="customCheck8">
                    Mala
                    </label>
            </div>
            <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck9"/>
                    <label className="custom-control-label ml-3" htmlFor="customCheck9">
                    Desinstalada
                    </label>                     
            </div>

            </div>
            </form>            
        </div>
    )
}

export default Tensiones
