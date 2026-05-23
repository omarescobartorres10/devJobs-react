import { useState, useEffect } from "react";
import './app.css'
import Header from "./Header";
import Hero from './Hero';
import JobCard from "./JobCard";





function App() {
    const [busqueda,setBusqueda] = useState('')
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
    <p>Mostrando {empleosFiltrados.length} resultados</p>

      <div className="jobs-grid">
       
          {empleosFiltrados.length === 0 ? (<p>No se encontraron empleos</p>):(
            empleosPagina.map((job) => (
            <JobCard 
              key={job.id}
              titulo={job.title}
              empresa={job.company}
              ubicacion={job.location}
              experiencia={job.experience}
              contrato={job.contrato}

            />
          )))
          }

          <div className="pagination">
            <button onClick={() => setPaginaActual(paginaActual - 1)} disabled={paginaActual === 1}>
            Anterior
            </button>
            <span>Página {paginaActual} de {totalPaginas}</span>
            <button onClick={() => setPaginaActual(paginaActual + 1)} disabled={paginaActual === totalPaginas}>
            Siguiente
            </button>
          </div>
      </div>
  </>
);
}


export default App