import "./App.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>

        <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
