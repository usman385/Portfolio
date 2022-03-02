import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ClientProject from "./components/ClientProject";

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainContainer />
      <Services />
      <Skills />
      <Projects />
      <ClientProject />
    </div>
  );
}

export default App;
