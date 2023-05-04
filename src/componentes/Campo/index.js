import { useState } from "react"
import "./Campo.css"

const Campo = (props) =>{
    
    const placeholderModificado = `${props.placeholder}...` //recibe la información del placeholder definida en formulario.js
                                                            //y agrega tres puntos suspensivos
    //destructuracion
    const { type = "text"} = props

    

    const manejarCambio = (e)=> {
        
        props.actualizarValor(e.target.value);
    }

    return <div className= {`campo campo-${type}`}>
        <label> {props.titulo}</label>
        <input 
            placeholder = {placeholderModificado} 
            required={props.required} 
            value = {props.valor} 
            onChange={manejarCambio}
            type = {type}
        />
    </div>
}

export default Campo