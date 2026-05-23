import React from "react";
import "./hero.css";
import { useState } from 'react';


function Hero({setBusqueda, setTecnologia, setUbicacion, setExperiencia, setContrato}){
    return (
<div className="hero">
  <h1>Encuentra el trabajo de tus sueños</h1>
  <p>Explora miles de oportunidades en el sector tecnológico</p>
  <input type="text" placeholder="Buscar por título, empresa o ubicación" onChange={(e)=>setBusqueda(e.target.value)} />

  <select onChange={(e)=>setTecnologia(e.target.value)}>
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
</div>
    );
}
export default Hero;