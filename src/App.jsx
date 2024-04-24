import "./App.css";
import Header from "./Components/Header.jsx";
import Body from "./Components/Body/Body.jsx";
import React, { createContext, useState } from "react";

const ScoreContext = createContext();
const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      {children}
    </ScoreContext.Provider>
  );
};
export { ScoreContext };
function App() {
  return (
    <>
      <ScoreContextProvider>
        <Header></Header>
        <Body></Body>
      </ScoreContextProvider>
    </>
  );
}

export default App;
