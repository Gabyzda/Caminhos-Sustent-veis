import React from 'react';
import { Route, Routes, NavLink, } from 'react-router-dom';
//import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Produto from './componentes/Produto';
import Prodbelleza from './componentes/Prodbelleza';
import Proddomestico from './componentes/Proddomestico';
import Emprendeproduto from './componentes/Emprendeproduto';
import Emprendeserviço from './componentes/Emprendeserviço';
import Servico from './componentes/Servico';
import Empreendedores from './componentes/Empreendedores';
/*import './Apprutas.css';*/
import Seinscrever from './componentes/Seinscrever';
import Estadosba from './componentes/Estadosba';
import Roupas from './componentesproducto/bellezacomponentes/Roupas';
import Sapato from './componentesproducto/bellezacomponentes/Sapato';
import Brincos from './componentesproducto/bellezacomponentes/Brincos';
import Cozinha from './componentesproducto/componentesdomestico/Cozinha';
import Limpeza from './componentesproducto/componentesdomestico/Limpeza';
import Electricos from './componentesproducto/componentesdomestico/Electricos';
import Individual from './componentesproducto/bellezacomponentes/Individual';
import Footer from './componentes/Footer';

export default function App() {
  
  return (

    <div>
 
      <header>
        <nav>
          {/*<NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>*/}
          <h1>
            <NavLink to="/SobreNos" style={{ textDecoration: 'none', color: "black" }} > Home</NavLink>
          </h1>
          <p>Caminhos Sustentáveis
            <NavLink to="/SobreNos" style={{ textDecoration: 'none', color: "black" }} > “ Porque você vale muito...” </NavLink>
          </p>
          <NavLink to="/SobreNos" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            marginRight: '13px'
             })}>SobreNos</NavLink>
          <NavLink to="/Produto" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            marginRight: '13px'
            })}>Produto</NavLink>
          <NavLink to="/Servico" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            marginRight: '13px'
            })}>Serviços</NavLink>
          <NavLink to="/Empreendedores" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            marginRight: '13px'
            })}>Empreendedores</NavLink>
          <NavLink to="/Estadosba" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            marginRight: '13px'
            })}>Estados</NavLink>
          <NavLink to="/Seinscrever" style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? 'blue' : 'black',
            marginRight: '13px'
            })}>Se_inscrever</NavLink>
        </nav>
      </header> 

      <Routes>
        <Route path="/" element={<SobreNos />} />
        <Route path="/SobreNos" element={<SobreNos />} />
        <Route path="/Produto" element={<Produto />} >
          <Route path="Prodbelleza" element={<Prodbelleza />} >
            <Route path='Roupas' element={<Roupas />}></Route>
            <Route path='Sapato' element={<Sapato />}></Route>
            <Route path='Brincos' element={<Brincos />}></Route>
          </Route>
          <Route path="Proddomestico" element={<Proddomestico />}>
            <Route path='Cozinha' element={<Cozinha />}></Route>
            <Route path='Limpeza' element={<Limpeza />}></Route>
            <Route path='Electricos' element={<Electricos />}></Route>
          </Route>
        </Route>
        <Route path="/Servico" element={<Servico />} />
        <Route path="/Empreendedores" element={<Empreendedores />} >
          <Route path="Emprendeproduto" element={<Emprendeproduto />} ></Route>
          <Route path="Emprendeserviço" element={<Emprendeserviço />}></Route>
        </Route>
        <Route path="/Estadosba" element={<Estadosba />} />
        <Route path="/Seinscrever" element={<Seinscrever />} />
        <Route path='/produto/:slug' element={<Individual />} />
      </Routes>
   <div className='Footer'>
   <Footer/>
   </div>
      
    </div>
  );
}

/*

 <
  navegador com el button onclik
 import { useNavigate, Route, Routes, NavLink, } from 'react-router-dom';
 button onclick={goProduto}>
            <NavLink to="/Produto" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Produto </NavLink>
          </button>
          <button onclick={goServico}>
            <NavLink to="/Servico" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Serviços </NavLink>
          </button>
          <button onclick={goEmpreendedores}>
            <NavLink to="/Empreendedores" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Empreendedores </NavLink>
          </button>
          <button onclick ={goEstadosba}>
            <NavLink to="/Estadosba" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Estados </NavLink>
          </button>
          <button onclick={goSeinscrever}>
            <NavLink to="/Seinscrever" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Se_inscrever </NavLink>
          </button>

const navigate = useNavigate()
 const goSobreNos = () => {
    navigate("/SobreNos")
  }
  const goProduto = () => {
    navigate("/Produto")
  }
  const goServico = () => {
    navigate("/Servico")
  }
  const goEmpreendedores = () => {
    navigate("/Empreendedores")
  }
  const goEstadosba = () => {
    navigate("/Estadosba")
  }
  const goSeinscrever = () => {
    navigate("/Seinscrever")
  }

///////////////navegador separacion
  <NavLink to="/SobreNos" style= {({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })} > SobreNos </NavLink>
            <NavLink to="/Produto" style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })}> Produto </NavLink>
            <NavLink to="/Servico" style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })}> Serviços </NavLink>
            <NavLink to="/Empreendedores" style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })}> Empreendedores </NavLink>
            <NavLink to="/Estadosba" style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })}> Estados </NavLink>
            <NavLink to="/Seinscrever" style={({ isActive }) =>
              (isActive ? { color: 'white' } : { color: 'black' })}> Se_inscrever </NavLink>



*/

