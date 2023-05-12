import React from "react";
/*import SobreNos from "./SobreNos";*/
import { Link } from 'react-router-dom';
/*import { useState } from "react";*/
import '../Apprutas.css';
function Se_inscriver() {
    return(
    <div>
      <form className="presenta_css">  
      <div>
        <h2> Caminhos Sustentáveis </h2>
        <p className="centrasobrenos">
          Pagina SobreNos En construccion </p>
       <Link to= "/" style = { {  textDecoration : 'none' , color : "red" } } > ..[ RETORNAR A PÁGINA INICIAL ].. </Link>
      </div>
      </form>
      </div>
    );
  }

export default Se_inscriver