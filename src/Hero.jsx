import React from "react";
import "./hero.css";

function Hero(){
    return (
<div className="hero">
  <h1>Encuentra el trabajo de tus sueños</h1>
  <p>Explora miles de oportunidades en el sector tecnológico</p>
  <input type="text" placeholder="Buscar por título, empresa o ubicación" />
</div>
    );
}
export default Hero;