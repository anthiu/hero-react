import React from "react";
import Hero from "./Hero";
import BattleScreen from "./BattleScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/battle/:ids" element={<BattleScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
