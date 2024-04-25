
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/pages/Home';
import { AboutMe } from './components/pages/AboutMe';
import { Contact } from './components/pages/Contact';
import { Skills } from './components/pages/Skills';
import { PageNotFound } from './components/pages/PageNotFound';
import './App.css';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
