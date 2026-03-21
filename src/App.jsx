import styled, { ThemeProvider } from "styled-components"
import {darkTheme} from "./utils/Themes"
import Navbar from "./componenets/Navbar"
import Footer from "./componenets/Footer"
import { BrowserRouter } from "react-router-dom"
import Hero from "./componenets/sections/Hero"
import Skills from "./componenets/sections/Skills"
import Experience from "./componenets/sections/Experience"
import Edjucation from "./componenets/sections/Edjucation"
import StarCanvas from "../src/canvas/Stars";
import Projects from "./componenets/sections/Projects"
import Contact from "./componenets/sections/Contact"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;


function App() {

  return <ThemeProvider theme={darkTheme}>
<BrowserRouter>
    <Navbar/>
    <Body>
      <StarCanvas/>
      <div>
      <Hero/>
      <Wrapper>
      <Skills/>
      <Experience/>
      </Wrapper>
      <Projects/>
      <Wrapper>
      <Edjucation/>
      </Wrapper>
      <Contact/>
      <ToastContainer position="bottom-right" theme="dark" />
      </div>
      <Footer/>
    </Body>
</BrowserRouter>
  </ThemeProvider>
}

export default App
