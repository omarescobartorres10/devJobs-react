import React from "react";
import "./jobCard.css";
import { Link } from "react-router-dom";



function JobCard(props) {
  return (
    <div className="job-card">
      <h3>{props.titulo}</h3>
      <p>{props.empresa} | {props.ubicacion}</p>
      <p>Experiencia: {props.experiencia}</p>
      <p>Tipo de contrato: {props.contrato}</p>
      <Link to={`/job/${props.id}`}>
        <button >
         Aplicar
        </button>
      </Link>
      {console.log(props.id)}
    </div>
  );
}

export default JobCard;

