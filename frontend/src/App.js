import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="/join" method="post">

        <label>Username:</label>
        <input type="text" name="username" />

        <label>Password:</label>
        <input type="password" name="password" />

        <label>Name:</label>
        <input type="text" name="name" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Phone:</label>
        <input type="phone" name="phone" />

        <div>
          <input type="submit" value="Join" />
        </div>
      </form>



      <form action="/login" method="post">
        <div>
          <label>Username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Log In" />
        </div>
      </form>
    </div>
  );
}

export default App;
