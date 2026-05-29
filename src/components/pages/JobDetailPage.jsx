import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './../layout/Header';

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
    <>
      <Header />
      <section>
        <div className="container">
          <div className="apply-page-container">
            <h1 className="apply-page-title">{empleo.title}</h1>
            <p className="apply-page-subtitle">{empleo.company} | {empleo.location}</p>
            <button className="btn-blue-apply-job">Aplicar</button>
            <h2 className="apply-title">Descripción</h2>
            <p className="apply-page-description">{empleo.description}</p>
            <button className="btn-blue-apply-job" onClick={irAEmpleosAnteriores}>Volver</button>
          </div>
          <h2 className="apply-title">Responsabilidades</h2>
          <ul className="responsabilities-list">

            {empleo.responsabilidades.map((item, index) => (

              <li key={index} className="responsabilities-list-item"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>{item}</li>

            ))}
          </ul>

          <h2 className="apply-title">Requisitos</h2>
          <ul className="responsabilities-list">

            {empleo.requisitos.map((item, index) => (

              <li key={index} className="responsabilities-list-item"> <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path><path d="M9 12l2 2l4 -4"></path></svg>{item}</li>

            ))}
          </ul>
        </div>
        <h2 className='about-company-title'>Sobre la empresa</h2>
        <p className='about-company-description'>{empleo.sobreLaEmpresa}</p>
        <hr />
        <div className='footer-btn-container'>
          <button className="btn-blue-apply-job" onClick={irAEmpleosAnteriores}>Volver</button>
        </div>
      </section>
    </>

  );
}

export default JobDetailPage;