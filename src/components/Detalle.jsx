import React from 'react'

const Detalle = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1 text-center">DETALLE DE LOS TRABAJOS <br></br>(Selección multiple)</span>
            </nav>

            <form className="mt-3">
                <div className="row">

                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label text-justify" htmlFor="customCheck1">
                    Mantenimiento Prev Alarma, Alcance: revisión, verificación, limpieza y cambio solamente de pilas y/o batería.
                    </label>                    
                </div>

                <div className="custom-control custom-checkbox mt-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                    <label className="custom-control-label text-justify" htmlFor="customCheck2">
                    Mantenimiento correctivo reinstalación (TRASLADO) de: Panel, teclado, receptora, sirena y cableado a un nuevo sitio en el mismo predio.
                    </label>                    
                </div>

                <div className="custom-control custom-checkbox mt-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                    <label className="custom-control-label text-justify" htmlFor="customCheck3">
                    Mantenimiento correctivo cambio de componentes de alarma, aplica sólo para: Panel, teclado, receptora, repetidora, sirena y cableado.
                    </label>                    
                </div>

                <div className="custom-control custom-checkbox mt-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                    <label className="custom-control-label text-justify" htmlFor="customCheck4">
                    Mantenimiento correctivo de instalación de alarma. Montar en otro predio, la alarma completa: panel, teclado, receptoras, sirenas, cableado eléctrico, telefónico y cable de datos.
                    </label>                    
                </div>

                <div className="custom-control custom-checkbox mt-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                    <label className="custom-control-label text-justify" htmlFor="customCheck5">
                    Desinstalación del sistema de alarma y componentes de alarmas o reprogramación de panel.
                    </label>                    
                </div>

                <div className="custom-control custom-checkbox mt-2">
                    <input type="checkbox" className="custom-control-input" id="customCheck6"/>
                    <label className="custom-control-label text-justify" htmlFor="customCheck6">
                    Mantenimiento correctivo de conexión de alarma. Reconexiones de energía o línea telefónica.
                    </label>                    
                </div>

                </div>
            </form>
            
        </div>
    )
}

export default Detalle
