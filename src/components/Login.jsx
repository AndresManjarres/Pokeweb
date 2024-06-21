import React, { useState } from 'react';
import './Login.css';
import appFirebase from '../Credenciales.js';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Navbar } from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from './Footer.jsx';

const auth = getAuth(appFirebase);

export const Login = () => {

  const navigate = useNavigate();

  const autenticacion = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/Home');
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
        <form onSubmit={autenticacion}>
          <div className='form-group'>
            <h2 className='titulo'>Iniciar sesión</h2>
            <div className='form-group'>
              <label htmlFor='email'>Correo electronico</label>
              <input type='email' className='form-control' id='email' placeholder='Ingresa tu correo' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Contraseña</label>
              <input type='password' className='form-control' id='password' placeholder='Ingresa tu contraseña' />
            </div>
            <div className='form-group'>
              <label>¿Aun no tienes una cuenta? <Link to="/Registro">Regístrate Aqui!</Link></label>
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
