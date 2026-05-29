import Header from "./../layout/Header";
import Hero from "./../layout/Hero";
import JobCard from "./../jobs/JobCard";
import { useState, useEffect } from "react";




function HomePage() {
  const [busqueda, setBusqueda] = useState('')
  const [tecnologia, setTecnologia] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [experiencia, setExperiencia] = useState('');
  const [contrato, setContrato] = useState('');
  const [empleos, setEmpleos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);


  const empleosPorPagina = 5;


  useEffect(() => {
    async function cargarEmpleos() {
      const respuesta = await fetch("./empleos.json");
      const datos = await respuesta.json();
      setEmpleos(datos);
    }
    cargarEmpleos();
  }, []);

  const empleosFiltrados = empleos.filter(job =>
    job.title.toLowerCase().includes(busqueda.toLowerCase()) &&
    (tecnologia === "" || job.company.toLowerCase() === tecnologia.toLowerCase()) &&
    (ubicacion === "" || job.location.toLowerCase() === ubicacion.toLowerCase()) &&
    (experiencia === "" || job.experience.toLowerCase() === experiencia.toLowerCase()) &&
    (contrato === "" || job.contrato.toLowerCase() === contrato.toLowerCase())
  );

  const indiceInicio = (paginaActual - 1) * empleosPorPagina;
  const indiceFin = indiceInicio + empleosPorPagina;
  const empleosPagina = empleosFiltrados.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(empleosFiltrados.length / empleosPorPagina);
  return (
    <>
      <Header />
      <Hero setBusqueda={setBusqueda} setTecnologia={setTecnologia} setUbicacion={setUbicacion} setExperiencia={setExperiencia} setContrato={setContrato} />
      <p className="results-count-title container" >Mostrando {empleosFiltrados.length} resultados</p>

      <div>

        {empleosFiltrados.length === 0 ? (<p>No se encontraron empleos</p>) : (
          empleosPagina.map((job) => (
            <JobCard
              id={job.id}
              key={job.id}
              titulo={job.title}
              empresa={job.company}
              ubicacion={job.location}
              experiencia={job.experience}
              description={job.description}
              contrato={job.contrato}


            />
          )))
        }
      </div>
      <footer>
        <div className="container">
          <nav className="pagination-container">
            <ul className="pagination-links">
                <li className="pagination-link">
                  <button 
                    onClick={() => setPaginaActual(paginaActual - 1)} 
                    disabled={paginaActual === 1}
                    className="pagination-button"
                  > 
                    <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
                </button>
              
            </li>
            </ul>
            
            <span className="pagination-link-text">Página {paginaActual} de {totalPaginas}</span>
            <ul className="pagination-links">
              <li className="pagination-link">
                <button
                  onClick={() => setPaginaActual(paginaActual + 1)} 
                  disabled={paginaActual === totalPaginas}
                  className="pagination-button"
                > 
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
                </button>
              
            </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default HomePage;