import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Template from "./Components/Tamplets";
// import About from "./Components/About";
import Footer from "./Components/Footer";
import Input from "./pages/Input";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/input" element={<Input />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/templates" element={<Template />} />
          {/* <Route path="/about" element={<About/>} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
