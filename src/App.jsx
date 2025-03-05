import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Template from "./Components/Tamplets";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/templates" element={<Template/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
