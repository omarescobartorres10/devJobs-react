import React from "react";
<<<<<<< HEAD
=======
import "../styles/hero.css";
>>>>>>> d344d6ef1ef2581e54540e6e6e5eec7f836d3693
import { useState } from 'react';


function Hero({setBusqueda, setTecnologia, setUbicacion, setExperiencia, setContrato}){
    return (
<<<<<<< HEAD
<div className="container">
  <h1 className="hero-title">Encuentra el trabajo de tus sueños</h1>
  <p className="hero-subtitle">Explora miles de oportunidades en el sector tecnológico</p>

  <form className="hero-search-form-empleos">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
      <input className="hero-search-input" type="text" placeholder="Buscar por título, empresa o ubicación" onChange={(e)=>setBusqueda(e.target.value)} />
  </form>
  

  <div className="hero-filters-section">
    <select onChange={(e)=>setTecnologia(e.target.value)}>
=======
<div className="hero">
  <h1>Encuentra el trabajo de tus sueños</h1>
  <p>Explora miles de oportunidades en el sector tecnológico</p>
  <input type="text" placeholder="Buscar por título, empresa o ubicación" onChange={(e)=>setBusqueda(e.target.value)} />

  <select onChange={(e)=>setTecnologia(e.target.value)}>
>>>>>>> d344d6ef1ef2581e54540e6e6e5eec7f836d3693
    <option value="">Empresa</option>
    <option value="Google">Google</option>
    <option value="Microsoft">Microsoft</option>
    <option value="Apple">Apple</option>
  </select>
  <select onChange={(e)=>setUbicacion(e.target.value)}>
    <option value="">Ubicación</option>
    <option value="Presencial">Presencial</option>
    <option value="Remoto">Remoto</option>
    <option value="Hibrido">Hibrido</option>
  </select>
  <select onChange={(e)=>setExperiencia(e.target.value)}>
    <option value="">Experiencia</option>
    <option value="Junior">Junior</option>
    <option value="Mid">Mid</option>
    <option value="Senior">Senior</option>
  </select>
  <select onChange={(e)=>setContrato(e.target.value)}>
    <option value="">Tipo de contrato</option>
    <option value="Tiempo completo">Tiempo completo</option>
    <option value="Por proyecto">Por proyecto</option>
  </select>
<<<<<<< HEAD
  </div>

  
=======
>>>>>>> d344d6ef1ef2581e54540e6e6e5eec7f836d3693
</div>
    );
}
export default Hero;