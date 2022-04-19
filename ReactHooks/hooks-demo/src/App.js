import  { useState, useEffect } from 'react';

import './App.css';
import Counter from './Counter';

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

  //ComponentDidMount
  useEffect(()=> {
    console.log('effect')
    setTimeout(() => {
      setName('Alex');
      setInfo(oldState => ({
        ...oldState,
        age: 4
      }))
    },1500)
  }, [count])
  //when there are dependencies in the array: ComponentDidUpdate 
  //useEffect is executed every time the dependency updates
  return (
    <div className="App">
        <h2>{!name ? 'Loading...': name}</h2>
        {count < 10 
        ? <Counter value={count} / >
        : null
      }
        <button onClick={() => setCount(x => x + 1)}>Count</button>
    </div>
  );
}

export default App;
