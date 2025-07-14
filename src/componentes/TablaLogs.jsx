import React from "react"

export const TablaLogs = ({paisGuardado}) => {
    return(
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead className="table-danger">
                    <tr>
                        <th>Pais</th>
                        <th>Nombre Oficial</th>
                        <th>Codigo del Pais</th>
                        <th>Capital</th>
                        <th>Lenguaje</th>
                        <th>Moneda</th>
                    </tr>
                </thead>
                <tbody>
                    {paisGuardado.length === 0 ? (
                        <tr>
                            <td colSpan={6} className="text-center fw-bold">No se encuentran datos guardados</td>
                        </tr>
                    ) : (
                        paisGuardado.map((pais, index) => (
                            <React.Fragment key={index}>
                                <tr>
                                    <td>{pais.name.common}</td>
                                    <td>{pais.translations.spa.official}</td>
                                    <td>{pais.cca3}</td>
                                    <td>{pais.capital}</td>
                                    <td>{Object.values(pais.languages).join(', ')}</td>
                                    <td>{Object.values(pais.currencies)[0].name} ({Object.values(pais.currencies)[0].symbol})</td>
                                </tr>
                            </React.Fragment>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}