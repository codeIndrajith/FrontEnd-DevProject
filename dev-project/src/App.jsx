import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Body from './components/Body';

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navbar section */}
      <section>
        <Navbar />
      </section>

      {/* body section */}
      <section className="lg:mb-0 md:mb-[40%] sm:mb-[100%]">
        <Hero />
      </section>

      <section className="lg:h-full">
        <Body />
      </section>

      {/* Footer section */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
