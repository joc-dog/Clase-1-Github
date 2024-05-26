import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AllCharactersPage from './pages/AllCharactersPage';
import SingleCharacterPage from './pages/SingleCharacterPage';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/AllCharactersPage">Rick and Morty</a></li>
          {/*<li style={{ float: 'right' }}><a href="/">About</a></li>*/}
        </ul>
    </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AllCharactersPage" element={<AllCharactersPage />} />
        <Route path="/SingleCharacterPage/:id" element={<SingleCharacterPage />} />
      </Routes>
    </Router>
  );
}

export default App;


