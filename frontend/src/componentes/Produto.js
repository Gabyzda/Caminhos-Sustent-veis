import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Produto = () => {

    return (
        <div >
            <hr />
            <div>
                <h3>Categoria de producto</h3>
                <nav >        
                <NavLink to="/Produto/Prodbelleza" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Produto de belleza</NavLink>

                <NavLink to="/Produto/Proddomestico" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Produto de Domesticos</NavLink>

                <NavLink to="/Produto/Campo" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Produto do Campo</NavLink>

                <NavLink to="/Produto/Açoge" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Açoge</NavLink>           
                </nav>
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Produto;
