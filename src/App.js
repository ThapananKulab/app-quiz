import React, { useState, createContext } from "react";
import Menu from "../components/Menu"; // Adjust path based on your actual file structure
import Quiz from "../components/Quiz"; // Adjust path based on your actual file structure
import Score from "../components/Score"; // Adjust path based on your actual file structure
import "./App.css";

export const DataContext = createContext();

function App() {
  const [appState, setAppState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <DataContext.Provider value={{ appState, setAppState, score, setScore }}>
      <div className="App">
        <h1>Web Quiz</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DataContext.Provider>
  );
}

export default App;
