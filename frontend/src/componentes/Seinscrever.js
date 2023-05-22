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
            <label>Name</label>
            <input className='controls' type="text" name="user_name"  placeholder='Pedro Perez'/>
            <label>Email</label>
            <input className='controls' type="email" name="user_email" placeholder='Pedro@gmail.com'/>
            <label>Message</label>
            <textarea name="message" className='controls'  id= "message" placeholder='Escribe el nombre de tu negocio, Descripción del emprendimiento, categoría elegida (ej: alimentación, moda, tecnología, etc.):
Dirección:' />
            <input className='button' type="submit" value="Cadastrarse" />
          </form>
      </div>
    </div>
  );
}