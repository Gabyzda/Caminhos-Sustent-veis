/*import Appmenulateral from './Appmenulateral'*/
import React from 'react';
import { useNavigate, Route,Routes,NavLink, } from 'react-router-dom';
import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Produto from './componentes/Produto';
import Servico from './componentes/Servico';
import Emprendedores from './componentes/Empreendedores';
import './Apprutas.css';
/*import Estados from './componentes/Estados';
import Se_inscriver from './componentes/Se_inscriver';
import { NoMatch } from './componentes/NoMatch';
import App from './App';*/


function App() {
  const navigate = useNavigate()
  const goSobreNos = () => {
    navigate("/SobreNos")
   }
  const goProduto = () => {
   navigate("/componentes/Produto")
  }
  const goServico = () => {
    navigate("/componentes/Servico")
   }
  const goEmpreendedores = () => {
   navigate("/componentes/Empreendedores")
  }
  return (

    <div>
       <header>
          <nav>
            <NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>   
            <p> Caminhos Sustentáveis
            <NavLink to= "/" style = { {  textDecoration : 'none' , color : "black" } } > “ Porque você vale muito...” </NavLink>
            </p> 
            <button onMouseOver={goSobreNos}>
              <NavLink  to ="/SobreNos" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} > SobreNos </NavLink>
            </button>
            <button onMouseOver={goProduto}>
              <NavLink to="/componentes/Produto"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Produto </NavLink>
            </button>
            <button onMouseOver={goServico}>
              <NavLink to="/componentes/Servico"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Serviços </NavLink>
            </button>
            <button onMouseOver={goEmpreendedores}>
              <NavLink to="/componentes/Empreendedores"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Empreendedores </NavLink>
            </button>
		      </nav>   
       </header>

      <Routes>
        <Route path="/SobreNos"element={<SobreNos />}/>
        <Route path="/componentes/Produto"element={<Produto />}/>
        <Route path="/componentes/Servico"element={<Servico />}/>
        <Route path="/componentes/Empreendedores"element={<Emprendedores />}/>
        
      </Routes>
    
    </div>


  );
}

export default App;