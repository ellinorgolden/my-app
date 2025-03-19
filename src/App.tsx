import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./i18n";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import CV from "./components/CV";
import Prospector from "./components/Prospector";
import Tanteo from "./components/Tanteo";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/projects" element={<About />} />
          <Route path="/projects/prospector" element={<Prospector />} />
          <Route path="/projects/tanteo" element={<Tanteo />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
