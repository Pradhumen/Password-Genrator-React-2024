import React from 'react';
import Header from '../src/component/layout/Header';
import Footer from '../src/component/layout/Footer';
import PasswordBox from '../src/component/PasswordBox';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PasswordBox />
      </main>
      <Footer />
    </div>
  );
};

export default App;
