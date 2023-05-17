import React from 'react';
import { useNavigate, NavLink, Outlet} from 'react-router-dom';
const Prodbelleza = () => {
    const navigate = useNavigate()
    const goRoupas = () => {
        navigate("/componentes/Produto/Prodbelleza/Roupas")
        }
    const goSapato = () => {
        navigate("/componentes/Produto/Prodbelleza/Sapato")
        }
    const goBrincos = () => {
        navigate("/componentes/Produto/Prodbelleza/Brincos")
    }
   
    return (
        <div >
            <hr/>
            <div className="App-headerdos">
            <h3>Categorias Producto de Belleza</h3>  
            <nav className="oldos_modulo">
            <button onMouseOver={goRoupas}>
             <NavLink to="componentes/Produto/Prodbelleza/Roupas"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Ropa </NavLink>
            </button> 
            <button onMouseOver={goSapato}>
             <NavLink to="/componentes/Produto/Prodbelleza/Sapato"style={({ isActive }) => 
                      (isActive ? {color: 'red'} : {color: 'blue'})}> Sapatos </NavLink>
            </button>
            <button onMouseOver={goBrincos}>
             <NavLink to="/componentes/Produto/Prodbelleza/Brincos"style={({ isActive }) => 
                     (isActive ? {color: 'red'} : {color: 'blue'})}> Brincos </NavLink>
            </button>
            </nav>
            </div>
            <hr/>
            <Outlet />
        </div>
    )
}

export default Prodbelleza;
