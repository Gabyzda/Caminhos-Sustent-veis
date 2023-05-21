import React from "react";

import Carroulsel from "./Carroulsel";
import CardDinamic from "./CardDinamic"
import "./App.css";

function SobreNos() {
  return (
    <div className="SobreNos">
   

      <h1> CAMINHOS SUSTENTAVEIS</h1>
      <CardDinamic />
      <h1>SobreNos</h1>
      <p>
     
        Somos Migrantes Venezolanos, un equipo formado por igualda conformado por
        dos mujeres y dos hobres con la diveridad en edades desde 23 años hasta
        los 61aaños.Esta diversidad nos permite plasmar la necesidad de recibir
        apoyo en la resilencia en Brasil, desde diferentes opticas.
      </p>
      <Carroulsel />
   
    </div>
  );
}

export default SobreNos;
