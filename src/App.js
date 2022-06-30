import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App(props) {
   function handleResponse(response) {
     alert(`the weather is ${response.data.main.temp} in ${response.data.name}`);
   }
   let apiKey = "e5bb208507c0c4c97d696df0a3444983";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

   axios.get(apiUrl).then(handleResponse);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>hello world</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
