import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar section */}
      <section className="flex-grow">
        <Navbar />
      </section>

      {/* body section */}
      <section className="flex-grow"></section>

      {/* Footer section */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
