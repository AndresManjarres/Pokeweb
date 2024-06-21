import React from 'react'
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export const Footer = () => {
  return (
    <footer className="text-center text-white py-4 containerF">
      <h1>POKÉWED</h1>
      <p>copyright &copy; Andres Manjarres 2024</p>
      <hr className="bg-white w-50 mx-auto" />
      <div className="d-flex justify-content-center">
        <a href="https://facebook.com" className="text-white mx-2">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://twitter.com" className="text-white mx-2">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" className="text-white mx-2">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>

  )
}
