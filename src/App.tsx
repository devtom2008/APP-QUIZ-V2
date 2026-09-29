import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Quiz from "./pages/QuizPage";
import ScorePage from "./pages/ScorePage";
import ConfigurationGame from "./pages/ConfigurationGame";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/ScorePage" element={<ScorePage />} />
        <Route path="/ConfigurationGame" element={<ConfigurationGame />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
