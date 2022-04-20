import { useState, useEffect } from 'react';

import './App.css';
import CharacterList from './components/CharacterList';
import Counter from './components/Counter';
import AuthContext from './contexts/AuthContext';

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
  useEffect(() => {
    console.log('effect')
    setTimeout(() => {
      setName('Alex');
   
    }, 1500)
  }, [count]);

  const addHobby = (hobby) => {
    setInfo(oldState => ({
      ...oldState,
      hobbies: [...oldState.hobbies, hobby]
    }))
  };
  //when there are dependencies in the array: ComponentDidUpdate 
  //useEffect is executed every time the dependency updates
  console.log(info);
  return (
    <AuthContext.Provider value={{count, user: info, addHobby }}>
      <div className="App">
        <h2>{!name ? 'Loading...' : name}</h2>
        {count < 10
          ? <Counter value={count} />
          : null
        }
        <button onClick={() => setCount(x => x + 1)}>Count</button>
        <h2>Hobbies</h2>
        <ul>
          {info.hobbies.map(x => <li key={x}>{x}</li>)}
        </ul>
        
        <CharacterList />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
