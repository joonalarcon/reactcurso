import React from "react";
import './Formulario.css';

const Formulario = () => {

    return(
        <div className="container">
            <div className="row justify-content-center">
                <div className=" col-12 col-sm-6">
                    <h1 className="titulo text-center">Formulario de contacto</h1>
                    <form className="formulario">

                        <input required type="text" placeholder="Ingrese Su nombre:" className="form-control formulario"/>
                        <input required type="text" placeholder="Ingrese Su Apellido:" className="form-control formulario"/>
                        <input required type="number" placeholder="Ingrese Su Edad:" className="form-control formulario" min={0} max={99}/>
                        <label className="formulario">Ingrese Su fecha de nacimiento:</label>
                        <input required type="date" className="form-control formulario"/>


                        <button type="submit" className="btn btn-primary form-control formulario">Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Formulario;