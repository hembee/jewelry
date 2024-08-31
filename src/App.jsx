import "./App.css";
import Hero from "./components/Hero";
import { Jumbotron1 } from "./components/Jumbotron1";
import Offer from "./components/Offer";
import Sect from "./components/Sect";

function App() {
  return (
    <div className="App">
      <Hero />
      <Sect />
      <Offer />
      <Jumbotron1 />
    </div>
  );
}

export default App;
