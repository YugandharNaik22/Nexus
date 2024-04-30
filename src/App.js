import Navbar from "./components/Navbar/navbar";
import "./App.css";
import Home from "./components/Home/home";

import Process from "./components/Process/Process";
import Showcase from "./components/Showcase/Showcase";



function App() {
  return (
    <>
    <div>
      <Navbar />
      <Home className="home-sec"/>
      <Process/>
      <Showcase/>
     
      </div>
    
      </>
  );
}

export default App;
