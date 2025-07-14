import { useEffect, useState } from "react";
import { Formulario } from "./componentes/Formulario";
import { Tabla } from "./componentes/Tabla";
import { Bandera } from "./componentes/Bandera";
import { TablaLogs } from "./componentes/TablaLogs";

export const ApiApp = () => {
    const [infoPais, setInfoPais] = useState([])
    const [paisSeleccionado, setPaisSeleccionado] = useState('')
    const [paisGuardado, setPaisGuardado] = useState([])

    useEffect(() => {
        if (paisSeleccionado) {
            const fetchInfoPais = async () => {
                const response = await fetch(`https://restcountries.com/v3.1/translation/${paisSeleccionado}`)
                const data = await response.json()
                setInfoPais([data[0]])
            }
            fetchInfoPais()
        }
    }, [paisSeleccionado])

    useEffect(() => {
        const guardado = localStorage.getItem('paises')
        if(guardado)
            setPaisGuardado(JSON.parse(guardado))
    },[])

    const AddPais = (newPais) => {
        const updatedPaisGuardado = [...paisGuardado, newPais]
        setPaisGuardado(updatedPaisGuardado)
        localStorage.setItem('paises', JSON.stringify(updatedPaisGuardado))
    }

    const handlePaisSeleccionado = (pais) => {
        setPaisSeleccionado(pais)
    }

    return(
        <>
            <h1 className="alert alert-primary text-center py-4">Busqueda de Paises</h1>
            <div>
                <div>
                    <Bandera infoPais={infoPais}/>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row container">
                        <div className="col-4 card card-body">
                            <Formulario AddPais={AddPais} onPaisSeleccionado={handlePaisSeleccionado}/>
                        </div>
                        <div className="col-8">
                            <Tabla infoPais={infoPais}/>
                        </div>
                    </div>
                </div>
                <h1 className="alert alert-secondary text-center py-4 mt-4">Últimas Busquedas</h1>
                <div>
                    <TablaLogs paisGuardado={paisGuardado}/>
                </div>
            </div>
        </>
    )
}