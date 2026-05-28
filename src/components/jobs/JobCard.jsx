import React from "react";
import "../styles/jobCard.css";
import { Link } from "react-router-dom";



<<<<<<< HEAD
function JobCard({ titulo, empresa, ubicacion, experiencia, contrato, id , description}) {
  return (
    <div className="container">
      <article className="results-card">
        <h4 className="results-card-title">{titulo}</h4>
        <h5 className="results-card-subtitle">
          {empresa} | {ubicacion} | {experiencia} | {contrato}
        </h5>
        <p className="results-card-description">
          {description}
        </p>
        <button className="btn-blue-apply-job">Aplicar</button>
      </article>

    </div>
      
  

=======
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
>>>>>>> d344d6ef1ef2581e54540e6e6e5eec7f836d3693
  );
}

export default JobCard;

