import './App.css';

function App() {
  const submitHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className="App">
      <form method="POST" onSubmit={submitHandler}>
        <span className="form-span">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </span>
        <span className="form-span">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="assword" />
        </span>
        <input type="submit" className="form-submit-btn" value="Submit" />

      </form>

    </div>
  );
}

export default App;
