import "./App.css";
import Weather from "./Weather"


function App() {
  return (
    <div className="App">
      <h1> Weather app</h1>
  
      <Weather defaultCity="Tehran"/>
      <footer className="text-center mt-2 text-white">
        This project was coded by Samaneh Mokhtari and is {""}
        <a
          href="https://github.com/sandramkh516/react-weather-app"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          open-source
        </a>
      </footer>
    
    </div>
  );
}

export default App;
