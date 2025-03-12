import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Template from "./Components/Tamplets";
import About from "./Components/About";
import Footer from "./Components/Footer";
import InputForm from "./pages/Input";
import NotFound from "./pages/NotFound";
import Classical from "./Components/Classical";
import Modern from "./Components/Modern";
import Creative from "./Components/Creative";
import Corporate from "./Components/Corporate";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/input" element={<InputForm />} />
            <Route path="/about" element={<About />} />
            <Route path="/templates" element={<Template />} />
            <Route path="/classical" element={<Classical />} />
            <Route path="/modern" element={<Modern />} />
            <Route path="/creative" element={<Creative />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
