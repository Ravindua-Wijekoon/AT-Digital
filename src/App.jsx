import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-16">
        <HomePage />   
      </div>
      <Footer />
    </Router>
  );
}

export default App;
