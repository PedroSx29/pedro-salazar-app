import React from "react"

export const Tabla = ({infoPais}) => {
    return(
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th>Apartado</th>
                        <th>Información</th>
                    </tr>
                </thead>
                <tbody>
                    {infoPais.length === 0 ? (
                        <tr>
                            <td colSpan={2} className="fw-bold text-center">No hay Datos Disponibles</td>
                        </tr>
                    ) : (
                        infoPais.map((info, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td className="fw-bold">Nombre</td>
                                    <td>{info.translations.spa.common}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Nombre Oficial</td>
                                    <td>{info.translations.spa.official}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Codigo del Pais</td>
                                    <td>{info.cca3}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Capital</td>
                                    <td>{info.capital}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Lenguaje</td>
                                    <td>{Object.values(info.languages).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td className="fw-bold">Moneda</td>
                                    <td>{Object.values(info.currencies)[0].name} ({Object.values(info.currencies)[0].symbol})</td>
                                </tr>
                            </React.Fragment>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}