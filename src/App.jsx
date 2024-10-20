import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Form from "./Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <Counter />
    </>
  );
}

export default App;
