import React from 'react'

const Equipos = () => {

    const [equipos, setEquipos] = React.useState([])
    const [equipo, setEquipo] = React.useState('')

    React.useEffect(() => {

        const obtenerDato = async () => {

            try {

                const db = firebase.firestore()
                const data1 = await db.collection('servicios').get()
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
                console.log(arrayData)
                setEquipos(arrayData)

            } catch(error) {
                console.log(error)
            }
        }

        obtenerDato()
    }, [])
    
    return (
        <div className="container mt-3">
            <nav className="navbar navbar-dark bg-warning justify-content-center">
            <span className="navbar-brand mb-0 h1">INFORMACIÓN DE EQUIPOS</span>
            </nav>

            <form className="mt-3">
                <div className="row">
                <div className="form-group col-sm">
                <label>N° DEL FRENTE</label>
                <input type="number" className="form-control" placeholder="1254" onChange={e => setEquipo(e.target.value)} value={equipo}></input>
                </div>
                <div className="form-group col-sm">
                <label>COMUNA</label>
                <select className="custom-select" required>
                <option value="elegir">Elegir...</option>
                <option value="comuna1">Comuna 1 - Popular </option>
                <option value="comuna2">Comuna 2 - Santa Cruz </option>
                <option value="comuna3">Comuna 3 - Manrique </option>
                <option value="comuna4">Comuna 4 - Aranjuez </option>
                <option value="comuna5">Comuna 5 - Castilla </option>
                <option value="comuna6">Comuna 6 - Doce de Octubre </option>
                <option value="comuna7">Comuna 7 - Robledo </option>
                <option value="comuna8">Comuna 8 - Villa Hermosa </option>
                <option value="comuna9">Comuna 9 - Buenos Aires </option>
                <option value="comuna10">Comuna 10 - La Candelaria </option>
                <option value="comuna11">Comuna 11 - Laureles - Estadio </option>
                <option value="comuna12">Comuna 12 - La América </option>
                <option value="comuna13">Comuna 13 - San Javier </option>
                <option value="comuna14">Comuna 14 - Poblado </option>
                <option value="comuna15">Comuna 15 - Guayabal </option>
                <option value="comuna16">Comuna 16 - Belén </option>
                <option value="corregimiento1">Corregimiento - San Sebastián de Palmitas </option>
                <option value="corregimiento2">Corregimiento - San Cristóbal </option>
                <option value="corregimiento3">Corregimiento - Altavista</option>
                <option value="corregimiento4">Corregimiento - San Antonio de Prado</option>
                <option value="corregimiento5">Corregimiento - Santa Elena </option>
                </select>
                </div>

                <div className="form-group col-sm">
                <label>BARRIO</label>
                <input type="text" className="form-control" ></input>
                </div>

                <div className="form-group col-sm">
                <label>DIRECCIÓN</label>
                <input type="text" className="form-control" ></input>
                </div>

                <div className="form-group col-sm">
                <label>TELÉFONO FIJO</label>
                <input type="number" className="form-control" ></input>
                </div>

                <div className="form-group col-sm">
                <label>CELULAR</label>
                <input type="number" className="form-control" ></input>
                </div>

                <div className="form-group col-sm">
                <label>COORDENADAS</label>
                <input type="text" className="form-control" ></input>
                </div>

                </div>
            </form>
        </div>
    )
}

export default Equipos
