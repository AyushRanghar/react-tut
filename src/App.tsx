import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [counter, setCounter] = useState(15);
  // Set counter returns a callback
  const addButton = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <>
      <button onClick={addButton}>Add Btn{counter}</button>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card name="Ayush" age={21} buttonText="Hey yo" iconSize={"sm"} />
      <Card name="Tony" age={56} buttonText="View Profile" iconSize={"xl"} />
    </>
  );
}

export default App;
