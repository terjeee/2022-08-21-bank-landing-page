// import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Intro from './components/Main/Intro/Intro';
import WhyUs from './components/Main/WhyUs/WhyUs';
import Articles from './components/Main/Articles/Articles';
import Footer from './components/Main/Footer/Footer';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <WhyUs />
        <Articles />
      </main>
      <Footer />
    </>
  );
}

export default App;
