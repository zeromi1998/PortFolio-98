import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Timeline  from "./Components/Timline/Timeline";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Components/SignIn/SignIn";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Project/Project";
function App() {
  return (
    <>
      <Home />
      <About />
      <Projects/>
      <Timeline/>
      <Footer/>

      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes> */}
    </>
  );
}

export default App;
