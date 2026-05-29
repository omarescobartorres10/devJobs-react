import React from "react";

import { Link } from "react-router-dom";



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
        <Link to={`/job/${id}`}>
            <button className="btn-blue-apply-job">Aplicar</button>
        </Link> 
      </article>
    </div>
      
  

  );
}

export default JobCard;

