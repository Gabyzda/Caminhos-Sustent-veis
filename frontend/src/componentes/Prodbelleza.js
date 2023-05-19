import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Prodbelleza = () => {
    const navigate = useNavigate()
    const goRoupas = () => {
        navigate("/Produto/Prodbelleza/Roupas")
    }
    const goSapato = () => {
        navigate("/Produto/Prodbelleza/Sapato")
    }
    const goBrincos = () => {
        navigate("/Produto/Prodbelleza/Brincos")
    }

    return (
        <div >
            <hr />
            <div className="App-headerdos">
                <h3>Categorias Producto de Belleza</h3>
                <nav className="oldos_modulo">
                    <button onMouseOver={goRoupas}>
                        <NavLink to="/Produto/Prodbelleza/Roupas" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Roupas
                        </NavLink>
                    </button>
                    <button onMouseOver={goSapato}>
                        <NavLink to="/Produto/Prodbelleza/Sapato" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Sapato
                        </NavLink>
                    </button>
                    <button onMouseOver={goBrincos}>
                        <NavLink to="/Produto/Prodbelleza/Brincos" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Brincos
                        </NavLink>
                    </button>
                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Prodbelleza;

/*
  const goRoupas = () => {
        navigate("Prodbelleza/componentesproducto/bellezacomponentes/Roupas")
        }
    const goSapato = () => {
        navigate("/componentes/Produto/Prodbelleza/componetesproductos/bellezacomponentes/Sapato")
        }
    const goBrincos = () => {
        navigate("/componentes/Produto/Prodbelleza/componetesproductos/bellezacomponentes/Brincos")
    }
    */