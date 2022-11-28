import { useState } from "react";
import "./styles.css";

export default function App() {
  const [no1, setno1] = useState();
  const [no2, setno2] = useState();
  const [sub, setSubtraction] = useState();
  return (
    <div className="App">
      <h1>Subtraction of 2 no's:</h1>
      <input onChange={(e) => setno1(e.target.value)} />
      <input onChange={(e) => setno2(e.target.value)} />
      <button onClick={() => setSubtraction(parseInt(no1) - parseInt(no2))}>
        Subtraction
      </button>
      <br />
      <b>Subtraction is:{sub}</b>
    </div>
  );
}
