import React from "react";
/*import SobreNos from "./SobreNos";*/
import { Link } from 'react-router-dom';
/*import { useState } from "react";*/
import '../Apprutas.css';

function Produto() {
  return (
    <div>
      <form className="presenta_css">
        <div>
          <h3> Caminhos Sustentáveis </h3>
          <h1 className="centrasobrenos">
            CATEGORIAS
          </h1>
          <Link to='./componentes/roupas' style={{ textDecoration: 'none', color: "red" }} > ROUPAS </Link>

        </div>
      </form>
    </div>
  );
}

export default Produto;