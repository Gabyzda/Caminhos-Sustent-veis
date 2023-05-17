import React from 'react';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
const Produto = () => {

    const navigate = useNavigate()

    const goProdbelleza = () => {
        navigate("/componentes/Produto/Prodbelleza")
    }
    const goProddomestico = () => {
        navigate("/componentes/Produto/componentesproducto/Proddomestico")
    }
    const goCampo = () => {
        navigate("/componentes/Produto/componentesproducto/Campo")
    }
    const goAçouge = () => {
        navigate("/componentes/Produto/componentesproducto/Açouge")
    }
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Categoria de producto</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goProdbelleza}>
             <NavLink to="/componentes/Produto/Prodbelleza" style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})} >Producto de Belleza </NavLink>
            </button> 
            <button onMouseOver={goProddomestico}>
             <NavLink to="/componentes/Produto/Proddomestico"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Productos Domesticos </NavLink>
            </button>
            <button onMouseOver={goCampo}>
             <NavLink to="/componentes/Produto/Campo"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Do campo </NavLink>
            </button>
            <button onMouseOver={goAçouge}>
             <NavLink to="/componentes/Produto/Açoge"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}>Açouge</NavLink>
            </button>
             </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Produto;