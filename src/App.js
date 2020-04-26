import React, {useState} from 'react';
import Input from './Input';
import Display from './Display';

function App() {
  let [input,setInput] = useState("");

  return (
    <div className="App">
      <Input setInput={setInput}/>
      <Display input={input}/>
    </div>
  );
}

export default App;
