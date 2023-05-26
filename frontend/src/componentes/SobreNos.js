import React from "react";

import Carroulsel from "./Carroulsel";
import CardDinamic from "./CardDinamic"
import "./App.css";

function SobreNos() {
  return (
    <div className="SobreNos">
   

      {/*<h1> CAMINHOS SUSTENTAVEIS</h1>*/}
      <CardDinamic />
      <h1>SobreNós</h1>
      <p>
      Somos Migrantes Venezuelanos, uma equipe formada pela igualdade de gênero
      </p> 
      <p>Composta por duas mulheres e dois homens com idades diferentes. Temos de 23 a 61 anos de idade. Essa diversidade nos permite expressar a necessidade de apoio à resiliência no Brasil a partir de diferentes perspectivas.
      </p>
      <Carroulsel />
   
    </div>
  );
}

export default SobreNos;
