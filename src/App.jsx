import './components/styles/app.css';
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import JobDetailPage from "./components/pages/JobDetailPage";



function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/job/:id" element={<JobDetailPage />} />
    </Routes>
  );
}


export default App