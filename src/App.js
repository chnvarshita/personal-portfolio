import './App.css';
import styled, { ThemeProvider } from "styled-components";
import Navbar from './components/Navbar';
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import { BrowserRouter as Router } from "react-router-dom";
import Experience from './components/Experience/index.js';
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import HeroSection from "./components/HeroSection";


// Add missing "bg" property to the theme
// darkTheme.bg = "#1F2634"; ← already defined in Themes.js

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg, 
      rgba(204, 0, 187, 0.15) 0%,
      hsla(306, 72.50%, 45.70%, 0.00) 50%
    ),
    linear-gradient(
    141.27deg,
    rgba(0, 70, 209, 0) 50%, 
    rgba(0, 70, 209, 0.15) 100%
    );
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
  padding: 80px 0; /* Add padding to prevent overlapping */
  width: 100%;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <Projects openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;