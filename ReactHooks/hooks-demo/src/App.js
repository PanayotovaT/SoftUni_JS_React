import  { useState, useEffect } from 'react';

import './App.css';

function App() {

  // const stateResult = useState('');
  // const name = stateResult[0];
  // const setName =stateResult[1]
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState({
    'name': 'Alex',
    'age': 3,
    'hobbies': ['first', 'second']
  })

  useEffect(()=> {
    setTimeout(() => {
      setName('Alex');
      setInfo(oldState => ({
        ...oldState,
        age: 4
      }))
    },1500)
  }, [])
  return (
    <div className="App">
        <h2>{!name ? 'Loading...': name}</h2>
        <p>{count}</p>
        <button onClick={() => setCount(x => x + 1)}>Count</button>
    </div>
  );
}

export default App;
