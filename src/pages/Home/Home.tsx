import About from "../../components/About/About";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <About />
      <FeaturedProducts />
      <Contact />
    </>
  );
}
