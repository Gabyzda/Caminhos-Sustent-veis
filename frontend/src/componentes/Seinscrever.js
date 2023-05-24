import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
/*import SobreNos from "./SobreNos";*/
/*import { useState } from "react";*/
import '../Apprutas.css';
import "../form.css"

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
      <div className="presenta_css">
          <h3> Formulario de cadastro  </h3>
          <form ref={form} onSubmit={sendEmail}>
            <label>Nome</label>
            <input className='controls' type="text" name="user_name"  placeholder='Pedro Perez'/>
            <label>Email</label>
            <input className='controls' type="email" name="user_email" placeholder='Pedro@gmail.com'/>
            <label>Mensagem </label>
            <textarea name="message" className='controls'  id= "message" placeholder='Escreva o nome de sua empresa, a descrição do empreendimento e a categoria escolhida (por exemplo, alimentos, moda, tecnologia etc):
Dirección:' />
            <input className='button' type="submit" value="Cadastrarse" />
          </form>
      </div>
    </div>
  );
}
