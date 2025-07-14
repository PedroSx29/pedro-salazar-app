import { useState } from "react";

export const Formulario = ({AddPais, onPaisSeleccionado}) => {
    const [datos, setDatos] = useState({nombrePais:''})
    const [error, setError] = useState('')

    const cambio = (e) => {
        const {name, value} = e.target
        setDatos(d => ({...d,[name]:value}))
        setError('')
    }

    const busqueda = async (e) => {
        e.preventDefault();
        if (!datos.nombrePais.trim()) {
            setError('Campo Obligatorio')
            return
        }

        try {
            const response = await fetch(`https://restcountries.com/v3.1/translation/${datos.nombrePais}`)
            if (!response.ok) {
                throw new Error('Error al buscar el país')
            }
            const data = await response.json()
            if (data.length === 0) {
                setError('No se encontraron resultados para el país ingresado.')
                return
            }
            AddPais(data[0])
            onPaisSeleccionado(datos.nombrePais)
            limpiar()
        } catch (error) {
            setError('Error: ' + error.message)
        }
    };

    const limpiar = () => {
        setDatos({nombrePais:''})
        setError('')
    }

    return(
        <div>
            <label className="fw-bold">Ingrese Nombre del Pais</label>
            <input type="text" name="nombrePais" value={datos.nombrePais} id="" onChange={cambio} className={`form-control ${error ? 'is-invalid' : ''}`}/> 
                {error && <div className="invalid-feedback">{error}</div>}
            <div className="my-2">
                <input type="submit" value="Buscar" onClick={busqueda} className="btn btn-success mx-1"/>
                <input type="button" value="Limpiar" onClick={limpiar} className="btn btn-warning mx-1"/>
            </div>
        </div>
    )
}