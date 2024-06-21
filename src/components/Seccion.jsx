import React from 'react';
import './Seccion.css'; // Asegúrate de importar el archivo CSS
import carrusel1 from '../assets/CarruselGyarados.jpg';
import carrusel2 from '../assets/CarruselNidoking.jpg';
import carrusel3 from '../assets/CarruselRhyperion.jpeg';
import carrusel4 from '../assets/CarruselAggron.jpeg';
import carrusel5 from '../assets/CarruselTyranitar.jpeg';
import pokeball from '../assets/PokeballCard.png';
import pokemon from '../assets/PokemonCard.png';

export const Seccion = () => {
  return (
    <div className="contenedor">
      <div className="item1">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={carrusel1} className="img1" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explora la PokéWeb</h5>
                <p>Conviertete en un entrenador pokemon conociendo todo sobre ellos en la Pokédex de PokéWeb.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carrusel2} className="img1" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explora la PokéWeb</h5>
                <p>Conviertete en un entrenador pokemon conociendo todo sobre ellos en la Pokédex de PokéWeb.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carrusel3} className="img1" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explora la PokéWeb</h5>
                <p>Conviertete en un entrenador pokemon conociendo todo sobre ellos en la Pokédex de PokéWeb.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carrusel4} className="img1" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explora la PokéWeb</h5>
                <p>Conviertete en un entrenador pokemon conociendo todo sobre ellos en la Pokédex de PokéWeb.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src={carrusel5} className="img1" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Explora la PokéWeb</h5>
                <p>Conviertete en un entrenador pokemon conociendo todo sobre ellos en la Pokédex de PokéWeb.</p>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="item2">
        <img src={pokeball} className="img2" alt="..." />
        <div className="text-overlay text-white">
          <h5 className='fs-3 fw-bold'>Investiga cada Pokéball</h5>
          <p>Descubre la eficiencia de cada Pokeball</p>
        </div>
      </div>

      <div className="item3">
        <img src={pokemon} className="img3" alt="..." />
        <div className="text-overlay2">
          <h5 className='text-white fs-4 fw-bold'>Registrate en PokéWeb</h5>
          <p className='text-white '>Explorar el mundo Pokémon y conviertete en entrenador</p>
        </div>
      </div>
    </div >
  )
}