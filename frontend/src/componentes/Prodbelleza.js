import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Prodbelleza = () => {
   

    return (
        <div >
            <hr />
            <div>
                <h3>Categorias Producto de Belleza</h3>
                <nav>

                <NavLink to="/Produto/Prodbelleza/Roupas" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Roupas</NavLink>

                <NavLink to="/Produto/Prodbelleza/Sapato" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Sapato</NavLink>

                <NavLink to="/Produto/Prodbelleza/brincos" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Brincos</NavLink>

                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Prodbelleza;
