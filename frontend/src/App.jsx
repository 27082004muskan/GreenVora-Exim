
import Navbar from './components/Landing/Navbar';
import Hero from './components/Landing/Hero';
import About from './components/Landing/About';
import Services from './components/Landing/Services';
import Products from './components/Landing/Products';
import Contact from './components/Landing/Contact'
import Footer from './components/Landing/Footer';

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

function App() {
  return (
    <div className="font-sans">
      <Navbar scrollToSection={scrollToSection} />
      <div className="pt-20">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Products />
        < Contact/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
