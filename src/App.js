import React , {useState} from "react";
import "./App.css"
function App() {
  const [A,changeA] = useState("")
  const handleA=(e)=>{
    changeA(parseInt(e.target.value))
  }
  const [B,changeB] = useState("")
  const handleB=(e)=>{
    changeB(parseInt(e.target.value))
  }
  const [C,changeC] = useState("")
  const handleC=()=>{
    changeC(A+B)
  }
  return (
    <>
    <h1 align="center">SUM OF 2 NUMBERS</h1>
    <div className="calci">
      <input name="one" type="number" value={A} onChange={handleA} placeholder="Enter the 1st num"></input>
      <input name="two" type="number" value={B} onChange={handleB} placeholder="Enter the 2st num"></input>
      <button onClick={handleC}>ADD</button>
      <input type="number" value={C}  placeholder="0"></input>
    </div>
    </>
  );
}

export default App;
