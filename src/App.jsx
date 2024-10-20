import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Form from "./Form";
import { GithubUser } from "./GithubUser";
import Location from "./Location";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <Counter />
      <GithubUser/>
      <Location/>
    </>
  );
}

export default App;
