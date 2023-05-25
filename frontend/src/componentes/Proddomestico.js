import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Proddomestico = () => {
    

    return (
        <div >
            <hr />
            <div className="App-headerdos">
                <h3>Producto Domesticos</h3>
                <nav className="oldos_modulo">

                <NavLink to="/Produto/Proddomestico/Cozinha" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                  })}>Cozinha</NavLink>

                <NavLink to="/Produto/Proddomestico/Electricos" style={({ isActive }) => ({
                 textDecoration: 'none',
                 color: isActive ? 'blue' : 'black',
                 marginRight: '13px'
                 })}>Electricos</NavLink>

                <NavLink to="/Produto/Proddomestico/Limpeza" style={({ isActive }) => ({
                 textDecoration: 'none',
                 color: isActive ? 'blue' : 'black',
                 marginRight: '13px'
                 })}>Limpeza</NavLink>

                </nav>
                    
            </div>
            <hr />
            <Outlet />
        </div>
    )
}

export default Proddomestico;
