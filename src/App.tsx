import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <About />
        <FeaturedProducts />
        <Contact />
      </main>
    </>
  );
}

export default App;