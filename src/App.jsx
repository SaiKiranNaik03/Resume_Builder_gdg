import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Template from "./Components/Tamplets";
import About from "./Components/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/templates" element={<Template/>} />
          {/* <Route path="/about" element={<About/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
