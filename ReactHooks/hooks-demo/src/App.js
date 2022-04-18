import  { useState, useEffect } from 'react';

import './App.css';

function App() {

  const stateResult = useState('');
  const name = stateResult[0];
  const setName =stateResult[1]

  useEffect(()=> {
    setTimeout(() => {
      setName('Alex');
    },1500)
  }, [])
  return (
    <div className="App">
        <h2>{name}</h2>
    </div>
  );
}

export default App;
