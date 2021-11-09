import React from 'react';
import Question from "../components/Question";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import About from '../components/About';
import Home from '../components/Home';
import { questionGames, questionGeek, questionHarryPotter } from '../Questionario';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/geek" element={<Question quiz={questionGeek}/>} />
        <Route path="/games" element={<Question quiz={questionGames}/>} />
        <Route path="/magic" element={<Question quiz={questionHarryPotter}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;