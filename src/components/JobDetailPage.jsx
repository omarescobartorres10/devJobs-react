import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function JobDetailPage() {
  const { id } = useParams();
  const [empleo, setEmpleo] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    
    async function cargarEmpleo() {
      const respuesta = await fetch("/empleos.json");
      const datos = await respuesta.json();
      const empleoEncontrado = datos.find(emp => emp.id == id);
setEmpleo(empleoEncontrado);

    }
    cargarEmpleo();
  }, [id]);

  
  if (empleo === null) {
    return <div>Cargando...</div>;
  }

  const irAEmpleosAnteriores = () => {
    navigate('/');
  };



  return (
    
    <div>
      <h1>{empleo.title}</h1>
      <p>{empleo.company}</p>
      <p>{empleo.location}</p>
      <p>{empleo.experience}</p>
      <p>{empleo.contract}</p>
      <button onClick={irAEmpleosAnteriores}>Volver</button>
    </div>
    
  );
}

export default JobDetailPage;