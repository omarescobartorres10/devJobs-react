import { useState, useEffect } from "react";
import './app.css'
import Header from "./header";
import Hero from './Hero';
import JobCard from "./JobCard";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import JobDetailPage from "./components/JobDetailPage";
<Route path="/job/:id" element={<JobDetailPage />} />



function App() {
    return (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/job/:id" element={<JobDetailPage />} />
  </Routes>
);
}


export default App