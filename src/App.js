import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import "./scss/style.css";

window.addEventListener("scroll", () => {
  if (window.scrollY >= 50) {
    document.querySelector("nav").classList.add("white");
  } else {
    document.querySelector("nav").classList.remove("white");
  }
});
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
