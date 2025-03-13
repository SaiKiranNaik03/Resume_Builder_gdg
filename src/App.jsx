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
import { Dock, DockIcon } from "./Components/magicui/dock.jsx";
import { ScrollProgress } from "./Components/magicui/scroll-progress.jsx";
import { Home as HomeIcon, FileText, Info, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Create a separate component for the content that needs navigation
function AppContent() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col text-white relative overflow-hidden">
      {/* Background divs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              "linear-gradient(-45deg, #00000000, #14b8a6, #1e40af, #00000000)",
            backgroundSize: "400% 400%",
            animation: "gradient 15s ease infinite",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/50 to-gray-900/80" />
      </div>

      {/* Move Header and ScrollProgress outside the relative div */}
      <ScrollProgress className=" z-50" />
      <Header />

      {/* Content div */}
      <div className="relative z-10">
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

          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
            <Dock>
              <DockIcon
                onClick={() => navigate("/")}
                className="bg-white/10 hover:bg-white/20 "
              >
                <HomeIcon className="w-6 h-6 text-white hover:text-teal-400" />
              </DockIcon>
              <DockIcon
                onClick={() => navigate("/templates")}
                className="bg-white/10 hover:bg-white/20"
              >
                <FileText className="w-6 h-6 text-white hover:text-teal-400" />
              </DockIcon>
              <DockIcon
                onClick={() => navigate("/about")}
                className="bg-white/10 hover:bg-white/20"
              >
                <Info className="w-6 h-6 text-white hover:text-teal-400" />
              </DockIcon>
              <DockIcon
                onClick={() =>
                  window.open(
                    "https://github.com/VishuReddy-dev/Resume_Builder_gdg",
                    "_blank"
                  )
                }
                className="bg-white/10 hover:bg-white/20"
              >
                <Github className="w-6 h-6 text-white hover:text-teal-400" />
              </DockIcon>
            </Dock>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

// Main App component
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
