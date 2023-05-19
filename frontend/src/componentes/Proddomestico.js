import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Proddomestico = () => {
    const navigate = useNavigate()
    const goCozinha = () => {
        navigate("/Produto/Proddomestico/Cozinha")
    }
    const goElectrico = () => {
        navigate("/Produto/Proddomestico/Electricos")
    }
    const golimpeza = () => {
        navigate("/Produto/Proddomestico/Limpeza")
    }

    return (
        <div >
            <hr />
            <div className="App-headerdos">
                <h3>Producto Domesticos</h3>
                <nav className="oldos_modulo">
                    <button onMouseOver={goCozinha}>
                        <NavLink to="/Produto/Proddomestico/Cozinha" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Cozinha
                        </NavLink>
                    </button>
                    <button onMouseOver={goElectrico}>
                        <NavLink to="/Produto/Proddomestico/Electricos" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Electricos
                        </NavLink>
                    </button>
                    <button onMouseOver={golimpeza}>
                        <NavLink to="/Produto/Proddomestico/Limpeza" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            Limpeza
                        </NavLink>
                    </button>
                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Proddomestico;