import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props)=>{
  
    // useState---- > forma de usarlo : const [nombre, funcionqueActualizanombre] = useState("valorInicial");

    const [mostrar, actualizarMostrar] = useState(true);

    const manejarClick =()=>{
        
        actualizarMostrar(!mostrar); //al hacer alick cambia de true a false y viceversa
        
        
    }

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg