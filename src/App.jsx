// import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Intro from './components/Main/Intro.jsx';
import WhyUs from './components/Main/WhyUs';

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Intro />
        <WhyUs />
      </main>
    </>
  );
}

export default App;
