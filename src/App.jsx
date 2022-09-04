import { Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Support from "./pages/Support";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Invitation from "./pages/Invitation";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/2022-08-21-bank-landing-page/" element={<Home />} />
          <Route path="/2022-08-21-bank-landing-page/about-us" element={<About />} />
          <Route path="/2022-08-21-bank-landing-page/contact" element={<Contact />} />
          <Route path="/2022-08-21-bank-landing-page/blog" element={<Blog />} />
          <Route path="/2022-08-21-bank-landing-page/careers" element={<Careers />} />
          <Route path="/2022-08-21-bank-landing-page/support" element={<Support />} />
          <Route
            path="/2022-08-21-bank-landing-page/privacy-policy"
            element={<PrivacyPolicy />}
          />
          <Route path="/2022-08-21-bank-landing-page/invitation" element={<Invitation />} />
          <Route path="*" element={<Navigate to="/2022-08-21-bank-landing-page/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
