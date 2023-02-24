import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Post from "./components/post/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
      <>
      <Navbar />
      <Router>
      <Routes>
      < Route path="/" element={< Home />} />
      < Route path="/post" element={< Post />} />
      </Routes>
      </Router>
      < Footer/>
      </>
  );
}

export default App;
