// import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Intro from './components/Main/Intro/Intro';
import WhyUs from './components/Main/WhyUs/WhyUs';
import Articles from './components/Main/Articles/Articles';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <WhyUs />
        <Articles />
      </main>
    </>
  );
}

export default App;
