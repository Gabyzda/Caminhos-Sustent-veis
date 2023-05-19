import React from 'react';
import { useNavigate, Route, Routes, NavLink, } from 'react-router-dom';
//import logo from './logo.svg';
import SobreNos from './componentes/SobreNos';
import Produto from './componentes/Produto';
import Prodbelleza from './componentes/Prodbelleza';
import Proddomestico from './componentes/Proddomestico';
import Servico from './componentes/Servico';
import Emprendedores from './componentes/Empreendedores';
import './Apprutas.css';
import Seinscrever from './componentes/Seinscrever';
import Estadosba from './componentes/Estadosba';
import Roupas from './componentesproducto/bellezacomponentes/Roupas';
import Sapato from './componentesproducto/bellezacomponentes/Sapato';
import Brincos from './componentesproducto/bellezacomponentes/Brincos';
import Cozinha from './componentesproducto/componentesdomestico/Cozinha';
import Limpeza from './componentesproducto/componentesdomestico/Limpeza';
import Electricos from './componentesproducto/componentesdomestico/Electricos';

export default function App() {
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

  return (

    <div>
      <header>
        <nav>
          {/*<NavLink to="/"><img src={logo} className="App-logo" alt="logo" /></NavLink>*/}
          <p> Caminhos Sustentáveis
            <NavLink to="/" style={{ textDecoration: 'none', color: "black" }} > “ Porque você vale muito...” </NavLink>
          </p>
          <button onMouseOver={goSobreNos}>
            <NavLink to="/SobreNos" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })} > SobreNos </NavLink>
          </button>
          <button onMouseOver={goProduto}>
            <NavLink to="/Produto" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Produto </NavLink>
          </button>
          <button onMouseOver={goServico}>
            <NavLink to="/Servico" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Serviços </NavLink>
          </button>
          <button onMouseOver={goEmpreendedores}>
            <NavLink to="/Empreendedores" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Empreendedores </NavLink>
          </button>
          <button onMouseOver={goEstadosba}>
            <NavLink to="/Estadosba" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Estados </NavLink>
          </button>
          <button onMouseOver={goSeinscrever}>
            <NavLink to="/Seinscrever" style={({ isActive }) =>
              (isActive ? { color: 'red' } : { color: 'blue' })}> Se_inscrever </NavLink>
          </button>
        </nav>
      </header>


      <Routes>
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
        <Route path="/Empreendedores" element={<Emprendedores />} />
        <Route path="/Estadosba" element={<Estadosba />} />
        <Route path="/Seinscrever" element={<Seinscrever />} />
      </Routes>

    </div >
  );
}


/*
<Route path='Sapato' element={<Sapato />}></Route>
<Route path='Brincos' element={<Brincos />}></Route>*/

/*<Route path="Prodomésticos" element={<Proddomestico />}>
<Route path='Cozinha' element={<Cozinha />}></Route>
<Route path='Limpeza' element={<Limpeza />}></Route>
<Route path='Electricos' element={<Electricos />}></Route>
</Route>
<Route path="Campo" element={<Campo />}>
<Route path='Frutas' element={<Frutas />}></Route>
<Route path='Verduras' element={<Verduras />}></Route>
<Route path='Legumbres' element={<Legumbres />}></Route>
</Route>
<Route path="Açougue" element={< Açougue/>}>
<Route path='Carne' element={<Carne />}></Route>
<Route path='Frango' element={<Frango />}></Route>
<Route path='Cerdo' element={<Cerdo />}></Route>
</Route>*/