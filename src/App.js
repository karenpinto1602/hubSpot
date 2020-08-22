import React from "react";
import "./App.css";
import Navbar from "./Home/Navbar/navbar";
import Footer from "./Home/Footer/footer";
import Homepage from "./Home/Components/Homepage/homepage";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Homepage />
      <Footer />
    </React.Fragment>
  );
}

export default App;
