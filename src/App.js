import  Header  from "./components/Navbar";
import  Footer  from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import  About from "./pages/About";
import  Home  from "./pages/Home";
import "./App.css";
import Blog1 from "./pages/Blog1"


function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog1" element={<Blog1 />} />
      </Routes>
      <Footer />
     
    </div>
  );
}

export default App;
