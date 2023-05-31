import React from 'react';
import { BrowserRouter, Route, Routes, NavLink, } from 'react-router-dom';
import logo_large from './logo_large.png';
import SobreNos from './Screens/SobreNos';
import Servico from './Screens/Servico';
import Seinscrever from './Screens/Seinscrever';
import Roupas from './Screens/Roupas';
import Individual from './Screens/Individual';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Empregabilidade from './Screens/Empregabilidade';
import { Helmet } from 'react-helmet-async';

export default function App() {

  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <Helmet>
          <title>Caminhos Sustentáveis</title>
        </Helmet>
        <header>
          <Navbar className='menu-header'>
            <Container>
              <LinkContainer to="/" exact>
                <Navbar.Brand>
                  <img src={logo_large} className="App-logo" alt="logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                </Navbar.Brand>
              </LinkContainer>
              
              <div className='menu'>

                <NavLink to="/SobreNos" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                })}>
                  SobreNós
                </NavLink>

                <NavLink to="/Roupas" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                })}>
                  Produtos
                </NavLink>

                <NavLink to="/Servico" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                })}>
                  Serviços
                </NavLink>

                <NavLink to="/Empregabilidade" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                })}>
                  Empregabilidade
                </NavLink>

                <NavLink to="/Seinscrever" style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'blue' : 'black',
                  marginRight: '13px'
                })}>
                  Inscrever-se
                </NavLink>
              </div>
            </Container>
          </Navbar>
        </header>

        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/" element={<SobreNos />} />
              <Route path="/SobreNos" element={<SobreNos />} />
              <Route path='/Roupas' element={<Roupas />}></Route>
              <Route path="/Servico" element={<Servico />} />
              <Route path="/Empregabilidade" element={<Empregabilidade />} />
              <Route path="/Seinscrever" element={<Seinscrever />} />
              <Route path='/produto/:slug' element={<Individual />} />
            </Routes>
          </Container>
        </main>

        <footer>
          <div classname="text-center">
            <p>
              &copy; 2023 Todos os Dereitos Reservados
            </p>
          </div>
        </footer>

      </div>
    </BrowserRouter >
  );
}