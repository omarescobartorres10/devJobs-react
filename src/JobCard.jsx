import React from "react";
import "./jobCard.css"



function JobCard(props) {
  return (
    <div className="job-card">
      <h3>{props.titulo}</h3>
      <p>{props.empresa} | {props.ubicacion}</p>
      <p>Experiencia: {props.experiencia}</p>
      <p>Tipo de contrato: {props.contrato}</p>
      <button onClick={() => alert(`Aplicaste a ${props.titulo}`)}>
        Aplicar
      </button>
    </div>
  );
}

export default JobCard;

