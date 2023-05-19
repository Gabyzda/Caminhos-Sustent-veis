import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Produto = () => {

    const navigate = useNavigate()

    const goProdbelleza = () => {
        navigate("/Produto/Prodbelleza")
    }
    const goProddomestico = () => {
        navigate("/Produto/Proddomestico")
    }
    const goCampo = () => {
        navigate("/Produto/Campo")
    }
    const goAçouge = () => {
        navigate("/Produto/Açouge")
    }
    return (
        <div >
            <hr />
            <div className="App-headerdos">
                <h3>Categoria de producto</h3>
                <nav className="oldos_modulo">
                    <button onMouseOver={goProdbelleza}>
                        <NavLink to="/Produto/Prodbelleza" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })} >
                            Producto de Belleza
                        </NavLink>
                    </button>
                    <button onMouseOver={goProddomestico}>
                        <NavLink to="/Produto/Proddomestico" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Productos Domesticos
                        </NavLink>
                    </button>
                    <button onMouseOver={goCampo}>
                        <NavLink to="/Produto/Campo" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Do campo
                        </NavLink>
                    </button>
                    <button onMouseOver={goAçouge}>
                        <NavLink to="/Produto/Açoge" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Açouge
                        </NavLink>
                    </button>
                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Produto;

/*
   const goProdbelleza = () => {
        navigate("/Produto/Prodbelleza")
    }
    const goProddomestico = () => {
        navigate("/componentes/Produto/Proddomestico")
    }
    const goCampo = () => {
        navigate("/componentes/Produto/Campo")
    }
    const goAçouge = () => {
        navigate("/componentes/Produto/Açouge")
    }*/

/* NAV
<button onMouseOver={goAçouge}>
         <NavLink to="/componentes/Produto/Açoge"style={({ isActive }) => 
                  (isActive ? {color: 'red'} : {color: 'blue'})}>Açouge</NavLink>
        </button>*/