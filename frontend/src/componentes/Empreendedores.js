import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Empreendedores = () => {
    
    return (
        <div >
            <hr />
            <div>
                <h3>Categoria de Empreendedores</h3>
                <nav>

                <NavLink to="/Empreendedores/Emprendeproduto" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>PRODUTO</NavLink>

                <NavLink to="/Empreendedores/Emprendeserviço" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>SERVIÇOS</NavLink>
                   
                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Empreendedores;

