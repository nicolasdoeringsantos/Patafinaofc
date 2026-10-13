import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import FeitoPorDoering from "./components/FeitoPorDoering/FeitoPorDoering";
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

      <footer className="border-t border-white/10 bg-slate-950 px-6 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-blue-200/70 sm:flex-row">
          <p>© {new Date().getFullYear()} Pata Fina. Todos os direitos reservados.</p>
          <FeitoPorDoering site="patafinaofc.nicolasdoeringsantos.workers.dev" pill />
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;