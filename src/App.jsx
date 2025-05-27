import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Portfolio from "./main/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      test
      <Portfolio />
    </>
  );
}

export default App;
