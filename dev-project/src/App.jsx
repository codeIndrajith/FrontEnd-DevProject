import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      {/* Navbar section */}
      <section>
        <Navbar />
      </section>

      {/* Footer section */}
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
