import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader loading={loading} />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;