import React from 'react'

const Referencia = () => {
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1">CANTIDAD Y REFERENCIA <br></br>DE EQUIPOS</span>
            </nav>

            <form className="mt-3">
                <div className="row">

                <div className="form-group col-sm">
                <label>PANEL</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">DSC - PC 1832</option>
                <option value="DSC">AD-VISTA 48LA (Honeywell)</option>
                <option value="DSC">AV-VISTA 48SP (Honeywell)</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>RECEPTORA</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">DSC- RF5132-433</option>
                <option value="DSC">AD-5881ENHLA (Honeywell)</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>PULSADORES</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">DSC - WS4938</option>
                <option value="DSC">5802-WXT (Honeywell))</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>TRANSFORMADOR</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">DSC - PTD1640</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>TECLADO</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">DSC - PK 5500</option>
                <option value="DSC">AD-6164SP (Honeywell)</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>SIRENA</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">DSC - SD30W</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>BATERÍA</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">FU - 12VDC 7A-H</option>
                <option value="DSC">YUASA - 12VDC 7A-H</option>
                <option value="DSC">MTEK - 12VDC 7A-H</option>
                <option value="DSC">KEYKO - 12VDC 7A-H</option>
                <option value="DSC">XION - 12VDC 7A-H</option>
                <option value="DSC">12VDC - 7A-H</option>
                <option value="DSC">12VDC - 9A-H</option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>FUENTE DE 12 V</label>
                <input type="number" className="form-control col-sm" placeholder="CANTIDAD"></input>
                <select className="custom-select mt-2" required>
                <option value="elegir">Elegir...</option>
                <option value="DSC">Seco Larm - ST-1206-1.5AQ</option>
                <option value="DSC">Seco Larm - ST-2406-2AQ</option>
                <option value="DSC">Seco Larm - ST-1206-3AQ</option>
                </select>
                </div>

                </div>
            </form>
        </div>
    )
}

export default Referencia
