import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          PokéWeb</Link>
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Pokedex">Pokédex</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Login">Ingresar</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}