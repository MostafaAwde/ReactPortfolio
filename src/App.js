import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Values } from "./components/Values/Values";
import { Goals } from "./components/Goals/Goals";
import { Resume } from "./components/Resume/Resume";
import { Footer } from "./components/Footer/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Values />
      <Goals />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
