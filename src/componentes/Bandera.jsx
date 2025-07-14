import React from "react"

export const Bandera = ({infoPais}) => {
    return(
        <div className="container my-4 text-center">
            <div className="card-body text-center">
                {infoPais.map((info, index) => (
                    <React.Fragment key={index}>
                        <img src={info.flags.png} className="rounded img-thumbnail"/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}