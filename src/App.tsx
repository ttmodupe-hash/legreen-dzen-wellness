import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PatientMenuPage from './pages/PatientMenuPage';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patients" element={<PatientMenuPage />} />
      </Routes>
    </HashRouter>
  );
}
