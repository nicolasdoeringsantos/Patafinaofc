import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Caes from "./pages/Products/Caes";
import Gatos from "./pages/Products/Gatos";
import BanhoETosa from "./pages/Products/BanhoETosa";

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace("#", "");
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToHash />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caes" element={<Caes />} />
          <Route path="/gatos" element={<Gatos />} />
          <Route path="/banho-e-tosa" element={<BanhoETosa />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;