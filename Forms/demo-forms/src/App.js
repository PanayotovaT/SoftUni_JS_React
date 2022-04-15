import './App.css';

function App() {
  return (
    <div className="App">
      <form method="POST">
        <span>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </span>
        <span>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="assword" />
        </span>
        <input type="submit" value="Submit" />

      </form>

    </div>
  );
}

export default App;
