import "./App.css";
import About from "./components/About";
import Advisor from "./components/Advisor";
import Carousels from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar2 from "./components/Navbar2";
import Timeline1 from "./components/Timeline1";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Event from "./components/Event";

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Carousels />
      <About />
      <div
        className="p-5  mr-[1rem] md:mr-[3rem] lg:mr-[5rem] bg-gradient-to-r from-orange-500 to-yellow-300"
        style={{ borderRadius: "0 10rem 10rem 0" }}
      >
        <Advisor />
      </div>
      {/* <Timeline1 /> */}
      <Footer />
    </div>
  );
}

export default App;
