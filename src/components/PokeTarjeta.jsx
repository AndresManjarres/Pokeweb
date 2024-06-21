import React from 'react'

import './PokeTarjeta.css';
import { useState, useEffect } from 'react'
import axios from 'axios'


export const PokeTarjeta = (params) => {

  const [pokemon, setPokemon] = useState({});
  const [imagen, setImagen] = useState('');
  const [cardClass, setCardClass] = useState('d-none');
  const [loadClass, setLoadClass] = useState('');

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = async () => {
    const url = params.pokemon.url;

    axios.get(url).then(async (res) => {
      const respuesta = res.data;
      setPokemon(respuesta);
      if (respuesta.sprites.other.dream_world.front_default != null) {
        setImagen(respuesta.sprites.other.dream_world.front_default);
      } else {
        setImagen(respuesta.sprites.front_default);
      }
      setCardClass('');
      setLoadClass('d-none');
    })
  }

  return (
    <>
      <div className='card1'>
        <div className={loadClass}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
        <div className={cardClass}>
          <img src={imagen} className="card-img-top1" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{pokemon.id}</h5>

            <h5 className="card-title">{pokemon.name}</h5>
            <p className="card-text">Habilidades</p>
            <ul className='description'>
              {pokemon.abilities?.map((habilidad, index) => (
                <li key={index}>{habilidad.ability.name}</li>
              ))}
            </ul>
            <p className="card-text">Tipos</p>
            <ul className='description'>
              {pokemon.types?.map((tipo, index) => (
                <li key={index}>{tipo.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
