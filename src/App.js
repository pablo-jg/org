import { useState } from 'react';
import './App.css';
import Header from "./componentes/Header/Header.js"
import Formulario from "./componentes/Formulario/Formulario.js";
import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import { v4 as uuid } from 'uuid';

function App() {

  const [mostrarFormulario, actualizarMostrar] = useState(false);
  const [colaboradores, actualizarColaboradores] = useState([{  //inicializo el estado con un arreglo.
    
    id: uuid(),                                                            //aqui después se van a guardar los colaboradores
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/genesysaluralatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }])                                                       
  const [equipos, actualizarEquipos] = useState([ 

    {
      id: uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    }
    ,
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    }
    ,
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    }
    ,
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    }
    ,

    {
      id: uuid(),
      titulo: "Ux y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    }
    ,
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    }
    ,
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
    ,

  ])


  /*Ternario --> condicion ? seMuestra : noSeMuestra
  {mostrarFormulario === true ? <Formulario/> : <div></div>}
  {mostrarFormulario  ? <Formulario/> : <></>} ---> forma más simplificada. no es necesario usar ==true ni crear divs vacíos
  si mostrarFormulario es igual a true, muestra el componente Formulario, de lo contrario muestra un div vacío
  {mostrarFormulario && <Formulario/>} ---> otra forma más simplificada sin necesidad de usar el "else"

  */
  //<MiOrg cambiarMostrar={cambiarMostrar}/> --> envío como props la función cambiarMostrar, para luego
  //llamarla en el index.js de miOrg en onClick| 

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario);
  }

  //registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("nuevo colaborador", colaborador)
    
    //Spread operator ---> crea una copia de los valores actuales y le agrega un elemento
    //comienza con ... toma los valores del arreglo colaboradores, y le agrega el nuevo colaborador
    //funciona similar a push que permite agregar elementos a un arreglo

    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id)=>{
    console.log("eliminar colab", id)
    // filtro los colaboradores, mediante filter que me devuelve un nuevo arreglo con todos los colaboradores cuyo 
    //id sea diferente al id del colaborador que quiero quitar. como resultado se quita el colaborador
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

//Actualizar color de equipo
const actualizarColor = (color, id)=>{
  console.log("actualizar:", color, id)
  const equiposActualizados = equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
      return equipo
  })

  actualizarEquipos(equiposActualizados)
}

//Crear equipo

const crearEquipo = (nuevoEquipo)=>{
  actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid()}])
}

const like = (id)=>{
    const colaboradoresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>

      <Header />
      {mostrarFormulario && <Formulario
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo = {crearEquipo}
      />
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />

      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador=>colaborador.equipo === equipo.titulo)} //si el equipo del colaborador es igual al equipo lo muestra sino no
        eliminarColaborador = {eliminarColaborador} // antes del igual es el nombre de la prop, después la funcion
        actualizarColor = {actualizarColor}
        like = {like}
         />)

      }

      <Footer/>

    </div>
  );
}

export default App;
