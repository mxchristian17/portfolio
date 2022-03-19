import './App.css';
import { Routes, Route } from "react-router-dom";
import { GeneralContextProvider } from './Context/GeneralContext';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import Navbar from './Components/Navbar/Navbar.js';
import Projects from './Components/Projects/Projects';
import VrView from './Components/VrView/VrView';

function App() {

  const background = {
    'background' : 'url(/images/bg.png) no-repeat top center',
    'backgroundSize' : '100vw'

  }

  return (
    <div className="App" style={ background }>
      <GeneralContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects/:projectId" element={<Projects />} />
          <Route path="vr" element={<VrView />} />
        </Routes>
      </GeneralContextProvider>
    </div>
  );
}

export default App;
