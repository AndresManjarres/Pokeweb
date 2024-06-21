import React, { useState } from 'react';
import '../App.css';

import appFirebase from '../Credenciales';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const auth = getAuth(appFirebase);

export const Registro = () => {

  const registroUsuario = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
        <div className='banner' >
        </div>
        <form onSubmit={registroUsuario}>
          <div className='form-group'>
            <h2 className='titulo'>Registrar cuenta</h2>
            <div className='form-group'>
              <label htmlFor='email'>Correo electronico</label>
              <input type='email' className='form-control' id='email' placeholder='Ingresa tu correo' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Contraseña</label>
              <input type='password' className='form-control' id='password' placeholder='Ingresa tu contraseña' />
            </div>
            <div className='form-group'>
              <label>¿Ya tines una cuenta? <Link to="/Login">Ingresa Aqui!</Link></label>
            </div>
            <div className='button-container'>
              <button type="submit" className="btn-with-bg"></button>
            </div>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};