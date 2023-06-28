import { useState } from 'react';
import './App.css';

const Person = (props) => {
  return (
    <>
      <h3>Name: {props.name} </h3>
      <h3>Age: {props.age} </h3>
      <h3>Sex: {props.sex} </h3>
    </>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0); 
  return (
    <div className="App">
    {
      <>
          <Person name={"Mike"} age={30} sex={"Male"} />
          <Person name={"Kike"} age={20} sex={"Male"} />
          <div className="Counter">
            <button onClick={() => setCounter((prevCounter) => prevCounter-1)}>-</button>
            <h1>{counter}</h1>
            <button onClick={() => setCounter((prevCounter) => prevCounter+1)}>+</button>
          </div>
      </>
    }
    </div>
  );
}

export default App;
