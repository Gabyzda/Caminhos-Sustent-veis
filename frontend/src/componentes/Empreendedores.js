import React from 'react';
import { useNavigate, NavLink, Outlet } from 'react-router-dom';

const Empreendedores = () => {

    const navigate = useNavigate()

    const goEmprendeproduto = () => {
        navigate("/Empreendedores/Emprendeproduto")
    }
    const goEmprendeserviço = () => {
        navigate("/Empreendedores/Emprendeserviço")
    }
    
    return (
        <div >
            <hr />
            <div className="App-headerdos">
                <h3>Categoria de Empreendedores</h3>
                <nav className="oldos_modulo">
                    <button onMouseOver={goEmprendeproduto}>
                        <NavLink to="/Empreendedores/Emprendeproduto" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })} >
                            PRODUTO
                        </NavLink>
                    </button>
                    <button onMouseOver={goEmprendeserviço}>
                        <NavLink to="/Empreendedores/Emprendeserviço" style={({ isActive }) =>
                            (isActive ? { color: 'red' } : { color: 'blue' })}>
                            SERVIÇOS
                        </NavLink>
                    </button>
                   
                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Empreendedores;

 