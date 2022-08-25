// import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import Intro from './components/Main/Intro.jsx';
import WhyUs from './components/Main/WhyUs';
import Articles from './components/Main/Articles';

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
