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

const cantidadResultados = empleosFiltrados.length;

    return (
  <>
    <Header />
    <Hero setBusqueda={setBusqueda} setTecnologia={setTecnologia} setUbicacion={setUbicacion} setExperiencia={setExperiencia} setContrato={setContrato} cantidadResultados={cantidadResultados}/>
    <p>Mostrando {cantidadResultados} resultados</p>

      <div className="jobs-grid">
       
          {cantidadResultados === 0 ? (<p>No se encontraron empleos</p>):(
            empleosFiltrados.map((job) => (
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
          
      
      </div>
  </>
);
}


export default App