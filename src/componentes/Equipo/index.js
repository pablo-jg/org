import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba'; //paquete que permite modificar la saturacion del color


const Equipo = (props)=>{

    //destructuración
    //para simplificar el codigo creo tres constantes para guardar los datos sacados de props.datos

    const {colorPrimario, colorSecundario,titulo, id} = props.datos  
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    //creo constante para guardar el background color
    const obj = {
        backgroundColor: hexToRgba (colorPrimario,0.3) //mediante el paquete hexToRgba le paso el color y luego la saturación
    }
    //creo constante para guardar el estilo del borde inferior del div
    const estiloTitulo = {borderColor: colorPrimario};
    //uso las constantes creadas, de esta forma el código queda más prolijo
    return <>{ colaboradores.length > 0 &&
        <section className="equipo" style={obj}>
            <input 
                type='color'
                className="input-color"
                value ={colorPrimario}
                onChange={(evento)=>{
                    actualizarColor(evento.target.value, id)}} // le paso a la función el color y el titulo del equipo
            >
            </input>
            <h3 style={estiloTitulo}>{titulo}</h3>
            <div className="colaboradores">
               
                {
                    colaboradores.map((colaborador,index)=> <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador = {eliminarColaborador}
                    like = {like}
                    />)
                }
                
            </div>
    </section> 
            }
            </>
}

export default Equipo   