import './App.css';
import { Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from './Context/GeneralContext';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar.js';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <GeneralContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:projectId" element={<Projects />} />
        </Routes>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
