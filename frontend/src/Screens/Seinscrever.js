import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';

export default function SeInscrever() {
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';
  return (
    <Container className="small-container">
      <Helmet>
        <title>Inscrever-se</title>
      </Helmet>
      <h1 className="my-3">Inscrever-se</h1>
      <Form>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Entrar</Button>
        </div>
        <div className="mb-3">
          Novo usuario?{' '}
          <Link to={`/signup?redirect=${redirect}`}>Crie sua conta</Link>
        </div>
      </Form>
    </Container>
  );
}



/*import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet-async';

export default function Seinscrever() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_jtri65a', 'template_6r891wi', form.current, 'ca--nxKGNQxKGhQjy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Cadastro</title>
      </Helmet>
      <div className="presenta_css">
        <h3> Formulario de cadastro  </h3>
        <form ref={form} onSubmit={sendEmail}>
          <label>Nome</label>
          <input className='controls' type="text" name="user_name" placeholder='Pedro Perez' />
          <label>Email</label>
          <input className='controls' type="email" name="user_email" placeholder='Pedro@gmail.com' />
          <label>Mensagem </label>
          <textarea name="message" className='controls' id="message" placeholder='Escreva o nome de sua empresa, a descrição do empreendimento e a categoria escolhida (por exemplo, alimentos, moda, tecnologia etc):
Dirección:' />
          <input className='button' type="submit" value="Cadastrarse" />
        </form>
      </div>
    </div>
  );
}*/
