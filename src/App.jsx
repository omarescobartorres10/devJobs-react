
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import JobDetailPage from "./components/pages/JobDetailPage";
import LandingPage from "./components/pages/LandingPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/empleos" element={<HomePage />} />
      <Route path="/job/:id" element={<JobDetailPage />} />
    </Routes>
  );
}


export default App