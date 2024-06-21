import React from 'react';

import './Pokedex.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { PokeTarjeta } from './PokeTarjeta';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [listado, setListado] = useState([]);
  const [filtro, setFiltro] = useState('');

  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    getPokemons(offset);
    getAllPokemons();
  }, [offset]);

  const getPokemons = async (o) => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${o}`;

    try {
      const res = await axios.get(url);
      const respuesta = res.data;
      setPokemons(respuesta.results);
      setListado(respuesta.results);
    } catch (error) {
      console.error("Error fetching pokemons: ", error);
    }
  };

  const getAllPokemons = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0';

    try {
      const res = await axios.get(url);
      const respuesta = res.data;
      setAllPokemons(respuesta.results);
    } catch (error) {
      console.error("Error fetching all pokemons: ", error);
    }
  };

  const buscar = (e) => {
    e.preventDefault();
    if (filtro.trim() !== '') {
      console.log('Entre al if')
      setListado([]);
      setTimeout(() => {
        setListado(allPokemons.filter(p => p.name.includes(filtro)))
      }, 100);
    } else if (filtro.trim() == '') {
      setListado([]);
      setTimeout(() => { setListado(pokemons) }, 100);
      console.log('Entre al else')
    }

  };


  return (
    <>
      <Navbar />
      <div className='contenedorPokedex'>
        <form className="formularioPokedex" onSubmit={buscar}>
          <input
            className='inputPokedex'
            placeholder='Busca un pokémon por ejemplo Pikachu'
            value={filtro}
            onChange={(e) => { setFiltro(e.target.value) }}
          />
        </form>

        <div className='mt-5'>
          <div className='row'>
            {listado.map((pokemon, index) => (
              <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4' key={index}>
                <PokeTarjeta pokemon={pokemon} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
