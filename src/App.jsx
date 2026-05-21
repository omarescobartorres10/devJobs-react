import React from "react";
import './App.css'
import JobCard from "./JobCard";


function App() {
    const jobs = [
        {
            id: 1,
            title: "Desarrollador Web",
            company: "Google",
            location: "Ciudad de México",
            salary: "$20,000 - $25,000",
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "Microsoft",
            location: "Remoto",
            salary: "$25,000 - $30,000",
        },
        {
            id: 3,
            title: "Backend Developer",
            company: "Google",
            location: "Ciudad de México",
            salary: "$20,000 - $25,000",
        },
        {
            id: 4,
            title: "AI Developer",
            company: "Apple",
            location: "Cupertino",
            salary: "$5000 - $6000",
        },
    ]
  return (
<div className="jobs-grid">
     <ul>
    {jobs.map((job) => (
        <JobCard 
        key={job.id}
        titulo={job.title}
        empresa={job.company}
        ubicacion={job.location}
        salario={job.salary}
        />
    ))}
  </ul>
</div>
 
  )
}

export default App